import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { formats, modules } from "@/Utils/quill-util";
import { Head, Link, router } from "@inertiajs/react";
import moment from "moment";
import ReactQuill from "react-quill";
import { Bounce, toast } from "react-toastify";

export default function ViewGallery({ auth, gallery, flash }: any) {
    const deleteGallery = (id: number) => {
        if (confirm("Are you sure you want to delete this gallery?")) {
            router.delete(route("gallery.destroy", id));
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
            <Head title="View Gallery" />
            <div className="p-2 lg:p-4">
                <div className="w-full">
                    <div className="overflow-hidden shadow bg-surface text-onSurface">
                        <div className="w-full p-4 space-y-2 lg:p-10">
                            <h2 className="text-2xl font-bold lg:text-4xl">
                                View Gallery
                            </h2>
                            <div className="flex items-end justify-end">
                                <div className="flex gap-2">
                                    <Link
                                        className="bg-primary text-onPrimary hover:bg-primaryVariant disabled:bg-disabled hover:shadow-md transition-all duration-300 shadow-sm rounded py-1.5 px-1.5 md:px-4 hover:cursor-pointer"
                                        href={route("gallery.index")}
                                    >
                                        <span className="hidden md:block">
                                            Gallery
                                        </span>
                                        <span className="inline-block md:hidden">
                                            <i className="fa-solid fa-rectangle-list"></i>
                                        </span>
                                    </Link>
                                    {(auth?.user?.role === 'ADMIN' ||
                                        auth?.user?.role === 'EDITOR') && (
                                        <Link
                                            className="bg-primary text-onPrimary hover:bg-primaryVariant disabled:bg-disabled hover:shadow-md transition-all duration-300 shadow-sm rounded py-1.5 px-1.5 md:px-4 hover:cursor-pointer"
                                            href={route(
                                                "gallery.edit",
                                                gallery.id,
                                            )}
                                        >
                                            <span className="hidden md:block">
                                                Edit Gallery
                                            </span>
                                            <span className="inline-block md:hidden">
                                                <i className="fa-solid fa-pen-to-square"></i>
                                            </span>
                                        </Link>
                                    )}

                                    {auth?.user?.role === 'ADMIN' && (
                                        <button
                                            className="bg-primary text-onPrimary hover:bg-primaryVariant disabled:bg-disabled hover:shadow-md transition-all duration-300 shadow-sm rounded py-1.5 px-1.5 md:px-4 hover:cursor-pointer"
                                            onClick={() =>
                                                deleteGallery(gallery.id)
                                            }
                                        >
                                            <span className="hidden md:block">
                                                Delete Gallery
                                            </span>
                                            <span className="inline-block md:hidden">
                                                <i className="fa-solid fa-trash-can"></i>
                                            </span>
                                        </button>
                                    )}
                                </div>
                            </div>

                            <div className="">
                                <div className="">
                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
                                        <img
                                        className="border-2 border-dashed"
                                            src={gallery.attachment_url}
                                            alt="image not found"
                                        />
                                    </div>
                                    <div className="grid w-full grid-cols-1 gap-6 mb-4  md:grid-cols-3">
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
                                                value={gallery.title}
                                               
                                            />
                                          
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
                                                value={gallery.slug}
                                               
                                            />
                                           
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="summery"
                                        className="block font-semibold "
                                    >
                                        Sort Description (Optional)
                                    </label>
                                    <textarea
                                        name="summery"
                                        id="summery"
                                        value={gallery.sort_description}
                                        className="w-full py-1 border rounded-sm bg-background border-borderColor focus:border-borderColor disabled:bg-disabled focus:ring focus:ring-borderColor focus:ring-opacity-20 text-onSurface"
                                       
                                    ></textarea>
                                  
                                </div>

                                <div className="mb-4">
                                    <label
                                        htmlFor="content"
                                        className="block font-semibold "
                                    >
                                        Description
                                    </label>
                                    <ReactQuill
                                        theme="snow"
                                        id="body"
                                        modules={modules}
                                        formats={formats}
                                        className="bg-background"
                                        readOnly={false}
                                        value={gallery.description}
                                        
                                    />

                                    
                                </div>
                                <div className="mt-6">
                                    <button
                                        type="submit"
                                        className="px-4 py-2 font-semibold rounded-md text-onSecondary bg-secondary hover:bg-secondaryVariant"
                                    >
                                        Create Gallery
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
