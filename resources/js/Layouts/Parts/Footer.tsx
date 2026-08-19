import { Link, usePage } from "@inertiajs/react";
import { PropsWithChildren } from "react";
import myLogo from "../../../assets/brand/logo.png";
import { useTheme } from "../../Hooks/useTheme";

function Footer({
    auth,
    configurationData,
}: PropsWithChildren<{ auth: any; configurationData: any }>) {
    const { url } = usePage();
    const decodedURL = decodeURIComponent(url);
    const { theme } = useTheme();


    const getConfig = (key: string) => {
        return (
            configurationData?.find((item: any) => item.key === key)?.value ??
            ""
        );
    };

    return (
        <footer className="mt-auto border-t border-borderColor bg-surface text-onSurface">
            <div className="container px-4 py-8 mx-auto">
                {/* Footer Links */}
                <ul className="flex flex-wrap justify-center text-xs text-center gap-x-6 gap-y-3 sm:text-sm">
                    <li>
                        <Link
                            href={route("public.termsOfUse")}
                            className={`hover:text-error ${
                                decodedURL.includes("terms-of-use")
                                    ? "text-error"
                                    : ""
                            }`}
                        >
                            ব্যবহারের শর্তাবলি
                        </Link>
                    </li>

                    <li>
                        <Link
                            href={route("public.privacyPolicy")}
                            className={`hover:text-error ${
                                decodedURL.includes("privacy-policy")
                                    ? "text-error"
                                    : ""
                            }`}
                        >
                            গোপনীয়তা নীতি
                        </Link>
                    </li>

                    <li>
                        <Link
                            href={route("public.about")}
                            className={`hover:text-error ${
                                decodedURL.includes("about") ? "text-error" : ""
                            }`}
                        >
                            আমাদের সম্পর্কে
                        </Link>
                    </li>

                    <li>
                        <Link
                            href={route("public.reprintPolicy")}
                            className={`hover:text-error ${
                                decodedURL.includes("reprint-policy")
                                    ? "text-error"
                                    : ""
                            }`}
                        >
                            পুনঃ প্রকাশ নীতি
                        </Link>
                    </li>

                    <li>
                        <Link
                            href={route("public.advertisement")}
                            className={`hover:text-error ${
                                decodedURL.includes("advertisement")
                                    ? "text-error"
                                    : ""
                            }`}
                        >
                            বিজ্ঞাপন
                        </Link>
                    </li>

                    <li>
                        <Link
                            href={route("public.contact")}
                            className={`hover:text-error ${
                                decodedURL.includes("contact")
                                    ? "text-error"
                                    : ""
                            }`}
                        >
                            যোগাযোগ
                        </Link>
                    </li>
                </ul>
                {/* Logo & Info */}
                <Link
                    href={route("public.home")}
                    className="flex flex-col items-center mt-2 text-center"
                >
                    <img
                        src={myLogo}
                        alt="header logo"
                        className={`h-16 sm:h-20 ${
                            theme === "light" ? "" : "brightness-0 invert"
                        }`}
                    />
                </Link>
                <div className="flex flex-col items-center text-center">
                    <p className="max-w-xl mt-2 text-xs leading-6 text-onSurface/80 sm:text-sm">
                       {getConfig("address")}
                    </p>
                    <div className="flex gap-4 text-xs text-onSurface/80 sm:text-sm">
                        <a
                            href={getConfig("infoEmail")}
                            className="flex items-center gap-2 transition-colors hover:text-primary"
                        >
                            <i className="w-4 text-center fas fa-envelope" />{" "}
                            <span>{getConfig("infoEmail")}</span>{" "}
                        </a>
                        <a
                            href={getConfig("phone")}
                            className="flex items-center gap-2 transition-colors hover:text-primary"
                        >
                            <i className="w-4 text-center fas fa-phone" />
                            <span>{getConfig("phone")}</span>
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-3 text-center">
                    <p className="text-xs sm:text-sm">
                        ©{new Date().getFullYear()} DC News. All Rights
                        Reserved.
                    </p>

                    <p className="text-xs text-onSurface/70">
                        Developed by{" "}
                        <a
                            href="https://www.facebook.com/profile.php?id=61592730722204"
                            target="_blank"
                            rel="noopener noreferrer "
                            className="hover:underline hover:font-semibold"
                        >
                            <strong>Quantum Labs</strong>
                        </a>{" "}
                        Team
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
