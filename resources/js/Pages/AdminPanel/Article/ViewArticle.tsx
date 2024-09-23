import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import moment from "moment";

export default function ViewArticle({ auth, article }: any) {
    console.log(article);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="View Article" />
            <div className="p-2 lg:p-4">
                <div className="w-full">
                    <div className="overflow-hidden shadow bg-surface text-onSurface">
                        <div className="w-full p-4 space-y-2 lg:p-10">
                            <h2 className="text-2xl font-bold lg:text-4xl">
                                View Article
                            </h2>
                            <div className="flex items-end justify-end">
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

                                    <Link
                                        className="bg-primary text-onPrimary hover:bg-primaryVariant disabled:bg-disabled hover:shadow-md transition-all duration-300 shadow-sm rounded py-1.5 px-1.5 md:px-4 hover:cursor-pointer"
                                        href={route("articles.edit", 1)}
                                    >
                                        <span className="hidden md:block">
                                            Edit Article
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
                            <div
                                className={`flex flex-col overflow-auto relative`}
                            >
                                {/*Header*/}

                                <article className="py-8">
                                    <h2 className="mb-4 text-xl font-bold lg:text-3xl">
                                        {article.title}
                                    </h2>

                                    <div className="mb-6 text-sm">
                                        <p>
                                            By{` `}
                                            <span className="font-semibold">
                                                {article.author.name}
                                            </span>{" "}
                                            - Published on{" "}
                                            <span>
                                                {moment(
                                                    article.created_at
                                                ).format(
                                                    "MMMM Do YYYY, h:mm A"
                                                )}
                                            </span>
                                        </p>
                                    </div>

                                    <div className="min-w-full prose text-onSurface">
                                        {article.attachments.map(
                                            (
                                                attachment: any,
                                                index: number
                                            ) => {
                                                if (index === 0) {
                                                    return (
                                                        <img
                                                            src={attachment.url}
                                                            alt="Wrapped Image"
                                                            className="float-left w-full mb-6 mr-6 lg:w-4/12"
                                                        />
                                                    );
                                                }
                                            }
                                        )}

                                        <p>{article.summery}</p>

                                        <div className="">{article.body}</div>
                                    </div>

                                    <footer className="mt-10">
                                        <p className="text-sm">
                                            Category:{" "}
                                            <span className="font-semibold">
                                                {article.category.name}
                                            </span>
                                        </p>
                                        <p className="text-sm">
                                            <div className="flex gap-1 mt-2">
                                                {article.tags
                                                    ?.split(",")
                                                    .map((tag: string) => {
                                                        return (
                                                            <span className="px-2 py-0.5 font-semibold text-onSecondary rounded-full bg-secondary">
                                                                {tag}
                                                            </span>
                                                        );
                                                    })}
                                            </div>
                                        </p>
                                    </footer>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
