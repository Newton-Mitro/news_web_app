import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import Pagination from "../../../Components/Pagination";
import { useState } from "react";
import { toast } from "react-toastify";

export default function configuration({ auth, settings }: any) {

     const [form, setForm] = useState({
        editor_Email: settings.editor_Email || "",
        advertize_Email: settings.advertize_Email || "",
        infoEmail: settings.infoEmail || "",
        maintenanceMode: settings.maintenanceMode === "1",
        facebook: settings.facebook || "",
        twitter: settings.twitter || "",
        instagram: settings.instagram || "",
        messenger: settings.messenger || "",
        youtube: settings.youtube || "",
        whatsapp: settings.whatsapp || "",
        address: settings.address || "",
        phone: settings.phone || "",
    });

     const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value, type, checked } = e.target;

        setForm({
            ...form,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        console.log(form);

        router.put("setting/update", form, {
            onError: () => {
                toast.error("Error updating configuration. Please try again.");
            },
            onSuccess: () => {
                toast.success("Configuration updated successfully.");
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
            <Head title="Edit Gallery" />

            <div className="p-2 lg:p-4">
                <div className="w-full">
                    <div className="overflow-hidden shadow bg-surface text-onSurface">
                        <div className="w-full p-4 space-y-2 lg:p-10">
                            {/* -------------------------------------------------
                                Header
                           
                            {/* -------------------------------------------------
                                Form
                            -------------------------------------------------- */}
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* General */}
                                    <h2 className="text-2xl font-bold lg:text-4xl">
                                        General Configuration
                                    </h2>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                                       

                                         <div>
                                            <label
                                                htmlFor="editor_Email"
                                                className="block mb-1 font-semibold"
                                            >
                                                Editor Email
                                            </label>

                                            <input
                                                type="text"
                                                name="editor_Email"
                                                id="editor_Email"
                                                className="w-full py-1 border rounded-sm bg-background border-borderColor focus:ring focus:ring-borderColor focus:ring-opacity-20 text-onSurface"
                                                value={form.editor_Email}
                                               
                                                onChange={handleChange}
                                            />

                                            {/* {errors?.editor_Email && (
                                                <div className="text-sm text-error">
                                                    {errors.title}
                                                </div>
                                            )} */}
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="advertize_Email"
                                                className="block mb-1 font-semibold"
                                            >
                                                Advertize Email 
                                            </label>

                                            <input
                                                type="text"
                                                name="advertize_Email"
                                                id="advertize_Email"
                                                className="w-full py-1 border rounded-sm bg-background border-borderColor focus:ring focus:ring-borderColor focus:ring-opacity-20 text-onSurface"
                                                value={form.advertize_Email}
                                                onChange={handleChange}
                                            />

                                            {/* {errors?.title && (
                                                <div className="text-sm text-error">
                                                    {errors.title}
                                                </div>
                                            )} */}
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="infoEmail"
                                                className="block mb-1 font-semibold"
                                            >
                                                Info Email 
                                            </label>

                                            <input
                                                type="text"
                                                name="infoEmail"
                                                id="infoEmail"
                                                className="w-full py-1 border rounded-sm bg-background border-borderColor focus:ring focus:ring-borderColor focus:ring-opacity-20 text-onSurface"
                                                value={form.infoEmail}
                                                 onChange={handleChange}
                                                // onChange={(e) => {
                                                //     const value =
                                                //         e.target.value;

                                                //     setFormData(
                                                //         (previousState) => ({
                                                //             ...previousState,
                                                //             title: value,
                                                //             slug: slugify(
                                                //                 value,
                                                //             ),
                                                //         }),
                                                //     );
                                                // }}
                                            />

                                            {/* {errors?.title && (
                                                <div className="text-sm text-error">
                                                    {errors.title}
                                                </div>
                                            )} */}
                                        </div>
                                        
                                       

                                        <div className="flex items-center gap-3">
                                            <input
                                                type="checkbox"
                                                name="maintenanceMode"
                                                checked={form.maintenanceMode}
                                                onChange={handleChange}
                                                className="w-5 h-5 accent-blue-600"
                                            />

                                            <label className="text-slate-300">
                                                Maintenance Mode
                                            </label>
                                        </div>
                                    </div>

                                      <h2 className="text-2xl font-bold lg:text-xl">
                                       Social Links
                                    </h2>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                                        <div>
                                            <label
                                                htmlFor="facebook"
                                                className="block mb-1 font-semibold"
                                            >
                                                Facebook 
                                            </label>

                                            <input
                                                type="text"
                                                name="facebook"
                                                id="facebook"
                                                className="w-full py-1 border rounded-sm bg-background border-borderColor focus:ring focus:ring-borderColor focus:ring-opacity-20 text-onSurface"
                                                value={form.facebook}
                                                onChange={handleChange}
                                                // onChange={(e) => {
                                                //     const value =
                                                //         e.target.value;

                                                //     setFormData(
                                                //         (previousState) => ({
                                                //             ...previousState,
                                                //             title: value,
                                                //             slug: slugify(
                                                //                 value,
                                                //             ),
                                                //         }),
                                                //     );
                                                // }}
                                            />

                                            {/* {errors?.title && (
                                                <div className="text-sm text-error">
                                                    {errors.title}
                                                </div>
                                            )} */}
                                        </div>
                                         <div>
                                            <label
                                                htmlFor="twitter"
                                                className="block mb-1 font-semibold"
                                            >
                                                Twitter 
                                            </label>

                                            <input
                                                type="text"
                                                name="twitter"
                                                id="twitter"
                                                className="w-full py-1 border rounded-sm bg-background border-borderColor focus:ring focus:ring-borderColor focus:ring-opacity-20 text-onSurface"
                                                value={form.twitter}
                                                onChange={handleChange}
                                                // onChange={(e) => {
                                                //     const value =
                                                //         e.target.value;

                                                //     setFormData(
                                                //         (previousState) => ({
                                                //             ...previousState,
                                                //             title: value,
                                                //             slug: slugify(
                                                //                 value,
                                                //             ),
                                                //         }),
                                                //     );
                                                // }}
                                            />

                                            {/* {errors?.title && (
                                                <div className="text-sm text-error">
                                                    {errors.title}
                                                </div>
                                            )} */}
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="instagram"
                                                className="block mb-1 font-semibold"
                                            >
                                                Instagram 
                                            </label>

                                            <input
                                                type="text"
                                                name="instagram"
                                                id="instagram"
                                                onChange={handleChange}
                                                className="w-full py-1 border rounded-sm bg-background border-borderColor focus:ring focus:ring-borderColor focus:ring-opacity-20 text-onSurface"
                                                value={form.instagram}
                                                // onChange={(e) => {
                                                //     const value =
                                                //         e.target.value;

                                                //     setFormData(
                                                //         (previousState) => ({
                                                //             ...previousState,
                                                //             title: value,
                                                //             slug: slugify(
                                                //                 value,
                                                //             ),
                                                //         }),
                                                //     );
                                                // }}
                                            />

                                            {/* {errors?.title && (
                                                <div className="text-sm text-error">
                                                    {errors.title}
                                                </div>
                                            )} */}
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="Messenger"
                                                className="block mb-1 font-semibold"
                                            >
                                                Messenger 
                                            </label>

                                            <input
                                                type="text"
                                                name="messenger"
                                                id="messenger"
                                                className="w-full py-1 border rounded-sm bg-background border-borderColor focus:ring focus:ring-borderColor focus:ring-opacity-20 text-onSurface"
                                                value={form.messenger}
                                                onChange={handleChange}
                                                // onChange={(e) => {
                                                //     const value =
                                                //         e.target.value;

                                                //     setFormData(
                                                //         (previousState) => ({
                                                //             ...previousState,
                                                //             title: value,
                                                //             slug: slugify(
                                                //                 value,
                                                //             ),
                                                //         }),
                                                //     );
                                                // }}
                                            />

                                            {/* {errors?.title && (
                                                <div className="text-sm text-error">
                                                    {errors.title}
                                                </div>
                                            )} */}
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="youtube"
                                                className="block mb-1 font-semibold"
                                            >
                                                Youtube 
                                            </label>

                                            <input
                                                type="text"
                                                name="youtube"
                                                id="youtube"
                                                className="w-full py-1 border rounded-sm bg-background border-borderColor focus:ring focus:ring-borderColor focus:ring-opacity-20 text-onSurface"
                                                value={form.youtube}
                                                onChange={handleChange}
                                                // onChange={(e) => {
                                                //     const value =
                                                //         e.target.value;

                                                //     setFormData(
                                                //         (previousState) => ({
                                                //             ...previousState,
                                                //             title: value,
                                                //             slug: slugify(
                                                //                 value,
                                                //             ),
                                                //         }),
                                                //     );
                                                // }}
                                            />

                                            {/* {errors?.title && (
                                                <div className="text-sm text-error">
                                                    {errors.title}
                                                </div>
                                            )} */}
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="whatsapp"
                                                className="block mb-1 font-semibold"
                                            >
                                                Whatsapp 
                                            </label>

                                            <input
                                                type="text"
                                                name="whatsapp"
                                                id="whatsapp"
                                                onChange={handleChange}
                                                className="w-full py-1 border rounded-sm bg-background border-borderColor focus:ring focus:ring-borderColor focus:ring-opacity-20 text-onSurface"
                                                value={form.whatsapp}
                                                // onChange={(e) => {
                                                //     const value =
                                                //         e.target.value;

                                                //     setFormData(
                                                //         (previousState) => ({
                                                //             ...previousState,
                                                //             title: value,
                                                //             slug: slugify(
                                                //                 value,
                                                //             ),
                                                //         }),
                                                //     );
                                                // }}
                                            />

                                            {/* {errors?.title && (
                                                <div className="text-sm text-error">
                                                    {errors.title}
                                                </div>
                                            )} */}
                                        </div>
                                    
                                    </div>

                                    <h2 className="text-2xl font-bold lg:text-xl">
                                       Contact Information
                                    </h2>
                              

                                {/* Contact */}

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                                    
                                        <div>
                                            <label
                                                htmlFor="address"
                                                className="block mb-1 font-semibold"
                                            >
                                                Address 
                                            </label>

                                            <input
                                                type="text"
                                                name="address"
                                                id="address"
                                                onChange={handleChange}
                                                className="w-full py-1 border rounded-sm bg-background border-borderColor focus:ring focus:ring-borderColor focus:ring-opacity-20 text-onSurface"
                                                value={form.address}
                                                // onChange={(e) => {
                                                //     const value =
                                                //         e.target.value;

                                                //     setFormData(
                                                //         (previousState) => ({
                                                //             ...previousState,
                                                //             title: value,
                                                //             slug: slugify(
                                                //                 value,
                                                //             ),
                                                //         }),
                                                //     );
                                                // }}
                                            />

                                            {/* {errors?.title && (
                                                <div className="text-sm text-error">
                                                    {errors.title}
                                                </div>
                                            )} */}
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="phone"
                                                
                                                className="block mb-1 font-semibold"
                                            >
                                                Phone 
                                            </label>

                                            <input
                                                type="text"
                                                name="phone"
                                                id="phone"
                                                onChange={handleChange}
                                                className="w-full py-1 border rounded-sm bg-background border-borderColor focus:ring focus:ring-borderColor focus:ring-opacity-20 text-onSurface"
                                                value={form.phone}
                                                // onChange={(e) => {
                                                //     const value =
                                                //         e.target.value;

                                                //     setFormData(
                                                //         (previousState) => ({
                                                //             ...previousState,
                                                //             title: value,
                                                //             slug: slugify(
                                                //                 value,
                                                //             ),
                                                //         }),
                                                //     );
                                                // }}
                                            />

                                            {/* {errors?.title && (
                                                <div className="text-sm text-error">
                                                    {errors.title}
                                                </div>
                                            )} */}
                                        </div>

                                   </div>

                                    <div className="mt-8 flex justify-end">
                                        <button
                                            type="submit"
                                            className="bg-blue-600 hover:bg-blue-700 transition-all duration-200 text-white font-medium px-8 py-3 rounded-lg shadow-lg shadow-blue-900/40"
                                        >
                                            Save Changes
                                        </button>
                                    </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
