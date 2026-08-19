import { Link } from "@inertiajs/react";
import ItemAttachmentView from "./ItemAttachmentView";
import TrendingWidget from "./TrendingWidget";

export default function HeroSection({ title, articles, category }: any) {
    if (!articles?.length) return null;

    const featured = articles[0];
    return (
        <section className="container mb-16">
            <div className="grid gap-8 lg:grid-cols-12">
                <div className="lg:col-span-8">
                    <Link
                        href={route("public.viewArticle", featured.id)}
                        className="block overflow-hidden rounded-[32px] group"
                    >
                        <div className="relative">
                            <ItemAttachmentView
                                article={featured}
                                classes="
                                h-[650px]
                                w-full
                                object-cover
                                transition
                                duration-700
                                group-hover:scale-105
                                "
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                            <div className="absolute bottom-0 p-10 text-white">
                                <span className="px-4 py-2 text-sm font-semibold rounded-full bg-secondary">
                                    প্রধান সংবাদ
                                </span>

                                <h1 className="mt-5 text-3xl font-black leading-tight ">
                                    {featured.title}
                                </h1>

                                <p className="max-w-3xl mt-4 text-lg text-white/80">
                                    {featured.summery}
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="lg:col-span-4">
                    <TrendingWidget articles={articles} />
                </div>
            </div>
        </section>
    );
}
