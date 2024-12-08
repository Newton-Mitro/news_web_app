import { Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";
import myLogo from "../../../assets/brand/logo.png";

function Footer({ auth }: PropsWithChildren<{ auth: any }>) {
    return (
        <footer className="mt-auto text-center bg-surface text-onSurface">
            <div className="container flex flex-col items-center justify-center p-3 py-6 mx-auto">
                <ul className="flex gap-4 my-6 text-sm">
                    <li>
                        <Link href={""}>নীতি</Link>
                    </li>
                    <li>
                        <Link href={""}>আমাদের সম্পর্কে</Link>
                    </li>
                    <li>
                        <Link href={""}>যোগাযোগ</Link>
                    </li>
                </ul>
                <Link
                    className="flex flex-col items-center justify-center "
                    href={""}
                >
                    <img className="h-20" src={myLogo} alt="header logo" />
                    <p className={`mt-2 font-extrabold`}>Dhaka Credit News</p>
                    <p className="text-sm font-light">
                        Fr. চার্লস জে. ইয়াং ভবন, 173/1/A পূর্ব তেজতুরি বাজার,
                        তেজগাঁও ঢাকা 1215
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
                            <span className="">Webmaster</span>
                        </Link>
                    </>
                )}
            </div>
        </footer>
    );
}

export default Footer;
