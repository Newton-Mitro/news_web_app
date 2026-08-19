import { useState } from "react";
import { Head, Link } from "@inertiajs/react";
import PublicTemplateLayout from "@/Layouts/PublicLayout";
import { formatDistance } from "date-fns";
import { bn } from "date-fns/locale";

export default function NewsCategory({
    auth,
    popularArticles,
    publication,
}: any) {
    return (
        <>
            <Head title={"প্রকাশনা"}>
                <meta
                    name="description"
                    content={`সর্বশেষ প্রকাশনা সংবাদ, বিশ্লেষণ, মতামত ও বিশেষ প্রতিবেদন`}
                />
            </Head>

            <PublicTemplateLayout auth={auth}>
                <section className="container">
                    {/* Category Header */}
                    <div className="mb-8 overflow-hidden border border-dashed border-borderColor bg-surface rounded-3xl">
                        <div className="p-8 md:p-12">
                            <span className="inline-flex px-3 py-1 mb-4 text-sm font-medium rounded-full bg-secondary text-onSecondary">
                                প্রকাশনা বিভাগ
                            </span>

                            <h1 className="text-3xl font-bold md:text-5xl">
                                প্রকাশনা
                            </h1>

                            <p className="max-w-3xl mt-4 text-lg text-onSurface">
                                সর্বশেষ প্রকাশনা সংবাদ, বিশ্লেষণ, মতামত ও বিশেষ
                                প্রতিবেদন।
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
                                        সর্বশেষ প্রকাশনা
                                    </h2>
                                </div>

                                <div className="grid gap-6 md:grid-cols-2">
                                    {publication?.map((item: any) => (
                                        <div
                                            key={item.id}
                                            className="overflow-hidden border rounded-xl bg-surface border-borderColor"
                                        >
                                            {/* PDF Preview */}
                                            <iframe
                                                src={item.attachment_url}
                                                title={item.title}
                                                className="w-full h-[400px]"
                                            />

                                            {/* Information */}
                                            <div className="p-4">
                                                <h2 className="text-lg font-semibold">
                                                    {item.title}
                                                </h2>

                                                <p className="mt-1 text-sm text-onSurface/70">
                                                    প্রকাশের তারিখ:{" "}
                                                    {new Date(
                                                        item.publish_date,
                                                    ).toLocaleDateString(
                                                        "bn-BD",
                                                    )}
                                                </p>

                                                <a
                                                    href={item.attachment_url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-block px-4 py-2 mt-4 text-sm font-semibold rounded-md bg-primary text-onPrimary hover:bg-primaryVariant"
                                                >
                                                    PDF দেখুন
                                                </a>
                                            </div>
                                        </div>
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
