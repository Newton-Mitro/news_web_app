import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Pagination from "@/Components/Pagination";
import { Head, Link, router } from "@inertiajs/react";
import moment from "moment";
import { Eye, Trash2 } from "lucide-react";
import Swal from "sweetalert2";

export default function Index({ auth, visitors }: any) {
    const deleteVisitor = (id: number) => {
        Swal.fire({
            title: "Delete Visitor?",
            text: "This action cannot be undone.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#dc2626",
            cancelButtonColor: "#6b7280",
            confirmButtonText: "Delete",
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(route("visitors.destroy", id), {
                    preserveScroll: true,
                });
            }
        });
    };

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
            <Head title="Visitors" />

            <div className="p-2 lg:p-4">
                <div className="w-full">
                    <div className="overflow-hidden shadow bg-surface text-onSurface">
                        <div className="w-full p-4 space-y-2 lg:p-10">
                            <h2 className="text-2xl font-bold lg:text-4xl">
                                Visitors
                            </h2>

                            {/* Search */}
                            <div className="flex items-end justify-end">
                                <div className="flex items-center">
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        className="w-full py-1 border rounded-l-sm bg-background md:w-80 border-borderColor focus:border-borderColor focus:ring focus:ring-borderColor focus:ring-opacity-20 text-onSurface"
                                    />

                                    <button className="px-2 py-1 border rounded-r bg-secondary text-onSecondary border-borderColor hover:bg-secondaryVariant">
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </button>
                                </div>
                            </div>

                            <div className="h-[calc(100vh-250px)] md:h-[calc(100vh-318px)] flex flex-col overflow-auto">
                                <div className="flex-1 space-y-2">
                                    {/* Table */}
                                    <div className="h-[calc(100vh-345px)] md:h-[calc(100vh-408px)] overflow-auto border border-borderColor">
                                        <table className="relative w-full border-collapse table-auto">
                                            <thead className="sticky top-0 shadow bg-background">
                                                <tr className="hidden divide-x md:table-row bg-accent divide-borderColor">
                                                    <th className="p-2 text-left">
                                                        Session
                                                    </th>
                                                    <th className="p-2 text-left">
                                                        IP
                                                    </th>
                                                    <th className="p-2 text-left">
                                                        Device
                                                    </th>
                                                    <th className="p-2 text-left">
                                                        Browser
                                                    </th>
                                                    <th className="p-2 text-left">
                                                        OS
                                                    </th>
                                                    <th className="p-2 text-left">
                                                        Last Activity
                                                    </th>
                                                    <th className="p-2 text-left">
                                                        Actions
                                                    </th>
                                                </tr>
                                            </thead>

                                            <tbody className="flex-1 space-y-6 md:flex-none">
                                                {visitors.data.length > 0 ? (
                                                    visitors.data.map(
                                                        (visitor: any) => (
                                                            <tr
                                                                key={visitor.id}
                                                                className="flex flex-col w-full border border-borderColor even:bg-background md:table-row"
                                                            >
                                                                <td className="px-2 py-1">
                                                                    <label className="font-semibold md:hidden">
                                                                        Session
                                                                    </label>
                                                                    <div className="">
                                                                        <p className="break-all">
                                                                            {
                                                                                visitor.session_id
                                                                            }
                                                                        </p>
                                                                        <div className="text-xs text-gray-500 break-all">
                                                                            {
                                                                                visitor.user_agent
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </td>

                                                                <td className="px-2 py-1">
                                                                    <label className="font-semibold md:hidden">
                                                                        IP
                                                                    </label>
                                                                    <p>
                                                                        {visitor.ip_address ||
                                                                            "-"}
                                                                    </p>
                                                                </td>

                                                                <td className="px-2 py-1">
                                                                    <label className="font-semibold md:hidden">
                                                                        Device
                                                                    </label>
                                                                    <p>
                                                                        {visitor.device ||
                                                                            "-"}
                                                                    </p>
                                                                </td>

                                                                <td className="px-2 py-1">
                                                                    <label className="font-semibold md:hidden">
                                                                        Browser
                                                                    </label>
                                                                    <p>
                                                                        {visitor.browser ||
                                                                            "-"}
                                                                    </p>
                                                                </td>

                                                                <td className="px-2 py-1">
                                                                    <label className="font-semibold md:hidden">
                                                                        OS
                                                                    </label>
                                                                    <p>
                                                                        {visitor.os ||
                                                                            "-"}
                                                                    </p>
                                                                </td>

                                                                <td className="px-2 py-1">
                                                                    <label className="font-semibold md:hidden">
                                                                        Last
                                                                        Activity
                                                                    </label>
                                                                    <p>
                                                                        {moment(
                                                                            visitor.last_activity,
                                                                        ).format(
                                                                            "llll",
                                                                        )}
                                                                    </p>
                                                                </td>

                                                                <td className="px-2 py-1">
                                                                    <label className="font-semibold md:hidden">
                                                                        Actions
                                                                    </label>

                                                                    <div className="flex gap-2">
                                                                        <button
                                                                            type="button"
                                                                            onClick={() =>
                                                                                deleteVisitor(
                                                                                    visitor.id,
                                                                                )
                                                                            }
                                                                            className="p-1 transition rounded hover:text-red-600 hover:scale-110"
                                                                            title="Delete"
                                                                        >
                                                                            <Trash2 className="w-5 h-5" />
                                                                        </button>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        ),
                                                    )
                                                ) : (
                                                    <tr>
                                                        <td
                                                            colSpan={7}
                                                            className="p-8 text-center text-gray-500"
                                                        >
                                                            No visitors found.
                                                        </td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* Pagination */}
                                    <Pagination
                                        current_page={visitors.current_page}
                                        last_page={visitors.last_page}
                                        first_page_url={visitors.first_page_url}
                                        last_page_url={visitors.last_page_url}
                                        links={visitors.links}
                                        record_per_page={visitors.per_page}
                                        onPageChange={handleRecordChange}
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
