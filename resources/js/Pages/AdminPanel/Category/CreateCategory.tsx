import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { useState } from "react";
import slugify from "react-slugify";
import { toast } from "react-toastify";

export default function CreateCategory({ auth, categories }: any) {
    const [formData, setFormData] = useState<{
        name: any;
        status: any;
    }>({
        name: "",
        status: "",
    });

    const [errors, setErrors] = useState<any>(null);

    const handleInputChange = (fieldName: string, value: any) => {
        setFormData({
            ...formData,
            [fieldName]: value,
        });
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        router.post(route("categories.store"), formData, {
            onStart: () => console.log("PUT request starting..."),
            onProgress: (progress) => console.log("Progress:", progress),
            onError: (newErrors) => {
                console.error("Errors:", newErrors);
                setErrors(newErrors);
            },
            onSuccess: () => {
                console.log("Category created successfully!");
                setErrors(null);
                toast("Category created successfully.", {
                    position: "top-right",
                    autoClose: 5000,
                });
            },
        });
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
            <Head title="New Article" />
            <div className="p-2 lg:p-4">
                <div className="w-full">
                    <div className="overflow-hidden shadow bg-surface text-onSurface">
                        <div className="w-full p-4 space-y-2 lg:p-10">
                            <h2 className="text-2xl font-bold lg:text-4xl">
                                New Category
                            </h2>
                            <div className={`flex items-end justify-end`}>
                                {/*Header*/}
                                <div className="">
                                    <div className="flex gap-2">
                                        <Link
                                            className="bg-primary text-onPrimary hover:bg-primaryVariant disabled:bg-disabled hover:shadow-md transition-all duration-300  rounded py-1.5 px-1.5 md:px-4 hover:cursor-pointer"
                                            href={route("categories.index")}
                                        >
                                            <span className="hidden md:block">
                                                Categories
                                            </span>
                                            <span className="inline-block md:hidden">
                                                <i className="fa-solid fa-rectangle-list"></i>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <form
                                    onSubmit={handleFormSubmit}
                                    className="w-full"
                                >
                                    <div className="">
                                        <div className="grid w-full grid-cols-1 gap-6 mb-4 lg:w-8/12 md:grid-cols-2">
                                            <div className="">
                                                <label
                                                    htmlFor="name"
                                                    className="block font-semibold "
                                                >
                                                    Category Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    className="w-full py-1 border rounded-sm bg-background border-borderColor focus:border-borderColor disabled:bg-disabled focus:ring focus:ring-borderColor focus:ring-opacity-20 text-onSurface"
                                                    value={formData.name}
                                                    onChange={(e: any) => {
                                                        const { name, value } =
                                                            e.target;
                                                        setFormData(
                                                            (
                                                                previousState
                                                            ) => ({
                                                                ...previousState,
                                                                name: value,
                                                                slug: slugify(
                                                                    value
                                                                ),
                                                            })
                                                        );
                                                    }}
                                                />
                                                {errors?.name && (
                                                    <div className="text-sm text-error">
                                                        {errors?.name}
                                                    </div>
                                                )}
                                            </div>

                                            <div className="">
                                                <label
                                                    htmlFor="status"
                                                    className="block font-semibold "
                                                >
                                                    Status
                                                </label>
                                                <select
                                                    name="status"
                                                    id="status"
                                                    className="w-full px-2 py-1 border rounded-md bg-background border-borderColor"
                                                    onChange={(e: any) => {
                                                        const { name, value } =
                                                            e.target;
                                                        handleInputChange(
                                                            name,
                                                            value
                                                        );
                                                    }}
                                                >
                                                    <option value="" key={1}>
                                                        Select Status
                                                    </option>

                                                    <option
                                                        value="Draft"
                                                        key={2}
                                                    >
                                                        Draft
                                                    </option>
                                                    <option
                                                        value="Published"
                                                        key={3}
                                                    >
                                                        Published
                                                    </option>
                                                </select>
                                                {errors?.status && (
                                                    <div className="text-sm text-error">
                                                        {errors?.status}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <button
                                            type="submit"
                                            className="px-4 py-2 font-semibold rounded-md text-onSecondary bg-primaryVariant hover:bg-secondaryVariant"
                                        >
                                            Create Category
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
