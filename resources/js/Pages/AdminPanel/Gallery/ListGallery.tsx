import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import moment from "moment";
import { Bounce, toast } from "react-toastify";
import Pagination from "../../../Components/Pagination";

export default function ListPages({ auth, response, flash }: any) {
    console.log(response);
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
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });

    const handleRecordChange = (page: number, record_per_page: number) => {
        const currentUrl = new URL(window.location.href);
        currentUrl.searchParams.set(
            "record_per_page",
            record_per_page.toString(),
        );
        currentUrl.searchParams.set("page", page.toString());
        window.location.href = currentUrl.toString();
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
            <Head title="Gallery" />
            <div className="p-2 lg:p-4">
                <div className="w-full">
                    <div className="overflow-hidden shadow bg-surface text-onSurface">
                        <div className="w-full p-4 space-y-2 lg:p-10">
                            <h2 className="text-2xl font-bold lg:text-4xl">
                                Gallery
                            </h2>
                            <div className="flex items-end justify-end">
                                <div className="flex gap-2">
                                    <Link
                                        className="bg-primary text-onPrimary hover:bg-primaryVariant disabled:bg-disabled hover:shadow-md transition-all duration-300 shadow-sm rounded py-1.5 px-1.5 md:px-4 hover:cursor-pointer"
                                        href={route("gallery.create")}
                                    >
                                        <span className="hidden md:block">
                                            Create Page
                                        </span>
                                        <span className="inline-block md:hidden">
                                            <i className="fa-solid fa-newspaper"></i>
                                        </span>
                                    </Link>
                                </div>
                            </div>

                            <div
                                className={`h-[calc(100vh-250px)] md:h-[calc(100vh-318px)] flex flex-col overflow-auto relative`}
                            >
                                <div className="flex-1 space-y-2">
                                    {/*Header*/}
                                    <div className="">
                                        <div className="flex items-center my-1.5 gap-2 justify-end">
                                            <div className="flex items-center gap-10">
                                                <div className="flex items-center justify-end ">
                                                    <input
                                                        type="text"
                                                        className="w-full py-1 border rounded-sm bg-background md:w-80 border-borderColor focus:border-borderColor disabled:bg-disabled focus:ring focus:ring-borderColor focus:ring-opacity-20 text-onSurface"
                                                        onChange={(e) => {}}
                                                    />
                                                    <button className="px-2 py-1 border rounded-r text-onSecondary border-borderColor disabled:bg-disabled hover:bg-secondaryVariant bg-secondary">
                                                        <i className="fa-solid fa-magnifying-glass"></i>
                                                    </button>
                                                    <button className="absolute hidden px-2 py-1 rounded-r top-1 hover:bg-slate-800 -right-8 bg-accent">
                                                        <i className="fa-regular fa-circle-xmark"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*Table*/}
                                    <div
                                        className={`h-[calc(100vh-345px)] md:h-[calc(100vh-408px)] overflow-auto border border-b border-borderColor`}
                                    >
                                        <table className="relative w-full whitespace-no-wrap border-collapse table-auto">
                                            <thead className="sticky top-0 w-full shadow bg-background">
                                                <tr className="sticky hidden w-full h-10 divide-x shadow-sm -top-1 md:table-row bg-accent divide-borderColor">
                                                    <th className="p-2 transition-colors cursor-pointer hover:bg-blue-gray-50">
                                                        <div className="flex items-center justify-between gap-2 font-bold leading-none">
                                                            Id
                                                        </div>
                                                    </th>

                                                    <th className="p-2 transition-colors cursor-pointer hover:bg-blue-gray-50">
                                                        <div className="flex items-center justify-between gap-2 font-bold leading-none">
                                                            Title
                                                        </div>
                                                    </th>
                                                    <th className="p-2 transition-colors cursor-pointer hover:bg-blue-gray-50">
                                                        <div className="flex items-center justify-between gap-2 font-bold leading-none">
                                                            Slug
                                                        </div>
                                                    </th>

                                                    <th className="p-2 transition-colors cursor-pointer hover:bg-blue-gray-50">
                                                        <div className="flex items-center justify-between gap-2 font-bold leading-none">
                                                            Actions
                                                        </div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="flex-1 space-y-6 md:flex-none">
                                                {response?.data &&
                                                    response?.data.map(
                                                        (
                                                            page: any,
                                                            index: number,
                                                        ) => {
                                                            return (
                                                                <tr
                                                                    key={
                                                                        page.id
                                                                    }
                                                                    className="flex flex-col flex-wrap w-full border border-b divide-x divide-borderColor border-borderColor even:bg-background even:text-onBackground text-onSurface md:table-row"
                                                                >
                                                                    <td className="px-2">
                                                                        <label className="md:hidden">
                                                                            Id
                                                                        </label>
                                                                        <p className="font-semibold md:font-normal">
                                                                            {
                                                                                page.id
                                                                            }
                                                                        </p>
                                                                    </td>

                                                                    <td className="px-2 ">
                                                                        <label className="md:hidden">
                                                                            Title
                                                                        </label>
                                                                        <p className="font-semibold md:font-normal">
                                                                            {
                                                                                page.title
                                                                            }
                                                                        </p>
                                                                    </td>
                                                                    <td className="px-2 ">
                                                                        <label className="md:hidden">
                                                                            Slug
                                                                        </label>
                                                                        <p className="font-semibold md:font-normal">
                                                                            {
                                                                                page.slug
                                                                            }
                                                                        </p>
                                                                    </td>

                                                                    <td className="px-2 ">
                                                                        {(auth
                                                                            .user
                                                                            ?.id ===
                                                                            1 ||
                                                                            auth
                                                                                .user
                                                                                ?.id ===
                                                                                2) && (
                                                                            <div className="">
                                                                                <label className="md:hidden">
                                                                                    Actions
                                                                                </label>
                                                                                <div className="flex gap-1">
                                                                                    <Link
                                                                                        className="p-1 rounded hover:text-secondary hover:scale-110 group"
                                                                                        href={route(
                                                                                            "gallery.show",
                                                                                            page.id,
                                                                                        )}
                                                                                    >
                                                                                        <span className="absolute top-0 right-0 hidden px-1 -mt-6 text-orange-100 rounded shadow-lg group-hover:block bg-neutral-700">
                                                                                            View
                                                                                        </span>
                                                                                        <i className="fa-solid fa-eye"></i>
                                                                                    </Link>
                                                                                    <Link
                                                                                        className="p-1 rounded hover:text-secondary hover:scale-110 group"
                                                                                        href={route(
                                                                                            "gallery.edit",
                                                                                            page.id,
                                                                                        )}
                                                                                    >
                                                                                        <span className="absolute top-0 right-0 hidden px-1 -mt-6 text-orange-100 rounded shadow-lg group-hover:block bg-neutral-700">
                                                                                            Edit
                                                                                        </span>
                                                                                        <i className="fa-solid fa-pen-to-square"></i>
                                                                                    </Link>
                                                                                    {auth
                                                                                        .user
                                                                                        ?.role ===
                                                                                        "ADMIN" && (
                                                                                        <button
                                                                                            type="button"
                                                                                            className="relative p-1 rounded hover:text-secondary hover:scale-110 group"
                                                                                            onClick={() =>
                                                                                                deletePage(
                                                                                                    page.id,
                                                                                                )
                                                                                            }
                                                                                        >
                                                                                            <span className="absolute top-0 right-0 hidden px-1 -mt-6 text-orange-100 rounded shadow-lg group-hover:block bg-neutral-700 whitespace-nowrap">
                                                                                                Delete
                                                                                            </span>

                                                                                            <i className="fa-solid fa-trash-can"></i>
                                                                                        </button>
                                                                                    )}

                                                                                    <button
                                                                                        className="p-1 rounded hover:text-secondary hover:scale-110 group"
                                                                                        onClick={() =>
                                                                                            updatePageStatus(
                                                                                                page.id,
                                                                                                page.status ===
                                                                                                    "Published"
                                                                                                    ? "draft"
                                                                                                    : "publish",
                                                                                            )
                                                                                        }
                                                                                    >
                                                                                        {/* <span className="absolute top-0 right-0 hidden px-1 -mt-6 text-orange-100 rounded shadow-lg group-hover:block bg-neutral-700">
                                                                                            {page.status ===
                                                                                            "Published"
                                                                                                ? "Draft"
                                                                                                : "Publish"}
                                                                                        </span>
                                                                                        {page.status ===
                                                                                        "Published" ? (
                                                                                            <i className="fa-solid fa-cloud-arrow-down"></i>
                                                                                        ) : (
                                                                                            <i className="fa-solid fa-cloud-arrow-up"></i>
                                                                                        )} */}
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        )}
                                                                    </td>
                                                                </tr>
                                                            );
                                                        },
                                                    )}
                                            </tbody>
                                        </table>
                                    </div>
                                    {/*Pagination*/}
                                    <Pagination
                                        current_page={response.current_page}
                                        last_page={response.last_page}
                                        first_page_url={response.first_page_url}
                                        last_page_url={response.last_page_url}
                                        links={response.links}
                                        record_per_page={response.per_page}
                                        onPageChange={function (
                                            page: number,
                                            record_per_page: number,
                                        ): void {
                                            handleRecordChange(
                                                page,
                                                record_per_page,
                                            );
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
