export default function ItemAttachmentView({ article, classes }: any) {
    if (article.article_type == "Image") {
        return (
            <img
                src={
                    article?.attachments[0]?.url
                        ? article?.attachments[0]?.url
                        : "/image_not_found.jpeg"
                }
                alt="Wrapped Image"
                className={`${classes} overflow-hidden aspect-[16/8]`}
            />
        );
    } else if (article.article_type == "Video") {
        return (
            <iframe
                width="560"
                height="315"
                className={`${classes} overflow-hidden aspect-[16/8]`}
                src={article.video_url}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            />
        );
    } else {
        return <></>;
    }
}
