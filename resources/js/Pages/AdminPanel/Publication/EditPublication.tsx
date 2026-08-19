import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { useState } from "react";
import slugify from "react-slugify";
import { Bounce, toast } from "react-toastify";

export default function EditPublication({ auth, publication }: any) {
    const [formData, setFormData] = useState<{
        title: string;
        slug: string;
        publish_date: string;
        old_attachment: string | null;
        attachment: File | null;
        remove_old_attachment: boolean;
    }>({
        title: publication.title ?? "",
        slug: publication.slug ?? "",
        publish_date: publication.publish_date ?? "",
        old_attachment: publication.attachment_url ?? null,
        attachment: null,
        remove_old_attachment: false,
    });

    console.log(formData);

    const [errors, setErrors] = useState<any>(null);

    const handleInputChange = (fieldName: string, value: any) => {
        setFormData({
            ...formData,
            [fieldName]: value,
        });
    };

    const prepareFormData = () => {
        const formPayload = new FormData();

        formPayload.append("title", formData.title);
        formPayload.append("slug", formData.slug);
        formPayload.append("publish_date", formData.publish_date);

        if (formData.attachment instanceof File) {
            formPayload.append("attachment", formData.attachment);
        }

        formPayload.append(
            "remove_old_attachment",
            formData.remove_old_attachment ? "1" : "0",
        );

        return formPayload;
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const formPayload = prepareFormData();

        // Laravel PUT method spoofing
        formPayload.append("_method", "PUT");

        router.post(route("publication.update", publication.id), formPayload, {
            forceFormData: true,

            onError: (newErrors) => {
                console.error("Errors:", newErrors);
                setErrors(newErrors);
            },

            onSuccess: () => {
                toast.success("Publication updated successfully.", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "light",
                    transition: Bounce,
                });
            },
        });
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const files = event.dataTransfer.files;
        handleFiles(files);
    };

    const handleFiles = (files: FileList) => {
        if (files.length > 0) {
            const file = files[0];

            if (file.type === "application/pdf") {
                setFormData((previousState) => ({
                    ...previousState,
                    attachment: file,
                    old_attachment: null,
                    remove_old_attachment: true,
                }));
            } else {
                toast.error("Only PDF files are allowed.");
            }
        }
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    const handleBrowseClick = () => {
        const input = document.createElement("input");

        input.type = "file";
        input.accept = "application/pdf";

        input.onchange = (e: any) => {
            if (e.target?.files) {
                handleFiles(e.target.files);
            }
        };

        input.click();
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
            <Head title="New Gallery" />
            <div className="p-2 lg:p-4">
                <div className="w-full">
                    <div className="overflow-hidden shadow bg-surface text-onSurface">
                        <div className="w-full p-4 space-y-2 lg:p-10">
                            <h2 className="text-2xl font-bold lg:text-4xl">
                                Update Publication
                            </h2>
                            <div className={`flex items-end justify-end`}>
                                {/*Header*/}
                                <div className="">
                                    <div className="flex gap-2">
                                        <Link
                                            className="bg-primary text-onPrimary hover:bg-primaryVariant disabled:bg-disabled hover:shadow-md transition-all duration-300  rounded py-1.5 px-1.5 md:px-4 hover:cursor-pointer"
                                            href={route("publication.index")}
                                        >
                                            <span className="hidden md:block">
                                                All Publication
                                            </span>
                                            <span className="inline-block md:hidden">
                                                <i className="fa-solid fa-rectangle-list"></i>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <form
                                    onSubmit={handleFormSubmit}
                                    className="w-full"
                                >
                                    <div className="">
                                        <div className="flex flex-col mb-4">
                                            <label
                                                htmlFor="attachment"
                                                className="block font-semibold"
                                            >
                                                Attachment
                                            </label>

                                            <div
                                                className="relative flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-background lg:w-80 hover:bg-primary/30"
                                                onDrop={
                                                    !formData.old_attachment &&
                                                    !formData.attachment
                                                        ? handleDrop
                                                        : undefined
                                                }
                                                onDragOver={
                                                    !formData.old_attachment &&
                                                    !formData.attachment
                                                        ? handleDragOver
                                                        : undefined
                                                }
                                                onClick={
                                                    !formData.old_attachment &&
                                                    !formData.attachment
                                                        ? handleBrowseClick
                                                        : undefined
                                                }
                                            >
                                                {formData.old_attachment ? (
                                                    <div className="relative w-full p-3">
                                                        <iframe
                                                            src={
                                                                formData.old_attachment
                                                            }
                                                            title="Existing PDF Preview"
                                                            className="w-full h-[300px] rounded-lg border"
                                                        />

                                                        <button
                                                            type="button"
                                                            onClick={(e) => {
                                                                e.stopPropagation();

                                                                setFormData(
                                                                    (
                                                                        previousState,
                                                                    ) => ({
                                                                        ...previousState,
                                                                        old_attachment:
                                                                            null,
                                                                        remove_old_attachment: true,
                                                                    }),
                                                                );
                                                            }}
                                                            className="absolute top-1 right-1 flex items-center justify-center w-8 h-8 text-white rounded-full bg-error hover:scale-110 transition-all"
                                                        >
                                                            &times;
                                                        </button>
                                                    </div>
                                                ) : formData.attachment ? (
                                                    <div className="relative w-full p-3">
                                                        <iframe
                                                            src={URL.createObjectURL(
                                                                formData.attachment,
                                                            )}
                                                            title="New PDF Preview"
                                                            className="w-full h-[300px] rounded-lg border"
                                                        />

                                                        <button
                                                            type="button"
                                                            onClick={(e) => {
                                                                e.stopPropagation();

                                                                setFormData(
                                                                    (
                                                                        previousState,
                                                                    ) => ({
                                                                        ...previousState,
                                                                        attachment:
                                                                            null,
                                                                    }),
                                                                );
                                                            }}
                                                            className="absolute top-1 right-1 flex items-center justify-center w-8 h-8 text-white rounded-full bg-error hover:scale-110 transition-all"
                                                        >
                                                            &times;
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <p className="p-4 text-center">
                                                        Drag and drop a PDF here
                                                        or click to browse
                                                    </p>
                                                )}

                                                {errors?.attachment && (
                                                    <p className="mt-2 text-sm text-red-500">
                                                        {errors.attachment}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                        <div className="grid w-full grid-cols-1 gap-6 mb-4  md:grid-cols-3">
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
                                                        const { name, value } =
                                                            e.target;
                                                        setFormData(
                                                            (
                                                                previousState,
                                                            ) => ({
                                                                ...previousState,
                                                                title: value,
                                                                slug: slugify(
                                                                    value,
                                                                ),
                                                            }),
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
                                                    className="w-full py-1 border rounded-sm bg-background border-borderColor focus:border-borderColor disabled:bg-disabled focus:ring focus:ring-borderColor focus:ring-opacity-20 text-onSurface"
                                                    value={formData.slug}
                                                    onChange={(e: any) => {
                                                        const { name, value } =
                                                            e.target;
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
                                            <div className="w-full">
                                                <label
                                                    htmlFor="slug"
                                                    className="block font-semibold "
                                                >
                                                    Publish Date
                                                </label>
                                                <input
                                                    type="date"
                                                    name="publish_date"
                                                    id="publish_date"
                                                    className="w-full py-1 border rounded-sm bg-background border-borderColor focus:border-borderColor disabled:bg-disabled focus:ring focus:ring-borderColor focus:ring-opacity-20 text-onSurface"
                                                    value={
                                                        formData.publish_date
                                                    }
                                                    onChange={(e: any) => {
                                                        const { name, value } =
                                                            e.target;
                                                        handleInputChange(
                                                            name,
                                                            value,
                                                        );
                                                    }}
                                                />
                                                {errors?.publish_date && (
                                                    <div className="text-sm text-error">
                                                        {errors?.publish_date}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <button
                                            type="submit"
                                            className="px-4 py-2 font-semibold rounded-md text-onSecondary bg-secondary hover:bg-secondaryVariant"
                                        >
                                            Update Publication
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
