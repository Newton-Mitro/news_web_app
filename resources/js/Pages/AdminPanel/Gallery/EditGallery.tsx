import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import slugify from "react-slugify";
import { Bounce, toast } from "react-toastify";
import { formats, modules } from "../../../Utils/quill-util";

interface Gallery {
    id: number;
    title: string;
    slug: string;
    order: number | null;
    description: string | null;
    sort_description: string | null;
    attachment_url: string | null;
    attachment_name: string | null;
    attachment_path: string | null;
    attachment_mime: string | null;
    attachments?: {
        id: number;
    }[];
}

interface FormDataType {
    title: string;
    slug: string;
    order: number | string;
    body: string;
    summery: string;
    new_image: File | null;
    old_image: string | null;
    deleted_images: number | null;
}

interface Props {
    auth: any;
    gallery: Gallery;
}

export default function EditGallery({ auth, gallery }: Props) {
    const [formData, setFormData] = useState<FormDataType>({
        title: gallery.title ?? "",
        slug: gallery.slug ?? "",
        order: gallery.order ?? 0,
        body: gallery.description ?? "",
        summery: gallery.sort_description ?? "",
        new_image: null,
        old_image: gallery.attachment_url || null,
        deleted_images: null,
    });

    const [errors, setErrors] = useState<any>({});
    const [imagePreview, setImagePreview] = useState<string | null>(
        gallery.attachment_url || null
    );

    /*
    |--------------------------------------------------------------------------
    | Create preview for newly selected image
    |--------------------------------------------------------------------------
    */
    useEffect(() => {
        if (!formData.new_image) {
            setImagePreview(formData.old_image);
            return;
        }

        const objectUrl = URL.createObjectURL(formData.new_image);

        setImagePreview(objectUrl);

        return () => {
            URL.revokeObjectURL(objectUrl);
        };
    }, [formData.new_image, formData.old_image]);

    /*
    |--------------------------------------------------------------------------
    | Input change
    |--------------------------------------------------------------------------
    */
    const handleInputChange = (
        fieldName: keyof FormDataType,
        value: any
    ) => {
        setFormData((previousState) => ({
            ...previousState,
            [fieldName]: value,
        }));
    };

    /*
    |--------------------------------------------------------------------------
    | Prepare FormData
    |--------------------------------------------------------------------------
    */
    const prepareFormData = () => {
        const formPayload = new FormData();

        formPayload.append("title", formData.title);
        formPayload.append("slug", formData.slug);
        formPayload.append("order", String(formData.order ?? 0));
        formPayload.append("body", formData.body);
        formPayload.append("summery", formData.summery ?? "");

        /*
         * Only send new_image when a new file exists.
         */
        if (formData.new_image instanceof File) {
            formPayload.append("new_image", formData.new_image);
        }

        /*
         * Send deleted image ID if existing image was removed.
         */
        if (formData.deleted_images !== null) {
            formPayload.append(
                "deleted_images",
                String(formData.deleted_images)
            );
        }

        /*
         * Laravel method spoofing.
         *
         * POST + _method=PUT allows file upload with FormData.
         */
        formPayload.append("_method", "PUT");

        return formPayload;
    };

    /*
    |--------------------------------------------------------------------------
    | Submit form
    |--------------------------------------------------------------------------
    */
    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setErrors({});

        const formPayload = prepareFormData();

        router.post(
            route("gallery.update", gallery.id),
            formPayload,
            {
                forceFormData: true,

                onError: (newErrors) => {
                    console.error("Validation errors:", newErrors);

                    setErrors(newErrors);
                },

                onSuccess: () => {
                    toast("Gallery updated successfully.", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                    });
                },
            }
        );
    };

    /*
    |--------------------------------------------------------------------------
    | Handle dropped files
    |--------------------------------------------------------------------------
    */
    const handleDrop = (
        event: React.DragEvent<HTMLDivElement>
    ) => {
        event.preventDefault();

        const files = event.dataTransfer.files;

        handleFiles(files);
    };

    /*
    |--------------------------------------------------------------------------
    | Handle files
    |--------------------------------------------------------------------------
    */
    const handleFiles = (files: FileList) => {
        if (!files || files.length === 0) {
            return;
        }

        const file = files[0];

        if (!file.type.startsWith("image/")) {
            toast.error("Please select a valid image file.");

            return;
        }

        handleInputChange("new_image", file);

        /*
         * If replacing an old image, don't mark the old image
         * as independently deleted. The backend will delete it
         * when the new image is uploaded.
         */
        setFormData((previousState) => ({
            ...previousState,
            new_image: file,
        }));
    };

    /*
    |--------------------------------------------------------------------------
    | Drag over
    |--------------------------------------------------------------------------
    */
    const handleDragOver = (
        event: React.DragEvent<HTMLDivElement>
    ) => {
        event.preventDefault();
    };

    /*
    |--------------------------------------------------------------------------
    | Browse image
    |--------------------------------------------------------------------------
    */
    const handleBrowseClick = () => {
        const input = document.createElement("input");

        input.type = "file";
        input.accept = "image/jpeg,image/jpg,image/png,image/webp";

        input.onchange = (event: Event) => {
            const target = event.target as HTMLInputElement;

            if (target.files) {
                handleFiles(target.files);
            }
        };

        input.click();
    };

    /*
    |--------------------------------------------------------------------------
    | Remove image
    |--------------------------------------------------------------------------
    */
    const handleRemoveImage = () => {
        const attachmentId =
            gallery?.attachments?.[0]?.id ?? gallery.id;

        setFormData((previousState) => ({
            ...previousState,
            old_image: null,
            new_image: null,
            deleted_images: attachmentId,
        }));

        setImagePreview(null);
    };

    /*
    |--------------------------------------------------------------------------
    | Delete gallery
    |--------------------------------------------------------------------------
    */
    const deleteGallery = (id: number) => {
        if (!confirm("Are you sure you want to delete this gallery?")) {
            return;
        }

        router.delete(route("gallery.destroy", id), {
            onSuccess: () => {
                toast("Gallery deleted successfully.", {
                    position: "top-right",
                    autoClose: 5000,
                    theme: "light",
                    transition: Bounce,
                });
            },

            onError: (errors) => {
                console.error("Delete error:", errors);

                toast.error("Unable to delete gallery.");
            },
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Edit Gallery" />

            <div className="p-2 lg:p-4">
                <div className="w-full">
                    <div className="overflow-hidden shadow bg-surface text-onSurface">
                        <div className="w-full p-4 space-y-2 lg:p-10">

                            {/* -------------------------------------------------
                                Header
                            -------------------------------------------------- */}
                            <h2 className="text-2xl font-bold lg:text-4xl">
                                Update Gallery
                            </h2>

                            <div className="flex items-end justify-end">
                                <div className="flex gap-2">

                                    <Link
                                        className="bg-primary text-onPrimary hover:bg-primaryVariant disabled:bg-disabled hover:shadow-md transition-all duration-300 rounded py-1.5 px-1.5 md:px-4"
                                        href={route("gallery.index")}
                                    >
                                        <span className="hidden md:block">
                                            All Gallery
                                        </span>

                                        <span className="inline-block md:hidden">
                                            <i className="fa-solid fa-rectangle-list"></i>
                                        </span>
                                    </Link>

                                    {auth?.user?.role === 'ADMIN' && (
                                        <button
                                            type="button"
                                            className="bg-primary text-onPrimary hover:bg-primaryVariant disabled:bg-disabled hover:shadow-md transition-all duration-300 shadow-sm rounded py-1.5 px-1.5 md:px-4"
                                            onClick={() =>
                                                deleteGallery(gallery.id)
                                            }
                                        >
                                            <span className="hidden md:block">
                                                Delete Gallery
                                            </span>

                                            <span className="inline-block md:hidden">
                                                <i className="fa-solid fa-trash-can"></i>
                                            </span>
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* -------------------------------------------------
                                Form
                            -------------------------------------------------- */}
                            <form
                                onSubmit={handleFormSubmit}
                                className="w-full"
                            >

                                {/* -------------------------------------------------
                                    Gallery Image
                                -------------------------------------------------- */}
                                <div className="flex flex-col mb-6">

                                    <label
                                        htmlFor="gallery_image"
                                        className="block mb-2 font-semibold"
                                    >
                                        Gallery Image
                                    </label>

                                    <div
                                        id="gallery_image"
                                        className="relative flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-background lg:w-80 hover:bg-primary/30"
                                        onDrop={
                                            !imagePreview
                                                ? handleDrop
                                                : undefined
                                        }
                                        onDragOver={
                                            !imagePreview
                                                ? handleDragOver
                                                : undefined
                                        }
                                        onClick={
                                            !imagePreview
                                                ? handleBrowseClick
                                                : undefined
                                        }
                                    >

                                        {!imagePreview ? (
                                            <div className="p-6 text-center">
                                                <i className="mb-3 text-4xl fa-solid fa-cloud-arrow-up"></i>

                                                <p>
                                                    Drag and drop an image
                                                    here or click to browse
                                                </p>

                                                <p className="mt-2 text-sm text-gray-400">
                                                    JPG, JPEG, PNG or WEBP
                                                </p>

                                                <p className="mt-1 text-sm text-gray-400">
                                                    Maximum 2MB
                                                </p>
                                            </div>
                                        ) : (
                                            <div className="relative p-2">

                                                <img
                                                    src={imagePreview}
                                                    alt="Gallery preview"
                                                    className="max-w-full rounded-lg"
                                                />

                                                {/* Remove image */}
                                                <button
                                                    type="button"
                                                    onClick={(event) => {
                                                        event.stopPropagation();
                                                        handleRemoveImage();
                                                    }}
                                                    className="absolute flex items-center justify-center w-8 h-8 text-xl text-white transition-all rounded-full bg-error hover:scale-125 -top-2 -right-2"
                                                >
                                                    &times;
                                                </button>

                                                {/* New image indicator */}
                                                {formData.new_image && (
                                                    <div className="absolute bottom-2 left-2 right-2 px-2 py-1 text-xs text-white bg-black/60 rounded">
                                                        New image selected
                                                    </div>
                                                )}
                                            </div>
                                        )}

                                    </div>

                                    {errors?.new_image && (
                                        <div className="mt-1 text-sm text-error">
                                            {errors.new_image}
                                        </div>
                                    )}
                                </div>

                                {/* -------------------------------------------------
                                    Title / Slug / Order
                                -------------------------------------------------- */}
                                <div className="grid w-full grid-cols-1 gap-6 mb-6 md:grid-cols-3">

                                    {/* Title */}
                                    <div>
                                        <label
                                            htmlFor="title"
                                            className="block mb-1 font-semibold"
                                        >
                                            Title
                                        </label>

                                        <input
                                            type="text"
                                            name="title"
                                            id="title"
                                            className="w-full py-1 border rounded-sm bg-background border-borderColor focus:ring focus:ring-borderColor focus:ring-opacity-20 text-onSurface"
                                            value={formData.title}
                                            onChange={(e) => {
                                                const value =
                                                    e.target.value;

                                                setFormData(
                                                    (previousState) => ({
                                                        ...previousState,
                                                        title: value,
                                                        slug: slugify(value),
                                                    })
                                                );
                                            }}
                                        />

                                        {errors?.title && (
                                            <div className="text-sm text-error">
                                                {errors.title}
                                            </div>
                                        )}
                                    </div>

                                    {/* Slug */}
                                    <div>
                                        <label
                                            htmlFor="slug"
                                            className="block mb-1 font-semibold"
                                        >
                                            Slug
                                        </label>

                                        <input
                                            type="text"
                                            name="slug"
                                            id="slug"
                                            className="w-full py-1 border rounded-sm bg-background border-borderColor focus:ring focus:ring-borderColor focus:ring-opacity-20 text-onSurface"
                                            value={formData.slug}
                                            onChange={(e) => {
                                                handleInputChange(
                                                    "slug",
                                                    e.target.value
                                                );
                                            }}
                                        />

                                        {errors?.slug && (
                                            <div className="text-sm text-error">
                                                {errors.slug}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* -------------------------------------------------
                                    Summary
                                -------------------------------------------------- */}
                                <div className="mb-6">

                                    <label
                                        htmlFor="summery"
                                        className="block mb-1 font-semibold"
                                    >
                                        Sort Description (Optional)
                                    </label>

                                    <textarea
                                        name="summery"
                                        id="summery"
                                        value={formData.summery}
                                        className="w-full py-1 border rounded-sm bg-background border-borderColor focus:ring focus:ring-borderColor focus:ring-opacity-20 text-onSurface"
                                        onChange={(e) => {
                                            handleInputChange(
                                                "summery",
                                                e.target.value
                                            );
                                        }}
                                    />

                                    {errors?.summery && (
                                        <div className="text-sm text-error">
                                            {errors.summery}
                                        </div>
                                    )}
                                </div>

                                {/* -------------------------------------------------
                                    Description
                                -------------------------------------------------- */}
                                <div className="mb-6">

                                    <label
                                        htmlFor="body"
                                        className="block mb-1 font-semibold"
                                    >
                                        Description
                                    </label>

                                    <ReactQuill
                                        theme="snow"
                                        id="body"
                                        modules={modules}
                                        formats={formats}
                                        className="bg-background"
                                        value={formData.body}
                                        onChange={(value) => {
                                            handleInputChange(
                                                "body",
                                                value
                                            );
                                        }}
                                    />

                                    {errors?.body && (
                                        <div className="mt-1 text-sm text-error">
                                            {errors.body}
                                        </div>
                                    )}
                                </div>

                                {/* -------------------------------------------------
                                    Submit
                                -------------------------------------------------- */}
                                <div className="mt-6">

                                    <button
                                        type="submit"
                                        className="px-4 py-2 font-semibold rounded-md text-onSecondary bg-secondary hover:bg-secondaryVariant"
                                    >
                                        Update Gallery
                                    </button>

                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}