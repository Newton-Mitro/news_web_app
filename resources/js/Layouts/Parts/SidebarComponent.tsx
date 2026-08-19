import { Link, usePage } from "@inertiajs/react";
import { PropsWithChildren } from "react";
import whiteLogo from "../../../assets/brand/logo2.png";
import { useTheme } from "../../Hooks/useTheme";

function SidebarComponent({
    sidebarOpen,
    setSidebarOpen,
    toggleSidebar,
    user,
}: PropsWithChildren<{
    sidebarOpen: any;
    setSidebarOpen: any;
    toggleSidebar: any;
    user: any;
}>) {
    const { url } = usePage();
    const { theme } = useTheme();
    return (
        <aside
            className={`relative z-[10000000] h-full bg-surface shadow
         ${sidebarOpen ? "w-80" : "w-14"}
  transition-all duration-300 ease-in-out`}
        >
            <button
                className="absolute z-50 flex items-center justify-center p-2 text-xl rounded-full top-3 -right-4 h-9 w-9 bg-secondary text-onSecondary"
                onClick={() => {
                    toggleSidebar();
                }}
            >
                {sidebarOpen ? (
                    <i className="fa-solid fa-arrow-left"></i>
                ) : (
                    <i className="fa-solid fa-arrow-right"></i>
                )}
            </button>
            <div>
                <div className="flex items-center justify-center w-full h-16 py-1 border-b border-borderColor">
                    <img
                        src={whiteLogo}
                        alt=""
                        className={`${sidebarOpen ? "h-14 w-14" : "h-12 w-12"} 
                        ${theme === "light" ? "" : "brightness-0 invert"}
                        transform transition-all duration-700`}
                    />
                </div>

                <div className="flex h-[calc(100vh-122px)] flex-grow flex-col justify-between overflow-auto text-onSurface">
                    <ul className="flex flex-col justify-center cursor-pointer text-onSurface">
                        <li className="flex items-center duration-300 border-b border-dashed border-borderColor transition-color group bg-surface hover:bg-background hover:bg-blue-gray-900 hover:text-background">
                            <Link
                                href={route(`dashboard`)}
                                className={`flex h-full w-full items-center 
                                    ${
                                        url.includes("dashboard")
                                            ? "bg-background"
                                            : "bg-transparent"
                                    }
                                     px-4 py-2 transition-all duration-300
        ${sidebarOpen && "group-hover:scale-105"}  
        sidebar-menu  group-hover:bg-background group-hover:text-onBackground`}
                            >
                                <span className="text-xl">
                                    <i className="fa-brands fa-buromobelexperte group-active:text-orange-900"></i>
                                </span>
                                {sidebarOpen ? (
                                    <span className="pl-4 ">Dashboard</span>
                                ) : null}
                            </Link>
                        </li>
                        {user?.role === "ADMIN" && (
                            <li className="flex items-center duration-300 border-b border-dashed border-borderColor transition-color group bg-surface hover:bg-background hover:bg-blue-gray-900 hover:text-background">
                                <Link
                                    href={route(`categories.index`)}
                                    className={`flex h-full w-full items-center 
                                    ${
                                        url.includes("categories")
                                            ? "bg-background"
                                            : "bg-transparent"
                                    }
                                     px-4 py-2 transition-all duration-300
        ${sidebarOpen && "group-hover:scale-105"}  
        sidebar-menu group-hover:bg-background group-hover:text-onBackground`}
                                >
                                    <span className="text-xl">
                                        <i className="fa-solid fa-layer-group group-active:text-orange-900"></i>
                                    </span>
                                    {sidebarOpen ? (
                                        <span className="pl-4 ">
                                            Categories
                                        </span>
                                    ) : null}
                                </Link>
                            </li>
                        )}
                        {(user?.role === "ADMIN" ||
                            user?.role === "EDITOR" ||
                            user?.role === "WRITER") && (
                            <li className="flex items-center duration-300 border-b border-dashed border-borderColor transition-color group bg-surface hover:bg-background hover:bg-blue-gray-900 hover:text-background">
                                <Link
                                    href={route(`articles.index`)}
                                    className={`flex h-full w-full items-center 
                                    ${
                                        url.includes("articles")
                                            ? "bg-background"
                                            : "bg-transparent"
                                    }
                                    px-4 py-2 transition-all duration-300 ${sidebarOpen && "group-hover:scale-105"} sidebar-menu group-hover:bg-background group-hover:text-onBackground`}
                                >
                                    <span className="text-xl">
                                        <i className="fa-solid fa-newspaper group-active:text-orange-900"></i>
                                    </span>
                                    {sidebarOpen ? (
                                        <span className="pl-4 ">Articles</span>
                                    ) : null}
                                </Link>
                            </li>
                        )}
                        {(user?.role === "ADMIN" ||
                            user?.role === "EDITOR") && (
                            <li className="flex items-center duration-300 border-b border-dashed border-borderColor transition-color group bg-surface hover:bg-background hover:bg-blue-gray-900 hover:text-background">
                                <Link
                                    href={route(`pages.index`)}
                                    className={`flex h-full w-full items-center 
                                    ${
                                        url.includes("pages")
                                            ? "bg-background"
                                            : "bg-transparent"
                                    }
                                    px-4 py-2 transition-all duration-300
        ${sidebarOpen && "group-hover:scale-105"}  
        sidebar-menu group-hover:bg-background group-hover:text-onBackground`}
                                >
                                    <span className="text-xl">
                                        <i className="fa-solid fa-file group-active:text-orange-900"></i>
                                    </span>
                                    {sidebarOpen ? (
                                        <span className="pl-4 ">Pages</span>
                                    ) : null}
                                </Link>
                            </li>
                        )}

                        {user?.role === "ADMIN" && (
                            <li className="flex items-center duration-300 border-b border-dashed border-borderColor transition-color group bg-surface hover:bg-background hover:bg-blue-gray-900 hover:text-background">
                                <Link
                                    href={route(`users.index`)}
                                    className={`flex h-full w-full items-center 
                                    ${
                                        url.includes("users")
                                            ? "bg-background"
                                            : "bg-transparent"
                                    }
                                    px-4 py-2 transition-all duration-300
        ${sidebarOpen && "group-hover:scale-105"}  
        sidebar-menu group-hover:bg-background group-hover:text-onBackground`}
                                >
                                    <span className="text-xl">
                                        <i className="fa-solid fa-users-gear group-active:text-orange-900"></i>
                                    </span>
                                    {sidebarOpen ? (
                                        <span className="pl-4 ">Users</span>
                                    ) : null}
                                </Link>
                            </li>
                        )}

                        <li className="flex items-center duration-300 border-b border-dashed border-borderColor transition-color group bg-surface hover:bg-background hover:bg-blue-gray-900 hover:text-background">
                            <Link
                                href={route(`users.show`)}
                                className={`flex h-full w-full items-center 
                                    ${
                                        url.includes("profile")
                                            ? "bg-background"
                                            : "bg-transparent"
                                    }
                                    px-4 py-2 transition-all duration-300
        ${sidebarOpen && "group-hover:scale-105"}  
        sidebar-menu group-hover:bg-background group-hover:text-onBackground`}
                            >
                                <span className="text-xl">
                                    <i className="fa-solid fa-user group-active:text-orange-900"></i>
                                </span>
                                {sidebarOpen ? (
                                    <span className="pl-4 ">Profile</span>
                                ) : null}
                            </Link>
                        </li>
                        {user?.role === "ADMIN" && (
                            <li className="flex items-center duration-300 border-b border-dashed border-borderColor transition-color group bg-surface hover:bg-background hover:bg-blue-gray-900 hover:text-background">
                                <Link
                                    href={route(`visitors.index`)}
                                    className={`flex h-full w-full items-center 
                                    ${
                                        url.includes("visitors")
                                            ? "bg-background"
                                            : "bg-transparent"
                                    }
                                    px-4 py-2 transition-all duration-300 ${sidebarOpen && "group-hover:scale-105"} sidebar-menu group-hover:bg-background group-hover:text-onBackground`}
                                >
                                    <span className="text-xl">
                                        <i className="fa-solid fa-users group-active:text-orange-900"></i>
                                    </span>
                                    {sidebarOpen ? (
                                        <span className="pl-4 ">Visitors</span>
                                    ) : null}
                                </Link>
                            </li>
                        )}

                        {(user?.role === "ADMIN" ||
                            user?.role === "EDITOR") && (
                            <li className="flex items-center duration-300 border-b border-dashed border-borderColor transition-color group bg-surface hover:bg-background hover:bg-blue-gray-900 hover:text-background">
                                <Link
                                    href={route(`gallery.index`)}
                                    className={`flex h-full w-full items-center 
                                    ${
                                        url.includes("gallery")
                                            ? "bg-background"
                                            : "bg-transparent"
                                    }
                                    px-4 py-2 transition-all duration-300 ${sidebarOpen && "group-hover:scale-105"} sidebar-menu group-hover:bg-background group-hover:text-onBackground`}
                                >
                                    <span className="text-xl">
                                        <i className="fa-solid fa-images group-active:text-orange-900"></i>
                                    </span>
                                    {sidebarOpen ? (
                                        <span className="pl-4 ">Gallery</span>
                                    ) : null}
                                </Link>
                            </li>
                        )}

                        {user?.role === "ADMIN" && (
                            <li className="flex items-center duration-300 border-b border-dashed border-borderColor transition-color group bg-surface hover:bg-background hover:bg-blue-gray-900 hover:text-background">
                                <Link
                                    href={route(`setting.index`)}
                                    className={`flex h-full w-full items-center 
                                    ${
                                        url.includes("setting")
                                            ? "bg-background"
                                            : "bg-transparent"
                                    }
                                    px-4 py-2 transition-all duration-300 ${sidebarOpen && "group-hover:scale-105"} sidebar-menu group-hover:bg-background group-hover:text-onBackground`}
                                >
                                    <span className="text-xl">
                                        <i className="fa-solid fa-wrench group-active:text-orange-900"></i>
                                    </span>
                                    {sidebarOpen ? (
                                        <span className="pl-4 ">Setting</span>
                                    ) : null}
                                </Link>
                            </li>
                        )}
                        {(user?.role === "ADMIN" ||
                            user?.role === "EDITOR") && (
                            <li className="flex items-center duration-300 border-b border-dashed border-borderColor transition-color group bg-surface hover:bg-background hover:bg-blue-gray-900 hover:text-background">
                                <Link
                                    href={route(`publication.index`)}
                                    className={`flex h-full w-full items-center 
                                    ${
                                        url.includes("publication")
                                            ? "bg-background"
                                            : "bg-transparent"
                                    }
                                    px-4 py-2 transition-all duration-300 ${sidebarOpen && "group-hover:scale-105"} sidebar-menu group-hover:bg-background group-hover:text-onBackground`}
                                >
                                    <span className="text-xl">
                                        <i className="fa-regular fa-newspaper group-active:text-orange-900"></i>
                                    </span>
                                    {sidebarOpen ? (
                                        <span className="pl-4 ">
                                            Publication
                                        </span>
                                    ) : null}
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </aside>
    );
}

export default SidebarComponent;
