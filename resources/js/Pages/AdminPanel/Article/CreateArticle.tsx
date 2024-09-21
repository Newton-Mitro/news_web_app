import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";

export default function CreateArticle({ auth }: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />
            <div className="p-2 lg:p-4">
                <div className="w-full">
                    <div className="overflow-hidden shadow bg-surface text-onSurface">
                        <div className="w-full p-4 space-y-2">
                            <h2 className="text-2xl font-bold lg:text-4xl">
                                Create News Article
                            </h2>
                            <div className={`flex items-end justify-end`}>
                                {/*Header*/}
                                <div className="">
                                    <div className="flex gap-2">
                                        <Link
                                            className="bg-primary text-onPrimary hover:bg-primaryVariant disabled:bg-disabled hover:shadow-md transition-all duration-300 shadow-sm rounded py-1.5 px-1.5 md:px-4 hover:cursor-pointer"
                                            href={route("articles.index")}
                                        >
                                            <span className="hidden md:block">
                                                All Articles
                                            </span>
                                            <span className="inline-block md:hidden">
                                                <i className="fa-solid fa-file-circle-plus"></i>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="py-10">
                                <div className="p-8">
                                    <h2 className="mb-6 text-2xl font-bold">
                                        Create New Article
                                    </h2>

                                    <form
                                        action="{{ route('articles.store') }}"
                                        method="POST"
                                        className="w-full"
                                    >
                                        <div className="mb-4">
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
                                                className="w-full py-1 border rounded-sm shadow-sm bg-background md:w-80 border-borderColor focus:border-borderColor disabled:bg-disabled focus:ring focus:ring-borderColor focus:ring-opacity-20 text-onSurface"
                                                value=""
                                                required
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
                                                className="w-full py-1 border rounded-sm shadow-sm bg-background md:w-80 border-borderColor focus:border-borderColor disabled:bg-disabled focus:ring focus:ring-borderColor focus:ring-opacity-20 text-onSurface"
                                                value=""
                                                required
                                            />
                                            <div className="text-sm text-error">
                                                error message
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            <label
                                                htmlFor="content"
                                                className="block font-semibold "
                                            >
                                                Content
                                            </label>
                                            <textarea
                                                name="content"
                                                id="content"
                                                className="w-full py-1 border rounded-sm shadow-sm bg-background md:w-80 border-borderColor focus:border-borderColor disabled:bg-disabled focus:ring focus:ring-borderColor focus:ring-opacity-20 text-onSurface"
                                                required
                                            ></textarea>
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
                                                className="w-full py-1 border rounded-sm shadow-sm bg-background md:w-80 border-borderColor focus:border-borderColor disabled:bg-disabled focus:ring focus:ring-borderColor focus:ring-opacity-20 text-onSurface"
                                            ></textarea>
                                            <div className="text-sm text-error">
                                                error message
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            <label
                                                htmlFor="status"
                                                className="block font-semibold "
                                            >
                                                Status
                                            </label>
                                            <select
                                                name="status"
                                                id="status"
                                                className="w-full p-2 border rounded-md bg-background border-borderColor"
                                            >
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

                                        <div className="mb-4">
                                            <label
                                                htmlFor="featured"
                                                className="block font-semibold "
                                            >
                                                Featured
                                            </label>
                                            <input
                                                type="checkbox"
                                                name="featured"
                                                id="featured"
                                            />
                                            <div className="text-sm text-error">
                                                error message
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            <label
                                                htmlFor="category_id"
                                                className="block font-semibold "
                                            >
                                                Category
                                            </label>
                                            <select
                                                name="category_id"
                                                id="category_id"
                                                className="w-full p-2 border rounded-md border-borderColor bg-background"
                                            >
                                                @foreach($categories as
                                                $category)
                                                <option value="{{ $category->id }}">
                                                    Category Name
                                                </option>
                                                @endforeach
                                            </select>
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
            </div>
        </AuthenticatedLayout>
    );
}
