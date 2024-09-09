import {PropsWithChildren} from "react";
import whiteLogo from "../../../assets/brand/logo.png";
import {Link} from "@inertiajs/react";

function SidebarComponent({
                              sidebarOpen,
                              setSidebarOpen,
                              toggleSidebar,
                              menus,
                          }: PropsWithChildren<{
    sidebarOpen: any;
    setSidebarOpen: any;
    toggleSidebar: any;
    menus: any;
}>) {
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
                        className={`${
                            sidebarOpen ? "h-14 w-14" : "h-12 w-12"
                        } o transform transition-all duration-700`}
                    />
                </div>

                <div
                    className="flex h-[calc(100vh-122px)] flex-grow flex-col justify-between overflow-auto text-onSurface">
                    <ul className="flex flex-col justify-center cursor-pointer text-onSurface">


                        <li className="flex items-center duration-300 border-b border-borderColor border-dashed transition-color group bg-surface text-onSurface hover:bg-background hover:bg-blue-gray-900 hover:text-background">

                            <Link
                                href={route(`dashboard`)}
                                className={`flex h-full w-full items-center bg-transparent px-4 py-2 text-onSurface transition-all duration-300
        ${
                                    sidebarOpen && "group-hover:scale-105"
                                }  sidebar-menu text-primary group-hover:bg-background group-hover:text-onBackground`}
                            >
                <span className="text-xl">
                    <i className="fa-brands fa-buromobelexperte group-active:text-orange-900"></i>
                </span>
                                {sidebarOpen ? (
                                    <span className="pl-4 ">Dashboard</span>
                                ) : null}
                            </Link>
                        </li>
                        <li className="flex items-center duration-300 border-b border-borderColor border-dashed transition-color group bg-surface text-onSurface hover:bg-background hover:bg-blue-gray-900 hover:text-background">

                            <Link
                                href={route(`news-article.index`)}
                                className={`flex h-full w-full items-center bg-transparent px-4 py-2 text-onSurface transition-all duration-300
        ${
                                    sidebarOpen && "group-hover:scale-105"
                                }  sidebar-menu text-primary group-hover:bg-background group-hover:text-onBackground`}
                            >
                <span className="text-xl">
                    <i className="fa-solid fa-tags group-active:text-orange-900"></i>
                </span>
                                {sidebarOpen ? (
                                    <span className="pl-4 ">Tags</span>
                                ) : null}
                            </Link>
                        </li>
                        <li className="flex items-center duration-300 border-b border-borderColor border-dashed transition-color group bg-surface text-onSurface hover:bg-background hover:bg-blue-gray-900 hover:text-background">

                            <Link
                                href={route(`news-article.index`)}
                                className={`flex h-full w-full items-center bg-transparent px-4 py-2 text-onSurface transition-all duration-300
        ${
                                    sidebarOpen && "group-hover:scale-105"
                                }  sidebar-menu text-primary group-hover:bg-background group-hover:text-onBackground`}
                            >
                <span className="text-xl">
                   <i className="fa-solid fa-layer-group group-active:text-orange-900"></i>
                </span>
                                {sidebarOpen ? (
                                    <span className="pl-4 ">Categories</span>
                                ) : null}
                            </Link>
                        </li>

                        <li className="flex items-center duration-300 border-b border-borderColor border-dashed transition-color group bg-surface text-onSurface hover:bg-background hover:bg-blue-gray-900 hover:text-background">

                            <Link
                                href={route(`news-article.index`)}
                                className={`flex h-full w-full items-center bg-transparent px-4 py-2 text-onSurface transition-all duration-300
        ${
                                    sidebarOpen && "group-hover:scale-105"
                                }  sidebar-menu text-primary group-hover:bg-background group-hover:text-onBackground`}
                            >
                <span className="text-xl">
                    <i className="fa-solid fa-file-circle-plus group-active:text-orange-900"></i>
                </span>
                                {sidebarOpen ? (
                                    <span className="pl-4 ">News</span>
                                ) : null}
                            </Link>
                        </li>

                        <li className="flex items-center duration-300 border-b border-borderColor border-dashed transition-color group bg-surface text-onSurface hover:bg-background hover:bg-blue-gray-900 hover:text-background">

                            <Link
                                href={route(`news-article.index`)}
                                className={`flex h-full w-full items-center bg-transparent px-4 py-2 text-onSurface transition-all duration-300
        ${
                                    sidebarOpen && "group-hover:scale-105"
                                }  sidebar-menu text-primary group-hover:bg-background group-hover:text-onBackground`}
                            >
                <span className="text-xl">
                    <i className="fa-solid fa-users-gear group-active:text-orange-900"></i>
                </span>
                                {sidebarOpen ? (
                                    <span className="pl-4 ">Users</span>
                                ) : null}
                            </Link>
                        </li>

                        <li className="flex items-center duration-300 border-b border-borderColor border-dashed transition-color group bg-surface text-onSurface hover:bg-background hover:bg-blue-gray-900 hover:text-background">

                            <Link
                                href={route(`news-article.index`)}
                                className={`flex h-full w-full items-center bg-transparent px-4 py-2 text-onSurface transition-all duration-300
        ${
                                    sidebarOpen && "group-hover:scale-105"
                                }  sidebar-menu text-primary group-hover:bg-background group-hover:text-onBackground`}
                            >
                <span className="text-xl">
                    <i className="fa-solid fa-gear  group-active:text-orange-900"></i>
                </span>
                                {sidebarOpen ? (
                                    <span className="pl-4 ">Settings</span>
                                ) : null}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    );
}

export default SidebarComponent;
