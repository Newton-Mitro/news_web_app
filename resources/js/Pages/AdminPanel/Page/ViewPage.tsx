import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import moment from "moment";
import { Bounce, toast } from "react-toastify";

export default function ViewPage({ auth, page, flash }: any) {
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

    flash?.success &&
        toast(flash?.success, {
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
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="View Page" />
            <div className="p-2 lg:p-4">
                <div className="w-full">
                    <div className="overflow-hidden shadow bg-surface text-onSurface">
                        <div className="w-full p-4 space-y-2 lg:p-10">
                            <h2 className="text-2xl font-bold lg:text-4xl">
                                View Page
                            </h2>
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
                                    {(auth?.user?.role === "ADMIN" ||
                                        auth?.user?.role === "EDITOR") && (
                                        <Link
                                            className="bg-primary text-onPrimary hover:bg-primaryVariant disabled:bg-disabled hover:shadow-md transition-all duration-300 shadow-sm rounded py-1.5 px-1.5 md:px-4 hover:cursor-pointer"
                                            href={route("pages.edit", page.id)}
                                        >
                                            <span className="hidden md:block">
                                                Edit Page
                                            </span>
                                            <span className="inline-block md:hidden">
                                                <i className="fa-solid fa-pen-to-square"></i>
                                            </span>
                                        </Link>
                                    )}
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
                                      {auth?.user?.role === 'ADMIN' && (
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
                            <div
                                className={`flex flex-col overflow-auto relative`}
                            >
                                {/*Header*/}

                                <div className="py-8">
                                    <h2 className="mb-4 text-xl font-bold lg:text-3xl">
                                        {page.title}
                                    </h2>

                                    <div className="mb-6 text-sm">
                                        <p>
                                            By{` `}
                                            <span className="font-semibold">
                                                {page.author.name}
                                            </span>{" "}
                                            - Published on{" "}
                                            <span>
                                                {moment(page.created_at).format(
                                                    "MMMM Do YYYY, h:mm A",
                                                )}
                                            </span>
                                        </p>
                                    </div>

                                    <div className="min-w-full prose text-onSurface">
                                        {page.attachments.map(
                                            (
                                                attachment: any,
                                                index: number,
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
                                            },
                                        )}

                                        <p>{page.summery}</p>

                                        <div
                                            className=""
                                            dangerouslySetInnerHTML={{
                                                __html: page.body,
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
