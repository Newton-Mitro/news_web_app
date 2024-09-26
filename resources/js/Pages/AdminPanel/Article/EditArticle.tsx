import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { useState } from "react";
import ReactQuill from "react-quill";
import TagSelect from "../../../Components/TagSelect";
import { formats, modules } from "../../../Utils/quill-util";

export default function EditArticle({ auth, article, categories }: any) {
    const [image, setImage] = useState<string | null>(
        article.attachments ? article.attachments[0].url : []
    );
    const [error, setError] = useState<string | null>(null);

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const files = event.dataTransfer.files;
        handleFiles(files);
    };

    const handleFiles = (files: FileList) => {
        if (files.length > 0) {
            const file = files[0];
            if (file.type.startsWith("image/")) {
                setImage(URL.createObjectURL(file));
                setError(null);
            } else {
                setError("Please upload an image file.");
            }
        }
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    const handleBrowseClick = () => {
        if (image) return;
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

    const handleRemoveImage = () => {
        setImage(null);
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
                                            <i className="fa-solid fa-file-circle-plus"></i>
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
                                            <i className="fa-solid fa-file-circle-plus"></i>
                                        </span>
                                    </Link>

                                    <button className="bg-primary text-onPrimary hover:bg-primaryVariant disabled:bg-disabled hover:shadow-md transition-all duration-300 shadow-sm rounded py-1.5 px-1.5 md:px-4 hover:cursor-pointer">
                                        <span className="hidden md:block">
                                            Publish Article
                                        </span>
                                        <span className="inline-block md:hidden">
                                            {" "}
                                            <i className="fa-solid fa-file-csv"></i>
                                        </span>
                                    </button>

                                    <button className="bg-primary text-onPrimary hover:bg-primaryVariant disabled:bg-disabled hover:shadow-md transition-all duration-300 shadow-sm rounded py-1.5 px-1.5 md:px-4 hover:cursor-pointer">
                                        <span className="hidden md:block">
                                            Delete Article
                                        </span>
                                        <span className="inline-block md:hidden">
                                            {" "}
                                            <i className="fa-solid fa-file-csv"></i>
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div className="">
                                <form
                                    action="{{ route('articles.store') }}"
                                    method="POST"
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
                                                    value={article.title}
                                                />
                                                <div className="text-sm text-error">
                                                    error message
                                                </div>
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
                                                    value={article.slug}
                                                />
                                                <div className="text-sm text-error">
                                                    error message
                                                </div>
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
                                                >
                                                    <option value="">
                                                        Select Status
                                                    </option>

                                                    <option value="Draft">
                                                        Draft
                                                    </option>
                                                    <option value="Published">
                                                        Published
                                                    </option>
                                                </select>
                                                <div className="text-sm text-error">
                                                    error message
                                                </div>
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
                                                    value={article.category_id}
                                                    className="w-full px-2 py-1 border rounded-md border-borderColor bg-background"
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
                                                                >
                                                                    {
                                                                        category.name
                                                                    }
                                                                </option>
                                                            );
                                                        }
                                                    )}
                                                </select>
                                                <div className="text-sm text-error">
                                                    error message
                                                </div>
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
                                            value={article.body}
                                            onChange={(value: string) => {}}
                                        />

                                        <div className="text-sm text-error">
                                            error message
                                        </div>
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
                                            value={article.summery}
                                            className="w-full py-1 border rounded-sm bg-background border-borderColor focus:border-borderColor disabled:bg-disabled focus:ring focus:ring-borderColor focus:ring-opacity-20 text-onSurface"
                                        ></textarea>
                                        <div className="text-sm text-error">
                                            error message
                                        </div>
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
                                            value={article.video_url}
                                        />
                                        <div className="text-sm text-error">
                                            error message
                                        </div>
                                    </div>

                                    <div className="flex flex-col mb-4">
                                        <label
                                            htmlFor="video_url"
                                            className="block font-semibold "
                                        >
                                            Article Image
                                        </label>
                                        <div
                                            className="flex flex-col items-center justify-center p-10 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-background w-80 hover:bg-primary/30"
                                            onDrop={handleDrop}
                                            onDragOver={handleDragOver}
                                            onClick={handleBrowseClick}
                                        >
                                            {image === null && (
                                                <p className="">
                                                    Drag and drop an image here
                                                    or click to browse
                                                </p>
                                            )}
                                            {image ? (
                                                <div className="relative pt-2">
                                                    <img
                                                        src={image}
                                                        alt="Preview"
                                                        className="rounded-lg"
                                                    />
                                                    <button
                                                        onClick={
                                                            handleRemoveImage
                                                        }
                                                        className="absolute w-8 h-8 text-white rounded-full bg-error -top-2 -right-2"
                                                    >
                                                        &times;
                                                    </button>
                                                </div>
                                            ) : (
                                                <p className="mt-4 text-gray-500">
                                                    No image uploaded
                                                </p>
                                            )}
                                            {error && (
                                                <p className="mt-2 text-red-500">
                                                    {error}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <TagSelect />
                                    </div>

                                    <div className="mb-4">
                                        <div className="flex items-center gap-2">
                                            <input
                                                type="checkbox"
                                                name="featured"
                                                id="featured"
                                                value={article.featured}
                                            />
                                            <label
                                                htmlFor="featured"
                                                className="font-semibold"
                                            >
                                                Featured
                                            </label>
                                        </div>
                                        <div className="text-sm text-error">
                                            error message
                                        </div>
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
