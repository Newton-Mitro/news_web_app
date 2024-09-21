import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function ListArticles({ auth, response }: any) {
    console.log(response);

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
                                All Pages
                            </h2>
                            <div className="flex items-end justify-end">
                                <div className="flex gap-2">
                                    <Link
                                        className="bg-primary text-onPrimary hover:bg-primaryVariant disabled:bg-disabled hover:shadow-md transition-all duration-300 shadow-sm rounded py-1.5 px-1.5 md:px-4 hover:cursor-pointer"
                                        href={route("articles.create")}
                                    >
                                        <span className="hidden md:block">
                                            Create Page
                                        </span>
                                        <span className="inline-block md:hidden">
                                            <i className="fa-solid fa-file-circle-plus"></i>
                                        </span>
                                    </Link>

                                    <div className="flex gap-2">
                                        <button className="bg-primary text-onPrimary hover:bg-primaryVariant disabled:bg-disabled hover:shadow-md transition-all duration-300 shadow-sm rounded py-1.5 px-1.5 md:px-4 hover:cursor-pointer">
                                            <span className="hidden md:block">
                                                Export CSV
                                            </span>
                                            <span className="inline-block md:hidden">
                                                {" "}
                                                <i className="fa-solid fa-file-csv"></i>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`h-[calc(100vh-270px)] flex flex-col overflow-auto relative`}
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
                                        className={`h-[calc(100vh-345px)] md:h-[calc(100vh-360px)] overflow-auto border border-b border-borderColor`}
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
                                                            Slug
                                                        </div>
                                                    </th>
                                                    <th className="p-2 transition-colors cursor-pointer hover:bg-blue-gray-50">
                                                        <div className="flex items-center justify-between gap-2 font-bold leading-none">
                                                            Title
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
                                                            article: any,
                                                            index: number
                                                        ) => {
                                                            return (
                                                                <tr className="flex flex-col flex-wrap w-full border border-b divide-x divide-borderColor border-borderColor even:bg-background md:table-row">
                                                                    <td className="px-2">
                                                                        <label className="md:hidden">
                                                                            Id
                                                                        </label>
                                                                        <p className="font-semibold md:font-normal">
                                                                            {
                                                                                article.id
                                                                            }
                                                                        </p>
                                                                    </td>
                                                                    <td className="px-2 ">
                                                                        <label className="md:hidden">
                                                                            Slug
                                                                        </label>
                                                                        <p className="font-semibold md:font-normal">
                                                                            {
                                                                                article.slug
                                                                            }
                                                                        </p>
                                                                    </td>
                                                                    <td className="px-2 ">
                                                                        <label className="md:hidden">
                                                                            Title
                                                                        </label>
                                                                        <p className="font-semibold md:font-normal">
                                                                            {
                                                                                article.title
                                                                            }
                                                                        </p>
                                                                    </td>

                                                                    <td className="px-2 ">
                                                                        <label className="md:hidden">
                                                                            Status
                                                                        </label>

                                                                        {article.status ===
                                                                        "Published" ? (
                                                                            <div className="flex flex-wrap">
                                                                                <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                                                                                    {
                                                                                        article.status
                                                                                    }
                                                                                </span>
                                                                            </div>
                                                                        ) : (
                                                                            <div className="flex flex-wrap">
                                                                                <span className="bg-orange-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-orange-900 dark:text-orange-300">
                                                                                    {
                                                                                        article.status
                                                                                    }
                                                                                </span>
                                                                            </div>
                                                                        )}
                                                                    </td>
                                                                    <td className="px-2 ">
                                                                        <label className="md:hidden">
                                                                            Actions
                                                                        </label>
                                                                        <div className="flex gap-1">
                                                                            <Link
                                                                                className="p-1 rounded hover:text-secondary hover:scale-110 group"
                                                                                href={route(
                                                                                    "articles.show",
                                                                                    article.id
                                                                                )}
                                                                            >
                                                                                <span className="absolute top-0 right-0 hidden px-1 -mt-6 text-orange-100 rounded shadow-lg group-hover:block bg-neutral-700">
                                                                                    View
                                                                                </span>
                                                                                <i className="fa-solid fa-eye"></i>
                                                                            </Link>
                                                                            <Link
                                                                                className="p-1 rounded hover:text-secondary hover:scale-110 group"
                                                                                onClick={() => {}}
                                                                                href={route(
                                                                                    "articles.edit",
                                                                                    article.id
                                                                                )}
                                                                            >
                                                                                <span className="absolute top-0 right-0 hidden px-1 -mt-6 text-orange-100 rounded shadow-lg group-hover:block bg-neutral-700">
                                                                                    Edit
                                                                                </span>
                                                                                <i className="fa-solid fa-pen-to-square"></i>
                                                                            </Link>
                                                                            <Link
                                                                                className="p-1 rounded hover:text-secondary hover:scale-110 group"
                                                                                href={route(
                                                                                    "articles.destroy",
                                                                                    article.id
                                                                                )}
                                                                                onClick={() => {}}
                                                                            >
                                                                                <span className="absolute top-0 right-0 hidden px-1 -mt-6 text-orange-100 rounded shadow-lg group-hover:block bg-neutral-700">
                                                                                    Delete
                                                                                </span>
                                                                                <i className="fa-solid fa-trash-can"></i>
                                                                            </Link>
                                                                            <Link
                                                                                className="p-1 rounded hover:text-secondary hover:scale-110 group"
                                                                                href={route(
                                                                                    "articles.show",
                                                                                    article.id
                                                                                )}
                                                                                onClick={() => {}}
                                                                            >
                                                                                <span className="absolute top-0 right-0 hidden px-1 -mt-6 text-orange-100 rounded shadow-lg group-hover:block bg-neutral-700">
                                                                                    Draft
                                                                                </span>
                                                                                <i className="fa-solid fa-cloud-arrow-up"></i>
                                                                            </Link>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            );
                                                        }
                                                    )}
                                            </tbody>
                                        </table>
                                    </div>
                                    {/*Pagination*/}
                                    <div className="flex items-center justify-between mt-auto">
                                        <div className="flex items-center gap-2">
                                            <select
                                                className="py-0.5 w-20 bg-transparent focus:border-borderColor border border-borderColor shadow-sm focus:ring focus:ring-primary/10"
                                                name="limit"
                                                id="limit"
                                                value={10}
                                                onChange={(e) => {}}
                                            >
                                                <option
                                                    className="even:bg-surface odd:bg-background"
                                                    value={10}
                                                >
                                                    10
                                                </option>
                                                <option
                                                    className="even:bg-surface odd:bg-background"
                                                    value={50}
                                                >
                                                    50
                                                </option>
                                                <option
                                                    className="even:bg-surface odd:bg-background"
                                                    value={100}
                                                >
                                                    100
                                                </option>
                                                <option
                                                    className="even:bg-surface odd:bg-background"
                                                    value={500}
                                                >
                                                    500
                                                </option>
                                                <option
                                                    className="even:bg-surface odd:bg-background"
                                                    value={1000}
                                                >
                                                    1000
                                                </option>
                                            </select>
                                            <div className="hidden md:block">
                                                {`showing 1 to 10 out of 100 records`}
                                            </div>
                                        </div>
                                        <nav
                                            className="flex flex-row items-center justify-between flex-nowrap md:justify-center"
                                            aria-label="Pagination"
                                        >
                                            <button
                                                type="button"
                                                className="items-center justify-center hidden w-8 h-8 mr-1 border rounded-full md:flex bg-primary text-onPrimary border-borderColor disabled:bg-disabledColor hover:bg-primaryVariant"
                                                title="First Page"
                                                onClick={() => {}}
                                            >
                                                <span className="sr-only">
                                                    First Page
                                                </span>
                                                <i className="fa-solid fa-angles-left"></i>
                                            </button>
                                            <button
                                                type="button"
                                                className="flex items-center justify-center w-8 h-8 mr-1 border rounded-full bg-primary text-onPrimary hover:bg-primaryVariant disabled:bg-disabledColor border-borderColor"
                                                title="Previous Page"
                                                onClick={() => {}}
                                            >
                                                <span className="sr-only">
                                                    Previous Page
                                                </span>
                                                <i className="fa-solid fa-angle-left"></i>
                                            </button>
                                            {/*{paginatePages.map((page) => {*/}
                                            {/*    if (typeof page === "number") {*/}
                                            {/*        return (*/}
                                            {/*            <button*/}
                                            {/*                key={page}*/}
                                            {/*                className={`hidden md:flex w-8 h-8 mx-1 justify-center items-center rounded-full border  hover:border-gray-300`}*/}
                                            {/*                type="button"*/}
                                            {/*                title={`page - ${page}`}*/}
                                            {/*                onClick={() => {*/}
                                            {/*                }}*/}
                                            {/*            >*/}
                                            {/*                {page}*/}
                                            {/*            </button>*/}
                                            {/*        );*/}
                                            {/*    } else {*/}
                                            {/*        return (*/}
                                            {/*            <div key={page} className="hidden md:flex">*/}
                                            {/*                {page}*/}
                                            {/*            </div>*/}
                                            {/*        );*/}
                                            {/*    }*/}
                                            {/*})}*/}

                                            <button
                                                className="flex items-center justify-center w-8 h-8 mr-1 border rounded-full bg-primary text-onPrimary hover:bg-primaryVariant disabled:bg-disabledColor border-borderColor hover:border-gray-300"
                                                type="button"
                                                title="Next Page"
                                                onClick={() => {}}
                                            >
                                                <span className="sr-only">
                                                    Next Page
                                                </span>
                                                <i className="fa-solid fa-angle-right"></i>
                                            </button>
                                            <button
                                                type="button"
                                                className="items-center justify-center hidden w-8 h-8 mr-1 border rounded-full md:flex bg-primary text-onPrimary hover:bg-primaryVariant disabled:bg-disabledColor border-borderColor hover:border-gray-300"
                                                title="Last Page"
                                                onClick={() => {}}
                                            >
                                                <span className="sr-only">
                                                    Last Page
                                                </span>
                                                <i className="fa-solid fa-angles-right"></i>
                                            </button>
                                        </nav>
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
