import Footer from "@/Layouts/Parts/Footer";
import Header from "@/Layouts/Parts/Header";
import { User } from "@/types";
import "@fortawesome/fontawesome-free/css/all.css";

import { PropsWithChildren, useEffect, useState } from "react";

export default function PublicTemplateLayout({
    auth,
    children,
}: PropsWithChildren<{ auth: User }>) {
    const [scrollFromTop, setScrollFromTop] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            console.log(window?.scrollY);
            window?.scrollY > 160
                ? setScrollFromTop(true)
                : setScrollFromTop(false);
        });
    }, []);

    const handleScrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <section className="relative flex flex-col min-h-screen font-roboto bg-background text-onBackground">
            <Header scrollFromTop={scrollFromTop} />

            <div className="py-10 antialiased text-justify">{children}</div>

            <Footer auth={auth} />
            {scrollFromTop && (
                <div
                    className="fixed flex flex-col items-center justify-center w-12 h-12 transition-all duration-300 rounded-full shadow-md right-10 bottom-5 bg-primary text-onPrimary hover:scale-110 hover:shadow-lg"
                    onClick={handleScrollUp}
                >
                    <i className="text-xl fa-solid fa-arrow-up fa-bounce"></i>
                </div>
            )}
        </section>
    );
}
