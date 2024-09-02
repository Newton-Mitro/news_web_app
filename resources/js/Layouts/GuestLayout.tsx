import { Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";
import myLogo from "../../assets/brand/logo.png";

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="flex flex-col items-center min-h-screen pt-6 bg-background sm:justify-center sm:pt-0">
            <div>
                <Link href="/">
                    <img src={myLogo} alt="" className="w-36" />
                </Link>
            </div>

            <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-surface shadow-md sm:max-w-md sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
