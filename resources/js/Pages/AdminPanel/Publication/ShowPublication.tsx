import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { useState } from "react";

export default function ShowPublication({ auth, publication }: any) {

    console.log(publication);
    
    const [formData, setFormData] = useState<{
        title: any;
        slug: any;
        publish_date: any;
        attachment: any;
       
    }>({
        title: publication.title,
        slug: publication.slug,
        publish_date: publication.publish_date,
        attachment:publication.attachment_url,
        
    });

    console.log(formData)

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="New Gallery" />
            <div className="p-2 lg:p-4">
                <div className="w-full">
                    <div className="overflow-hidden shadow bg-surface text-onSurface">
                        <div className="w-full p-4 space-y-2 lg:p-10">
                            <h2 className="text-2xl font-bold lg:text-4xl">
                                Create Publication
                            </h2>
                            <div className={`flex items-end justify-end`}>
                                {/*Header*/}
                                <div className="">
                                    <div className="flex gap-2">
                                        <Link
                                            className="bg-primary text-onPrimary hover:bg-primaryVariant disabled:bg-disabled hover:shadow-md transition-all duration-300  rounded py-1.5 px-1.5 md:px-4 hover:cursor-pointer"
                                            href={route("publication.index")}
                                        >
                                            <span className="hidden md:block">
                                                Show Publication
                                            </span>
                                            <span className="inline-block md:hidden">
                                                <i className="fa-solid fa-rectangle-list"></i>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="">
                                    <div className="flex flex-col mb-4">
                                        <label
                                            htmlFor="attachment"
                                            className="block font-semibold"
                                        >
                                            Attachment
                                        </label>

                                        <div className="relative w-full border-2 border-gray-300 border-dashed rounded-lg bg-background lg:w-80">
                                           
                                                <div className="relative w-full p-3">
                                                    <iframe
                                                        src={formData.attachment}
                                                        title="PDF Preview"
                                                        className="w-full h-[300px] rounded-lg border"
                                                    />

                                                   
                                                </div>
                                            
                                        </div>
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
                                                value={formData.title}
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
                                                value={formData.slug}
                                            />
                                        </div>
                                        <div className="w-full">
                                            <label
                                                htmlFor="slug"
                                                className="block font-semibold "
                                            >
                                                Publish Date
                                            </label>
                                            <input
                                                type="date"
                                                name="publish_date"
                                                id="publish_date"
                                                className="w-full py-1 border rounded-sm bg-background border-borderColor focus:border-borderColor disabled:bg-disabled focus:ring focus:ring-borderColor focus:ring-opacity-20 text-onSurface"
                                                value={formData.publish_date}
                                            />
                                        </div>
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
