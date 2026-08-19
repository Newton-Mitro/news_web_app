import { Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";
import myLogo from "../../assets/brand/logo.png";
import { useTheme } from "../Hooks/useTheme";

export default function Guest({ children }: PropsWithChildren) {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className="flex flex-col items-center min-h-screen pt-6 bg-background sm:justify-center sm:pt-0">
            <div>
                <Link href="/">
                    <img
                        src={myLogo}
                        alt=""
                        className={`h-24 ${theme === "light" ? "" : "brightness-0 invert"}`}
                    />
                </Link>
            </div>

            <div className="w-full px-6 py-4 mt-6 overflow-hidden shadow-md bg-surface sm:max-w-md sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
