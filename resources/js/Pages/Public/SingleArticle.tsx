import PublicTemplateLayout from "@/Layouts/PublicLayout";
import { Head, router } from "@inertiajs/react";
import ItemAttachmentView from "./ItemAttachmentView";
import { formatDistance } from "date-fns";
import { bn } from "date-fns/locale";
import { useEffect, useState } from "react";
import { Bounce, toast } from "react-toastify";
import axios from "axios";

export default function SingleArticle({ auth, article }: any) {
    const now = new Date();

    const formatter = new Intl.DateTimeFormat("bn-BD", {
        dateStyle: "full",
    });

    const [comment, setComment] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [allComments, setAllComments] = useState<any[]>([]);
    const [commentsRefresh, setCommentsRefresh] = useState(0);
    const [commentLimit, setCommentLimit] = useState(10);

    const handleShare = async () => {
        const shareData = {
            title: article.title,
            text: article.excerpt ?? article.title,
            url: window.location.href,
        };

        try {
            if (
                navigator.share &&
                navigator.canShare &&
                navigator.canShare(shareData)
            ) {
                await navigator.share(shareData);
            } else if (navigator.share) {
                await navigator.share(shareData);
            } else if (navigator.clipboard) {
                await navigator.clipboard.writeText(window.location.href);

                toast.success("লিংক কপি হয়েছে");
            } else {
                alert("Link copied.");
            }
        } catch (error) {
            console.error("Share error:", error);
        }
    };

    const commentSubmitHandler = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!auth.user) {
            toast.error("মন্তব্য করতে আগে লগইন করুন");
            return;
        }

        const trimmedComment = comment.trim();

        if (!trimmedComment) {
            toast.error("দয়া করে একটি মন্তব্য লিখুন", {
                position: "top-right",
                autoClose: 3000,
            });

            return;
        }

        setIsSubmitting(true);

        try {
            await axios.post(route("comments.store"), {
                content: trimmedComment,
                article_id: article.id,
                created_by: auth.user.id,
            });

            toast("মন্তব্য সফলভাবে যোগ হয়েছে", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            setComment("");
            setCommentsRefresh((prev) => prev + 1);
        } catch (error: any) {
            console.error("Comment submit error:", error);

            toast.error(
                error.response?.data?.content || "মন্তব্য যোগ করা যায়নি",
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    const getComment = async (articleId: number) => {
        try {
            const response = await axios.get(
                route("comments.show", {
                    comment: articleId,
                }),
                {
                    params: {
                        limit: commentLimit,
                    },
                },
            );

            setAllComments(response.data.comments);
        } catch (error) {
            console.error("Failed to fetch comments:", error);
        }
    };

    useEffect(() => {
        getComment(article.id);
    }, [article.id, commentsRefresh, commentLimit]);

    const deleteCommentHandler = async (commentId: number) => {
        if (!confirm("আপনি কি এই মন্তব্যটি মুছে ফেলতে চান?")) {
            return;
        }

        try {
            await axios.delete(route("comments.destroy", commentId));

            toast.success("মন্তব্য মুছে ফেলা হয়েছে");

            // Comments আবার fetch করবে
            setCommentsRefresh((prev) => prev + 1);
        } catch (error: any) {
            console.error("Delete comment error:", error);

            if (error.response?.status === 403) {
                toast.error("এই মন্তব্যটি মুছে ফেলার অনুমতি আপনার নেই");
            } else {
                toast.error("মন্তব্য মুছে ফেলা যায়নি");
            }
        }
    };

    return (
        <>
            <Head title={article.title}>
                <meta
                    name="description"
                    content={
                        article.excerpt ||
                        `${article.body?.slice(0, 150) || ""}...`
                    }
                />

                <meta property="og:title" content={article.title} />

                <meta
                    property="og:description"
                    content={
                        article.excerpt ||
                        `${article.body?.slice(0, 150) || ""}...`
                    }
                />

                <meta
                    property="og:image"
                    content={
                        article?.attachments?.[0]?.url ||
                        "/default-thumbnail.jpg"
                    }
                />

                <meta property="og:type" content="article" />

                <meta
                    property="og:url"
                    content={
                        typeof window !== "undefined"
                            ? window.location.href
                            : ""
                    }
                />

                <meta name="twitter:card" content="summary_large_image" />

                <meta name="twitter:title" content={article.title} />

                <meta
                    name="twitter:description"
                    content={
                        article.excerpt ||
                        `${article.body?.slice(0, 150) || ""}...`
                    }
                />

                <meta
                    name="twitter:image"
                    content={
                        article?.attachments?.[0]?.url ||
                        "/default-thumbnail.jpg"
                    }
                />

                <meta name="author" content={article.author?.name || ""} />

                <meta name="keywords" content={article.tags || ""} />

                <meta name="publish_date" content={article.created_at || ""} />
            </Head>

            <PublicTemplateLayout auth={auth}>
                <section className="container">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                        <article className="lg:col-span-8">
                            <div className="overflow-hidden border border-dashed border-borderColor bg-surface rounded-3xl">
                                {/* Hero Image */}
                                <div>
                                    <ItemAttachmentView
                                        article={article}
                                        classes="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="p-6 md:p-10">
                                    {/* Category */}
                                    <span className="inline-flex px-3 py-1 mb-4 text-sm font-medium rounded-full bg-secondary text-onSecondary">
                                        {article.category?.name_bn}
                                    </span>

                                    {/* Title */}
                                    <h1 className="mb-6 text-xl font-bold leading-tight text-onSurface md:text-2xl">
                                        {article.title}
                                    </h1>

                                    <div className="flex items-center justify-between gap-4 pb-6 mb-8 border-b border-dashed border-borderColor md:flex-row md:items-center">
                                        {/* Author */}
                                        <div className="flex flex-wrap items-center gap-4">
                                            <div className="flex items-center justify-center w-12 h-12 text-lg font-bold text-white rounded-full bg-secondary">
                                                {article.author?.name?.charAt(
                                                    0,
                                                )}
                                            </div>

                                            <div>
                                                <p className="font-semibold text-onSurface">
                                                    {article.author?.name}
                                                </p>

                                                <p className="text-sm text-onSurface">
                                                    {article.created_at &&
                                                        formatter.format(
                                                            new Date(
                                                                article.created_at,
                                                            ),
                                                        )}
                                                </p>

                                                <p className="text-xs text-slate-400">
                                                    {article.created_at &&
                                                        formatDistance(
                                                            new Date(
                                                                article.created_at,
                                                            ),
                                                            now,
                                                            {
                                                                addSuffix: true,
                                                                locale: bn,
                                                            },
                                                        )}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Share Buttons */}
                                        <div className="flex items-center gap-3">
                                            {/* Facebook */}
                                            <a
                                                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                                                    window.location.href,
                                                )}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="Share on Facebook"
                                                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1877F2] text-white transition hover:opacity-90"
                                            >
                                                <i className="text-sm fab fa-facebook-f" />
                                            </a>

                                            {/* X */}
                                            <a
                                                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                                                    window.location.href,
                                                )}&text=${encodeURIComponent(
                                                    article.title,
                                                )}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="Share on X"
                                                className="flex items-center justify-center text-white transition bg-black rounded-full h-9 w-9 hover:opacity-90"
                                            >
                                                <i className="text-sm fab fa-x-twitter" />
                                            </a>

                                            {/* Share */}
                                            <button
                                                type="button"
                                                onClick={handleShare}
                                                aria-label="Share"
                                                title="Share"
                                                className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                                            >
                                                <i className="fab fa-instagram" />
                                            </button>
                                        </div>
                                    </div>

                                    <div
                                        className="prose prose-lg max-w-none prose-slate text-onSurface"
                                        dangerouslySetInnerHTML={{
                                            __html: article.body,
                                        }}
                                    />

                                    <div className="pt-8 mt-12 border-t border-borderColor">
                                        <section className="mb-10">
                                            {/* Comments Section */}
                                            <div className="mt-8">
                                                {/* Header */}
                                                <div className="flex items-center gap-3 pb-4 mb-6 border-b border-borderColor">
                                                    <div className="flex items-center justify-center rounded-full h-9 w-9 bg-primary/10 text-primary">
                                                        💬
                                                    </div>

                                                    <div>
                                                        <div className="flex items-center gap-2">
                                                            <h3 className="text-lg font-bold text-gray-900">
                                                                মন্তব্য
                                                            </h3>

                                                            <span className="text-sm text-gray-400">
                                                                (
                                                                {
                                                                    allComments.length
                                                                }
                                                                )
                                                            </span>
                                                        </div>

                                                        <p className="text-xs text-gray-500">
                                                            আপনার মতামত আমাদের
                                                            জানান
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Comments */}
                                                <div>
                                                    {allComments.map(
                                                        (comment, index) => (
                                                            <div
                                                                key={comment.id}
                                                                className={`py-5 ${
                                                                    index !==
                                                                    allComments.length -
                                                                        1
                                                                        ? "border-b border-borderColor"
                                                                        : ""
                                                                }`}
                                                            >
                                                                <div className="flex gap-3">
                                                                    {/* Avatar */}
                                                                    <div className="flex items-center justify-center rounded-full text-onDisabled bg-disabled h-9 w-9 shrink-0">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            viewBox="0 0 24 24"
                                                                            fill="currentColor"
                                                                            className="w-5 h-5"
                                                                        >
                                                                            <path
                                                                                fillRule="evenodd"
                                                                                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.61-7.812-1.7a.75.75 0 01-.437-.695z"
                                                                                clipRule="evenodd"
                                                                            />
                                                                        </svg>
                                                                    </div>

                                                                    <div className="flex-1 min-w-0">
                                                                        {/* User + Date + Delete */}
                                                                        <div className="flex items-center justify-between gap-2">
                                                                            <div className="flex items-center gap-2">
                                                                                <span className="text-sm font-semibold text-gray-800">
                                                                                    {
                                                                                        comment
                                                                                            .user
                                                                                            ?.name
                                                                                    }
                                                                                </span>

                                                                                <span className="text-xs text-gray-400">
                                                                                    •
                                                                                </span>

                                                                                <span className="text-xs text-gray-400">
                                                                                    {new Date(
                                                                                        comment.created_at,
                                                                                    ).toLocaleDateString(
                                                                                        "bn-BD",
                                                                                    )}
                                                                                </span>
                                                                            </div>

                                                                            {/* Delete Button */}
                                                                            {auth
                                                                                .user
                                                                                ?.id ===
                                                                                comment.created_by && (
                                                                                <div className="relative group">
                                                                                    <button
                                                                                        type="button"
                                                                                        onClick={() => {
                                                                                            deleteCommentHandler(
                                                                                                comment.id,
                                                                                            );
                                                                                        }}
                                                                                        className="flex items-center justify-center w-8 h-8 text-gray-400 transition rounded-lg hover:bg-red-50 hover:text-red-500"
                                                                                        aria-label="মন্তব্য মুছুন"
                                                                                    >
                                                                                        <svg
                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                            fill="none"
                                                                                            viewBox="0 0 24 24"
                                                                                            strokeWidth={
                                                                                                1.8
                                                                                            }
                                                                                            stroke="currentColor"
                                                                                            className="w-5 h-5"
                                                                                        >
                                                                                            <path
                                                                                                strokeLinecap="round"
                                                                                                strokeLinejoin="round"
                                                                                                d="M6 7h12M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2m2 0v12a1 1 0 01-1 1H8a1 1 0 01-1-1V7m3 4v6m4-6v6"
                                                                                            />
                                                                                        </svg>
                                                                                    </button>

                                                                                    {/* Tooltip */}
                                                                                    <span className="pointer-events-none absolute right-0 top-full z-10 mt-2 whitespace-nowrap rounded-md bg-gray-900 px-2.5 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
                                                                                        মন্তব্য
                                                                                        মুছুন
                                                                                    </span>
                                                                                </div>
                                                                            )}
                                                                        </div>

                                                                        {/* Comment */}
                                                                        <p className="mt-2 text-sm leading-6 text-gray-700">
                                                                            {
                                                                                comment.content
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ),
                                                    )}
                                                </div>
                                                <div className="flex items-end justify-end">
                                                    <button
                                                        onClick={() =>
                                                            setCommentLimit(
                                                                (prev) =>
                                                                    prev + 10,
                                                            )
                                                        }
                                                        className=" my-4 flex  justify-end items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-onPrimary shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-md active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50"
                                                    >
                                                        View More
                                                    </button>
                                                </div>
                                            </div>
                                            {/* Comment Form */}
                                            <form
                                                onSubmit={commentSubmitHandler}
                                                className="p-4 border border-borderColor rounded-2xl bg-border sm:p-5"
                                            >
                                                <textarea
                                                    name="content"
                                                    value={comment}
                                                    rows={3}
                                                    maxLength={2000}
                                                    disabled={
                                                        !auth.user ||
                                                        isSubmitting
                                                    }
                                                    onChange={(e) =>
                                                        setComment(
                                                            e.target.value,
                                                        )
                                                    }
                                                    placeholder="আপনার মন্তব্য লিখুন..."
                                                    className="w-full p-4 text-sm transition-all duration-200 border outline-none resize-none border-borderColor bg-disabled rounded-xl text-onSurface placeholder:text-gray-400 focus:border-primary focus:ring-4 focus:ring-primary/10 disabled:cursor-not-allowed disabled:bg-borderColor"
                                                />

                                                {/* Character Count */}
                                                <div className="mt-2 text-xs text-right text-gray-400">
                                                    {comment.length}/2000
                                                </div>

                                                {/* Submit */}
                                                <div className="flex justify-end mt-3">
                                                    <button
                                                        disabled={
                                                            isSubmitting ||
                                                            !comment.trim()
                                                        }
                                                        type="submit"
                                                        className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-md active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50"
                                                    >
                                                        {isSubmitting
                                                            ? "যোগ হচ্ছে..."
                                                            : "মন্তব্য করুন"}

                                                        {!isSubmitting && (
                                                            <span>→</span>
                                                        )}
                                                    </button>
                                                </div>
                                            </form>
                                        </section>

                                        {/* =================================================
                                            Tags
                                        ================================================== */}

                                        <section>
                                            <div className="flex items-center gap-3 mb-5">
                                                <div className="flex items-center justify-center rounded-full h-9 w-9 bg-secondary text-onSecondary">
                                                    #
                                                </div>

                                                <div>
                                                    <h3 className="text-lg font-bold text-onSurface">
                                                        ট্যাগসমূহ
                                                    </h3>

                                                    <p className="text-sm text-gray-500">
                                                        এই লেখার সাথে সম্পর্কিত
                                                        বিষয়
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex flex-wrap gap-2.5">
                                                {article.tags
                                                    ?.split(",")
                                                    .map(
                                                        (
                                                            tag: string,
                                                            index: number,
                                                        ) => (
                                                            <span
                                                                key={index}
                                                                className="px-4 py-2 text-sm font-medium border rounded-full bg-secondary border-borderColor text-onSecondary"
                                                            >
                                                                <span className="mr-0.5 opacity-60 group-hover:opacity-100">
                                                                    #
                                                                </span>

                                                                {tag.trim()}
                                                            </span>
                                                        ),
                                                    )}
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <aside className="lg:col-span-4">
                            <div className="sticky space-y-6 top-24">
                                {/* Author Card */}
                                <div className="p-6 border border-dashed border-borderColor bg-surface rounded-3xl">
                                    <h3 className="mb-4 text-lg font-semibold">
                                        লেখক পরিচিতি
                                    </h3>

                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center justify-center text-xl font-bold text-white rounded-full w-14 h-14 bg-secondary">
                                            {article.author?.name?.charAt(0)}
                                        </div>

                                        <div>
                                            <p className="font-semibold">
                                                {article.author?.name}
                                            </p>

                                            <p className="text-sm text-slate-500">
                                                সংবাদ লেখক
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Advertisement */}
                                <div className="p-6 border border-dashed bg-surface border-borderColor rounded-3xl">
                                    <h3 className="mb-2 font-semibold">
                                        বিজ্ঞাপন
                                    </h3>

                                    <img
                                        src="/300x250.jpeg"
                                        alt="Advertisement"
                                        className="w-full h-auto rounded-lg"
                                    />
                                </div>

                                {/* Share */}
                                <div className="p-6 border border-dashed border-borderColor bg-surface rounded-3xl">
                                    <h3 className="mb-4 text-lg font-semibold text-onSurface">
                                        শেয়ার করুন
                                    </h3>

                                    <div className="flex items-center gap-3">
                                        {/* Facebook */}
                                        <a
                                            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                                                window.location.href,
                                            )}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Share on Facebook"
                                            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1877F2] text-white transition hover:opacity-90"
                                        >
                                            <i className="text-sm fab fa-facebook-f" />
                                        </a>

                                        {/* X */}
                                        <a
                                            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                                                window.location.href,
                                            )}&text=${encodeURIComponent(
                                                article.title,
                                            )}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Share on X"
                                            className="flex items-center justify-center text-white transition bg-black rounded-full h-9 w-9 hover:opacity-90"
                                        >
                                            <i className="text-sm fab fa-x-twitter" />
                                        </a>

                                        {/* Share */}
                                        <button
                                            type="button"
                                            onClick={handleShare}
                                            aria-label="Share"
                                            title="Share"
                                            className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                                        >
                                            <i className="fab fa-instagram" />
                                        </button>
                                    </div>

                                    <p className="mt-4 text-xs text-slate-500">
                                        বন্ধু ও পরিবারের সাথে এই সংবাদটি শেয়ার
                                        করুন।
                                    </p>
                                </div>
                            </div>
                        </aside>
                    </div>
                </section>
            </PublicTemplateLayout>
        </>
    );
}
