import PublicTemplateLayout from "@/Layouts/PublicLayout";
import { Head, Link } from "@inertiajs/react";
// import XIcon from "../../assets/svg/x_twitter.png";

export default function Home({
    auth,
    sectionOneLeft,
    sectionOneRight,
    sectionOneMiddle,
}: any) {
    console.log(sectionOneLeft, sectionOneRight, sectionOneMiddle);

    return (
        <>
            <Head title="Home" />
            <PublicTemplateLayout auth={auth}>
                <section className="flex flex-col gap-4">
                    <div className="container flex flex-col gap-6 lg:flex-row">
                        <div className="grid w-full grid-cols-1 lg:w-3/12 md:grid-cols-3 lg:grid-cols-1 md:gap-6 lg:gap-3 lg:divide-y divide-dashed">
                            {sectionOneLeft.map(
                                (article: any, index: number) => {
                                    return (
                                        <div
                                            className="pt-3 first:pt-0"
                                            key={article.id}
                                        >
                                            <Link
                                                href={""}
                                                className="mb-4 text-lg font-bold leading-tight text-start hover:text-error"
                                            >
                                                {article.title}
                                            </Link>
                                            <p className="">
                                                {article.summery}
                                            </p>
                                        </div>
                                    );
                                }
                            )}
                        </div>
                        <div className="order-first w-full lg:w-6/12 lg:order-none md:order-first">
                            <div className="w-full overflow-hidden">
                                <img
                                    src={
                                        sectionOneMiddle[0]?.attachments[0]?.url
                                    }
                                    alt="Post Image"
                                    className="object-cover w-full max-h-72"
                                />
                                <div className="pt-2">
                                    <Link
                                        href={""}
                                        className="mb-4 text-xl font-bold hover:text-error"
                                    >
                                        {sectionOneMiddle[0]?.title}
                                    </Link>
                                    <p className="">
                                        {sectionOneMiddle[0]?.summery}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="grid w-full grid-cols-1 lg:w-3/12 md:grid-cols-3 lg:grid-cols-1 md:gap-6 lg:gap-3 lg:divide-y divide-dashed">
                            {sectionOneRight.map(
                                (article: any, index: number) => {
                                    return (
                                        <div
                                            className="pt-3 first:pt-0"
                                            key={article.id}
                                        >
                                            <Link
                                                href={""}
                                                className="mb-4 text-lg font-bold hover:text-error"
                                            >
                                                {article.title}
                                            </Link>
                                            <p className="">
                                                {article.summery}
                                            </p>
                                        </div>
                                    );
                                }
                            )}
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <button className="px-4 py-2 rounded bg-secondary hover:bg-secondaryVariant text-onSecondary">
                            সব খবর
                        </button>
                    </div>
                </section>
                <hr className="container my-6 border border-dashed" />
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
                                        className="mb-4 text-xl font-bold hover:text-error"
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
                                    className="object-cover w-36"
                                />
                                <div className="">
                                    <Link
                                        href={""}
                                        className="mb-4 text-xl font-bold hover:text-error"
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
                                    className="object-cover w-36"
                                />
                                <div className="">
                                    <Link
                                        href={""}
                                        className="mb-4 text-xl font-bold hover:text-error"
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
                                    className="object-cover w-36"
                                />
                                <div className="">
                                    <Link
                                        href={""}
                                        className="mb-4 text-xl font-bold hover:text-error"
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
                    <div className="flex items-center justify-center">
                        <button className="px-4 py-2 rounded bg-secondary hover:bg-secondaryVariant text-onSecondary">
                            আরও পড়ুন
                        </button>
                    </div>
                </section>
                <hr className="container my-6 border border-dashed" />
                <section className="flex flex-col gap-4">
                    <div className="container">
                        <h2 className="text-2xl font-extrabold">বিশ্ব</h2>
                        <span className="border-t-4 border-error">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>
                    </div>
                    <div className="container flex flex-col gap-6 lg:flex-row">
                        <div className="flex flex-col w-full gap-3 divide-y lg:w-6/12 divide-dashed">
                            <div className="flex gap-4">
                                <img
                                    src="https://cdn.bdnews24.com/bdnews24/media/english/imgAll/2024August/wood-250824-01-1724592621.jpg"
                                    alt="Post Image"
                                    className="object-cover w-36"
                                />
                                <div className="">
                                    <Link
                                        href={""}
                                        className="mb-4 text-xl font-bold hover:text-error"
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
                                    className="object-cover w-36"
                                />
                                <div className="">
                                    <Link
                                        href={""}
                                        className="mb-4 text-xl font-bold hover:text-error"
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
                                    className="object-cover w-36"
                                />
                                <div className="">
                                    <Link
                                        href={""}
                                        className="mb-4 text-xl font-bold hover:text-error"
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
                        <div className="order-first w-full lg:w-6/12 lg:order-none">
                            <div className="w-full overflow-hidden">
                                <img
                                    src="https://cdn.bdnews24.com/bdnews24/media/english/imgAll/2024August/wood-250824-01-1724592621.jpg"
                                    alt="Post Image"
                                    className="object-cover w-full max-h-72"
                                />
                                <div className="pt-2">
                                    <Link
                                        href={""}
                                        className="mb-4 text-xl font-bold hover:text-error"
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
                    <div className="flex items-center justify-center">
                        <button className="px-4 py-2 rounded bg-secondary hover:bg-secondaryVariant text-onSecondary">
                            আরও পড়ুন
                        </button>
                    </div>
                </section>
                {/* <section className="container flex items-center gap-2">
                    <FacebookShareButton url={"http://10.77.77.22:8000/"} title={"title"}>
                        <FacebookIcon size={32} round={true}/>
                    </FacebookShareButton>
                    <TwitterShareButton url={"http://10.77.77.22:8000/"} title={"title"}>
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500">
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
