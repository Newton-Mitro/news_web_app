import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";

export default function EditArticle({ auth }: PageProps) {
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
                                Edit News Article
                            </h2>
                            {/*Header*/}
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
                                        href={route("articles.show", 1)}
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
                            <div
                                className={`h-[calc(100vh-215px)] flex flex-col overflow-auto relative`}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
