import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { useState } from "react";
import { Bounce, toast } from "react-toastify";

export default function EditUser({ auth, user, flash }: any) {
    const [formData, setFormData] = useState<{
        name: any;
        email: any;
    }>({
        name: user.name || "",
        email: user.email || "",
    });

    const [errors, setErrors] = useState<any>(null);
    const [message, setMessage] = useState<string | null>(null);

    const handleInputChange = (fieldName: string, value: any) => {
        setFormData({
            ...formData,
            [fieldName]: value,
        });
    };

    const prepareFormData = () => {
        const formPayload = new FormData();

        Object.entries(formData).forEach(([key, value]) => {
            formPayload.append(key, value);
        });

        return formPayload;
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const formPayload = prepareFormData();

        router.post(route("users.update", user.id), formPayload, {
            onError: (newErrors) => {
                console.error("Errors:", newErrors);
                setErrors(newErrors);
            },
            onSuccess: (message) => {
                toast("User updated successfully.", {
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
            },
        });
    };

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

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Edit User" />
            <div className="p-2 lg:p-4">
                <div className="w-full">
                    <div className="overflow-hidden shadow bg-surface text-onSurface">
                        <div className="w-full p-4 space-y-2 lg:p-10">
                            <h2 className="text-2xl font-bold lg:text-4xl">
                                Edit User
                            </h2>
                            {/*Header*/}
                            <div className="flex items-end justify-end">
                                {auth?.user?.id === 1 && (
                                    <div className="flex gap-2">
                                        <Link
                                            className="bg-primary text-onPrimary hover:bg-primaryVariant disabled:bg-disabled hover:shadow-md transition-all duration-300 shadow-sm rounded py-1.5 px-1.5 md:px-4 hover:cursor-pointer"
                                            href={route("users.index")}
                                        >
                                            <span className="hidden md:block">
                                                Users
                                            </span>
                                            <span className="inline-block md:hidden">
                                                <i className="fa-solid fa-rectangle-list"></i>
                                            </span>
                                        </Link>

                                        <button
                                            className="bg-primary text-onPrimary hover:bg-primaryVariant disabled:bg-disabled hover:shadow-md transition-all duration-300 shadow-sm rounded py-1.5 px-1.5 md:px-4 hover:cursor-pointer"
                                            onClick={() =>
                                                updateUserStatus(
                                                    user.id,
                                                    user.status === "Active"
                                                        ? "Inactivate"
                                                        : "Activate"
                                                )
                                            }
                                        >
                                            <span className="hidden md:block">
                                                {user.status === "Active"
                                                    ? "Inactivate"
                                                    : "Activate"}
                                            </span>
                                            <span className="inline-block md:hidden">
                                                {user.status === "Active" ? (
                                                    <i className="fa-solid fa-cloud-arrow-down"></i>
                                                ) : (
                                                    <i className="fa-solid fa-cloud-arrow-up"></i>
                                                )}
                                            </span>
                                        </button>

                                        <button
                                            className="bg-primary text-onPrimary hover:bg-primaryVariant disabled:bg-disabled hover:shadow-md transition-all duration-300 shadow-sm rounded py-1.5 px-1.5 md:px-4 hover:cursor-pointer"
                                            onClick={() => deleteUser(user.id)}
                                        >
                                            <span className="hidden md:block">
                                                Delete User
                                            </span>
                                            <span className="inline-block md:hidden">
                                                <i className="fa-solid fa-trash-can"></i>
                                            </span>
                                        </button>
                                    </div>
                                )}
                            </div>
                            <div className="">
                                <form
                                    onSubmit={handleFormSubmit}
                                    className="w-full"
                                >
                                    <div className="">
                                        <div className="grid w-full grid-cols-1 gap-6 mb-4 lg:w-8/12 md:grid-cols-2 lg:grid-cols-3">
                                            <div className="">
                                                <label
                                                    htmlFor="name"
                                                    className="block font-semibold "
                                                >
                                                    Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    className="w-full py-1 border rounded-sm bg-background border-borderColor focus:border-borderColor disabled:bg-disabled focus:ring focus:ring-borderColor focus:ring-opacity-20 text-onSurface"
                                                    value={formData.name}
                                                    onChange={(e: any) => {
                                                        const {
                                                            name,
                                                            value,
                                                            type,
                                                            checked,
                                                        } = e.target;
                                                        handleInputChange(
                                                            name,
                                                            value
                                                        );
                                                    }}
                                                />
                                                {errors?.name && (
                                                    <div className="text-sm text-error">
                                                        {errors?.name}
                                                    </div>
                                                )}
                                            </div>


                                            <div className={`w-full ${auth?.user?.id !==1 ? 'hidden' : ''}`}>
                                                <label
                                                    htmlFor="email"
                                                    className="block font-semibold "
                                                >
                                                    Email
                                                </label>
                                                <input
                                                    type="text"
                                                    name="email"
                                                    id="email"
                                                    className="w-full py-1 border rounded-sm bg-background border-borderColor focus:border-borderColor disabled:bg-disabled focus:ring focus:ring-borderColor focus:ring-opacity-20 text-onSurface"
                                                    value={formData.email}
                                                    onChange={(e: any) => {
                                                        const {
                                                            name,
                                                            value,
                                                            type,
                                                            checked,
                                                        } = e.target;
                                                        handleInputChange(
                                                            name,
                                                            value
                                                        );
                                                    }}
                                                />
                                                {errors?.email && (
                                                    <div className="text-sm text-error">
                                                        {errors?.email}
                                                    </div>
                                                )}
                                            </div>

                                            
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <button
                                            type="submit"
                                            className="px-4 py-2 font-semibold rounded-md text-onSecondary bg-secondary hover:bg-secondaryVariant"
                                        >
                                            Update User
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
