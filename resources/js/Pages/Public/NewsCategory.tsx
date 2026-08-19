import { useState } from "react";
import { Head, Link } from "@inertiajs/react";
import PublicTemplateLayout from "@/Layouts/PublicLayout";
import ItemAttachmentView from "./ItemAttachmentView";
import axios from "axios";
import { formatDistance } from "date-fns";
import { bn } from "date-fns/locale";

export default function NewsCategory({
    auth,
    latestNews,
    popularArticles,
    category,
}: any) {
    const formatter = new Intl.DateTimeFormat("bn-BD", {
        dateStyle: "long",
    });

    const [articles, setArticles] = useState(latestNews?.data || []);
    const [currentPage, setCurrentPage] = useState(latestNews?.current_page);
    const [lastPage, setLastPage] = useState(latestNews?.last_page);
    const [isLoading, setIsLoading] = useState(false);

    const loadMoreArticles = async () => {
        if (currentPage >= lastPage || isLoading) return;

        setIsLoading(true);

        try {
            const response = await axios.get(
                route("public.moreByCategory", {
                    category: category?.name,
                    page: currentPage + 1,
                }),
            );

            const {
                data: newArticles,
                current_page,
                last_page,
            } = response.data;

            setArticles((prev: any) => [...prev, ...newArticles]);
            setCurrentPage(current_page);
            setLastPage(last_page);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Head title={category?.name_bn}>
                <meta
                    name="description"
                    content={`সর্বশেষ ${category?.name_bn} সংবাদ, বিশ্লেষণ, মতামত ও বিশেষ প্রতিবেদন`}
                />
            </Head>

            <PublicTemplateLayout auth={auth}>
                <section className="container">
                    {/* Category Header */}
                    <div className="mb-8 overflow-hidden border border-dashed border-borderColor bg-surface rounded-3xl">
                        <div className="p-8 md:p-12">
                            <span className="inline-flex px-3 py-1 mb-4 text-sm font-medium rounded-full bg-secondary text-onSecondary">
                                সংবাদ বিভাগ
                            </span>

                            <h1 className="text-3xl font-bold md:text-5xl">
                                {category?.name_bn}
                            </h1>

                            <p className="max-w-3xl mt-4 text-lg text-onSurface">
                                সর্বশেষ {category?.name_bn} সংবাদ, বিশ্লেষণ,
                                মতামত ও বিশেষ প্রতিবেদন।
                            </p>
                        </div>
                    </div>

                    {/* Content Area */}
                    <section>
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                            {/* Main Content */}
                            <main className="lg:col-span-8">
                                <div className="flex items-center justify-between mb-8">
                                    <h2 className="text-3xl font-bold">
                                        সর্বশেষ সংবাদ
                                    </h2>
                                </div>

                                <div className="grid gap-6 md:grid-cols-2">
                                    {articles?.map((item: any) => (
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

                                {/* Inline Advertisement */}
                                <div className="p-6 my-10 border border-dashed bg-surface border-borderColor rounded-3xl">
                                    <h3 className="mb-2 font-semibold">
                                        বিজ্ঞাপন
                                    </h3>

                                    <img
                                        src="/728x90.jpeg"
                                        alt="Advertisement"
                                        className="w-full h-auto rounded-lg"
                                    />
                                </div>

                                {/* Load More */}
                                {currentPage < lastPage && (
                                    <div className="flex justify-center pt-4">
                                        <button
                                            onClick={loadMoreArticles}
                                            disabled={isLoading}
                                            className="px-8 py-4 font-semibold text-white transition rounded-full bg-secondary hover:opacity-90"
                                        >
                                            {isLoading
                                                ? "লোড হচ্ছে..."
                                                : "আরও সংবাদ দেখুন"}
                                        </button>
                                    </div>
                                )}
                            </main>

                            {/* Sidebar */}
                            <aside className="lg:col-span-4">
                                <div className="sticky space-y-6 top-24">
                                    
                                    {/* Popular */}
                                    <div className="p-6 border border-dashed bg-surface rounded-3xl border-borderColor">
                                        <h3 className="mb-4 text-lg font-semibold">
                                            জনপ্রিয় সংবাদ
                                        </h3>

                                        <div className="space-y-4">
                                            {popularArticles.map(
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
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </section>
                </section>
            </PublicTemplateLayout>
        </>
    );
}
