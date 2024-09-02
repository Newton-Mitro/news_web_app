import {PropsWithChildren} from "react";
import myLogo from "../../../assets/brand/logo.png";
import XIcon from "../../../assets/svg/x_twitter.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import {Link} from "@inertiajs/react";

function Header({scrollFromTop}: PropsWithChildren<{
    scrollFromTop: any,
}>) {
    console.log(scrollFromTop)
    return (
        <>
            <div className="container">
                <div className="hidden md:flex h-10"></div>
                <div className="hidden md:flex items-center justify-between ">
                    <div className="">{`${moment().format('MMMM DD, YYYY')}`}</div>
                    <div className="">
                        <ul className="flex gap-4">
                            <li><Link className="hover:text-error" href={""}>Bangladesh</Link></li>
                            <li><Link className="hover:text-error" href={""}>International</Link></li>
                            <li><Link className="hover:text-error" href={""}>Sports</Link></li>
                            <li><Link className="hover:text-error" href={""}>Entertainment</Link></li>
                        </ul>
                    </div>
                    <div className="flex gap-4">
                        <Link className="" href={""}>
                            <i className="fab fa-facebook-f"></i>
                        </Link>

                        <Link className="items-center flex" href={""}>
                            <a href="https://x.com" target="_blank">
                                <img src={XIcon} alt="" className="w-4"/>
                            </a>
                        </Link>

                        <Link className="" href={""}>
                            <i className="fab fa-instagram"></i>
                        </Link>

                        <Link className="" href={""}>
                            <i className="fab fa-linkedin-in"></i>
                        </Link>

                        <Link className="" href={""}>
                            <i className="fab fa-github"></i>
                        </Link>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="">
                        <Link className="hover:text-error" href={""}><i className="fas fa-sun fa-2x" ></i></Link>
                    </div>
                    <div className="">
                        <Link className="" href={""}>
                            <img className="h-20" src={myLogo} alt="header logo"/>
                        </Link>
                    </div>
                    <div className="flex gap-4">
                        <Link className="font-bold hover:text-error" href={""}>বাংলা</Link>
                    </div>
                </div>
            </div>
            <div className="bg-surface shadow-sm sticky w-full top-0 z-50 ">
                <div className="container h-14 flex gap-6 items-center justify-between">
                    <div className="flex gap-6 w-full h-full items-center">
                        <div className="flex gap-6 w-1.5/10 h-full items-center">
                            <Link className="" href={""}>
                                <i className="fas fa-bars"></i>
                            </Link>

                            <Link className="" href={""}>
                                <i className="fas fa-home"></i>
                            </Link>

                            <Link className="hidden md:block" href={""}>
                                <i className="fas fa-search"></i>
                            </Link>

                        </div>
                        <ul className="flex gap-6 w-10.5/12 h-full overflow-auto items-center">
                            <li><Link className="hover:text-error" href={""}>Budget</Link></li>
                            <li><Link className="hover:text-error" href={""}>World</Link></li>
                            <li><Link className="hover:text-error" href={""}>Economy</Link></li>
                            <li><Link className="hover:text-error" href={""}>Lifestyle</Link></li>
                            <li><Link className="hover:text-error" href={""}>Business</Link></li>
                            <li><Link className="hover:text-error" href={""}>Sports</Link></li>
                        </ul>
                    </div>
                    {
                        scrollFromTop  ? (<div className="hidden md:block">
                            <Link className="" href={""}>
                                <img className="h-12" src={myLogo} alt="header logo"/>
                            </Link>
                        </div>):null
                    }
                </div>
            </div>
            <div className="">
                <div className="md:container bg-primaryVariant text-onPrimaryVariant flex pr-2">
                    <div className="bg-secondary py-2 px-4">Latest</div>
                    <Marquee className="py-2">
                        <ul className="flex list-disc gap-16">
                            <li>I can be a React component, multiple React components, or just some text.</li>
                            <li>The quick brown busy fox jump over the lazy dog.</li>
                        </ul>
                    </Marquee>
                </div>
            </div>
        </>
    );
}

export default Header;
