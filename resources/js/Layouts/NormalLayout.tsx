import { Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";
import myLogo from "../../assets/brand/logo.png";
import { useTheme } from "../Hooks/useTheme";

export default function NormalLayout({ children }: PropsWithChildren) {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className="flex-col min-h-screen lex font-shurjo bg-background text-onBackground">
            {children}
        </div>
    );
}
