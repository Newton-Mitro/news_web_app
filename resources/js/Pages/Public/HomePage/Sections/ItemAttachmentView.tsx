interface Props {
    article: any;
    classes?: string;
}

export default function ItemAttachmentView({ article, classes = "" }: Props) {
    const attachment = article?.attachments?.[0];

    if (!attachment) {
        return (
            <img
                src={attachment?.url || "/image_not_found.jpeg"}
                alt={article.title}
                className={classes}
                loading="lazy"
            />
        );
    }

    if (attachment.mime_type?.startsWith("video/")) {
        return (
            <video controls preload="metadata" className={classes}>
                <source src={attachment.url} type={attachment.mime_type} />
            </video>
        );
    }

    return (
        <img
            src={attachment.url}
            alt={article.title}
            className={classes}
            loading="lazy"
        />
    );
}
