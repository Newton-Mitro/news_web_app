import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import moment from "moment";
import { Bounce, toast } from "react-toastify";

export default function UserProfile({ auth, user, flash }: any) {
    const deleteUser = (id: number) => {
        if (confirm("Are you sure you want to delete this user?")) {
            router.delete(route("users.destroy", id));
        }
    };

    const updateUserStatus = (id: number, status: string) => {
        if (confirm(`Are you sure you want to ${status} this user?`)) {
            router.put(route("users.updateStatus", id));
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
            <Head title="View User" />
            <div className="p-2 lg:p-4">
                <div className="w-full">
                    <div className="overflow-hidden shadow bg-surface text-onSurface">
                        <div className="w-full p-4 space-y-2 lg:p-10">
                            <h2 className="text-2xl font-bold lg:text-4xl">
                                View User
                            </h2>
                            <div className="flex items-end justify-end">
                                <div className="flex gap-2">
                                    <Link
                                        className="bg-primary text-onPrimary hover:bg-primaryVariant disabled:bg-disabled hover:shadow-md transition-all duration-300 shadow-sm rounded py-1.5 px-1.5 md:px-4 hover:cursor-pointer"
                                        href={route("users.edit", user.id)}
                                    >
                                        <span className="hidden md:block">
                                            Edit Profile
                                        </span>
                                        <span className="inline-block md:hidden">
                                            <i className="fa-solid fa-pen-to-square"></i>
                                        </span>
                                    </Link>

                                    <Link
                                        className="bg-primary text-onPrimary hover:bg-primaryVariant disabled:bg-disabled hover:shadow-md transition-all duration-300 shadow-sm rounded py-1.5 px-1.5 md:px-4 hover:cursor-pointer"
                                        href={route("users.changePassword", user.id)}
                                    >
                                        <span className="hidden md:block">
                                            Change Password
                                        </span>
                                        <span className="inline-block md:hidden">
                                            <i className="fa-solid fa-pen-to-square"></i>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            <div
                                className={`flex flex-col overflow-auto relative`}
                            >
                                <div className="py-8">
                                    <h2 className="mb-4 text-xl font-bold lg:text-3xl">
                                        {user.name}
                                    </h2>

                                    <div className="mb-6 text-sm">
                                        {user.email}
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
