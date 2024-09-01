import Banner from "@/Layouts/Parts/Banner";
import Footer from "@/Layouts/Parts/Footer";
import Header from "@/Layouts/Parts/Header";
import { User } from "@/types";
import "@fortawesome/fontawesome-free/css/all.css";
import { PropsWithChildren, useEffect, useState } from "react";
import home from "../../assets/images/banner-images/children_3.jpg";
import faq from "../../assets/images/banner-images/children_4.jpg";
import gallery from "../../assets/images/banner-images/children_6.jpg";
import publications from "../../assets/images/banner-images/children_8.jpg";
import donate from "../../assets/images/banner-images/donate.jpg";
import contact from "../../assets/images/banner-images/education_2.jpg";
import about from "../../assets/images/banner-images/education_4.jpg";
import notices from "../../assets/images/banner-images/holli_2.jpg";

export default function PublicTemplateLayout({
    auth,
    children,
}: PropsWithChildren<{ auth: User }>) {
    const [OpenTopNav, setOpenTopNav] = useState(false);
    const [scrollFromTop, setScrollFromTop] = useState(false);
    const [donateSectionVisibility, setDonateSectionVisibility] =
        useState(false);
    const [bannerImage, setBannerImage] = useState(home);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            window?.scrollY > 60
                ? setScrollFromTop(true)
                : setScrollFromTop(false);
        });

        scrollToTop();
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    // bannercode

    const location = window.location;
    const urlArrays = decodeURIComponent(location.pathname)
        .replace(/[_-]/g, " ")
        .split("/");

    useEffect(() => {
        if (urlArrays[1] === "about") {
            setBannerImage(about);
        }
        if (urlArrays[1] === "donate") {
            setBannerImage(donate);
        }
        if (urlArrays[1] === "publications") {
            setBannerImage(publications);
        }

        if (urlArrays[1] === "contact") {
            setBannerImage(contact);
        }

        if (urlArrays[1] === "faq") {
            setBannerImage(faq);
        }

        if (urlArrays[1] === "gallery") {
            setBannerImage(gallery);
        }

        if (urlArrays[1] === "notices") {
            setBannerImage(notices);
        }
    }, [urlArrays]);

    return (
        <>
            <div className="relative flex flex-col min-h-screen overflow-hidden font-sans-serif bg-background text-onBackground">
                <Header
                    scrollFromTop={scrollFromTop}
                    OpenTopNav={OpenTopNav}
                    setOpenTopNav={setOpenTopNav}
                    urlArrays={urlArrays}
                />

                <div className="px-4 py-10 md:px-2 md:py-14 lg:px-0 lg:py-20">
                    {children}
                </div>

                <Footer auth={auth} />
            </div>
        </>
    );
}
