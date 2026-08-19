import PublicTemplateLayout from "@/Layouts/PublicLayout";
import { Head } from "@inertiajs/react";
import moment from "moment";
import ItemAttachmentView from "./ItemAttachmentView";
// import XIcon from "../../assets/svg/x_twitter.png";

export default function AboutPage({ auth, page }: any) {
    console.log(page);
    return (
        <>
            <Head title={page?.title} />
            <PublicTemplateLayout auth={auth}>
                <section className="container flex flex-col gap-4 p-6 shadow bg-surface">
                    <div className={`flex flex-col overflow-auto relative`}>
                        <div className="pb-8 mb-4">
                            {/* <h2 className="text-xl font-bold lg:text-3xl">
                                {page?.title}
                            </h2>
                            <span className="border-t-4 border-secondary">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </span> */}

                            <div className="min-w-full prose text-onSurface">
                                <ItemAttachmentView
                                    article={page}
                                    classes="float-left w-full mb-6 mr-6 lg:w-6/12 h-80"
                                />
                                <div
                                    className="min-w-full prose text-onSurface "
                                    dangerouslySetInnerHTML={{
                                        __html: page.body,
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </section>
            </PublicTemplateLayout>
        </>
    );
}
