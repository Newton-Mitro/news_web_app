import PublicTemplateLayout from "@/Layouts/PublicLayout";
import { User } from "@/types";
import { Head, Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";
// import XIcon from "../../assets/svg/x_twitter.png";

export default function NewsCategory({
    auth,
}: PropsWithChildren<{ auth: User }>) {
    const pathname = window.location.pathname;
    const segments = pathname.split("/").filter((segment) => segment);
    const lastSegment =
        segments.length > 0 ? segments[segments.length - 1] : "";

    return (
        <>
            <Head title={lastSegment} />
            <PublicTemplateLayout auth={auth}>
                <section className="flex flex-col gap-4">
                    <div className="container">
                        <h2 className="text-2xl font-extrabold">অর্থনীতি</h2>
                        <span className="border-t-4 border-error">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                    </div>
                    <div className="container flex flex-col gap-6 lg:flex-row">
                        <div className="order-first w-full lg:w-6/12 md:order-none">
                            <div className="w-full overflow-hidden">
                                <img
                                    src="https://cdn.bdnews24.com/bdnews24/media/english/imgAll/2024August/wood-250824-01-1724592621.jpg"
                                    alt="Post Image"
                                    className="object-cover w-full max-h-72"
                                />
                                <div className="pt-2">
                                    <Link
                                        href={""}
                                        className="mb-4 font-bold hover:text-error"
                                    >
                                        বন্যায় কুমিল্লার ক্ষতি ৩৩৬২ কোটি টাকা
                                    </Link>
                                    <p className="">
                                        দীর্ঘ সময় ধরে শিক্ষার্থীরা সড়ক অবরোধ করে
                                        রাখায় হাতিরঝিল, মগবাজার, কারওয়ানবাজার,
                                        ফার্মগেইট, বিজয় সরণি, মহাখালী এলাকায়
                                        তীব্র যানজটের খবর পাওয়া যাচ্ছে।
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-full gap-3 divide-y lg:w-6/12 divide-dashed">
                            <div className="flex gap-4 pt-3 first:pt-0">
                                <img
                                    src="https://cdn.bdnews24.com/bdnews24/media/english/imgAll/2024August/wood-250824-01-1724592621.jpg"
                                    alt="Post Image"
                                    className="hidden object-cover w-36 md:block"
                                />
                                <div className="">
                                    <Link
                                        href={""}
                                        className="mb-4 font-bold hover:text-error"
                                    >
                                        বন্যায় কুমিল্লার ক্ষতি ৩৩৬২ কোটি টাকা
                                    </Link>
                                    <p className="">
                                        দীর্ঘ সময় ধরে শিক্ষার্থীরা সড়ক অবরোধ করে
                                        রাখায় হাতিরঝিল, মগবাজার, কারওয়ানবাজার,
                                        ফার্মগেইট, বিজয় সরণি, মহাখালী এলাকায়
                                        তীব্র যানজটের খবর পাওয়া যাচ্ছে।
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4 pt-3 first:pt-0">
                                <img
                                    src="https://cdn.bdnews24.com/bdnews24/media/english/imgAll/2024August/wood-250824-01-1724592621.jpg"
                                    alt="Post Image"
                                    className="hidden object-cover w-36 md:block"
                                />
                                <div className="">
                                    <Link
                                        href={""}
                                        className="mb-4 font-bold hover:text-error"
                                    >
                                        বন্যায় কুমিল্লার ক্ষতি ৩৩৬২ কোটি টাকা
                                    </Link>
                                    <p className="">
                                        দীর্ঘ সময় ধরে শিক্ষার্থীরা সড়ক অবরোধ করে
                                        রাখায় হাতিরঝিল, মগবাজার, কারওয়ানবাজার,
                                        ফার্মগেইট, বিজয় সরণি, মহাখালী এলাকায়
                                        তীব্র যানজটের খবর পাওয়া যাচ্ছে।
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4 pt-3 first:pt-0">
                                <img
                                    src="https://cdn.bdnews24.com/bdnews24/media/english/imgAll/2024August/wood-250824-01-1724592621.jpg"
                                    alt="Post Image"
                                    className="hidden object-cover w-36 md:block"
                                />
                                <div className="">
                                    <Link
                                        href={""}
                                        className="mb-4 font-bold hover:text-error"
                                    >
                                        বন্যায় কুমিল্লার ক্ষতি ৩৩৬২ কোটি টাকা
                                    </Link>
                                    <p className="">
                                        দীর্ঘ সময় ধরে শিক্ষার্থীরা সড়ক অবরোধ করে
                                        রাখায় হাতিরঝিল, মগবাজার, কারওয়ানবাজার,
                                        ফার্মগেইট, বিজয় সরণি, মহাখালী এলাকায়
                                        তীব্র যানজটের খবর পাওয়া যাচ্ছে।
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <hr className="container my-6 border border-dashed" />
                <section className="flex flex-col gap-4">
                    <div className="container">
                        <h2 className="text-2xl font-extrabold">আরও পড়ুন</h2>
                        <span className="border-t-4 border-error">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                    </div>
                    <div className="container flex flex-col gap-6 md:flex-row">
                        <div className="grid grid-cols-1 gap-6 divide-y md:divide-none md:grid-cols-2 lg:grid-cols-4 divide-dashed">
                            <div className="flex flex-col gap-4">
                                <img
                                    src="https://cdn.bdnews24.com/bdnews24/media/english/imgAll/2024August/wood-250824-01-1724592621.jpg"
                                    alt="Post Image"
                                    className="object-cover"
                                />
                                <div className="">
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
                            <div className="flex flex-col gap-4">
                                <img
                                    src="https://cdn.bdnews24.com/bdnews24/media/english/imgAll/2024August/wood-250824-01-1724592621.jpg"
                                    alt="Post Image"
                                    className="object-cover"
                                />
                                <div className="">
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
                            <div className="flex flex-col gap-4">
                                <img
                                    src="https://cdn.bdnews24.com/bdnews24/media/english/imgAll/2024August/wood-250824-01-1724592621.jpg"
                                    alt="Post Image"
                                    className="object-cover"
                                />
                                <div className="">
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
                            <div className="flex flex-col gap-4">
                                <img
                                    src="https://cdn.bdnews24.com/bdnews24/media/english/imgAll/2024August/wood-250824-01-1724592621.jpg"
                                    alt="Post Image"
                                    className="object-cover"
                                />
                                <div className="">
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
                            <div className="flex flex-col gap-4">
                                <img
                                    src="https://cdn.bdnews24.com/bdnews24/media/english/imgAll/2024August/wood-250824-01-1724592621.jpg"
                                    alt="Post Image"
                                    className="object-cover"
                                />
                                <div className="">
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
                            <div className="flex flex-col gap-4">
                                <img
                                    src="https://cdn.bdnews24.com/bdnews24/media/english/imgAll/2024August/wood-250824-01-1724592621.jpg"
                                    alt="Post Image"
                                    className="object-cover"
                                />
                                <div className="">
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
                    </div>
                    <div className="flex items-center justify-center">
                        <button className="px-4 py-2 rounded bg-secondary hover:bg-secondaryVariant text-onSecondary">
                            আরও পড়ুন
                        </button>
                    </div>
                </section>
            </PublicTemplateLayout>
        </>
    );
}
