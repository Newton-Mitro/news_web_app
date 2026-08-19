import ArticleListCard from "./ArticleListCard";
import FeaturedArticle from "./FeaturedArticle";
import SectionHeader from "./SectionHeader";

export default function NewsSection({ title, articles, category }: any) {
    if (!articles?.length) return null;

    return (
        <section className="container mb-20">
            <SectionHeader title={title} category={category} />

            <div className="grid gap-8 lg:grid-cols-12 ">
                <div className="lg:col-span-6 ">
                    <FeaturedArticle article={articles[0]} />
                </div>

                <div className="space-y-4 lg:col-span-6">
                    {articles.slice(1, 5).map((article: any) => (
                        <ArticleListCard key={article.id} article={article} />
                    ))}
                </div>
            </div>
        </section>
    );
}
