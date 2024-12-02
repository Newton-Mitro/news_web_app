import PublicTemplateLayout from "@/Layouts/PublicLayout";
import { User } from "@/types";
import { Head, Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";
// import XIcon from "../../assets/svg/x_twitter.png";

export default function ByCategory({
    auth,
}: PropsWithChildren<{ auth: User }>) {
    return (
        <>
            <Head title={"Archive"} />
            <PublicTemplateLayout auth={auth}>
                <section className="flex flex-col gap-4">
                    <div className="container">
                        <h2 className="text-2xl font-extrabold">ARCHIVES</h2>
                        <span className="border-t-4 border-error">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                    </div>
                    <div className="container grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <div className="flex gap-4">
                            <img
                                src="https://cdn.bdnews24.com/bdnews24/media/english/imgAll/2024August/wood-250824-01-1724592621.jpg"
                                alt="Post Image"
                                className="object-cover w-36"
                            />
                            <div className="">
                                <p className="font-bold text-primary">
                                    ক্যাটাগরি
                                </p>
                                <Link
                                    href={""}
                                    className="mb-4 font-bold hover:text-error"
                                >
                                    বন্যায় কুমিল্লার ক্ষতি ৩৩৬২ কোটি টাকা
                                </Link>
                                <p className="">
                                    {new Date().toLocaleDateString()}
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <img
                                src="https://cdn.bdnews24.com/bdnews24/media/english/imgAll/2024August/wood-250824-01-1724592621.jpg"
                                alt="Post Image"
                                className="object-cover w-36"
                            />
                            <div className="">
                                <p className="font-bold text-primary">
                                    ক্যাটাগরি
                                </p>
                                <Link
                                    href={""}
                                    className="mb-4 font-bold hover:text-error"
                                >
                                    বন্যায় কুমিল্লার ক্ষতি ৩৩৬২ কোটি টাকা
                                </Link>
                                <p className="">
                                    {new Date().toLocaleDateString()}
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <img
                                src="https://cdn.bdnews24.com/bdnews24/media/english/imgAll/2024August/wood-250824-01-1724592621.jpg"
                                alt="Post Image"
                                className="object-cover w-36"
                            />
                            <div className="">
                                <p className="font-bold text-primary">
                                    ক্যাটাগরি
                                </p>
                                <Link
                                    href={""}
                                    className="mb-4 font-bold hover:text-error"
                                >
                                    বন্যায় কুমিল্লার ক্ষতি ৩৩৬২ কোটি টাকা
                                </Link>
                                <p className="">
                                    {new Date().toLocaleDateString()}
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <img
                                src="https://cdn.bdnews24.com/bdnews24/media/english/imgAll/2024August/wood-250824-01-1724592621.jpg"
                                alt="Post Image"
                                className="object-cover w-36"
                            />
                            <div className="">
                                <p className="font-bold text-primary">
                                    ক্যাটাগরি
                                </p>
                                <Link
                                    href={""}
                                    className="mb-4 font-bold hover:text-error"
                                >
                                    বন্যায় কুমিল্লার ক্ষতি ৩৩৬২ কোটি টাকা
                                </Link>
                                <p className="">
                                    {new Date().toLocaleDateString()}
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <img
                                src="https://cdn.bdnews24.com/bdnews24/media/english/imgAll/2024August/wood-250824-01-1724592621.jpg"
                                alt="Post Image"
                                className="object-cover w-36"
                            />
                            <div className="">
                                <p className="font-bold text-primary">
                                    ক্যাটাগরি
                                </p>
                                <Link
                                    href={""}
                                    className="mb-4 font-bold hover:text-error"
                                >
                                    বন্যায় কুমিল্লার ক্ষতি ৩৩৬২ কোটি টাকা
                                </Link>
                                <p className="">
                                    {new Date().toLocaleDateString()}
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <img
                                src="https://cdn.bdnews24.com/bdnews24/media/english/imgAll/2024August/wood-250824-01-1724592621.jpg"
                                alt="Post Image"
                                className="object-cover w-36"
                            />
                            <div className="">
                                <p className="font-bold text-primary">
                                    ক্যাটাগরি
                                </p>
                                <Link
                                    href={""}
                                    className="mb-4 font-bold hover:text-error"
                                >
                                    বন্যায় কুমিল্লার ক্ষতি ৩৩৬২ কোটি টাকা
                                </Link>
                                <p className="">
                                    {new Date().toLocaleDateString()}
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <img
                                src="https://cdn.bdnews24.com/bdnews24/media/english/imgAll/2024August/wood-250824-01-1724592621.jpg"
                                alt="Post Image"
                                className="object-cover w-36"
                            />
                            <div className="">
                                <p className="font-bold text-primary">
                                    ক্যাটাগরি
                                </p>
                                <Link
                                    href={""}
                                    className="mb-4 font-bold hover:text-error"
                                >
                                    বন্যায় কুমিল্লার ক্ষতি ৩৩৬২ কোটি টাকা
                                </Link>
                                <p className="">
                                    {new Date().toLocaleDateString()}
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <img
                                src="https://cdn.bdnews24.com/bdnews24/media/english/imgAll/2024August/wood-250824-01-1724592621.jpg"
                                alt="Post Image"
                                className="object-cover w-36"
                            />
                            <div className="">
                                <p className="font-bold text-primary">
                                    ক্যাটাগরি
                                </p>
                                <Link
                                    href={""}
                                    className="mb-4 font-bold hover:text-error"
                                >
                                    বন্যায় কুমিল্লার ক্ষতি ৩৩৬২ কোটি টাকা
                                </Link>
                                <p className="">
                                    {new Date().toLocaleDateString()}
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <img
                                src="https://cdn.bdnews24.com/bdnews24/media/english/imgAll/2024August/wood-250824-01-1724592621.jpg"
                                alt="Post Image"
                                className="object-cover w-36"
                            />
                            <div className="">
                                <p className="font-bold text-primary">
                                    ক্যাটাগরি
                                </p>
                                <Link
                                    href={""}
                                    className="mb-4 font-bold hover:text-error"
                                >
                                    বন্যায় কুমিল্লার ক্ষতি ৩৩৬২ কোটি টাকা
                                </Link>
                                <p className="">
                                    {new Date().toLocaleDateString()}
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <img
                                src="https://cdn.bdnews24.com/bdnews24/media/english/imgAll/2024August/wood-250824-01-1724592621.jpg"
                                alt="Post Image"
                                className="object-cover w-36"
                            />
                            <div className="">
                                <p className="font-bold text-primary">
                                    ক্যাটাগরি
                                </p>
                                <Link
                                    href={""}
                                    className="mb-4 font-bold hover:text-error"
                                >
                                    বন্যায় কুমিল্লার ক্ষতি ৩৩৬২ কোটি টাকা
                                </Link>
                                <p className="">
                                    {new Date().toLocaleDateString()}
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <img
                                src="https://cdn.bdnews24.com/bdnews24/media/english/imgAll/2024August/wood-250824-01-1724592621.jpg"
                                alt="Post Image"
                                className="object-cover w-36"
                            />
                            <div className="">
                                <p className="font-bold text-primary">
                                    ক্যাটাগরি
                                </p>
                                <Link
                                    href={""}
                                    className="mb-4 font-bold hover:text-error"
                                >
                                    বন্যায় কুমিল্লার ক্ষতি ৩৩৬২ কোটি টাকা
                                </Link>
                                <p className="">
                                    {new Date().toLocaleDateString()}
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <img
                                src="https://cdn.bdnews24.com/bdnews24/media/english/imgAll/2024August/wood-250824-01-1724592621.jpg"
                                alt="Post Image"
                                className="object-cover w-36"
                            />
                            <div className="">
                                <p className="font-bold text-primary">
                                    ক্যাটাগরি
                                </p>
                                <Link
                                    href={""}
                                    className="mb-4 font-bold hover:text-error"
                                >
                                    বন্যায় কুমিল্লার ক্ষতি ৩৩৬২ কোটি টাকা
                                </Link>
                                <p className="">
                                    {new Date().toLocaleDateString()}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </PublicTemplateLayout>
        </>
    );
}
