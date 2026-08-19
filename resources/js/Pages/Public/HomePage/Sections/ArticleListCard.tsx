import { Link } from "@inertiajs/react";
import ItemAttachmentView from "./ItemAttachmentView";

export default function ArticleListCard({ article }: any) {
    return (
        <Link
            href={route("public.viewArticle", article.id)}
            className="flex gap-4 p-4 transition-all border border-dashed bg-surface rounded-2xl hover:shadow-lg border-borderColor"
        >
            <ItemAttachmentView
                article={article}
                classes="
                    hidden
                    md:block
                    w-32
                    h-24
                    object-cover
                    rounded-xl
                    flex-shrink-0
                "
            />

            <div>
                <h4 className="font-bold line-clamp-2">{article.title}</h4>

                <p className="mt-2 text-sm text-muted line-clamp-2">
                    {article.summery}
                </p>
            </div>
        </Link>
    );
}
