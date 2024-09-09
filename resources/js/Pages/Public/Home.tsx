import {Head, Link} from "@inertiajs/react";
import {PropsWithChildren} from "react";
import {User} from "@/types";
import PublicTemplateLayout from "@/Layouts/PublicLayout";
// import XIcon from "../../assets/svg/x_twitter.png";

export default function Home({auth}: PropsWithChildren<{ auth: User }>) {
    return (
        <>
            <Head title="Home"/>
            <PublicTemplateLayout auth={auth}>
                <section className="flex flex-col gap-4">
                    <div className="container flex flex-col lg:flex-row gap-6">
                        <div
                            className="w-full lg:w-3/12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 md:gap-6 lg:gap-3 lg:divide-y divide-dashed">
                            <div className="first:pt-0 pt-3">
                                <Link href={""} className="text-xl font-bold  mb-4 hover:text-error">বন্যায় কুমিল্লার ক্ষতি ৩৩৬২ কোটি টাকা</Link>
                                <p className="">
                                    দীর্ঘ সময় ধরে শিক্ষার্থীরা সড়ক অবরোধ করে রাখায় হাতিরঝিল, মগবাজার, কারওয়ানবাজার, ফার্মগেইট, বিজয় সরণি, মহাখালী এলাকায় তীব্র যানজটের খবর পাওয়া যাচ্ছে।
                                </p>
                            </div>
                            <div className="first:pt-0 pt-3">
                                <Link href={""} className="text-xl font-bold  mb-4 hover:text-error">বন্যায় কুমিল্লার ক্ষতি ৩৩৬২ কোটি টাকা</Link>
                                <p className="">
                                    দীর্ঘ সময় ধরে শিক্ষার্থীরা সড়ক অবরোধ করে রাখায় হাতিরঝিল, মগবাজার, কারওয়ানবাজার, ফার্মগেইট, বিজয় সরণি, মহাখালী এলাকায় তীব্র যানজটের খবর পাওয়া যাচ্ছে।
                                </p>
                            </div>
                            <div className="first:pt-0 pt-3">
                                <Link href={""} className="text-xl font-bold  mb-4 hover:text-error">বন্যায় কুমিল্লার ক্ষতি ৩৩৬২ কোটি টাকা</Link>
                                <p className="">
                                    দীর্ঘ সময় ধরে শিক্ষার্থীরা সড়ক অবরোধ করে রাখায় হাতিরঝিল, মগবাজার, কারওয়ানবাজার, ফার্মগেইট, বিজয় সরণি, মহাখালী এলাকায় তীব্র যানজটের খবর পাওয়া যাচ্ছে।
                                </p>
                            </div>
                        </div>
                        <div className="w-full lg:w-6/12 order-first lg:order-none md:order-first">
                            <div className="w-full overflow-hidden">
                                <img
                                    src="https://cdn.bdnews24.com/bdnews24/media/english/imgAll/2024August/wood-250824-01-1724592621.jpg"
                                    alt="Post Image"
                                    className="w-full max-h-72 object-cover"/>
                                <div className="pt-2">
                                    <Link href={""} className="text-xl font-bold  mb-4 hover:text-error">বন্যায় কুমিল্লার ক্ষতি ৩৩৬২ কোটি টাকা</Link>
                                    <p className="">
                                        দীর্ঘ সময় ধরে শিক্ষার্থীরা সড়ক অবরোধ করে রাখায় হাতিরঝিল, মগবাজার, কারওয়ানবাজার, ফার্মগেইট, বিজয় সরণি, মহাখালী এলাকায় তীব্র যানজটের খবর পাওয়া যাচ্ছে।
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="w-full lg:w-3/12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 md:gap-6 lg:gap-3 lg:divide-y divide-dashed">
                            <div className="first:pt-0 pt-3">
                                <Link href={""} className="text-xl font-bold  mb-4 hover:text-error">বন্যায় কুমিল্লার ক্ষতি ৩৩৬২ কোটি টাকা</Link>
                                <p className="">
                                    দীর্ঘ সময় ধরে শিক্ষার্থীরা সড়ক অবরোধ করে রাখায় হাতিরঝিল, মগবাজার, কারওয়ানবাজার, ফার্মগেইট, বিজয় সরণি, মহাখালী এলাকায় তীব্র যানজটের খবর পাওয়া যাচ্ছে।
                                </p>
                            </div>
                            <div className="first:pt-0 pt-3">
                                <Link href={""} className="text-xl font-bold  mb-4 hover:text-error">বন্যায় কুমিল্লার ক্ষতি ৩৩৬২ কোটি টাকা</Link>
                                <p className="">
                                    দীর্ঘ সময় ধরে শিক্ষার্থীরা সড়ক অবরোধ করে রাখায় হাতিরঝিল, মগবাজার, কারওয়ানবাজার, ফার্মগেইট, বিজয় সরণি, মহাখালী এলাকায় তীব্র যানজটের খবর পাওয়া যাচ্ছে।
                                </p>
                            </div>
                            <div className="first:pt-0 pt-3">
                                <Link href={""} className="text-xl font-bold  mb-4 hover:text-error">বন্যায় কুমিল্লার ক্ষতি ৩৩৬২ কোটি টাকা</Link>
                                <p className="">
                                    দীর্ঘ সময় ধরে শিক্ষার্থীরা সড়ক অবরোধ করে রাখায় হাতিরঝিল, মগবাজার, কারওয়ানবাজার, ফার্মগেইট, বিজয় সরণি, মহাখালী এলাকায় তীব্র যানজটের খবর পাওয়া যাচ্ছে।
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <button className="rounded bg-secondary hover:bg-secondaryVariant text-onSecondary px-4 py-2">সব খবর</button>
                    </div>
                </section>
                <hr className="my-6 border border-dashed container"/>
                <section className="flex flex-col gap-4">
                    <div className="container">
                        <h2 className="font-extrabold text-2xl">অর্থনীতি</h2>
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
                                    <Link href={""} className="text-xl font-bold  mb-4 hover:text-error">বন্যায় কুমিল্লার ক্ষতি ৩৩৬২ কোটি টাকা</Link>
                                    <p className="">
                                        দীর্ঘ সময় ধরে শিক্ষার্থীরা সড়ক অবরোধ করে রাখায় হাতিরঝিল, মগবাজার, কারওয়ানবাজার, ফার্মগেইট, বিজয় সরণি, মহাখালী এলাকায় তীব্র যানজটের খবর পাওয়া যাচ্ছে।
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
                                    <Link href={""} className="text-xl font-bold  mb-4 hover:text-error">বন্যায় কুমিল্লার ক্ষতি ৩৩৬২ কোটি টাকা</Link>
                                    <p className="">
                                        দীর্ঘ সময় ধরে শিক্ষার্থীরা সড়ক অবরোধ করে রাখায় হাতিরঝিল, মগবাজার, কারওয়ানবাজার, ফার্মগেইট, বিজয় সরণি, মহাখালী এলাকায় তীব্র যানজটের খবর পাওয়া যাচ্ছে।
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4 first:pt-0 pt-3">
                                <img
                                    src="https://cdn.bdnews24.com/bdnews24/media/english/imgAll/2024August/wood-250824-01-1724592621.jpg"
                                    alt="Post Image"
                                    className="w-36 object-cover"/>
                                <div className="">
                                    <Link href={""} className="text-xl font-bold  mb-4 hover:text-error">বন্যায় কুমিল্লার ক্ষতি ৩৩৬২ কোটি টাকা</Link>
                                    <p className="">
                                        দীর্ঘ সময় ধরে শিক্ষার্থীরা সড়ক অবরোধ করে রাখায় হাতিরঝিল, মগবাজার, কারওয়ানবাজার, ফার্মগেইট, বিজয় সরণি, মহাখালী এলাকায় তীব্র যানজটের খবর পাওয়া যাচ্ছে।
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4 first:pt-0 pt-3">
                                <img
                                    src="https://cdn.bdnews24.com/bdnews24/media/english/imgAll/2024August/wood-250824-01-1724592621.jpg"
                                    alt="Post Image"
                                    className="w-36 object-cover"/>
                                <div className="">
                                    <Link href={""} className="text-xl font-bold  mb-4 hover:text-error">বন্যায় কুমিল্লার ক্ষতি ৩৩৬২ কোটি টাকা</Link>
                                    <p className="">
                                        দীর্ঘ সময় ধরে শিক্ষার্থীরা সড়ক অবরোধ করে রাখায় হাতিরঝিল, মগবাজার, কারওয়ানবাজার, ফার্মগেইট, বিজয় সরণি, মহাখালী এলাকায় তীব্র যানজটের খবর পাওয়া যাচ্ছে।
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            className="rounded bg-secondary hover:bg-secondaryVariant text-onSecondary px-4 py-2">আরও পড়ুন
                        </button>
                    </div>
                </section>
                <hr className="my-6 border border-dashed container"/>
                <section className="flex flex-col gap-4">
                    <div className="container">
                        <h2 className="font-extrabold text-2xl">বিশ্ব</h2>
                        <span className="border-t-4 border-error">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    </div>
                    <div className="container flex flex-col lg:flex-row gap-6">
                        <div className="w-full lg:w-6/12 flex flex-col gap-3 divide-y divide-dashed">
                            <div className="flex gap-4">
                                <img
                                    src="https://cdn.bdnews24.com/bdnews24/media/english/imgAll/2024August/wood-250824-01-1724592621.jpg"
                                    alt="Post Image"
                                    className="w-36 object-cover"/>
                                <div className="">
                                    <Link href={""} className="text-xl font-bold  mb-4 hover:text-error">বন্যায় কুমিল্লার ক্ষতি ৩৩৬২ কোটি টাকা</Link>
                                    <p className="">
                                        দীর্ঘ সময় ধরে শিক্ষার্থীরা সড়ক অবরোধ করে রাখায় হাতিরঝিল, মগবাজার, কারওয়ানবাজার, ফার্মগেইট, বিজয় সরণি, মহাখালী এলাকায় তীব্র যানজটের খবর পাওয়া যাচ্ছে।
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4 first:pt-0 pt-3">
                                <img
                                    src="https://cdn.bdnews24.com/bdnews24/media/english/imgAll/2024August/wood-250824-01-1724592621.jpg"
                                    alt="Post Image"
                                    className="w-36 object-cover"/>
                                <div className="">
                                    <Link href={""} className="text-xl font-bold  mb-4 hover:text-error">বন্যায় কুমিল্লার ক্ষতি ৩৩৬২ কোটি টাকা</Link>
                                    <p className="">
                                        দীর্ঘ সময় ধরে শিক্ষার্থীরা সড়ক অবরোধ করে রাখায় হাতিরঝিল, মগবাজার, কারওয়ানবাজার, ফার্মগেইট, বিজয় সরণি, মহাখালী এলাকায় তীব্র যানজটের খবর পাওয়া যাচ্ছে।
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4 first:pt-0 pt-3">
                                <img
                                    src="https://cdn.bdnews24.com/bdnews24/media/english/imgAll/2024August/wood-250824-01-1724592621.jpg"
                                    alt="Post Image"
                                    className="w-36 object-cover"/>
                                <div className="">
                                    <Link href={""} className="text-xl font-bold  mb-4 hover:text-error">বন্যায় কুমিল্লার ক্ষতি ৩৩৬২ কোটি টাকা</Link>
                                    <p className="">
                                        দীর্ঘ সময় ধরে শিক্ষার্থীরা সড়ক অবরোধ করে রাখায় হাতিরঝিল, মগবাজার, কারওয়ানবাজার, ফার্মগেইট, বিজয় সরণি, মহাখালী এলাকায় তীব্র যানজটের খবর পাওয়া যাচ্ছে।
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-6/12 order-first lg:order-none">
                            <div className="w-full overflow-hidden">
                                <img
                                    src="https://cdn.bdnews24.com/bdnews24/media/english/imgAll/2024August/wood-250824-01-1724592621.jpg"
                                    alt="Post Image"
                                    className="w-full max-h-72 object-cover"/>
                                <div className="pt-2">
                                    <Link href={""} className="text-xl font-bold  mb-4 hover:text-error">বন্যায় কুমিল্লার ক্ষতি ৩৩৬২ কোটি টাকা</Link>
                                    <p className="">
                                        দীর্ঘ সময় ধরে শিক্ষার্থীরা সড়ক অবরোধ করে রাখায় হাতিরঝিল, মগবাজার, কারওয়ানবাজার, ফার্মগেইট, বিজয় সরণি, মহাখালী এলাকায় তীব্র যানজটের খবর পাওয়া যাচ্ছে।
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            className="rounded bg-secondary hover:bg-secondaryVariant text-onSecondary px-4 py-2">আরও পড়ুন
                        </button>
                    </div>
                </section>
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
