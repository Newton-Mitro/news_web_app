import {PropsWithChildren} from "react";
import myLogo from "../../../assets/brand/logo.png";
import XIcon from "../../../assets/svg/x_twitter.png";
import Marquee from "react-fast-marquee";
import {Link} from "@inertiajs/react";
import ThemeSwitcher from "@/Components/ThemeSwitcher";

function Header({scrollFromTop}: PropsWithChildren<{
    scrollFromTop: any,
}>) {

    const formatter = new Intl.DateTimeFormat('bn-BD', {
        dateStyle: 'full',
    });

    return (
        <>
            <div className="container">
                <div className="hidden md:flex h-10"></div>
                <div className="hidden md:flex items-center justify-between ">
                    <div className="font-bangla_uni">{formatter.format(new Date())}</div>
                    <div className="font-bangla_uni">
                        <ul className="flex gap-4">
                            <li><Link className="hover:text-error" href={""}>বাংলাদেশ</Link></li>
                            <li><Link className="hover:text-error" href={""}>আন্তর্জাতিক</Link></li>
                            <li><Link className="hover:text-error" href={""}>খেলাধুলা</Link></li>
                            <li><Link className="hover:text-error" href={""}>বিনোদন</Link></li>
                        </ul>
                    </div>
                    <div className="flex gap-2">
                        <Link className="flex items-center rounded-full bg-primary justify-center w-7 h-7 text-white" href={""}>
                            <i className="fab fa-facebook-f"></i>
                        </Link>

                        <Link className="flex items-center rounded-full bg-primary justify-center w-7 h-7 text-white" href={""}>
                            <a href="https://x.com" target="_blank">
                                <img src={XIcon} alt="" className="w-4 invert"/>
                            </a>
                        </Link>

                        <Link className="flex items-center rounded-full bg-primary justify-center w-7 h-7 text-white" href={""}>
                            <i className="fab fa-instagram"></i>
                        </Link>

                        <Link className="flex items-center rounded-full bg-primary justify-center w-7 h-7 text-white" href={""}>
                            <i className="fab fa-linkedin-in"></i>
                        </Link>

                        <Link className="flex items-center rounded-full bg-primary justify-center w-7 h-7 text-white" href={""}>
                            <i className="fab fa-github"></i>
                        </Link>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="">
                        <ThemeSwitcher/>
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

                            <Link className="" href={route('home')}>
                                <i className="fas fa-home"></i>
                            </Link>

                            <Link className="hidden md:block" href={""}>
                                <i className="fas fa-search"></i>
                            </Link>

                        </div>
                        <ul className="flex gap-6 w-10.5/12 h-full overflow-auto items-center">
                            <li><Link className="hover:text-error" href={route('pages.byCategory','Bangladesh')}>সমগ্র বাংলাদেশ</Link></li>
                            <li><Link className="hover:text-error" href={route('pages.byCategory','World')}>বিশ্ব</Link></li>
                            <li><Link className="hover:text-error" href={route('pages.byCategory','Economy')}>অর্থনীতি</Link></li>
                            <li><Link className="hover:text-error" href={route('pages.byCategory','Lifestyle')}>জীবনধারা</Link></li>
                            <li><Link className="hover:text-error" href={route('pages.byCategory','Business')}>বাণিজ্য</Link></li>
                            <li><Link className="hover:text-error" href={route('pages.byCategory','Sports')}>খেলাধুলা</Link></li>
                            <li><Link className="hover:text-error" href={route('pages.archive')}>সংরক্ষণাগার</Link></li>
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
                    <div className="bg-secondary py-2 px-4">সর্বশেষ</div>
                    <Marquee className="py-2">
                        <ul className="flex list-disc gap-16">
                            <li>সাগর-রুনি হত্যা: প্রতিবেদন জমার তারিখ পেছাল ১১১ বার</li>
                            <li>তেজগাঁওয়ে কারিগরি শিক্ষার্থীদের অবরোধে তীব্র যানজট</li>
                        </ul>
                    </Marquee>
                </div>
            </div>
        </>
    );
}

export default Header;
