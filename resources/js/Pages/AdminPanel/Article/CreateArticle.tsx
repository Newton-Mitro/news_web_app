import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { useState } from "react";
import ReactQuill from "react-quill";
import slugify from "react-slugify";
import { Bounce, toast } from "react-toastify";
import TagSelect from "../../../Components/TagSelect";
import { formats, modules } from "../../../Utils/quill-util";

export default function CreateArticle({ auth, categories }: any) {
    const [formData, setFormData] = useState<{
        title: any;
        slug: any;
        status: any;
        category_id: any;
        body: any;
        summery: any;
        video_url: any;
        featured: any;
        article_type: string;
        tags: any;
        new_image: any;
    }>({
        title: "",
        slug: "",
        status: "Draft",
        category_id: "",
        body: "",
        summery: "",
        video_url: "",
        featured: false,
        article_type: "Image",
        tags: null,
        new_image: null,
    });

    const [errors, setErrors] = useState<any>(null);

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

        router.post(route("articles.store"), formPayload, {
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
            }
        }
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    const handleBrowseClick = () => {
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
            <Head title="New Article" />
            <div className="p-2 lg:p-4">
                <div className="w-full">
                    <div className="overflow-hidden shadow bg-surface text-onSurface">
                        <div className="w-full p-4 space-y-2 lg:p-10">
                            <h2 className="text-2xl font-bold lg:text-4xl">
                                New Article
                            </h2>
                            <div className={`flex items-end justify-end`}>
                                {/*Header*/}
                                <div className="">
                                    <div className="flex gap-2">
                                        <Link
                                            className="bg-primary text-onPrimary hover:bg-primaryVariant disabled:bg-disabled hover:shadow-md transition-all duration-300  rounded py-1.5 px-1.5 md:px-4 hover:cursor-pointer"
                                            href={route("articles.index")}
                                        >
                                            <span className="hidden md:block">
                                                Articles
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
                                                        const { name, value } =
                                                            e.target;
                                                        setFormData(
                                                            (
                                                                previousState
                                                            ) => ({
                                                                ...previousState,
                                                                title: value,
                                                                slug: slugify(
                                                                    value
                                                                ),
                                                            })
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
                                            Summery (Optional)
                                        </label>
                                        <textarea
                                            name="summery"
                                            id="summery"
                                            value={formData.summery}
                                            className="w-full py-1 border rounded-sm bg-background border-borderColor focus:border-borderColor disabled:bg-disabled focus:ring focus:ring-borderColor focus:ring-opacity-20 text-onSurface"
                                            onChange={(e: any) => {
                                                const { name, value } =
                                                    e.target;
                                                handleInputChange(name, value);
                                            }}
                                        ></textarea>
                                        {errors?.summery && (
                                            <div className="text-sm text-error">
                                                {errors?.summery}
                                            </div>
                                        )}
                                    </div>
                                    <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2 lg:grid-cols-3">
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
                                                onChange={(e: any) => {
                                                    const { name, value } =
                                                        e.target;
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
                                                                {category.name}
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

                                        <div className="">
                                            <label
                                                htmlFor="article_type"
                                                className="block font-semibold "
                                            >
                                                Article Type
                                            </label>
                                            <select
                                                name="article_type"
                                                id="article_type"
                                                className="w-full px-2 py-1 border rounded-md bg-background border-borderColor"
                                                value={formData.article_type}
                                                onChange={(e: any) => {
                                                    const { name, value } =
                                                        e.target;
                                                    handleInputChange(
                                                        name,
                                                        value
                                                    );
                                                }}
                                            >
                                                <option value="" key={1}>
                                                    Select Article Type
                                                </option>

                                                <option value="Image" key={2}>
                                                    Image
                                                </option>
                                                <option value="Video" key={3}>
                                                    Video
                                                </option>
                                            </select>
                                            {errors?.article_type && (
                                                <div className="text-sm text-error">
                                                    {errors?.article_type}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {formData.article_type == "Video" ? (
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
                                                    const { name, value } =
                                                        e.target;
                                                    handleInputChange(
                                                        name,
                                                        value
                                                    );
                                                }}
                                            />
                                            {errors?.video_url && (
                                                <div className="text-sm text-error">
                                                    {errors?.video_url}
                                                </div>
                                            )}
                                        </div>
                                    ) : (
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
                                                    formData.new_image === null
                                                        ? handleDrop
                                                        : () => {}
                                                }
                                                onDragOver={
                                                    formData.new_image === null
                                                        ? handleDragOver
                                                        : () => {}
                                                }
                                                onClick={
                                                    formData.new_image === null
                                                        ? handleBrowseClick
                                                        : () => {}
                                                }
                                            >
                                                {formData?.new_image ===
                                                null ? (
                                                    <p className="p-4">
                                                        Drag and drop an image
                                                        here or click to browse
                                                    </p>
                                                ) : (
                                                    <div className="relative">
                                                        <img
                                                            src={URL.createObjectURL(
                                                                formData?.new_image
                                                            )}
                                                            alt="Preview"
                                                            className="rounded-lg"
                                                        />
                                                        <button
                                                            onClick={
                                                                handleRemoveImage
                                                            }
                                                            className="absolute w-8 h-8 text-white transition-all rounded-full hover:scale-125 bg-error -top-2 -right-2"
                                                        >
                                                            &times;
                                                        </button>
                                                    </div>
                                                )}

                                                {errors?.new_image && (
                                                    <p className="mt-2 text-red-500">
                                                        {errors?.new_image}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    )}

                                    <div className="mb-4">
                                        <TagSelect
                                            articleTags={
                                                formData.tags?.split(",") || []
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
                                                    const { name, checked } =
                                                        e.target;
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
                                            Create Article
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
