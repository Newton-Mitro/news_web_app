import { PropsWithChildren } from "react";
import whiteLogo from "../../../assets/brand/logo.png";
import MenuView from "./MenuView";

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
            className={`relative z-[10000000] h-full bg-surface
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
                <div className="flex items-center justify-center w-full h-16 py-1 border-t border-b">
                    <img
                        src={whiteLogo}
                        alt=""
                        className={`${
                            sidebarOpen ? "h-14 w-14" : "h-12 w-12"
                        } o transform transition-all duration-700`}
                    />
                </div>

                <div className="flex h-[calc(100vh-122px)] flex-grow flex-col justify-between overflow-auto text-onSurface">
                    <ul className="flex flex-col justify-center cursor-pointer text-onSurface">
                        {Array.isArray(menus) &&
                            menus.map((menu) => (
                                <MenuView
                                    sidebarOpen={sidebarOpen}
                                    menu={menu}
                                    toggleSidebar={toggleSidebar}
                                />
                            ))}
                    </ul>
                </div>
            </div>
        </aside>
    );
}

export default SidebarComponent;
