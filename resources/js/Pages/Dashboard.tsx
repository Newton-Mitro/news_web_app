import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth }: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="p-4">
                <div className="grid grid-cols-1 mx-auto md:grid-cols-3 lg:grid-cols-5">
                    <div className="flex items-center justify-center shadow bg-surface text-onSurface">
                        <div className="flex flex-col items-center justify-center h-40 gap-6">
                            <i className="fa-regular fa-folder-open fa-2xl"></i>
                            <div className="">You're logged in!</div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
