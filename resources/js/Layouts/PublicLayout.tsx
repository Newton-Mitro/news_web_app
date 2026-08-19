import Footer from "@/Layouts/Parts/Footer";
import Header from "@/Layouts/Parts/Header";
import { User } from "@/types";
import "@fortawesome/fontawesome-free/css/all.css";
import axios from "axios";
import React, { PropsWithChildren, useEffect, useState } from "react";
import {
    FaEnvelope,
    FaFacebookF,
    FaFacebookMessenger,
    FaInstagram,
    FaTwitter,
    FaWhatsapp,
    FaYoutube,
} from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";

export default function PublicTemplateLayout({
    auth,
    children,
}: PropsWithChildren<{ auth: User }>) {
    const [scrollFromTop, setScrollFromTop] = useState(false);
    const [configurationData, setConfigurationData] = React.useState<any>(null);

    useEffect(() => {
        window.addEventListener("scroll", () => {
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

    useEffect(() => {
        axios
            .get(route("public.configuration"))
            .then((response) => {
                setConfigurationData(response.data.data);
            })
            .catch((error) => {
                console.error("Configuration error:", error);
                toast.error("Error fetching configuration.");
            });
    }, []);

    const getConfig = (key: string) => {
        return (
            configurationData?.find((item: any) => item.key === key)?.value ??
            ""
        );
    };

    return (
        <section className="relative flex flex-col min-h-screen font-shurjo bg-background text-onBackground">
            <ToastContainer />
            <Header
                scrollFromTop={scrollFromTop}
                auth={auth}
                configurationData={configurationData}
            />

            <div className="py-10 antialiased text-justify">{children}</div>

            <div className="fixed z-40 space-y-3 -translate-y-1/2 top-1/2 right-5">
                {[
                    {
                        href: getConfig("whatsapp"),
                        icon: <FaWhatsapp className="text-xl" />,
                        label: "WhatsApp",
                        bg: "bg-[#25D366]",
                    },
                    {
                        href: getConfig("messenger"),
                        icon: <FaFacebookMessenger className="text-lg" />,
                        label: "Messenger",
                        bg: "bg-gradient-to-br from-blue-500 to-purple-600",
                    },
                    {
                        href: getConfig("infoEmail"),
                        icon: <FaEnvelope className="text-lg" />,
                        label: "Email",
                        bg: "bg-red-500",
                    },
                ].map((item, index) => (
                    <a
                        key={index}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex items-center justify-end group"
                    >
                        {/* Tooltip */}
                        <span className="absolute px-3 py-1 text-sm text-white transition-all duration-300 bg-black rounded-md shadow opacity-0 right-14 whitespace-nowrap group-hover:translate-x-0 group-hover:opacity-100">
                            {item.label}
                        </span>

                        {/* Icon */}
                        <div
                            className={`flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl ${item.bg}`}
                        >
                            {item.icon}
                        </div>
                    </a>
                ))}
            </div>

            <Footer auth={auth} configurationData={configurationData} />
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
