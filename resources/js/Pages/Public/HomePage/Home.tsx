import PublicTemplateLayout from "@/Layouts/PublicLayout";
import { Head, Link } from "@inertiajs/react";
import AdBanner from "./Sections/AdBanner";
import { formatDistance } from "date-fns";
import { bn } from "date-fns/locale";
import ItemAttachmentView from "../ItemAttachmentView";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home(props: any) {
    const {
        auth,
        latestArticles,
        trendingNow,
        nationalArticles,
        globalArticles,
        dcArticles,
        communityArticles,
        galleryData
    } = props;

    const formatter = new Intl.DateTimeFormat("bn-BD", {
        dateStyle: "long",
    });

    console.log(galleryData)

    return (
        <>
            <Head title="Home" />

            <PublicTemplateLayout auth={auth}>
                <div className="min-h-screen ">
                    {/* Content Area */}
                    <section className="container">
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                            {/* Main Content */}
                            <main className="lg:col-span-8">
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                    {latestArticles?.map((item: any) => (
                                        <Link
                                            key={item.id}
                                            href={route(
                                                "public.viewArticle",
                                                item.id,
                                            )}
                                            className="overflow-hidden transition-all border border-dashed border-borderColor bg-surface group rounded-3xl hover:-lg"
                                        >
                                            <div className="overflow-hidden">
                                                <ItemAttachmentView
                                                    article={item}
                                                    classes="
                                                                           h-60
                                                                           w-full
                                                                           object-cover
                                                                           transition
                                                                           duration-700
                                                                           group-hover:scale-105
                                                                       "
                                                />
                                            </div>

                                            <div className="p-6">
                                                <h3 className="text-lg font-bold md:text-xl line-clamp-2 text-onSurface hover:text-secondary">
                                                    {item.title}
                                                </h3>

                                                {item.summery && (
                                                    <p className="mt-3 text-sm text-onSurface line-clamp-3">
                                                        {item.summery}
                                                    </p>
                                                )}

                                                <div className="flex items-center gap-3 pt-4 mt-4 border-t border-dashed border-borderColor">
                                                    <div className="flex items-center justify-center w-8 h-8 text-xs font-bold text-white rounded-full bg-secondary">
                                                        {item.author?.name?.charAt(
                                                            0,
                                                        )}
                                                    </div>

                                                    <div>
                                                        <p className="text-sm font-medium">
                                                            {item.author?.name}
                                                        </p>

                                                        <p className="text-xs text-slate-500">
                                                            {formatter.format(
                                                                new Date(
                                                                    item.created_at,
                                                                ),
                                                            )}
                                                        </p>

                                                        <p className="text-xs text-slate-400">
                                                            {formatDistance(
                                                                new Date(
                                                                    item.created_at,
                                                                ),
                                                                new Date(),
                                                                {
                                                                    addSuffix: true,
                                                                    locale: bn,
                                                                },
                                                            )}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </main>

                            {/* Sidebar */}
                            <aside className="lg:col-span-4">
                                <div className="sticky space-y-6 top-24">
                                    <div className="p-6 border border-dashed bg-surface rounded-3xl border-borderColor">
                                        <h3 className="mb-4 text-lg font-semibold">
                                            গ্যালারি
                                        </h3>

                                        <div className="space-y-4">
                                            <Swiper
                                                modules={[
                                                    Autoplay,
                                                    Navigation,
                                                    Pagination,
                                                ]}
                                                navigation
                                                pagination={{ clickable: true }}
                                                autoplay={{
                                                    delay: 3000,
                                                    disableOnInteraction: false,
                                                }}
                                                loop={true}
                                                spaceBetween={16}
                                                slidesPerView={1}
                                                className="gallery-slider"
                                            >
                                                {galleryData?.map(
                                                    (item: any) => (
                                                        <SwiperSlide
                                                            key={item.id}
                                                        >
                                                            <div className="overflow-hidden rounded-xl bg-background">
                                                                <img
                                                                    src={
                                                                        item.attachment_url
                                                                    }
                                                                    alt={
                                                                        item.title ??
                                                                        "Gallery"
                                                                    }
                                                                    className="object-contain w-full h-56 transition-transform duration-300 hover:scale-105"
                                                                />

                                                                
                                                            </div>
                                                        </SwiperSlide>
                                                    ),
                                                )}
                                            </Swiper>
                                        </div>
                                    </div>
                                    {/* Popular */}
                                    <div className="p-6 border border-dashed bg-surface rounded-3xl border-borderColor">
                                        <h3 className="mb-4 text-lg font-semibold">
                                            জনপ্রিয় সংবাদ
                                        </h3>

                                        <div className="space-y-4">
                                            {trendingNow.map(
                                                (item: any, index: number) => (
                                                    <Link
                                                        key={item.id}
                                                        href={route(
                                                            "public.viewArticle",
                                                            item.id,
                                                        )}
                                                        className="flex gap-4 hover:text-secondary"
                                                    >
                                                        <span className="text-2xl font-bold text-onSurface">
                                                            {String(
                                                                index + 1,
                                                            ).padStart(2, "0")}
                                                        </span>

                                                        <span className="line-clamp-2">
                                                            {item.title}
                                                        </span>
                                                    </Link>
                                                ),
                                            )}
                                        </div>
                                    </div>

                                    {/* Large Advertisement */}
                                    <div className="p-6 border border-dashed bg-surface rounded-3xl border-borderColor">
                                        <h3 className="mb-2 font-semibold">
                                            বিজ্ঞাপন
                                        </h3>

                                        <img
                                            src="/300x600.jpeg"
                                            alt="Advertisement"
                                            className="w-full h-auto rounded-lg"
                                        />

                                        {/* <div className="flex flex-col items-center justify-center h-[500px] rounded-xl border-2 border-dashed border-borderColor text-slate-400">
                                                               <span className="text-lg font-medium">
                                                                   300 × 600
                                                               </span>
                                                               <span className="text-sm">
                                                                   Half Page
                                                               </span>
                                                               <span className="mt-1 text-xs">
                                                                   High Visibility Display Ad
                                                               </span>
                                                           </div> */}
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </section>

                    {/* Mid Ad */}
                    <div className="container my-12">
                        <AdBanner size="970x250" />
                    </div>

                    <div className="container grid grid-cols-1 gap-2 mb-20 md:grid-cols-4">
                        <section className="p-6 border border-dashed bg-surface rounded-3xl border-borderColor">
                            <div className="flex items-center justify-between mb-8 ">
                                <div className="flex items-center gap-4 ">
                                    <div className="w-2 h-10 rounded-full bg-secondary" />

                                    <h2 className="text-2xl font-black ">
                                        জাতীয়
                                    </h2>
                                </div>
                            </div>

                            <div className="space-y-4 lg:col-span-6">
                                {nationalArticles.map((article: any) => (
                                    <li
                                        key={article.id}
                                        className="hover:text-primary hover:underline"
                                    >
                                        <Link
                                            href={route(
                                                "public.viewArticle",
                                                article.id,
                                            )}
                                        >
                                            {article.title}
                                        </Link>
                                    </li>
                                ))}
                            </div>
                        </section>

                        <section className="p-6 border border-dashed bg-surface rounded-3xl border-borderColor">
                            <div className="flex items-center justify-between mb-8 ">
                                <div className="flex items-center gap-4 ">
                                    <div className="w-2 h-10 rounded-full bg-secondary" />

                                    <h2 className="text-2xl font-black ">
                                        আন্তর্জাতিক
                                    </h2>
                                </div>
                            </div>

                            <div className="space-y-4 lg:col-span-6">
                                {globalArticles.map((article: any) => (
                                    <li
                                        key={article.id}
                                        className="hover:text-primary hover:underline"
                                    >
                                        <Link
                                            href={route(
                                                "public.viewArticle",
                                                article.id,
                                            )}
                                        >
                                            {article.title}
                                        </Link>
                                    </li>
                                ))}
                            </div>
                        </section>

                        <section className="p-6 border border-dashed bg-surface rounded-3xl border-borderColor">
                            <div className="flex items-center justify-between mb-8 ">
                                <div className="flex items-center gap-4 ">
                                    <div className="w-2 h-10 rounded-full bg-secondary" />

                                    <h2 className="text-2xl font-black ">
                                        ঢাকা ক্রেডিট
                                    </h2>
                                </div>
                            </div>

                            <div className="space-y-4 lg:col-span-6">
                                {dcArticles.map((article: any) => (
                                    <li
                                        key={article.id}
                                        className="hover:text-primary hover:underline"
                                    >
                                        <Link
                                            href={route(
                                                "public.viewArticle",
                                                article.id,
                                            )}
                                        >
                                            {article.title}
                                        </Link>
                                    </li>
                                ))}
                            </div>
                        </section>

                        <section className="p-6 border border-dashed bg-surface rounded-3xl border-borderColor">
                            <div className="flex items-center justify-between mb-8 ">
                                <div className="flex items-center gap-4 ">
                                    <div className="w-2 h-10 rounded-full bg-secondary" />

                                    <h2 className="text-2xl font-black ">
                                        কমিউনিটি
                                    </h2>
                                </div>
                            </div>

                            <div className="space-y-4 lg:col-span-6">
                                {communityArticles.map((article: any) => (
                                    <li
                                        key={article.id}
                                        className="hover:text-primary hover:underline"
                                    >
                                        <Link
                                            href={route(
                                                "public.viewArticle",
                                                article.id,
                                            )}
                                        >
                                            {article.title}
                                        </Link>
                                    </li>
                                ))}
                            </div>
                        </section>
                    </div>

                    <div className="container my-12">
                        <AdBanner size="970x250" />
                    </div>

                    {/* Bangladesh */}
                    {/* <NewsSection
                        title="জাতীয়"
                        articles={nationalArticles}
                        category="National"
                    /> */}

                    {/* <div className="container my-12">
                        <AdBanner size="970x90" />
                    </div> */}

                    {/* World */}
                    {/* <NewsSection
                        title="আন্তর্জাতিক"
                        articles={globalArticles}
                        category="International"
                    /> */}

                    {/* <div className="container my-12">
                        <AdBanner size="970x250" />
                    </div> */}

                    {/* Economy */}
                    {/* <NewsSection
                        title="ঢাকা ক্রেডিট"
                        articles={dcArticles}
                        category="Dhaka Credit"
                    /> */}
                </div>
            </PublicTemplateLayout>
        </>
    );
}
