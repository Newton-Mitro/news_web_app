import { Link } from "@inertiajs/react";

export default function TrendingWidget({ articles }: any) {
    return (
        <div className="border border-dashed bg-surface rounded-3xl border-borderColor">
            <div className="px-6 py-8 border-b border-dashed border-borderColor">
                <h2 className="text-xl font-bold">🔥 এখন ট্রেন্ডিং</h2>
            </div>

            <div className="divide-y divide-dashed divide-borderColor">
                {articles.slice(1, 7).map((article: any, index: number) => (
                    <Link
                        key={article.id}
                        href={route("public.viewArticle", article.id)}
                        className="flex gap-4 px-5 py-5 transition hover:bg-secondary/10 group"
                    >
                        <div className="text-3xl font-black text-onSurface">
                            {String(index + 1).padStart(2, "0")}
                        </div>

                        <div>
                            <h3 className="font-semibold line-clamp-2">
                                {article.title}
                            </h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
