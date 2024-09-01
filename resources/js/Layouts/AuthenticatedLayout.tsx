import { Link, useRemember } from "@inertiajs/react";
import {PropsWithChildren, ReactNode, useEffect} from "react";
import uuid from "react-uuid";
import SidebarComponent from "@/Layouts/Parts/SidebarComponent";
import {Outlet} from "react-router-dom";
import {User} from "@/types";


const adminAndSuperAdminMenus: {  Id: string, MenuTitle: string, Icon: string, Route: string }[]= [
    {
        Id: uuid(),
        MenuTitle: "Home",
        Icon: "fa-brands fa-fort-awesome",
        Route: "auth.home"
    },
    {
        Id: uuid(),
        MenuTitle: "Pages",
        Icon: "fa-brands fa-page4",
        Route: "pages.index",
    },
    {
        Id: uuid(),
        MenuTitle: "Services",
        Icon: "fa-solid fa-hands-holding-child",
        Route: "auth.our-services",
    },
    {
        Id: uuid(),
        MenuTitle: "Deposit Products",
        Icon: "fa-solid fa-piggy-bank",
        Route: "auth.deposit-products",
    },
    {
        Id: uuid(),
        MenuTitle: "Publication",
        Icon: "fa-solid fa-sack-dollar",
        Route: "auth.publication",
    },
    {
        Id: uuid(),
        MenuTitle: "Downloads",
        Icon: "fa-solid fa-file-pdf",
        Route: "auth.downloads",
    },
    {
        Id: uuid(),
        MenuTitle: "Notices",
        Icon: "fa-solid fa-bullhorn",
        Route: "auth.notices",
    },
    {
        Id: uuid(),
        MenuTitle: "Slider Images",
        Icon: "fa-solid fa-panorama",
        Route: "auth.slider-images",
    },
    {
        Id: uuid(),
        MenuTitle: "Gallery Images",
        Icon: "fa-regular fa-images",
        Route: "auth.gallery-images",
    },
    {
        Id: uuid(),
        MenuTitle: "Leaders",
        Icon: "fa-solid fa-user-tie",
        Route: "auth.leaders",
    },
    {
        Id: uuid(),
        MenuTitle: "Job Circulars",
        Icon: "fa-solid fa-helmet-safety",
        Route: "auth.job-circulars",
    },
    // {
    //   Id: uuid(),
    //   MenuTitle: 'Users',
    //   Icon: 'fa-solid fa-users',
    //   Route: '/auth/users',
    // },
    {
        Id: uuid(),
        MenuTitle: "Settings",
        Icon: "fa-solid fa-gear",
        Route: "auth.settings",
    },
    // {
    //   Id: uuid(),
    //   MenuTitle: 'Account Settings',
    //   Icon: 'fa-solid fa-user-gear',
    //   Route: 'auth/account-settings',
    // },
];

export default function Authenticated({ user, header, children }: PropsWithChildren<{ user: User, header?: ReactNode }>) {
    const [sidebarOpen, setSidebarOpen] = useRemember(false);
    const [menus, setMenus] = useRemember(adminAndSuperAdminMenus);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    useEffect(() => {
        setMenus(adminAndSuperAdminMenus);
    }, [user, menus]);

    return (
        <>
            <div className="relative w-full h-screen bg-background">
                <section className={`ml-14 h-full`}>
                    <header className="w-full h-16">
                        {/* <Header /> */}
                        <header className="flex items-center justify-between w-full h-full px-6 shadow bg-surface text-onSurface">
                            <div className="flex items-center gap-2 cursor-pointer">
                                <Link
                                    href={route("home")}
                                    className="flex items-center justify-center p-2 text-xl transition-all duration-300 rounded-full h-9 w-9 bg-primary text-onPrimary hover:scale-110 md:hidden"
                                >
                                    <i className="fa-solid fa-repeat"></i>

                                    <span className="sr-only ">Switch To Front</span>
                                </Link>
                                <Link
                                    href={route("home")}
                                    className="hidden transition-all duration-300 text-onSurface hover:underline md:block"
                                >
                                    <span className="">Switch To Front</span>
                                </Link>
                            </div>
                            <div className="flex items-center h-full gap-2">
                                {/* <ThemeSwitch /> */}

                                {/* <div className="relative h-full group">
                      <button className="flex items-center h-full gap-2">
                        <span className="flex items-center h-full">
                          <button className="relative flex items-center justify-center p-2 text-xl transition-all duration-300 rounded-full h-9 w-9 bg-primary text-onPrimary hover:scale-110">
                            <i className="fa-brands fa-pagelines" />
                          </button>
                        </span>
                        <div className="hidden md:flex md:flex-col md:items-end md:leading-tight">
                          <div className="text-left">
                            <div className="">Head Office</div>
                            <div className="text-[9px]">Branch</div>
                          </div>
                        </div>
                      </button>
                    </div> */}

                                <div className="relative h-full group">
                                    <button className="flex items-center h-full gap-2">
                    <span className="flex items-center h-full">
                      {/*<img*/}
                      {/*    src={user?.photo}*/}
                      {/*    // src={*/}
                      {/*    //   authUser?.user.photo*/}
                      {/*    //     ? authUser?.user.photo*/}
                      {/*    //     : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH_mjW-rvOfpg1q3Lum1d4HbvOIFhrSidaaA&usqp=CAU'*/}
                      {/*    // }*/}
                      {/*    alt="user profile"*/}
                      {/*    className="rounded-full h-9 w-9"*/}
                      {/*/>*/}
                    </span>
                                        <div className="hidden md:flex md:flex-col md:items-end md:leading-tight">
                                            <div className="text-left">
                                                <div className="">{user?.name}</div>
                                                <div className="text-[9px]">
                                                    {/*{user?.role ? user?.role : "Visitor"}*/}
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
                    <section className="h-[calc(100vh-112px)] overflow-auto">
                        <Outlet />
                        {children}
                    </section>
                    <section id="footer" className="w-full h-12 mt-auto">
                        {/* <Footer /> */}
                        <footer className="flex items-center justify-center w-full h-full border-l shadow bg-surface text-onSurface">
                            <p className="text-sm font-light text-center">
                                Developed by DC Quantum Labs
                            </p>
                        </footer>
                    </section>
                </section>
                <section className="fixed top-0 left-0 h-full">
                    <SidebarComponent
                        menus={menus}
                        sidebarOpen={sidebarOpen}
                        setSidebarOpen={setSidebarOpen}
                        toggleSidebar={toggleSidebar}
                    />
                </section>
            </div>
        </>
    );
}
