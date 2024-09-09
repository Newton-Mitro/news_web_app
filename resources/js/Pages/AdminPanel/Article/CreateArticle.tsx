import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link} from '@inertiajs/react';
import {PageProps} from '@/types';

export default function CreateArticle({auth}: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard"/>
            <div className="p-2 lg:p-4">
                <div className="w-full border border-borderColor">
                    <div className="bg-surface text-onSurface shadow-sm overflow-hidden">
                        <div className="w-full space-y-2 p-4">
                            <h2 className="text-xl">Create News Article</h2>
                            <div
                                className={`h-[calc(100vh-215px)] flex flex-col overflow-auto relative`}
                            >
                                {/*Header*/}
                                <div className="">
                                    <div className="flex gap-2">
                                        <Link
                                            className="bg-primary text-onPrimary hover:bg-primaryVariant disabled:bg-disabled hover:shadow-md transition-all duration-300 shadow-sm rounded py-1.5 px-1.5 md:px-4 hover:cursor-pointer"
                                            href={route('articles.index')}                                            >
                                            <span className="md:block hidden">All Articles</span>
                                            <span className="md:hidden inline-block"><i
                                                className="fa-solid fa-file-circle-plus"></i></span>
                                        </Link>

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
