import {Head, Link} from "@inertiajs/react";
import {PropsWithChildren} from "react";
import {User} from "@/types";
import PublicTemplateLayout from "@/Layouts/PublicLayout";
import {useLocation, useParams} from "react-router-dom";
// import XIcon from "../../assets/svg/x_twitter.png";

export default function ByCategory({auth}: PropsWithChildren<{ auth: User }>) {
    return (
        <>
            <Head title={"Archive"}/>
            <PublicTemplateLayout auth={auth}>
                <section className="flex flex-col gap-4">
                    <div className="container">
                        <h2 className="font-extrabold text-2xl">ARCHIVES</h2>
                        <span className="border-t-4 border-error">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    </div>
                    <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        <div className="flex gap-4">
                            <img
                                src="https://cdn.bdnews24.com/bdnews24/media/english/imgAll/2024August/wood-250824-01-1724592621.jpg"
                                alt="Post Image"
                                className="w-36 object-cover"/>
                            <div className="">
                                <p className="font-bold text-secondary">Category</p>
                                <Link href={""} className="text-xl font-bold  mb-4 hover:text-error">News
                                    Headline</Link>
                                <p className="">
                                    Publish At
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <img
                                src="https://cdn.bdnews24.com/bdnews24/media/english/imgAll/2024August/wood-250824-01-1724592621.jpg"
                                alt="Post Image"
                                className="w-36 object-cover"/>
                            <div className="">
                                <p className="font-bold text-secondary">Category</p>
                                <Link href={""} className="text-xl font-bold  mb-4 hover:text-error">News
                                    Headline</Link>
                                <p className="">
                                    Publish At
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <img
                                src="https://cdn.bdnews24.com/bdnews24/media/english/imgAll/2024August/wood-250824-01-1724592621.jpg"
                                alt="Post Image"
                                className="w-36 object-cover"/>
                            <div className="">
                                <p className="font-bold text-secondary">Category</p>
                                <Link href={""} className="text-xl font-bold  mb-4 hover:text-error">News
                                    Headline</Link>
                                <p className="">
                                    Publish At
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <img
                                src="https://cdn.bdnews24.com/bdnews24/media/english/imgAll/2024August/wood-250824-01-1724592621.jpg"
                                alt="Post Image"
                                className="w-36 object-cover"/>
                            <div className="">
                                <p className="font-bold text-secondary">Category</p>
                                <Link href={""} className="text-xl font-bold  mb-4 hover:text-error">News
                                    Headline</Link>
                                <p className="">
                                    Publish At
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <img
                                src="https://cdn.bdnews24.com/bdnews24/media/english/imgAll/2024August/wood-250824-01-1724592621.jpg"
                                alt="Post Image"
                                className="w-36 object-cover"/>
                            <div className="">
                                <p className="font-bold text-secondary">Category</p>
                                <Link href={""} className="text-xl font-bold  mb-4 hover:text-error">News
                                    Headline</Link>
                                <p className="">
                                    Publish At
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <img
                                src="https://cdn.bdnews24.com/bdnews24/media/english/imgAll/2024August/wood-250824-01-1724592621.jpg"
                                alt="Post Image"
                                className="w-36 object-cover"/>
                            <div className="">
                                <p className="font-bold text-secondary">Category</p>
                                <Link href={""} className="text-xl font-bold  mb-4 hover:text-error">News
                                    Headline</Link>
                                <p className="">
                                    Publish At
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <img
                                src="https://cdn.bdnews24.com/bdnews24/media/english/imgAll/2024August/wood-250824-01-1724592621.jpg"
                                alt="Post Image"
                                className="w-36 object-cover"/>
                            <div className="">
                                <p className="font-bold text-secondary">Category</p>
                                <Link href={""} className="text-xl font-bold  mb-4 hover:text-error">News
                                    Headline</Link>
                                <p className="">
                                    Publish At
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <img
                                src="https://cdn.bdnews24.com/bdnews24/media/english/imgAll/2024August/wood-250824-01-1724592621.jpg"
                                alt="Post Image"
                                className="w-36 object-cover"/>
                            <div className="">
                                <p className="font-bold text-secondary">Category</p>
                                <Link href={""} className="text-xl font-bold  mb-4 hover:text-error">News
                                    Headline</Link>
                                <p className="">
                                    Publish At
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <img
                                src="https://cdn.bdnews24.com/bdnews24/media/english/imgAll/2024August/wood-250824-01-1724592621.jpg"
                                alt="Post Image"
                                className="w-36 object-cover"/>
                            <div className="">
                                <p className="font-bold text-secondary">Category</p>
                                <Link href={""} className="text-xl font-bold  mb-4 hover:text-error">News
                                    Headline</Link>
                                <p className="">
                                    Publish At
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <img
                                src="https://cdn.bdnews24.com/bdnews24/media/english/imgAll/2024August/wood-250824-01-1724592621.jpg"
                                alt="Post Image"
                                className="w-36 object-cover"/>
                            <div className="">
                                <p className="font-bold text-secondary">Category</p>
                                <Link href={""} className="text-xl font-bold  mb-4 hover:text-error">News
                                    Headline</Link>
                                <p className="">
                                    Publish At
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <img
                                src="https://cdn.bdnews24.com/bdnews24/media/english/imgAll/2024August/wood-250824-01-1724592621.jpg"
                                alt="Post Image"
                                className="w-36 object-cover"/>
                            <div className="">
                                <p className="font-bold text-secondary">Category</p>
                                <Link href={""} className="text-xl font-bold  mb-4 hover:text-error">News
                                    Headline</Link>
                                <p className="">
                                    Publish At
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <img
                                src="https://cdn.bdnews24.com/bdnews24/media/english/imgAll/2024August/wood-250824-01-1724592621.jpg"
                                alt="Post Image"
                                className="w-36 object-cover"/>
                            <div className="">
                                <p className="font-bold text-secondary">Category</p>
                                <Link href={""} className="text-xl font-bold  mb-4 hover:text-error">News
                                    Headline</Link>
                                <p className="">
                                    Publish At
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

            </PublicTemplateLayout>
        </>
    );
}
