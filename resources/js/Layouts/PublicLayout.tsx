import Footer from "@/Layouts/Parts/Footer";
import Header from "@/Layouts/Parts/Header";
import {User} from "@/types";
import "@fortawesome/fontawesome-free/css/all.css";

import {PropsWithChildren, useEffect, useState} from "react";

export default function PublicTemplateLayout({auth, children}: PropsWithChildren<{ auth: User }>) {
    const [scrollFromTop, setScrollFromTop] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            console.log(window?.scrollY)
            window?.scrollY > 160
                ? setScrollFromTop(true)
                : setScrollFromTop(false);
        });
    }, []);

    const handleScrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <section className="font-roboto relative min-h-screen flex flex-col bg-background text-onBackground">
            <Header
                scrollFromTop={scrollFromTop}
            />

            <div className="py-10 text-justify antialiased">
                {children}
            </div>

            <Footer auth={auth}/>
            {
                scrollFromTop && (<div
                    className="fixed right-10 bottom-5 flex h-12 w-12 flex-col items-center justify-center rounded-full bg-primary text-onPrimary shadow-md transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    onClick={handleScrollUp}
                >
                    <i className="fa-solid fa-arrow-up text-xl fa-bounce"></i>
                </div>)
            }

        </section>
    );
}
