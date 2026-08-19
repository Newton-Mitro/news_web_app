import ThemeSwitcher from "@/Components/ThemeSwitcher";
import SidebarComponent from "@/Layouts/Parts/SidebarComponent";
import { User } from "@/types";
import "@fortawesome/fontawesome-free/css/all.css";
import { Link, useRemember } from "@inertiajs/react";
import { PropsWithChildren, ReactNode, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import uuid from "react-uuid";

export default function Authenticated({
    user,
    header,
    children,
}: PropsWithChildren<{ user: User; header?: ReactNode }>) {
    const [sidebarOpen, setSidebarOpen] = useRemember(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    console.log(user);
    

    return (
        <>
            <ToastContainer />
            <div className="relative w-full h-screen bg-background">
                <section className={`ml-14 h-full`}>
                    <header className="w-full h-16">
                        {/* <Header /> */}
                        <header className="flex items-center justify-between w-full h-full px-6 bg-surface text-onSurface">
                            <div className="flex items-center gap-4 cursor-pointer">
                                <Link
                                    href={route("public.home")}
                                    // href="/"
                                    className="flex items-center justify-center p-2 text-xl transition-all duration-300 rounded-full h-9 w-9 bg-primary text-onPrimary hover:scale-110 md:hidden"
                                >
                                    <i className="fa-solid fa-repeat"></i>

                                    <span className="sr-only ">
                                        Switch To Front
                                    </span>
                                </Link>
                                <Link
                                    href={route("public.home")}
                                    // href="#"
                                    className="hidden transition-all duration-300 text-onSurface hover:underline md:block"
                                >
                                    <span className="">Switch To Front</span>
                                </Link>
                                <ThemeSwitcher />
                            </div>
                            <div className="flex items-center h-full gap-2">
                                <div className="relative h-full group">
                                    <button className="flex items-center h-full gap-2">
                                        <span className="flex items-center h-full"></span>
                                        <div className="hidden md:flex md:flex-col md:items-end md:leading-tight">
                                            <div className="text-left">
                                                <div className="">
                                                    {user?.name}
                                                </div>
                                                <div className="text-[9px]">
                                                    {user?.role}
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                </div>

                                <div className="">
                                    <Link
                                        className="flex items-center justify-center p-2 text-xl transition-all duration-300 rounded-full h-9 w-9 bg-primary text-onPrimary hover:scale-110"
                                        href={route("logout")}
                                        method="post"
                                    >
                                        <span className="sr-only">Log out</span>
                                        <i className="fa-solid fa-right-from-bracket"></i>
                                    </Link>
                                </div>
                            </div>
                        </header>
                    </header>
                    <section className="h-[calc(100vh-64px)] overflow-auto">
                        <Outlet />
                        {children}
                    </section>
                    {/* <section id="footer" className="w-full h-12 mt-auto">
                        <footer className="flex items-center justify-center w-full h-full bg-surface text-onSurface">
                            <p className="text-sm font-light text-center">
                                Developed by DC Quantum Labs
                            </p>
                        </footer>
                    </section> */}
                </section>
                <section className="fixed top-0 left-0 h-full">
                    <SidebarComponent
                        sidebarOpen={sidebarOpen}
                        setSidebarOpen={setSidebarOpen}
                        toggleSidebar={toggleSidebar}
                        user={user}
                    />
                </section>
            </div>
        </>
    );
}
