import {Head, Link} from "@inertiajs/react";
import {PropsWithChildren} from "react";
import {User} from "@/types";
import PublicTemplateLayout from "@/Layouts/PublicLayout";
import {useLocation, useParams} from "react-router-dom";
// import XIcon from "../../assets/svg/x_twitter.png";

export default function NewsCategory({auth}: PropsWithChildren<{ auth: User }>) {
    const pathname = window.location.pathname;
    const segments = pathname.split('/').filter(segment => segment);
    const lastSegment = segments.length > 0 ? segments[segments.length - 1] : '';

    return (
        <>
            <Head title={lastSegment}/>
            <PublicTemplateLayout auth={auth}>
                <section className="flex flex-col gap-4">
                    <div className="container">
                        <h2 className="font-extrabold text-2xl">ECONOMY</h2>
                        <span className="border-t-4 border-error">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    </div>
                    <div className="container flex flex-col lg:flex-row gap-6">
                        <div className="w-full lg:w-6/12 order-first md:order-none">
                            <div className="w-full overflow-hidden">
                                <img
                                    src="https://cdn.bdnews24.com/bdnews24/media/english/imgAll/2024August/wood-250824-01-1724592621.jpg"
                                    alt="Post Image"
                                    className="w-full max-h-72 object-cover"/>
                                <div className="pt-2">
                                    <Link href={""} className="text-xl font-bold  mb-4 hover:text-error">News
                                        Headline</Link>
                                    <p className="">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet
                                        imperdiet odio. Sed vel magna nec nunc vehicula varius. Nulla facilisi.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-6/12 flex flex-col gap-3 divide-y divide-dashed">
                            <div className="flex gap-4 first:pt-0 pt-3">
                                <img
                                    src="https://cdn.bdnews24.com/bdnews24/media/english/imgAll/2024August/wood-250824-01-1724592621.jpg"
                                    alt="Post Image"
                                    className="w-36 object-cover"/>
                                <div className="">
                                    <Link href={""} className="text-xl font-bold  mb-4 hover:text-error">News
                                        Headline</Link>
                                    <p className="">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet
                                        imperdiet odio. Sed vel magna nec nunc vehicula varius. Nulla facilisi.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4 first:pt-0 pt-3">
                                <img
                                    src="https://cdn.bdnews24.com/bdnews24/media/english/imgAll/2024August/wood-250824-01-1724592621.jpg"
                                    alt="Post Image"
                                    className="w-36 object-cover"/>
                                <div className="">
                                    <Link href={""} className="text-xl font-bold  mb-4 hover:text-error">News
                                        Headline</Link>
                                    <p className="">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet
                                        imperdiet odio. Sed vel magna nec nunc vehicula varius. Nulla facilisi.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4 first:pt-0 pt-3">
                                <img
                                    src="https://cdn.bdnews24.com/bdnews24/media/english/imgAll/2024August/wood-250824-01-1724592621.jpg"
                                    alt="Post Image"
                                    className="w-36 object-cover"/>
                                <div className="">
                                    <Link href={""} className="text-xl font-bold  mb-4 hover:text-error">News
                                        Headline</Link>
                                    <p className="">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet
                                        imperdiet odio. Sed vel magna nec nunc vehicula varius. Nulla facilisi.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <hr className="my-6 border border-dashed container"/>
                <section className="flex flex-col gap-4">
                    <div className="container">
                        <h2 className="font-extrabold text-2xl">READ MORE</h2>
                        <span className="border-t-4 border-error">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    </div>
                    <div className="container flex flex-col md:flex-row gap-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 divide-y divide-dashed">
                            <div className="flex gap-4 flex-col">
                                <img
                                    src="https://cdn.bdnews24.com/bdnews24/media/english/imgAll/2024August/wood-250824-01-1724592621.jpg"
                                    alt="Post Image"
                                    className="object-cover"/>
                                <div className="">
                                    <Link href={""} className="font-bold  mb-4 hover:text-error">News
                                        Headline</Link>
                                    <p className="">
                                        date time
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4 flex-col">
                                <img
                                    src="https://cdn.bdnews24.com/bdnews24/media/english/imgAll/2024August/wood-250824-01-1724592621.jpg"
                                    alt="Post Image"
                                    className="object-cover"/>
                                <div className="">
                                    <Link href={""} className="font-bold  mb-4 hover:text-error">News
                                        Headline</Link>
                                    <p className="">
                                        date time
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4 flex-col">
                                <img
                                    src="https://cdn.bdnews24.com/bdnews24/media/english/imgAll/2024August/wood-250824-01-1724592621.jpg"
                                    alt="Post Image"
                                    className="object-cover"/>
                                <div className="">
                                    <Link href={""} className="font-bold  mb-4 hover:text-error">News
                                        Headline</Link>
                                    <p className="">
                                        date time
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4 flex-col">
                                <img
                                    src="https://cdn.bdnews24.com/bdnews24/media/english/imgAll/2024August/wood-250824-01-1724592621.jpg"
                                    alt="Post Image"
                                    className="object-cover"/>
                                <div className="">
                                    <Link href={""} className="font-bold  mb-4 hover:text-error">News
                                        Headline</Link>
                                    <p className="">
                                        date time
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4 flex-col">
                                <img
                                    src="https://cdn.bdnews24.com/bdnews24/media/english/imgAll/2024August/wood-250824-01-1724592621.jpg"
                                    alt="Post Image"
                                    className="object-cover"/>
                                <div className="">
                                    <Link href={""} className="font-bold  mb-4 hover:text-error">News
                                        Headline</Link>
                                    <p className="">
                                        date time
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4 flex-col">
                                <img
                                    src="https://cdn.bdnews24.com/bdnews24/media/english/imgAll/2024August/wood-250824-01-1724592621.jpg"
                                    alt="Post Image"
                                    className="object-cover"/>
                                <div className="">
                                    <Link href={""} className="font-bold  mb-4 hover:text-error">News
                                        Headline</Link>
                                    <p className="">
                                        date time
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            className="rounded bg-secondary hover:bg-secondaryVariant text-onSecondary px-4 py-2">Read
                            More
                        </button>
                    </div>
                </section>
            </PublicTemplateLayout>
        </>
    );
}
