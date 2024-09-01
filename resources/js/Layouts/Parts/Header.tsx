import {PropsWithChildren} from "react";
import myLogo from "../../../assets/brand/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";

function Header({scrollFromTop, OpenTopNav, setOpenTopNav, urlArrays}: PropsWithChildren<{
    scrollFromTop: any,
    OpenTopNav: any,
    setOpenTopNav: any,
    urlArrays: any
}>) {
    return (
        <header>
            <div className="container mx-auto">
                <div className="h-16"></div>
                <div className="flex items-center justify-between">
                    <div className="">{`${moment().format('MMMM DD, YYYY')}`}</div>
                    <div className="">
                        <ul className="flex gap-4">
                            <li>Bangladesh</li>
                            <li>International</li>
                            <li>Sports</li>
                            <li>Entertainment</li>
                        </ul>
                    </div>
                    <div className="flex gap-4">
                        <a href="https://www.facebook.com/yourpage" target="_blank" className="social-icon">
                            <i className="fab fa-facebook-f"></i>
                        </a>

                        <a href="https://twitter.com/yourprofile" target="_blank" className="social-icon">
                            <i className="fab fa-twitter"></i>
                        </a>

                        <a href="https://www.instagram.com/yourprofile" target="_blank" className="social-icon">
                            <i className="fab fa-instagram"></i>
                        </a>

                        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" className="social-icon">
                            <i className="fab fa-linkedin-in"></i>
                        </a>

                        <a href="https://github.com/yourprofile" target="_blank" className="social-icon">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div className=""></div>
                    <div className="">
                        <img className="h-20" src={myLogo} alt="header logo"/>
                    </div>
                    <div className="flex gap-4">
                        <i className="fas fa-sun"></i>
                        <i className="fas fa-globe"></i>
                    </div>
                </div>
            </div>
            <div className="bg-surface shadow-sm">
                <div className="container mx-auto py-2 flex gap-6">
                    <div className="flex gap-6">
                        <a href="https://www.facebook.com/yourpage" target="_blank" className="social-icon">
                            <i className="fas fa-bars"></i>
                        </a>

                        <a href="https://twitter.com/yourprofile" target="_blank" className="social-icon">
                            <i className="fas fa-home"></i>
                        </a>

                        <a href="https://www.instagram.com/yourprofile" target="_blank" className="social-icon">
                            <i className="fas fa-search"></i>
                        </a>


                    </div>
                    <ul className="flex gap-6">
                        <li>Budget</li>
                        <li>World</li>
                        <li>Economy</li>
                        <li>Lifestyle</li>
                        <li>Business</li>
                        <li>Sports</li>
                    </ul>
                </div>
            </div>
            <div className="">
                <div className="container mx-auto bg-primaryVariant text-onPrimaryVariant p-2">
                    <Marquee>
                        I can be a React component, multiple React components, or just some text.
                    </Marquee>
                </div>
            </div>
        </header>
    );
}

export default Header;
