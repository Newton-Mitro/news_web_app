import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { useState } from "react";
import { Bounce, toast } from "react-toastify";

export default function ChangePassword({ auth, user, flash }: any) {
    const [formData, setFormData] = useState<{
        name: any;
        email: any;
        current_password: string;
        password: string;
        password_confirmation: string;
    }>({
        name: user.name || "",
        email: user.email || "",
        current_password: "",
        password: "",
        password_confirmation: "",
    });

    const [errors, setErrors] = useState<any>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (fieldName: string, value: any) => {
        setFormData({
            ...formData,
            [fieldName]: value,
        });
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setErrors(null);
        setIsSubmitting(true);

        console.log("click")

        router.post(route("users.updatePassword", user.id), formData, {
            onError: (newErrors) => {
                setErrors(newErrors);
                setIsSubmitting(false);
            },
            onSuccess: () => {
                toast.success("Password updated successfully!", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    transition: Bounce,
                });

                // Reset password fields after success
                setFormData({
                    name: user.name || "",
                    email: user.email || "",
                    current_password: "",
                    password: "",
                    password_confirmation: "",
                });

                setIsSubmitting(false);
            },
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Change Password
                </h2>
            }
        >
            <Head title="Edit User" />
            <div className="p-2 lg:p-4">
                <div className="w-full">
                    <div className="overflow-hidden shadow bg-surface text-onSurface">
                        <div className="w-full p-4 space-y-2 lg:p-10">
                            <h2 className="text-2xl font-bold lg:text-4xl">
                                Change Password
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
                                    </div>
                                )}
                            </div>
                            <div className="">
                                <div className="py-8">
                                    <h2 className="text-xl font-bold lg:text-3xl">
                                        {user.name}
                                    </h2>

                                    <div className="mb-6 text-sm">
                                        {user.email}
                                    </div>
                                </div>
                                <form
                                    onSubmit={handleFormSubmit}
                                    className="w-full"
                                >
                                    <div className="">
                                        <div className="grid w-full grid-cols-1 gap-6 mb-4 lg:w-8/12 md:grid-cols-2 lg:grid-cols-3">
                                            <div className="">
                                                <label
                                                    htmlFor="current_password"
                                                    className="block font-semibold "
                                                >
                                                    Current Password
                                                </label>
                                                <input
                                                    type="password"
                                                    name="current_password"
                                                    id="current_password"
                                                    className="w-full py-1 border rounded-sm bg-background border-borderColor focus:border-borderColor disabled:bg-disabled focus:ring focus:ring-borderColor focus:ring-opacity-20 text-onSurface"
                                                    value={
                                                        formData.current_password
                                                    }
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
                                                {errors?.current_password && (
                                                    <div className="text-sm text-error">
                                                        {
                                                            errors?.current_password
                                                        }
                                                    </div>
                                                )}
                                            </div>

                                            <div className="w-full">
                                                <label
                                                    htmlFor="password"
                                                    className="block font-semibold "
                                                >
                                                    Password
                                                </label>
                                                <input
                                                    type="password"
                                                    name="password"
                                                    id="password"
                                                    className="w-full py-1 border rounded-sm bg-background border-borderColor focus:border-borderColor disabled:bg-disabled focus:ring focus:ring-borderColor focus:ring-opacity-20 text-onSurface"
                                                    value={formData.password}
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
                                                {errors?.password && (
                                                    <div className="text-sm text-error">
                                                        {errors?.password}
                                                    </div>
                                                )}
                                            </div>

                                            <div className="w-full">
                                                <label
                                                    htmlFor="password_confirmation"
                                                    className="block font-semibold "
                                                >
                                                    Confirm Password
                                                </label>
                                                <input
                                                    type="password"
                                                    name="password_confirmation"
                                                    id="password_confirmation"
                                                    className="w-full py-1 border rounded-sm bg-background border-borderColor focus:border-borderColor disabled:bg-disabled focus:ring focus:ring-borderColor focus:ring-opacity-20 text-onSurface"
                                                    value={
                                                        formData.password_confirmation
                                                    }
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
                                                {errors?.password_confirmation && (
                                                    <div className="text-sm text-error">
                                                        {
                                                            errors?.password_confirmation
                                                        }
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    

                                    <div className="mt-6">
                                    <button
                                type="submit"
                                className={`px-4 py-2 font-semibold rounded-md text-onSecondary bg-secondary hover:bg-secondaryVariant ${
                                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                                }`}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Updating..." : "Update Password"}
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
