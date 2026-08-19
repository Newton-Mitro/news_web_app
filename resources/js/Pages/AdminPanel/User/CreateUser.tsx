import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { useState } from "react";
import ReactQuill from "react-quill";
import slugify from "react-slugify";
import { Bounce, toast } from "react-toastify";
import { formats, modules } from "../../../Utils/quill-util";

export default function CreateUser({ auth }: any) {
    const [formData, setFormData] = useState<{
        name: any;
        email: any;
        status: any;
    }>({
        name: "",
        email: "",
        status: "",
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
            formPayload.append(key, value);
        });

        return formPayload;
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const formPayload = prepareFormData();

        router.post(route("users.store"), formPayload, {
            onError: (newErrors) => {
                console.error("Errors:", newErrors);
                setErrors(newErrors);
            },
            onSuccess: (message) => {
                toast("User added successfully.", {
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

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const files = event.dataTransfer.files;
        handleFiles(files);
    };

    const handleFiles = (files: FileList) => {
        if (files.length > 0) {
            const file = files[0];
            if (file.type.startsWith("image/")) {
                handleInputChange("new_image", file);
            }
        }
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    const handleBrowseClick = () => {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "image/*";
        input.onchange = (e: any) => {
            if (e.target && e.target.files) {
                handleFiles(e.target.files);
            }
        };
        input.click();
    };

    const handleRemoveImage = (deletedImageId: any) => {
        setFormData((previousState) => ({
            ...previousState,
            old_image: null,
            deleted_images: deletedImageId,
            new_image: null,
        }));
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
            <Head title="New User" />
            <div className="p-2 lg:p-4">
                <div className="w-full">
                    <div className="overflow-hidden shadow bg-surface text-onSurface">
                        <div className="w-full p-4 space-y-2 lg:p-10">
                            <h2 className="text-2xl font-bold lg:text-4xl">
                                New User
                            </h2>
                            <div className={`flex items-end justify-end`}>
                                {/*Header*/}
                                <div className="">
                                    <div className="flex gap-2">
                                        <Link
                                            className="bg-primary text-onPrimary hover:bg-primaryVariant disabled:bg-disabled hover:shadow-md transition-all duration-300  rounded py-1.5 px-1.5 md:px-4 hover:cursor-pointer"
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
                                </div>
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
                                                        const { name, value } =
                                                            e.target;
                                                        setFormData(
                                                            (
                                                                previousState
                                                            ) => ({
                                                                ...previousState,
                                                                name: value,
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

                                            <div className="w-full">
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
                                                        const { name, value } =
                                                            e.target;
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
                                                        value="Active"
                                                        key={2}
                                                    >
                                                        Active
                                                    </option>
                                                    <option
                                                        value="Inactive"
                                                        key={3}
                                                    >
                                                        Inactive
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
                                            Create User
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
