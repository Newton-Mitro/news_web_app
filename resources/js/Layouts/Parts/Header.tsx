import ThemeSwitcher from "@/Components/ThemeSwitcher";
import { Link, usePage } from "@inertiajs/react";
import axios from "axios";
import { PropsWithChildren, useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import myLogo from "../../../assets/brand/logo.png";
import XIcon from "../../../assets/svg/x_twitter.png";
import { useTheme } from "../../Hooks/useTheme";

function Header({
    scrollFromTop,
    auth,
    configurationData,
}: PropsWithChildren<{
    scrollFromTop: any;
    auth: any;
    configurationData: any;
}>) {
    const formatter = new Intl.DateTimeFormat("bn-BD", {
        dateStyle: "full",
    });
    const { theme, toggleTheme } = useTheme();

    const { url, component } = usePage();
    const decodedURL = decodeURIComponent(url);

    const isHome = url === "/" || component === "Home";

    const [articles, setArticles] = useState([]);
    const [categories, setCategories] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const [showOpinionDropdown, setShowOpinionDropdown] = useState(false);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get("/public/categories");
                setCategories(response.data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchCategories();
    }, []);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get("/articles/headlines");
                setArticles(response.data);
            } catch (error) {
                console.error("Error fetching articles:", error);
            }
        };

        fetchArticles();
    }, []);

    const getConfig = (key: string) => {
        return (
            configurationData?.find((item: any) => item.key === key)?.value ??
            ""
        );
    };

    const adminRoles = ["ADMIN", "EDITOR", "WRITER"];

    const canAccessAdmin = adminRoles.includes(auth.user?.role?.toUpperCase());

    return (
        <div className="relative w-full">
            <div className="container bg-background text-onBackground">
                <div className="h-6 md:flex"></div>
                <div className="items-center justify-between md:flex ">
                    <div className="font-bangla_uni">
                        {formatter.format(new Date())}
                    </div>

                    <div className="flex gap-2">
                        <a
                            className="flex items-center justify-center text-white bg-blue-500 rounded-full w-7 h-7"
                            href={getConfig("facebook")}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-facebook-f"></i>
                        </a>

                        <a
                            className="flex items-center justify-center text-white bg-black rounded-full w-7 h-7"
                            href={getConfig("twitter")}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={XIcon} alt="" className="w-4 invert" />
                        </a>

                        <a
                            className="flex items-center justify-center text-white bg-red-700 rounded-full w-7 h-7"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={getConfig("youtube")}
                        >
                            <i className=" fab fa-youtube"></i>
                        </a>

                        <div className="">
                            <ThemeSwitcher />
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <div className="">
                        <Link className="" href={route("public.home")}>
                            <img
                                className={`h-32 ${theme === "light" ? "" : "brightness-0 invert"}`}
                                src={myLogo}
                                alt="header logo"
                            />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="sticky top-0 z-50 w-full shadow-sm bg-surface">
                <div className="container flex items-center justify-between gap-6 h-14">
                    <div className="flex items-center w-full h-full gap-6">
                        <div className="flex gap-6 w-1.5/10 h-full items-center relative">
                            <button
                                onClick={() => setShowDropdown(!showDropdown)}
                                className=""
                            >
                                <i className="fas fa-bars"></i>
                            </button>
                            {showDropdown && (
                                <div className="absolute left-0 z-10 w-48 rounded shadow-md bg-surface top-12">
                                    <ul>
                                        {categories?.map(
                                            (item: any, index: number) => (
                                                <li
                                                    key={index}
                                                    className="p-2 hover:bg-gray-200"
                                                >
                                                    {item && (
                                                        <Link
                                                            href={route(
                                                                "public.byCategory",
                                                                item?.name,
                                                            )}
                                                            className="block"
                                                        >
                                                            {item?.name_bn}
                                                        </Link>
                                                    )}
                                                </li>
                                            ),
                                        )}

                                        <li className="p-2 hover:bg-gray-200">
                                            <Link
                                                href={route("public.archive")}
                                                className="block"
                                            >
                                                আর্কাইভ
                                            </Link>
                                        </li>

                                        <li className="p-2 hover:bg-gray-200">
                                            <Link
                                                href={route(
                                                    "public.publication",
                                                )}
                                                className="block"
                                            >
                                                প্রকাশনা
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            )}

                            <Link
                                className={`hover:text-error 
                                        ${isHome ? "text-error" : ""}`}
                                href={route("public.home")}
                            >
                                <i className="fas fa-home"></i>
                            </Link>

                            <Link
                                className="hidden md:block"
                                href={route("public.archive")}
                            >
                                <i className="fas fa-search"></i>
                            </Link>
                        </div>
                        <ul className="hidden md:flex gap-6 w-10.5/12 h-full items-center">
                            <li>
                                <Link
                                    className={`hover:text-error 
                               ${
                                   decodedURL.includes("National")
                                       ? "text-error"
                                       : ""
                               }`}
                                    href={route(
                                        "public.byCategory",
                                        "National",
                                    )}
                                >
                                    জাতীয়
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className={`hover:text-error 
                               ${
                                   decodedURL.includes("International")
                                       ? "text-error"
                                       : ""
                               }`}
                                    href={route(
                                        "public.byCategory",
                                        "International",
                                    )}
                                >
                                    আন্তর্জাতিক
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className={`hover:text-error 
                               ${
                                   decodedURL.includes("Dhaka Credit")
                                       ? "text-error"
                                       : ""
                               }`}
                                    href={route(
                                        "public.byCategory",
                                        "Dhaka Credit",
                                    )}
                                >
                                    ঢাকা ক্রেডিট
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className={`hover:text-error 
                               ${
                                   decodedURL.includes("Cooperative")
                                       ? "text-error"
                                       : ""
                               }`}
                                    href={route(
                                        "public.byCategory",
                                        "Cooperative",
                                    )}
                                >
                                    সমবায়
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className={`hover:text-error 
                               ${decodedURL.includes("Feature") ? "text-error" : ""}`}
                                    href={route("public.byCategory", "Feature")}
                                >
                                    ফিচার
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className={`hover:text-error 
                               ${
                                   decodedURL.includes("Community")
                                       ? "text-error"
                                       : ""
                               }`}
                                    href={route(
                                        "public.byCategory",
                                        "Community",
                                    )}
                                >
                                    কমিউনিটি
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className={`hover:text-error 
                               ${
                                   decodedURL.includes("Sports")
                                       ? "text-error"
                                       : ""
                               }`}
                                    href={route("public.byCategory", "Sports")}
                                >
                                    খেলাধুলা
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className={`hover:text-error 
                               ${
                                   decodedURL.includes("Opinion")
                                       ? "text-error"
                                       : ""
                               }`}
                                    href={route("public.byCategory", "Opinion")}
                                >
                                    মতামত
                                </Link>
                            </li>

                            <li className="relative flex items-center h-full group">
                                <button
                                    type="button"
                                    className={`flex items-center gap-1 hover:text-error ${
                                        decodedURL.includes("Others")
                                            ? "text-error"
                                            : ""
                                    }`}
                                >
                                    অন্যান্য
                                    <i className="fas fa-chevron-down text-[10px]" />
                                </button>

                                {/* Others submenu */}
                                <div className="absolute left-0 z-50 hidden overflow-hidden rounded-md shadow-lg top-full min-w-48 bg-surface group-hover:block">
                                    <ul className="py-1">
                                        <li>
                                            <Link
                                                href={route(
                                                    "public.byCategory",
                                                    "Children's Party",
                                                )}
                                                className="block px-4 py-2 text-sm whitespace-nowrap text-onSurface hover:bg-primaryVariant hover:text-onPrimaryVariant"
                                            >
                                                ছোটদের আসর
                                            </Link>
                                        </li>

                                        <li>
                                            <Link
                                                href={route(
                                                    "public.byCategory",
                                                    "Women's arena",
                                                )}
                                                className="block px-4 py-2 text-sm whitespace-nowrap text-onSurface hover:bg-primaryVariant hover:text-onPrimaryVariant"
                                            >
                                                নারী অঙ্গন
                                            </Link>
                                        </li>

                                        <li>
                                            <Link
                                                href={route(
                                                    "public.byCategory",
                                                    "Science and Technology",
                                                )}
                                                className="block px-4 py-2 text-sm whitespace-nowrap text-onSurface hover:bg-primaryVariant hover:text-onPrimaryVariant"
                                            >
                                                বিজ্ঞান ও প্রযুক্তি
                                            </Link>
                                        </li>

                                        <li>
                                            <Link
                                                href={route(
                                                    "public.byCategory",
                                                    "Art and Literature",
                                                )}
                                                className="block px-4 py-2 text-sm whitespace-nowrap text-onSurface hover:bg-primaryVariant hover:text-onPrimaryVariant"
                                            >
                                                শিল্প ও সাহিত্য
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li>
                                <Link
                                    className={`hover:text-error 
                                    ${
                                        decodedURL.includes("archive")
                                            ? "text-error"
                                            : ""
                                    }`}
                                    href={route("public.archive")}
                                >
                                    আর্কাইভ
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className={`hover:text-error 
                                    ${
                                        decodedURL.includes("archive")
                                            ? "text-error"
                                            : ""
                                    }`}
                                    href={route("public.publication")}
                                >
                                    প্রকাশনা
                                </Link>
                            </li>
                        </ul>
                        <div className="items-center hidden pl-4 ml-auto border-gray-300 md:flex">
                            {auth.user ? (
                                <ul>
                                    <li className="relative flex items-center h-full group">
                                        <button
                                            type="button"
                                            className={`flex items-center gap-1 hover:text-error ${
                                                decodedURL.includes("Others")
                                                    ? "text-error"
                                                    : ""
                                            }`}
                                        >
                                            {auth.user.name}
                                            <i className="fas fa-chevron-down text-[10px]" />
                                        </button>

                                        {/* Dashboard submenu */}
                                        <div className="absolute right-0 z-50 hidden w-48 overflow-hidden rounded-md shadow-lg top-full bg-surface group-hover:block">
                                            <ul className="py-1">
                                                {canAccessAdmin && (
                                                    <li>
                                                        <Link
                                                            href={route(
                                                                "dashboard",
                                                            )}
                                                            className="block w-full px-4 py-2 text-sm text-end whitespace-nowrap text-onSurface hover:bg-primaryVariant hover:text-onPrimaryVariant"
                                                        >
                                                            অ্যাডমিন প্যানেল
                                                        </Link>
                                                    </li>
                                                )}

                                                <li>
                                                    <Link
                                                        method="post"
                                                        href={route("logout")}
                                                        className="block w-full px-4 py-2 text-sm text-end whitespace-nowrap text-onSurface hover:bg-primaryVariant hover:text-onPrimaryVariant"
                                                    >
                                                        লগআউট
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            ) : (
                                <Link
                                    href={route("login")}
                                    className="flex items-center gap-2 px-4 py-2 font-medium transition-colors rounded-md"
                                >
                                    <i className="fas fa-sign-in-alt"></i>
                                    <span>লগইন</span>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="">
                <div className="flex pr-2 md:container bg-primaryVariant text-onPrimaryVariant">
                    <div className="px-6 py-3 font-bold text-white bg-red-600 whitespace-nowrap">
                        🔴 সর্বশেষ সংবাদ
                    </div>
                    <Marquee className="py-2">
                        <ol className="flex gap-20 list-disc">
                            {articles?.map((item: any, index: number) => {
                                return (
                                    <li
                                        key={index}
                                        className="hover:underline decoration-1 decoration-white/50 hover:decoration-white"
                                    >
                                        <Link
                                            href={route(
                                                "public.viewArticle",
                                                item.id,
                                            )}
                                        >
                                            {item.title}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ol>
                    </Marquee>
                </div>
            </div>
        </div>
    );
}

export default Header;
