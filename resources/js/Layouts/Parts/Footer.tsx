import {Link} from "@inertiajs/react";
import myLogo from "../../../assets/brand/logo.png";
import {PropsWithChildren} from "react";

function Footer({auth}: PropsWithChildren<{ auth: any }>) {
    return (
        <footer className="mt-auto text-center bg-surface text-onSurface">
            <div className="container flex flex-col items-center justify-center p-3 py-6 mx-auto">
                <Link
                    className="flex flex-col items-center justify-center " href={""}>
                    <img className="h-20" src={myLogo} alt="header logo"/>
                    <p className={`mt-2 font-extrabold`}>
                        Dhaka Credit News
                    </p>
                    <p className="text-sm font-light">
                        Fr. Charles J. Young Bhaban, 173/1/A East Tejturi
                        Bazar, Tejgaon Dhaka 1215
                    </p>
                </Link>

                <p className="mb-1 text-sm font-light">
                    {`©${new Date().getFullYear()} DC News.. All Rights Reserved.`}
                </p>

                <div className="flex flex-col items-center justify-center gap-2">
                    <p className="text-xs font-light">
                        Developed by DC Quantum Labs
                    </p>
                </div>
                {auth.user ? (
                    <Link
                        href={route("dashboard")}
                        className="px-4 text-xs hover:font-bold hover:underline "
                    >
                        <span>User Panel</span>
                    </Link>
                ) : (
                    <>
                        <Link
                            href={route("login")}
                            className="px-4 text-xs hover:font-bold hover:underline "
                        >
                            <span className="">Webmaster Login</span>
                        </Link>
                    </>
                )}
            </div>
        </footer>
    );
}

export default Footer;
