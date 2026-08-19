import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { useState } from "react";
import ReactQuill from "react-quill";
import { Bounce, toast } from "react-toastify";
import { formats, modules } from "../../../Utils/quill-util";

export default function EditPage({ auth, page, categories, flash }: any) {
    const [formData, setFormData] = useState<{
        title: any;
        slug: any;
        status: any;
        body: any;
        summery: any;
        new_image: any;
        old_image: any;
        deleted_images: any;
    }>({
        title: page.title || "",
        slug: page.slug || "",
        status: page.status || "Draft",
        body: page.body || "",
        summery: page.summery || "",
        new_image: null,
        old_image:
            page.attachments.length != 0 ? page.attachments[0]?.url : null,
        deleted_images: null,
    });

    const [errors, setErrors] = useState<any>(null);
    const [message, setMessage] = useState<string | null>(null);

    const handleInputChange = (fieldName: string, value: any) => {
        setFormData({
            ...formData,
            [fieldName]: value,
        });
    };

    const prepareFormData = () => {
        const formPayload = new FormData();

        Object.entries(formData).forEach(([key, value]) => {
            formPayload.append(key, value);
        });

        return formPayload;
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const formPayload = prepareFormData();

        router.post(route("pages.update", page.id), formPayload, {
            onError: (newErrors) => {
                console.error("Errors:", newErrors);
                setErrors(newErrors);
            },
            onSuccess: (message) => {
                toast("Page updated successfully.", {
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
        });
    };

    const deletePage = (id: number) => {
        if (confirm("Are you sure you want to delete this page?")) {
            router.delete(route("pages.destroy", id));
        }
    };

    const updatePageStatus = (id: number, status: string) => {
        if (confirm(`Are you sure you want to ${status} this page?`)) {
            router.put(route("pages.updateStatus", id));
        }
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const files = event.dataTransfer.files;
        handleFiles(files);
    };

    const handleFiles = (files: FileList) => {
        if (files.length > 0) {
            const file = files[0];
            if (file.type.startsWith("image/")) {
                handleInputChange("new_image", file);
            } else {
                setMessage("Please upload an image file.");
            }
        }
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    const handleBrowseClick = () => {
        if (page.old_image) return;
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "image/*";
        input.onchange = (e: any) => {
            if (e.target && e.target.files) {
                handleFiles(e.target.files);
            }
        };
        input.click();
    };

    const handleRemoveImage = (deletedImageId: any) => {
        setFormData((previousState) => ({
            ...previousState,
            old_image: null,
            deleted_images: deletedImageId,
            new_image: null,
        }));
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
            <Head title="Edit Page" />
            <div className="p-2 lg:p-4">
                <div className="w-full">
                    <div className="overflow-hidden shadow bg-surface text-onSurface">
                        <div className="w-full p-4 space-y-2 lg:p-10">
                            <h2 className="text-2xl font-bold lg:text-4xl">
                                Edit Page
                            </h2>
                            {/*Header*/}
                            <div className="flex items-end justify-end">
                                <div className="flex gap-2">
                                    <Link
                                        className="bg-primary text-onPrimary hover:bg-primaryVariant disabled:bg-disabled hover:shadow-md transition-all duration-300 shadow-sm rounded py-1.5 px-1.5 md:px-4 hover:cursor-pointer"
                                        href={route("pages.index")}
                                    >
                                        <span className="hidden md:block">
                                            Pages
                                        </span>
                                        <span className="inline-block md:hidden">
                                            <i className="fa-solid fa-rectangle-list"></i>
                                        </span>
                                    </Link>

                                    <Link
                                        className="bg-primary text-onPrimary hover:bg-primaryVariant disabled:bg-disabled hover:shadow-md transition-all duration-300 shadow-sm rounded py-1.5 px-1.5 md:px-4 hover:cursor-pointer"
                                        href={route("pages.show", page.id)}
                                    >
                                        <span className="hidden md:block">
                                            View Page
                                        </span>
                                        <span className="inline-block md:hidden">
                                            <i className="fa-solid fa-eye"></i>
                                        </span>
                                    </Link>
                                    {(auth?.user?.role === "ADMIN" ||
                                        auth?.user?.role === "EDITOR") && (
                                        <button
                                            className="bg-primary text-onPrimary hover:bg-primaryVariant disabled:bg-disabled hover:shadow-md transition-all duration-300 shadow-sm rounded py-1.5 px-1.5 md:px-4 hover:cursor-pointer"
                                            onClick={() =>
                                                updatePageStatus(
                                                    page.id,
                                                    page.status === "Published"
                                                        ? "draft"
                                                        : "publish",
                                                )
                                            }
                                        >
                                            <span className="hidden md:block">
                                                {page.status === "Published"
                                                    ? "Draft Page"
                                                    : "Publish Page"}
                                            </span>
                                            <span className="inline-block md:hidden">
                                                {page.status === "Published" ? (
                                                    <i className="fa-solid fa-cloud-arrow-down"></i>
                                                ) : (
                                                    <i className="fa-solid fa-cloud-arrow-up"></i>
                                                )}
                                            </span>
                                        </button>
                                    )}
                                    {auth?.user?.role === "ADMIN" && (
                                        <button
                                            className="bg-primary text-onPrimary hover:bg-primaryVariant disabled:bg-disabled hover:shadow-md transition-all duration-300 shadow-sm rounded py-1.5 px-1.5 md:px-4 hover:cursor-pointer"
                                            onClick={() => deletePage(page.id)}
                                        >
                                            <span className="hidden md:block">
                                                Delete Page
                                            </span>
                                            <span className="inline-block md:hidden">
                                                <i className="fa-solid fa-trash-can"></i>
                                            </span>
                                        </button>
                                    )}
                                </div>
                            </div>
                            <div className="">
                                <form
                                    onSubmit={handleFormSubmit}
                                    className="w-full"
                                >
                                    <div className="">
                                        <div className="grid w-full grid-cols-1 gap-6 mb-4 lg:w-8/12 md:grid-cols-2 lg:grid-cols-3">
                                            <div className="">
                                                <label
                                                    htmlFor="title"
                                                    className="block font-semibold "
                                                >
                                                    Title
                                                </label>
                                                <input
                                                    type="text"
                                                    name="title"
                                                    id="title"
                                                    className="w-full py-1 border rounded-sm bg-background border-borderColor focus:border-borderColor disabled:bg-disabled focus:ring focus:ring-borderColor focus:ring-opacity-20 text-onSurface"
                                                    value={formData.title}
                                                    onChange={(e: any) => {
                                                        const {
                                                            name,
                                                            value,
                                                            type,
                                                            checked,
                                                        } = e.target;
                                                        handleInputChange(
                                                            name,
                                                            value,
                                                        );
                                                    }}
                                                />
                                                {errors?.title && (
                                                    <div className="text-sm text-error">
                                                        {errors?.title}
                                                    </div>
                                                )}
                                            </div>

                                            <div className="w-full">
                                                <label
                                                    htmlFor="slug"
                                                    className="block font-semibold "
                                                >
                                                    Slug
                                                </label>
                                                <input
                                                    type="text"
                                                    name="slug"
                                                    id="slug"
                                                    disabled={
                                                        auth.user.role !== "ADMIN"
                                                            ? true
                                                            : false
                                                    }
                                                    className={`w-full py-1 border rounded-sm bg-background border-borderColor 
                                                        focus:border-borderColor disabled:bg-disabled focus:ring 
                                                        
                                                        focus:ring-borderColor focus:ring-opacity-20 text-onSurface`}
                                                    value={formData.slug}
                                                    onChange={(e: any) => {
                                                        const {
                                                            name,
                                                            value,
                                                            type,
                                                            checked,
                                                        } = e.target;
                                                        handleInputChange(
                                                            name,
                                                            value,
                                                        );
                                                    }}
                                                />
                                                {errors?.slug && (
                                                    <div className="text-sm text-error">
                                                        {errors?.slug}
                                                    </div>
                                                )}
                                            </div>

                                            <div className="">
                                                <label
                                                    htmlFor="status"
                                                    className="block font-semibold "
                                                >
                                                    Status
                                                </label>
                                                <select
                                                    name="status"
                                                    id="status"
                                                    className="w-full px-2 py-1 border rounded-md bg-background border-borderColor"
                                                    value={formData.status}
                                                    onChange={(e: any) => {
                                                        const {
                                                            name,
                                                            value,
                                                            type,
                                                            checked,
                                                        } = e.target;
                                                        handleInputChange(
                                                            name,
                                                            value,
                                                        );
                                                    }}
                                                >
                                                    <option value="" key={1}>
                                                        Select Status
                                                    </option>

                                                    <option
                                                        value="Draft"
                                                        key={2}
                                                    >
                                                        Draft
                                                    </option>
                                                    <option
                                                        value="Published"
                                                        key={3}
                                                    >
                                                        Published
                                                    </option>
                                                </select>
                                                {errors?.status && (
                                                    <div className="text-sm text-error">
                                                        {errors?.status}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <label
                                            htmlFor="content"
                                            className="block font-semibold "
                                        >
                                            Content
                                        </label>
                                        <ReactQuill
                                            theme="snow"
                                            id="body"
                                            modules={modules}
                                            formats={formats}
                                            className="bg-background"
                                            readOnly={false}
                                            value={formData.body}
                                            onChange={(value: any) => {
                                                handleInputChange(
                                                    "body",
                                                    value,
                                                );
                                            }}
                                        />

                                        {errors?.body && (
                                            <div className="text-sm text-error">
                                                {errors?.body}
                                            </div>
                                        )}
                                    </div>

                                    <div className="mb-4">
                                        <label
                                            htmlFor="summery"
                                            className="block font-semibold "
                                        >
                                            Summary (Optional)
                                        </label>
                                        <textarea
                                            name="summery"
                                            id="summery"
                                            value={formData.summery}
                                            onChange={(e: any) => {
                                                const {
                                                    name,
                                                    value,
                                                    type,
                                                    checked,
                                                } = e.target;
                                                handleInputChange(name, value);
                                            }}
                                            className="w-full py-1 border rounded-sm bg-background border-borderColor focus:border-borderColor disabled:bg-disabled focus:ring focus:ring-borderColor focus:ring-opacity-20 text-onSurface"
                                        ></textarea>
                                        {errors?.summery && (
                                            <div className="text-sm text-error">
                                                {errors?.summery}
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex flex-col mb-4">
                                        <label
                                            htmlFor="video_url"
                                            className="block font-semibold "
                                        >
                                            Page Image
                                        </label>
                                        <div
                                            className="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-background lg:w-80 hover:bg-primary/30"
                                            onDrop={
                                                formData.old_image === null &&
                                                formData.new_image === null
                                                    ? handleDrop
                                                    : () => {}
                                            }
                                            onDragOver={
                                                formData.old_image === null &&
                                                formData.new_image === null
                                                    ? handleDragOver
                                                    : () => {}
                                            }
                                            onClick={
                                                formData.old_image === null &&
                                                formData.new_image === null
                                                    ? handleBrowseClick
                                                    : () => {}
                                            }
                                        >
                                            {formData.old_image === null &&
                                            formData.new_image === null ? (
                                                <div className="p-4">
                                                    <p className="">
                                                        Drag and drop an image
                                                        here or click to browse
                                                    </p>
                                                    <p className="mt-2 text-gray-300">
                                                        No image uploaded
                                                    </p>
                                                </div>
                                            ) : (
                                                <div className="relative">
                                                    <img
                                                        src={
                                                            formData.old_image !==
                                                            null
                                                                ? formData.old_image
                                                                : URL.createObjectURL(
                                                                      formData.new_image,
                                                                  )
                                                        }
                                                        alt="Preview"
                                                        className="rounded-lg"
                                                    />
                                                    <button
                                                        onClick={() => {
                                                            handleRemoveImage(
                                                                page
                                                                    ?.attachments[0]
                                                                    ?.id,
                                                            );
                                                        }}
                                                        className="absolute w-8 h-8 text-white transition-all rounded-full hover:scale-125 bg-error -top-2 -right-2"
                                                    >
                                                        &times;
                                                    </button>
                                                </div>
                                            )}

                                            {errors?.new_image && (
                                                <div className="text-sm text-error">
                                                    {errors?.new_image}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <button
                                            type="submit"
                                            className="px-4 py-2 font-semibold rounded-md text-onSecondary bg-secondary hover:bg-secondaryVariant"
                                        >
                                            Update Page
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
