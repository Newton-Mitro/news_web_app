import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { useState } from "react";
import ReactQuill from "react-quill";
import { Bounce, toast } from "react-toastify";
import TagSelect from "../../../Components/TagSelect";
import { formats, modules } from "../../../Utils/quill-util";

export default function EditArticle({ auth, article, categories, flash }: any) {
    const [formData, setFormData] = useState<{
        title: any;
        slug: any;
        status: any;
        category_id: any;
        body: any;
        summery: any;
        video_url: any;
        featured: any;
        tags: any;
        new_image: any;
        old_image: any;
        deleted_images: any;
    }>({
        title: article.title || "",
        slug: article.slug || "",
        status: article.status || "Draft",
        category_id: article.category_id || "",
        body: article.body || "",
        summery: article.summery || "",
        video_url: article.video_url || "",
        featured: article.featured || false,
        tags: article.tags,
        new_image: null,
        old_image:
            article.attachments.length != 0
                ? article.attachments[0]?.url
                : null,
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
            console.log(key, value);
            formPayload.append(key, value);
        });

        return formPayload;
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const formPayload = prepareFormData();

        // Debugging: Inspect FormData contents
        // for (let [key, value] of formPayload.entries()) {
        //     console.log(`${key}:`, value);
        // }

        router.post(route("articles.update", article.id), formPayload, {
            onError: (newErrors) => {
                console.error("Errors:", newErrors);
                setErrors(newErrors);
            },
            onSuccess: (message) => {
                toast("Article added successfully.", {
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

    const deleteArticle = (id: number) => {
        if (confirm("Are you sure you want to delete this article?")) {
            router.delete(route("articles.destroy", id));
        }
    };

    const updateArticleStatus = (id: number, status: string) => {
        if (confirm(`Are you sure you want to ${status} this article?`)) {
            router.put(route("articles.updateStatus", id));
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
        if (article.old_image) return;
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
        console.log(deletedImageId);

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
            <Head title="Edit Article" />
            <div className="p-2 lg:p-4">
                <div className="w-full">
                    <div className="overflow-hidden shadow bg-surface text-onSurface">
                        <div className="w-full p-4 space-y-2 lg:p-10">
                            <h2 className="text-2xl font-bold lg:text-4xl">
                                Edit Article
                            </h2>
                            {/*Header*/}
                            <div className="flex items-end justify-end">
                                <div className="flex gap-2">
                                    <Link
                                        className="bg-primary text-onPrimary hover:bg-primaryVariant disabled:bg-disabled hover:shadow-md transition-all duration-300 shadow-sm rounded py-1.5 px-1.5 md:px-4 hover:cursor-pointer"
                                        href={route("articles.index")}
                                    >
                                        <span className="hidden md:block">
                                            Articles
                                        </span>
                                        <span className="inline-block md:hidden">
                                            <i className="fa-solid fa-rectangle-list"></i>
                                        </span>
                                    </Link>

                                    <Link
                                        className="bg-primary text-onPrimary hover:bg-primaryVariant disabled:bg-disabled hover:shadow-md transition-all duration-300 shadow-sm rounded py-1.5 px-1.5 md:px-4 hover:cursor-pointer"
                                        href={route(
                                            "articles.show",
                                            article.id
                                        )}
                                    >
                                        <span className="hidden md:block">
                                            View Article
                                        </span>
                                        <span className="inline-block md:hidden">
                                            <i className="fa-solid fa-eye"></i>
                                        </span>
                                    </Link>

                                    <button
                                        className="bg-primary text-onPrimary hover:bg-primaryVariant disabled:bg-disabled hover:shadow-md transition-all duration-300 shadow-sm rounded py-1.5 px-1.5 md:px-4 hover:cursor-pointer"
                                        onClick={() =>
                                            updateArticleStatus(
                                                article.id,
                                                article.status === "Published"
                                                    ? "draft"
                                                    : "publish"
                                            )
                                        }
                                    >
                                        <span className="hidden md:block">
                                            {article.status === "Published"
                                                ? "Draft Article"
                                                : "Publish Article"}
                                        </span>
                                        <span className="inline-block md:hidden">
                                            {article.status === "Published" ? (
                                                <i className="fa-solid fa-cloud-arrow-down"></i>
                                            ) : (
                                                <i className="fa-solid fa-cloud-arrow-up"></i>
                                            )}
                                        </span>
                                    </button>

                                    <button
                                        className="bg-primary text-onPrimary hover:bg-primaryVariant disabled:bg-disabled hover:shadow-md transition-all duration-300 shadow-sm rounded py-1.5 px-1.5 md:px-4 hover:cursor-pointer"
                                        onClick={() =>
                                            deleteArticle(article.id)
                                        }
                                    >
                                        <span className="hidden md:block">
                                            Delete Article
                                        </span>
                                        <span className="inline-block md:hidden">
                                            <i className="fa-solid fa-trash-can"></i>
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div className="">
                                <form
                                    onSubmit={handleFormSubmit}
                                    className="w-full"
                                >
                                    <div className="">
                                        <div className="grid w-full grid-cols-1 gap-6 mb-4 lg:w-8/12 md:grid-cols-2">
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
                                                            value
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
                                                        const {
                                                            name,
                                                            value,
                                                            type,
                                                            checked,
                                                        } = e.target;
                                                        handleInputChange(
                                                            name,
                                                            value
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
                                                            value
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

                                            <div className="">
                                                <label
                                                    htmlFor="category_id"
                                                    className="block font-semibold "
                                                >
                                                    Category
                                                </label>
                                                <select
                                                    name="category_id"
                                                    id="category_id"
                                                    className="w-full px-2 py-1 border rounded-md border-borderColor bg-background"
                                                    value={formData.category_id}
                                                    onChange={(e: any) => {
                                                        const {
                                                            name,
                                                            value,
                                                            type,
                                                            checked,
                                                        } = e.target;
                                                        handleInputChange(
                                                            name,
                                                            value
                                                        );
                                                    }}
                                                >
                                                    <option value="">
                                                        Category Name
                                                    </option>
                                                    {categories.map(
                                                        (category: {
                                                            name: string;
                                                            id: number;
                                                        }) => {
                                                            return (
                                                                <option
                                                                    value={
                                                                        category.id
                                                                    }
                                                                    key={
                                                                        category.id
                                                                    }
                                                                >
                                                                    {
                                                                        category.name
                                                                    }
                                                                </option>
                                                            );
                                                        }
                                                    )}
                                                </select>
                                                {errors?.category_id && (
                                                    <div className="text-sm text-error">
                                                        {errors?.category_id}
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
                                                    value
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

                                    <div className="mb-4">
                                        <label
                                            htmlFor="video_url"
                                            className="block font-semibold "
                                        >
                                            Article Video URL
                                        </label>
                                        <input
                                            type="text"
                                            name="video_url"
                                            id="video_url"
                                            className="w-full py-1 border rounded-sm bg-background border-borderColor focus:border-borderColor disabled:bg-disabled focus:ring focus:ring-borderColor focus:ring-opacity-20 text-onSurface"
                                            value={formData.video_url}
                                            onChange={(e: any) => {
                                                const {
                                                    name,
                                                    value,
                                                    type,
                                                    checked,
                                                } = e.target;
                                                handleInputChange(name, value);
                                            }}
                                        />
                                        {errors?.video_url && (
                                            <div className="text-sm text-error">
                                                {errors?.video_url}
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex flex-col mb-4">
                                        <label
                                            htmlFor="video_url"
                                            className="block font-semibold "
                                        >
                                            Article Image
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
                                                                      formData.new_image
                                                                  )
                                                        }
                                                        alt="Preview"
                                                        className="rounded-lg"
                                                    />
                                                    <button
                                                        onClick={() => {
                                                            handleRemoveImage(
                                                                article
                                                                    ?.attachments[0]
                                                                    ?.id
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

                                    <div className="mb-4">
                                        <TagSelect
                                            articleTags={
                                                article.tags?.split(",") || []
                                            }
                                            onChange={(value) => {
                                                handleInputChange(
                                                    "tags",
                                                    value
                                                );
                                            }}
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <div className="flex items-center gap-2">
                                            <input
                                                type="checkbox"
                                                name="featured"
                                                id="featured"
                                                checked={formData.featured}
                                                onChange={(e: any) => {
                                                    const {
                                                        name,
                                                        value,
                                                        type,
                                                        checked,
                                                    } = e.target;
                                                    handleInputChange(
                                                        name,
                                                        checked
                                                    );
                                                }}
                                            />
                                            <label
                                                htmlFor="featured"
                                                className="font-semibold"
                                            >
                                                Featured
                                            </label>
                                        </div>
                                        {errors?.featured && (
                                            <div className="text-sm text-error">
                                                {errors?.featured}
                                            </div>
                                        )}
                                    </div>

                                    <div className="mt-6">
                                        <button
                                            type="submit"
                                            className="px-4 py-2 font-semibold rounded-md text-onSecondary bg-secondary hover:bg-secondaryVariant"
                                        >
                                            Update Article
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
