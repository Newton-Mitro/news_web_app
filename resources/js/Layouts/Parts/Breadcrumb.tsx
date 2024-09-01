import NavLink from "@/Components/NavLink";
import { PropsWithChildren } from "react";

function Breadcrumb({ urlArrays }: PropsWithChildren<{ urlArrays: any }>) {
    if (urlArrays?.length > 2) {
        return (
            <div className="container relative w-full mx-auto breadcrumb_component text-onPrimary ">
                <div className="absolute left-0 right-0 w-full ml-4 -bottom-5 md:ml-0">
                    <div className="flex flex-wrap uppercase">
                        <NavLink
                            href={`/${urlArrays[1]}`}
                            className="px-6 py-2 font-semibold rounded-l-md bg-primaryVariant"
                            active={false}
                        >
                            {decodeURIComponent(urlArrays[1])}
                        </NavLink>
                        <span className="px-6 py-2 rounded-r-md bg-primary">
                            {urlArrays.length > 1 &&
                                decodeURIComponent(urlArrays[2])}
                        </span>
                    </div>
                </div>
            </div>
        );
    } else {
        return null;
    }
}

export default Breadcrumb;
