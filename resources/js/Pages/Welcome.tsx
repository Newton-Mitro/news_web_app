import {Head, Link} from "@inertiajs/react";
import {PropsWithChildren} from "react";
import {User} from "@/types";
import PublicTemplateLayout from "@/Layouts/PublicLayout";
// import XIcon from "../../assets/svg/x_twitter.png";

export default function Welcome({auth}: PropsWithChildren<{ auth: User }>) {
    return (
        <>
            <Head title="Home"/>
            <PublicTemplateLayout auth={auth}>
                <section className="flex flex-col gap-4">
                    <div className="container flex flex-col md:flex-row gap-4 ">
                        <div className="w-full md:w-3/12 flex flex-col gap-3">
                            <div className="py-6 px-4 shadow-sm bg-surface text-onSurface">
                                <Link href={""} className="text-xl font-bold  mb-4 hover:text-error">News
                                    Headline</Link>
                                <p className="">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet
                                    imperdiet odio. Sed vel magna nec nunc vehicula varius. Nulla facilisi.
                                </p>
                            </div>
                            <div className="py-6 px-4 shadow-sm bg-surface text-onSurface">
                                <Link href={""} className="text-xl font-bold  mb-4 hover:text-error">News
                                    Headline</Link>
                                <p className="">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet
                                    imperdiet odio.
                                </p>
                            </div>
                            <div className="py-6 px-4 shadow-sm bg-surface text-onSurface">
                                <Link href={""} className="text-xl font-bold  mb-4 hover:text-error">News
                                    Headline</Link>
                                <p className="">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-6/12 order-first md:order-none">
                            <div className="w-full overflow-hidden shadow-sm bg-surface text-onSurface ">
                                <img
                                    src="https://cdn.bdnews24.com/bdnews24/media/english/imgAll/2024August/wood-250824-01-1724592621.jpg"
                                    alt="Post Image"
                                    className="w-full max-h-72 object-cover"/>
                                <div className="py-6 px-4">
                                    <Link href={""} className="text-xl font-bold  mb-4 hover:text-error">News
                                        Headline</Link>
                                    <p className="">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet
                                        imperdiet odio. Sed vel magna nec nunc vehicula varius. Nulla facilisi.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-3/12 flex flex-col gap-3">
                            <div className="py-6 px-4 shadow-sm bg-surface text-onSurface">
                                <Link href={""} className="text-xl font-bold  mb-4 hover:text-error">News
                                    Headline</Link>
                                <p className="">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet
                                    imperdiet odio. Sed vel magna nec nunc vehicula varius. Nulla facilisi. Lorem ipsum
                                    dolor sit amet, consectetur adipisicing elit. Ab cumque dolorem doloribus impedit
                                    laboriosam maxime.
                                </p>
                            </div>
                            <div className="py-6 px-4 shadow-sm bg-surface text-onSurface">
                                <Link href={""} className="text-xl font-bold  mb-4 hover:text-error">News
                                    Headline</Link>
                                <p className="">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet
                                    imperdiet odio.
                                </p>
                            </div>
                            <div className="py-6 px-4 shadow-sm bg-surface text-onSurface">
                                <Link href={""} className="text-xl font-bold  mb-4 hover:text-error">News
                                    Headline</Link>
                                <p className="">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            className="rounded bg-secondary hover:bg-secondaryVariant text-onSecondary px-4 py-2">All
                            News
                        </button>
                    </div>
                </section>
                <hr className="my-4 border-gray-200"/>
                <section className="flex flex-col gap-4">
                    <div className="container">
                        <h2 className="font-extrabold text-2xl">ECONOMY</h2>
                        <span className="border-t-4 border-error">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    </div>
                    <div className="container flex flex-col md:flex-row gap-6">
                        <div className="w-full md:w-6/12 order-first md:order-none">
                            <div className="w-full overflow-hidden shadow-sm bg-surface text-onSurface ">
                                <img
                                    src="https://cdn.bdnews24.com/bdnews24/media/english/imgAll/2024August/wood-250824-01-1724592621.jpg"
                                    alt="Post Image"
                                    className="w-full max-h-72 object-cover"/>
                                <div className="py-6 px-4">
                                    <Link href={""} className="text-xl font-bold  mb-4 hover:text-error">News
                                        Headline</Link>
                                    <p className="">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet
                                        imperdiet odio. Sed vel magna nec nunc vehicula varius. Nulla facilisi.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-6/12 flex flex-col gap-3">
                            <div className="py-6 px-4 shadow-sm bg-surface text-onSurface flex gap-4">
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
                            <div className="py-6 px-4 shadow-sm bg-surface text-onSurface flex gap-4">
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
                            <div className="py-6 px-4 shadow-sm bg-surface text-onSurface flex gap-4">
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
                    <div className="flex items-center justify-center">
                        <button
                            className="rounded bg-secondary hover:bg-secondaryVariant text-onSecondary px-4 py-2">All
                            News
                        </button>
                    </div>
                </section>
                <hr className="my-4 border-gray-200"/>
                <section className="flex flex-col gap-4">
                    <div className="container">
                        <h2 className="font-extrabold text-2xl">WORLD</h2>
                        <span className="border-t-4 border-error">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    </div>
                    <div className="container flex flex-col md:flex-row gap-6">
                        <div className="w-full md:w-6/12 flex flex-col gap-3">
                            <div className="py-6 px-4 shadow-sm bg-surface text-onSurface flex gap-4">
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
                            <div className="py-6 px-4 shadow-sm bg-surface text-onSurface flex gap-4">
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
                            <div className="py-6 px-4 shadow-sm bg-surface text-onSurface flex gap-4">
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
                        <div className="w-full md:w-6/12 order-first md:order-none">
                            <div className="w-full overflow-hidden shadow-sm bg-surface text-onSurface ">
                                <img
                                    src="https://cdn.bdnews24.com/bdnews24/media/english/imgAll/2024August/wood-250824-01-1724592621.jpg"
                                    alt="Post Image"
                                    className="w-full max-h-72 object-cover"/>
                                <div className="py-6 px-4">
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
                    <div className="flex items-center justify-center">
                        <button
                            className="rounded bg-secondary hover:bg-secondaryVariant text-onSecondary px-4 py-2">All
                            News
                        </button>
                    </div>
                </section>
                <hr className="my-4 border-gray-200"/>
                {/* <section className="flex items-center gap-2 container">
                    <FacebookShareButton url={"http://10.77.77.22:8000/"} title={"title"}>
                        <FacebookIcon size={32} round={true}/>
                    </FacebookShareButton>
                    <TwitterShareButton url={"http://10.77.77.22:8000/"} title={"title"}>
                        <div className="rounded-full flex items-center justify-center bg-cyan-500 w-8 h-8">
                            <a href="https://x.com" target="_blank">
                                <img src={XIcon} alt="" className="w-4"/>
                            </a>
                        </div>
                    </TwitterShareButton>
                    <LinkedinShareButton url={"http://10.77.77.22:8000/"} title={"title"}>
                        <LinkedinIcon size={32} round={true}/>
                    </LinkedinShareButton>
                    <FacebookShareCount url={"http://10.77.77.22:8000/"}>
                        {(shareCount) => <span className="myShareCountWrapper">{shareCount}</span>}
                    </FacebookShareCount>

                </section> */}
            </PublicTemplateLayout>
        </>
    );
}
