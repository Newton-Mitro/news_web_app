import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link} from '@inertiajs/react';
import {PageProps} from '@/types';

export default function ListNewsArticles({auth}: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard"/>
            <div className="p-2 lg:p-4">
                <div className="w-full">
                    <div className="bg-surface text-onSurface shadow-sm overflow-hidden">
                        <div className="w-full space-y-2 p-4">
                            <h2 className="text-xl">All Pages</h2>
                            <div
                                className={`h-[calc(100vh-215px)] flex flex-col overflow-auto relative`}
                            >
                                <div className="flex-1 space-y-2">
                                    {/*Header*/}
                                    <div className="">
                                        <div className="flex gap-2">
                                            <Link
                                                className="bg-primary text-onPrimary hover:bg-primaryVariant disabled:bg-disabled hover:shadow-md transition-all duration-300 shadow-sm rounded py-1.5 px-1.5 md:px-4 hover:cursor-pointer"
                                                href={route('news-article.create')}                                            >
                                                <span className="md:block hidden">Create Page</span>
                                                <span className="md:hidden inline-block"><i
                                                    className="fa-solid fa-file-circle-plus"></i></span>
                                            </Link>

                                            <div className="flex gap-2">
                                                <button
                                                    className="bg-primary text-onPrimary hover:bg-primaryVariant disabled:bg-disabled hover:shadow-md transition-all duration-300 shadow-sm rounded py-1.5 px-1.5 md:px-4 hover:cursor-pointer"
                                                >
                                                    <span className="md:block hidden">Export CSV</span>
                                                    <span className="md:hidden inline-block"> <i
                                                        className="fa-solid fa-file-csv"></i></span>

                                                </button>
                                            </div>
                                        </div>
                                        <div className="flex items-center my-1.5 gap-2 justify-end">
                                            <div className="flex gap-10 items-center">
                                                <div className="flex items-center justify-end ">
                                                    <input
                                                        type="text"
                                                        className="w-full md:w-80 border border-borderColor focus:border-borderColor rounded-sm py-1 disabled:bg-disabled bg-transparent shadow-sm focus:ring focus:ring-borderColor focus:ring-opacity-20 text-onSurface"
                                                        onChange={(e) => {
                                                        }}
                                                    />
                                                    <button
                                                        className="text-onSecondary border border-borderColor disabled:bg-disabled hover:bg-secondaryVariant rounded-r bg-secondary px-2 py-1"
                                                    >
                                                        <i className="fa-solid fa-magnifying-glass"></i>
                                                    </button>
                                                    <button
                                                        className="absolute hidden top-1  hover:bg-slate-800 rounded-r -right-8 bg-accent px-2 py-1">
                                                        <i className="fa-regular fa-circle-xmark"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*Table*/}
                                    <div
                                        className={`h-[calc(100vh-345px)] md:h-[calc(100vh-350px)] overflow-auto border border-b border-borderColor`}
                                    >
                                        <table
                                            className="whitespace-no-wrap relative w-full table-auto border-collapse">
                                            <thead className="w-full bg-secondary/10">
                                            <tr className="sticky -top-1 h-10 hidden w-full shadow-sm md:table-row bg-accent divide-x divide-borderColor">
                                                <th className="cursor-pointer p-2 transition-colors hover:bg-blue-gray-50">
                                                    <div
                                                        color="blue-gray"
                                                        className="flex items-center justify-between gap-2 font-normal leading-none"
                                                    >
                                                        Id
                                                    </div>
                                                </th>
                                                <th className="cursor-pointer p-2 transition-colors hover:bg-blue-gray-50">
                                                    <div
                                                        color="blue-gray"
                                                        className="flex items-center justify-between gap-2 font-normal leading-none"
                                                    >
                                                        Slug
                                                    </div>
                                                </th>
                                                <th className="cursor-pointer  p-2 transition-colors hover:bg-blue-gray-50">
                                                    <div
                                                        color="blue-gray"
                                                        className="flex items-center justify-between gap-2 font-normal leading-none"
                                                    >
                                                        Title
                                                    </div>
                                                </th>

                                                <th className="cursor-pointer  p-2 transition-colors hover:bg-blue-gray-50">
                                                    <div
                                                        color="blue-gray"
                                                        className="flex items-center justify-between gap-2 font-normal leading-none"
                                                    >
                                                        Status
                                                    </div>
                                                </th>
                                                <th className="cursor-pointer  p-2 transition-colors hover:bg-blue-gray-50">
                                                    <div
                                                        color="blue-gray"
                                                        className="flex items-center justify-between gap-2 font-normal leading-none"
                                                    >
                                                        Actions
                                                    </div>
                                                </th>
                                            </tr>
                                            </thead>

                                            <tbody className="flex-1 md:flex-none space-y-6">
                                            <tr
                                                className="flex w-full flex-col flex-wrap divide-x divide-borderColor border border-b border-borderColor even:bg-secondary/50 md:table-row"
                                            >
                                                <td className="px-2">
                                                    <label className="md:hidden">Id</label>
                                                    <p className="font-semibold md:font-normal">
                                                        id
                                                    </p>
                                                </td>
                                                <td className=" px-2">
                                                    <label className="md:hidden">Slug</label>
                                                    <p className="font-semibold md:font-normal">
                                                        slug
                                                    </p>
                                                </td>
                                                <td className=" px-2">
                                                    <label className="md:hidden">Title</label>
                                                    <p className="font-semibold md:font-normal">
                                                        title
                                                    </p>
                                                </td>

                                                <td className=" px-2">
                                                    <label className="md:hidden">Status</label>

                                                    <div className="flex flex-wrap">
                                                        <span
                                                            className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                                                            Published
                              </span>
                                                    </div>
                                                </td>
                                                <td className=" px-2">
                                                    <label className="md:hidden">Actions</label>
                                                    <div className="flex gap-1">
                                                        <Link
                                                            className="rounded hover:text-secondary hover:scale-110 p-1 group"
                                                            href={route('news-article.show',1)}
                                                        >
                              <span
                                  className="group-hover:block absolute top-0 right-0 hidden rounded shadow-lg px-1 -mt-6  bg-neutral-700 text-orange-100">
                                View
                              </span>
                                                            <i className="fa-solid fa-eye"></i>
                                                        </Link>
                                                        <Link
                                                            className="rounded hover:text-secondary hover:scale-110 p-1 group"
                                                            onClick={() => {
                                                            }}
                                                            href={route('news-article.edit',1)}
                                                        >
                              <span
                                  className="group-hover:block absolute top-0 right-0 hidden rounded shadow-lg px-1 -mt-6  bg-neutral-700 text-orange-100">
                                Edit
                              </span>
                                                            <i className="fa-solid fa-pen-to-square"></i>
                                                        </Link>
                                                        <Link
                                                            className="rounded hover:text-secondary hover:scale-110 p-1 group relative"
                                                            href={route('news-article.destroy',1)}
                                                            onClick={() => {
                                                            }}
                                                        >
                              <span
                                  className="group-hover:block absolute top-0 right-0 hidden rounded shadow-lg px-1 -mt-6  bg-neutral-700 text-orange-100">
                                Delete
                              </span>
                                                            <i className="fa-solid fa-trash-can"></i>
                                                        </Link>
                                                            <Link
                                                                className="rounded hover:text-secondary hover:scale-110 p-1 group"
                                                                href={route('news-article.show',1)}
                                                                onClick={() => {
                                                                }}
                                                            >
                                                          <span
                                                              className="group-hover:block absolute top-0 right-0 hidden rounded shadow-lg px-1 -mt-6  bg-neutral-700 text-orange-100">
                                                            Draft
                                                          </span>
                                                                <i className="fa-solid fa-cloud-arrow-up"></i>
                                                            </Link>
                                                    </div>
                                                </td>
                                            </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                    {/*Pagination*/}
                                    <div className="mt-auto flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <select
                                                className="py-0.5 w-20 bg-transparent focus:border-borderColor border border-borderColor shadow-sm focus:ring focus:ring-primary/10"
                                                name="limit"
                                                id="limit"
                                                value={10}
                                                onChange={(e) => {
                                                }}
                                            >
                                                <option className="even:bg-surface odd:bg-background" value={10}>
                                                    10
                                                </option>
                                                <option className="even:bg-surface odd:bg-background" value={50}>
                                                    50
                                                </option>
                                                <option className="even:bg-surface odd:bg-background" value={100}>
                                                    100
                                                </option>
                                                <option className="even:bg-surface odd:bg-background" value={500}>
                                                    500
                                                </option>
                                                <option className="even:bg-surface odd:bg-background" value={1000}>
                                                    1000
                                                </option>
                                            </select>
                                            <div className="hidden md:block">
                                                {`showing 1 to 10 out of 100 records`}
                                            </div>
                                        </div>
                                        <nav
                                            className="flex flex-row flex-nowrap justify-between md:justify-center items-center"
                                            aria-label="Pagination"
                                        >
                                            <button
                                                type="button"
                                                className="hidden md:flex w-8 h-8 mr-1 justify-center bg-primary text-onPrimary items-center rounded-full border border-borderColor disabled:bg-disabledColor hover:bg-primaryVariant"
                                                title="First Page"
                                                onClick={() => {
                                                }}
                                            >
                                                <span className="sr-only">First Page</span>
                                                <i className="fa-solid fa-angles-left"></i>
                                            </button>
                                            <button
                                                type="button"
                                                className="flex w-8 h-8 mr-1 justify-center items-center bg-primary text-onPrimary hover:bg-primaryVariant disabled:bg-disabledColor rounded-full border border-borderColor"
                                                title="Previous Page"
                                                onClick={() => {
                                                }}
                                            >
                                                <span className="sr-only">Previous Page</span>
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
                                                className="flex w-8 h-8 mr-1 justify-center items-center bg-primary text-onPrimary hover:bg-primaryVariant disabled:bg-disabledColor rounded-full border border-borderColor hover:border-gray-300"
                                                type="button"
                                                title="Next Page"
                                                onClick={() => {
                                                }}
                                            >
                                                <span className="sr-only">Next Page</span>
                                                <i className="fa-solid fa-angle-right"></i>
                                            </button>
                                            <button
                                                type="button"
                                                className="hidden md:flex w-8 h-8 mr-1 justify-center items-center bg-primary text-onPrimary hover:bg-primaryVariant disabled:bg-disabledColor rounded-full border border-borderColor hover:border-gray-300"
                                                title="Last Page"
                                                onClick={() => {
                                                }}
                                            >
                                                <span className="sr-only">Last Page</span>
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
