import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { useState } from "react";
import { Bounce, toast } from "react-toastify";

export default function EditCategory({ auth, category, flash }: any) {
    const [formData, setFormData] = useState<{
        title: any;
        slug: any;
        status: any;
    }>({
        title: category.title || "",
        slug: category.slug || "",
        status: category.status || "Draft",
    });

    const [errors, setErrors] = useState<any>(null);

    const handleInputChange = (fieldName: string, value: any) => {
        setFormData({
            ...formData,
            [fieldName]: value,
        });
    };

    const prepareFormData = () => {
        const formPayload = new FormData();

        Object.entries(formData).forEach(([key, value]) => {
            console.log(key, value);
            formPayload.append(key, value);
        });

        return formPayload;
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const formPayload = prepareFormData();

        router.post(route("categories.update", category.id), formPayload, {
            onError: (newErrors) => {
                console.error("Errors:", newErrors);
                setErrors(newErrors);
            },
            onSuccess: (message) => {
                toast("Category added successfully.", {
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

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Edit Category" />
            <div className="p-2 lg:p-4">
                <div className="w-full">
                    <div className="overflow-hidden shadow bg-surface text-onSurface">
                        <div className="w-full p-4 space-y-2 lg:p-10">
                            <h2 className="text-2xl font-bold lg:text-4xl">
                                Edit Category
                            </h2>
                            {/*Header*/}
                            <div className="flex items-end justify-end">
                                <div className="flex gap-2">
                                    <Link
                                        className="bg-primary text-onPrimary hover:bg-primaryVariant disabled:bg-disabled hover:shadow-md transition-all duration-300 shadow-sm rounded py-1.5 px-1.5 md:px-4 hover:cursor-pointer"
                                        href={route("categories.index")}
                                    >
                                        <span className="hidden md:block">
                                            Categories
                                        </span>
                                        <span className="inline-block md:hidden">
                                            <i className="fa-solid fa-rectangle-list"></i>
                                        </span>
                                    </Link>

                                    <Link
                                        className="bg-primary text-onPrimary hover:bg-primaryVariant disabled:bg-disabled hover:shadow-md transition-all duration-300 shadow-sm rounded py-1.5 px-1.5 md:px-4 hover:cursor-pointer"
                                        href={route(
                                            "categories.show",
                                            category.id
                                        )}
                                    >
                                        <span className="hidden md:block">
                                            View Category
                                        </span>
                                        <span className="inline-block md:hidden">
                                            <i className="fa-solid fa-eye"></i>
                                        </span>
                                    </Link>

                                    <button
                                        className="bg-primary text-onPrimary hover:bg-primaryVariant disabled:bg-disabled hover:shadow-md transition-all duration-300 shadow-sm rounded py-1.5 px-1.5 md:px-4 hover:cursor-pointer"
                                        onClick={() =>
                                            updateCategoryStatus(
                                                category.id,
                                                category.status === "Published"
                                                    ? "draft"
                                                    : "publish"
                                            )
                                        }
                                    >
                                        <span className="hidden md:block">
                                            {category.status === "Published"
                                                ? "Draft Category"
                                                : "Publish Category"}
                                        </span>
                                        <span className="inline-block md:hidden">
                                            {category.status === "Published" ? (
                                                <i className="fa-solid fa-cloud-arrow-down"></i>
                                            ) : (
                                                <i className="fa-solid fa-cloud-arrow-up"></i>
                                            )}
                                        </span>
                                    </button>

                                    <button
                                        className="bg-primary text-onPrimary hover:bg-primaryVariant disabled:bg-disabled hover:shadow-md transition-all duration-300 shadow-sm rounded py-1.5 px-1.5 md:px-4 hover:cursor-pointer"
                                        onClick={() =>
                                            deleteCategory(category.id)
                                        }
                                    >
                                        <span className="hidden md:block">
                                            Delete Category
                                        </span>
                                        <span className="inline-block md:hidden">
                                            <i className="fa-solid fa-trash-can"></i>
                                        </span>
                                    </button>
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
                                                    htmlFor="title"
                                                    className="block font-semibold "
                                                >
                                                    Title
                                                </label>
                                                <input
                                                    type="text"
                                                    name="title"
                                                    id="title"
                                                    className="w-full py-1 border rounded-sm bg-background border-borderColor focus:border-borderColor disabled:bg-disabled focus:ring focus:ring-borderColor focus:ring-opacity-20 text-onSurface"
                                                    value={formData.title}
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
                                                {errors?.title && (
                                                    <div className="text-sm text-error">
                                                        {errors?.title}
                                                    </div>
                                                )}
                                            </div>

                                            <div className="w-full">
                                                <label
                                                    htmlFor="slug"
                                                    className="block font-semibold "
                                                >
                                                    Slug
                                                </label>
                                                <input
                                                    type="text"
                                                    name="slug"
                                                    id="slug"
                                                    className="w-full py-1 border rounded-sm bg-background border-borderColor focus:border-borderColor disabled:bg-disabled focus:ring focus:ring-borderColor focus:ring-opacity-20 text-onSurface"
                                                    value={formData.slug}
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
                                                {errors?.slug && (
                                                    <div className="text-sm text-error">
                                                        {errors?.slug}
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
                                                    value={formData.status}
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
                                            className="px-4 py-2 font-semibold rounded-md text-onSecondary bg-secondary hover:bg-secondaryVariant"
                                        >
                                            Update Category
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
