import { Link } from "@inertiajs/react";
import ItemAttachmentView from "./ItemAttachmentView";

export default function FeaturedArticle({ article }: any) {
    return (
        <Link
            href={route("public.viewArticle", article.id)}
            className="block overflow-hidden transition-all border border-dashed bg-surface border-borderColor rounded-3xl hover:shadow-xl"
        >
            <ItemAttachmentView
                article={article}
                classes="
                    w-full
                    h-[350px]
                    object-cover
                "
            />

            <div className="p-6">
                <h3 className="mb-3 text-xl font-bold md:text-2xl line-clamp-2">
                    {article.title}
                </h3>

                <p className=" text-muted line-clamp-3">{article.summery}</p>
            </div>
        </Link>
    );
}
