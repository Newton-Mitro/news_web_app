import PublicTemplateLayout from "@/Layouts/PublicLayout";
import { Head, Link } from "@inertiajs/react";
import { useState, useEffect } from "react";
import axios from "axios";
import ItemAttachmentView from "./ItemAttachmentView";

export default function ArticlesArchive({ auth }: any) {
    const [search, setSearch] = useState("");
    const [year, setYear] = useState("");
    const [month, setMonth] = useState("");
    const [day, setDay] = useState("");
    const [category, setCategory] = useState("");

    const [articles, setArticles] = useState<any[]>([]);
    const [categories, setCategories] = useState<any[]>([]);
    const [archiveData, setArchiveData] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    const formatter = new Intl.DateTimeFormat("bn-BD", {
        dateStyle: "long",
    });

    const fetchArticles = async (page = 1) => {
        setLoading(true);

        try {
            const response = await axios.get(route("public.filterArchive"), {
                params: {
                    search,
                    year,
                    month,
                    day,
                    category,
                    page,
                },
            });

            setArchiveData(response.data.articles);
            setArticles(response.data.articles.data);
            setCategories(response.data.categories);
        } catch (error) {
            console.error("Error fetching articles:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchArticles(1);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        fetchArticles(1);
    };

    const handlePageChange = (page: number) => {
        fetchArticles(page);
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            <Head title="আর্কাইভ" />

            <PublicTemplateLayout auth={auth}>
                <section className="container">
                    {/* Hero */}
                    <div className="mb-8 overflow-hidden border border-dashed border-borderColor bg-surface rounded-3xl ">
                        <div className="p-8 md:p-12">
                            <span className="inline-flex px-3 py-1 mb-4 text-sm font-medium rounded-full bg-secondary text-onSecondary">
                                সংবাদ সংরক্ষণাগার
                            </span>

                            <h1 className="text-3xl font-bold md:text-5xl text-onSurface">
                                আর্কাইভ
                            </h1>

                            <p className="mt-4 text-lg text-onSurface">
                                তারিখ, বিভাগ অথবা কীওয়ার্ড অনুসারে পুরোনো সংবাদ
                                খুঁজুন।
                            </p>
                        </div>
                    </div>

                    {/* Filters */}
                    <div className="p-6 mb-8 border border-dashed border-borderColor bg-surface rounded-3xl ">
                        <form
                            onSubmit={handleSubmit}
                            className="grid grid-cols-1 gap-4 md:grid-cols-6"
                        >
                            <input
                                type="text"
                                placeholder="সংবাদ খুঁজুন..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="px-4 py-3 border rounded-xl border-primary/10 bg-background focus:border-secondary focus:outline-none"
                            />

                            <select
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                                className="px-4 py-3 border rounded-xl border-primary/10 bg-background"
                            >
                                <option value="">বছর নির্বাচন</option>

                                {Array.from(
                                    {
                                        length:
                                            new Date().getFullYear() - 2020 + 1,
                                    },
                                    (_, i) => {
                                        const currentYear =
                                            new Date().getFullYear() - i;

                                        return (
                                            <option
                                                key={currentYear}
                                                value={currentYear}
                                            >
                                                {currentYear}
                                            </option>
                                        );
                                    },
                                )}
                            </select>

                            <select
                                value={month}
                                onChange={(e) => setMonth(e.target.value)}
                                className="px-4 py-3 border rounded-xl border-primary/10 bg-background"
                            >
                                <option value="">মাস নির্বাচন</option>

                                {[...Array(12)].map((_, i) => (
                                    <option
                                        key={i}
                                        value={String(i + 1).padStart(2, "0")}
                                    >
                                        {new Date(0, i).toLocaleString(
                                            "bn-BD",
                                            {
                                                month: "long",
                                            },
                                        )}
                                    </option>
                                ))}
                            </select>

                            <select
                                value={day}
                                onChange={(e) => setDay(e.target.value)}
                                className="px-4 py-3 border rounded-xl border-primary/10 bg-background"
                            >
                                <option value="">দিন নির্বাচন</option>

                                {[...Array(31)].map((_, i) => (
                                    <option
                                        key={i}
                                        value={String(i + 1).padStart(2, "0")}
                                    >
                                        {i + 1}
                                    </option>
                                ))}
                            </select>

                            <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="px-4 py-3 border rounded-xl border-primary/10 bg-background"
                            >
                                <option value="">বিভাগ নির্বাচন</option>

                                {categories.map((cat: any) => (
                                    <option key={cat.id} value={cat.id}>
                                        {cat.name_bn}
                                    </option>
                                ))}
                            </select>

                            <button
                                type="submit"
                                className="px-6 py-3 font-semibold text-white transition rounded-xl bg-secondary hover:opacity-90"
                            >
                                অনুসন্ধান
                            </button>
                        </form>
                    </div>

                    {/* Statistics */}
                    {archiveData && (
                        <div className="grid grid-cols-1 gap-4 mb-8 md:grid-cols-3">
                            <div className="p-6 border border-dashed border-borderColor bg-surface rounded-3xl ">
                                <p className="text-sm text-slate-500">
                                    মোট সংবাদ
                                </p>

                                <h3 className="mt-2 text-3xl font-bold">
                                    {archiveData.total}
                                </h3>
                            </div>

                            <div className="p-6 border border-dashed border-borderColor bg-surface rounded-3xl ">
                                <p className="text-sm text-slate-500">
                                    বর্তমান পৃষ্ঠা
                                </p>

                                <h3 className="mt-2 text-3xl font-bold">
                                    {archiveData.current_page}
                                </h3>
                            </div>

                            <div className="p-6 border border-dashed border-borderColor bg-surface rounded-3xl ">
                                <p className="text-sm text-slate-500">
                                    মোট পৃষ্ঠা
                                </p>

                                <h3 className="mt-2 text-3xl font-bold">
                                    {archiveData.last_page}
                                </h3>
                            </div>
                        </div>
                    )}

                    {/* Loading */}
                    {loading && (
                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                            {[...Array(6)].map((_, index) => (
                                <div
                                    key={index}
                                    className="overflow-hidden border border-dashed border-borderColor bg-surface rounded-3xl animate-pulse"
                                >
                                    <div className="h-64 bg-slate-200" />

                                    <div className="p-6">
                                        <div className="w-24 h-4 mb-4 rounded bg-slate-200" />
                                        <div className="w-full h-8 mb-3 rounded bg-slate-200" />
                                        <div className="w-full h-4 mb-2 rounded bg-slate-200" />
                                        <div className="w-4/5 h-4 rounded bg-slate-200" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Empty State */}
                    {!loading && articles.length === 0 && (
                        <div className="p-12 text-center border border-dashed border-borderColor bg-surface rounded-3xl ">
                            <h3 className="mb-2 text-2xl font-bold">
                                কোনো সংবাদ পাওয়া যায়নি
                            </h3>

                            <p className="text-slate-500">
                                অন্য কোনো ফিল্টার ব্যবহার করে পুনরায় চেষ্টা
                                করুন।
                            </p>
                        </div>
                    )}

                    {/* Articles */}
                    {!loading && articles.length > 0 && (
                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                            {articles.map((article: any) => (
                                <Link
                                    key={article.id}
                                    href={route(
                                        "public.viewArticle",
                                        article.id,
                                    )}
                                    className="overflow-hidden transition-all border border-dashed border-borderColor bg-surface group rounded-3xl hover:-xl"
                                >
                                    <div className="overflow-hidden">
                                        <ItemAttachmentView
                                            article={article}
                                            classes="
                                                w-full
                                                h-64
                                                object-cover
                                                transition
                                                duration-700
                                                group-hover:scale-105
                                            "
                                        />
                                    </div>

                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-secondary text-onSecondary">
                                                {article.category?.name_bn}
                                            </span>

                                            <span className="text-xs text-slate-500">
                                                {article.view_count} ভিউ
                                            </span>
                                        </div>

                                        <h2 className="mb-3 text-xl font-bold transition line-clamp-2 group-hover:text-secondary">
                                            {article.title}
                                        </h2>

                                        <p className="mb-5 text-sm leading-7 text-onSurface line-clamp-3">
                                            {article.summery}
                                        </p>

                                        <div className="flex items-center justify-between pt-4 border-t border-borderColor">
                                            <div className="flex items-center gap-3">
                                                <div className="flex items-center justify-center w-10 h-10 text-sm font-bold text-white rounded-full bg-secondary">
                                                    {article.author?.name?.charAt(
                                                        0,
                                                    )}
                                                </div>

                                                <div>
                                                    <p className="text-sm font-semibold">
                                                        {article.author?.name}
                                                    </p>

                                                    <p className="text-xs text-slate-500">
                                                        {formatter.format(
                                                            new Date(
                                                                article.created_at,
                                                            ),
                                                        )}
                                                    </p>
                                                </div>
                                            </div>

                                            <span className="font-medium text-accent">
                                                বিস্তারিত →
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}

                    {/* Pagination */}
                    {archiveData && archiveData.last_page > 1 && (
                        <div className="flex flex-wrap justify-center gap-2 mt-10">
                            <button
                                onClick={() =>
                                    handlePageChange(
                                        archiveData.current_page - 1,
                                    )
                                }
                                disabled={!archiveData.prev_page_url}
                                className="px-4 py-2 border border-borderColor bg-surface rounded-xl disabled:opacity-50"
                            >
                                পূর্ববর্তী
                            </button>

                            {archiveData.links
                                ?.filter(
                                    (link: any) =>
                                        !link.label.includes("Previous") &&
                                        !link.label.includes("Next"),
                                )
                                .map((link: any, index: number) => {
                                    if (link.label === "...") {
                                        return (
                                            <span
                                                key={index}
                                                className="px-4 py-2"
                                            >
                                                ...
                                            </span>
                                        );
                                    }

                                    return (
                                        <button
                                            key={index}
                                            onClick={() =>
                                                handlePageChange(
                                                    Number(link.label),
                                                )
                                            }
                                            className={`px-4 py-2 rounded-xl border  transition ${
                                                link.active
                                                    ? "bg-secondary text-white border-borderColor"
                                                    : "bg-surface border-borderColor hover:border-secondary"
                                            }`}
                                        >
                                            {link.label}
                                        </button>
                                    );
                                })}

                            <button
                                onClick={() =>
                                    handlePageChange(
                                        archiveData.current_page + 1,
                                    )
                                }
                                disabled={!archiveData.next_page_url}
                                className="px-4 py-2 text-white border-borderColor rounded-xl bg-secondary disabled:opacity-50"
                            >
                                পরবর্তী
                            </button>
                        </div>
                    )}
                </section>
            </PublicTemplateLayout>
        </>
    );
}
