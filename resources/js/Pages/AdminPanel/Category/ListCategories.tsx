import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { Bounce, toast } from "react-toastify";
import Pagination from "../../../Components/Pagination";

export default function ListCategories({ auth, response, flash }: any) {
    const deleteCategory = (id: number) => {
        if (confirm("Are you sure you want to delete this category?")) {
            router.delete(route("categories.destroy", id));
        }
    };

    const updateCategoryStatus = (id: number, status: string) => {
        if (confirm(`Are you sure you want to ${status} this category?`)) {
            router.put(route("categories.updateStatus", id));
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
            <Head title="Categories" />
            <div className="p-2 lg:p-4">
                <div className="w-full">
                    <div className="overflow-hidden shadow bg-surface text-onSurface">
                        <div className="w-full p-4 space-y-2 lg:p-10">
                            <h2 className="text-2xl font-bold lg:text-4xl">
                                Categories
                            </h2>
                            <div className="flex items-end justify-end">
                                {(auth.user?.id === 1 ||
                                    auth.user?.id === 2) && (
                                    <div className="flex gap-2">
                                        <Link
                                            className="bg-primary text-onPrimary hover:bg-primaryVariant disabled:bg-disabled hover:shadow-md transition-all duration-300 shadow-sm rounded py-1.5 px-1.5 md:px-4 hover:cursor-pointer"
                                            href={route("categories.create")}
                                        >
                                            <span className="hidden md:block">
                                                Create Category
                                            </span>
                                            <span className="inline-block md:hidden">
                                                <i className="fa-solid fa-newspaper"></i>
                                            </span>
                                        </Link>
                                    </div>
                                )}
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
                                                            Name EN
                                                        </div>
                                                    </th>
                                                    <th className="p-2 transition-colors cursor-pointer hover:bg-blue-gray-50">
                                                        <div className="flex items-center justify-between gap-2 font-bold leading-none">
                                                            Name BN
                                                        </div>
                                                    </th>
                                                    <th className="p-2 transition-colors cursor-pointer hover:bg-blue-gray-50">
                                                        <div className="flex items-center justify-between gap-2 font-bold leading-none">
                                                            Order
                                                        </div>
                                                    </th>
                                                    <th className="p-2 transition-colors cursor-pointer hover:bg-blue-gray-50">
                                                        <div className="flex items-center justify-between gap-2 font-bold leading-none">
                                                            Show in Menu
                                                        </div>
                                                    </th>
                                                    <th className="p-2 transition-colors cursor-pointer hover:bg-blue-gray-50">
                                                        <div className="flex items-center justify-between gap-2 font-bold leading-none">
                                                            Status
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
                                                            category: any,
                                                            index: number,
                                                        ) => {
                                                            return (
                                                                <tr
                                                                    key={
                                                                        category.id
                                                                    }
                                                                    className="flex flex-col flex-wrap w-full border border-b divide-x divide-borderColor border-borderColor even:bg-background even:text-onBackground text-onSurface md:table-row"
                                                                >
                                                                    <td className="px-2">
                                                                        <label className="md:hidden">
                                                                            Id
                                                                        </label>
                                                                        <p className="font-semibold md:font-normal">
                                                                            {
                                                                                category.id
                                                                            }
                                                                        </p>
                                                                    </td>

                                                                    <td className="px-2">
                                                                        <label className="md:hidden">
                                                                            Name
                                                                            EN
                                                                        </label>
                                                                        <p className="font-semibold md:font-normal">
                                                                            {
                                                                                category.name
                                                                            }
                                                                        </p>
                                                                    </td>

                                                                    <td className="px-2">
                                                                        <label className="md:hidden">
                                                                            Name
                                                                            BN
                                                                        </label>
                                                                        <p className="font-semibold md:font-normal">
                                                                            {
                                                                                category.name_bn
                                                                            }
                                                                        </p>
                                                                    </td>

                                                                    <td className="px-2">
                                                                        <label className="md:hidden">
                                                                            Order
                                                                        </label>
                                                                        <p className="font-semibold md:font-normal">
                                                                            {
                                                                                category.order
                                                                            }
                                                                        </p>
                                                                    </td>

                                                                    <td className="px-2">
                                                                        <label className="md:hidden">
                                                                            Show
                                                                            In
                                                                            Menu
                                                                        </label>
                                                                        <p className="font-semibold md:font-normal">
                                                                            {category.show_in_menu ==
                                                                            0
                                                                                ? "No"
                                                                                : "Yes"}
                                                                        </p>
                                                                    </td>

                                                                    <td className="px-2 ">
                                                                        <label className="md:hidden">
                                                                            Status
                                                                        </label>

                                                                        {category.status ===
                                                                        "Published" ? (
                                                                            <div className="flex flex-wrap">
                                                                                <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                                                                                    {
                                                                                        category.status
                                                                                    }
                                                                                </span>
                                                                            </div>
                                                                        ) : (
                                                                            <div className="flex flex-wrap">
                                                                                <span className="bg-orange-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-orange-900 dark:text-orange-300">
                                                                                    {
                                                                                        category.status
                                                                                    }
                                                                                </span>
                                                                            </div>
                                                                        )}
                                                                    </td>
                                                                    <td className="px-2 ">
                                                                        <div className="">
                                                                            <label className="md:hidden">
                                                                                Actions
                                                                            </label>
                                                                            <div className="flex gap-1">
                                                                                <Link
                                                                                    className="p-1 rounded hover:text-secondary hover:scale-110 group"
                                                                                    href={route(
                                                                                        "categories.edit",
                                                                                        category.id,
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
                                                                                               deleteCategory(
                                                                                            category.id,
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
                                                                                        updateCategoryStatus(
                                                                                            category.id,
                                                                                            category.status ===
                                                                                                "Published"
                                                                                                ? "draft"
                                                                                                : "publish",
                                                                                        )
                                                                                    }
                                                                                >
                                                                                    <span className="absolute top-0 right-0 hidden px-1 -mt-6 text-orange-100 rounded shadow-lg group-hover:block bg-neutral-700">
                                                                                        {category.status ===
                                                                                        "Published"
                                                                                            ? "Draft"
                                                                                            : "Publish"}
                                                                                    </span>
                                                                                    {category.status ===
                                                                                    "Published" ? (
                                                                                        <i className="fa-solid fa-cloud-arrow-down"></i>
                                                                                    ) : (
                                                                                        <i className="fa-solid fa-cloud-arrow-up"></i>
                                                                                    )}
                                                                                </button>
                                                                            </div>
                                                                        </div>
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
