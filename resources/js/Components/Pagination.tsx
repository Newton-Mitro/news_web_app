import React from "react";

interface Link {
    active: boolean;
    label: string;
    url: string;
}

interface PaginationProps {
    current_page: number;
    last_page: number;
    first_page_url: string;
    last_page_url: string;
    record_per_page: number;
    links: Link[];
    onPageChange: (page: number, record_per_page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    current_page,
    last_page,
    first_page_url,
    last_page_url,
    record_per_page,
    links,
    onPageChange,
}) => {
    return (
        <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center gap-2">
                <select
                    className="py-0.5 w-20 bg-transparent focus:border-borderColor border border-borderColor shadow-sm focus:ring focus:ring-primary/10"
                    name="limit"
                    id="limit"
                    value={record_per_page}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                        onPageChange(1, Number(e.target.value));
                    }}
                >
                    <option
                        className="even:bg-surface odd:bg-background"
                        value={10}
                    >
                        10
                    </option>
                    <option
                        className="even:bg-surface odd:bg-background"
                        value={50}
                    >
                        50
                    </option>
                    <option
                        className="even:bg-surface odd:bg-background"
                        value={100}
                    >
                        100
                    </option>
                    <option
                        className="even:bg-surface odd:bg-background"
                        value={500}
                    >
                        500
                    </option>
                    <option
                        className="even:bg-surface odd:bg-background"
                        value={1000}
                    >
                        1000
                    </option>
                </select>
                <div className="hidden md:block">
                    {`showing ${
                        current_page === 1
                            ? 1
                            : (current_page - 1) * record_per_page
                    } to ${current_page * record_per_page} out of ${
                        last_page * record_per_page
                    } records`}
                </div>
            </div>
            <nav
                className="flex flex-row items-center justify-between flex-nowrap md:justify-center"
                aria-label="Pagination"
            >
                <button
                    type="button"
                    className="items-center justify-center hidden w-8 h-8 mr-1 border rounded-full md:flex bg-primary text-onPrimary border-borderColor disabled:bg-disabledColor hover:bg-primaryVariant"
                    title="First Page"
                    onClick={() => onPageChange(1, record_per_page)}
                >
                    <span className="sr-only">First Page</span>
                    <i className="fa-solid fa-angles-left"></i>
                </button>
                <button
                    type="button"
                    className="flex items-center justify-center w-8 h-8 mr-1 border rounded-full bg-primary text-onPrimary hover:bg-primaryVariant disabled:bg-disabledColor border-borderColor"
                    title="Previous Page"
                    onClick={() => {}}
                >
                    <span className="sr-only">Previous Page</span>
                    <i className="fa-solid fa-angle-left"></i>
                </button>
                {links.map((link) => {
                    const linkLabel = Number(link.label);
                    const isNumberLabel = !isNaN(linkLabel);
                    if (isNumberLabel) {
                        return (
                            <button
                                key={link.label}
                                className={`hidden md:flex w-8 h-8 mx-1 justify-center items-center rounded-full border  hover:border-gray-300`}
                                type="button"
                                title={`page - ${link.label}`}
                                onClick={() =>
                                    onPageChange(linkLabel, record_per_page)
                                }
                            >
                                {link.label}
                            </button>
                        );
                    }
                })}

                <button
                    className="flex items-center justify-center w-8 h-8 mr-1 border rounded-full bg-primary text-onPrimary hover:bg-primaryVariant disabled:bg-disabledColor border-borderColor hover:border-gray-300"
                    type="button"
                    title="Next Page"
                    onClick={() =>
                        onPageChange(current_page + 1, record_per_page)
                    }
                >
                    <span className="sr-only">Next Page</span>
                    <i className="fa-solid fa-angle-right"></i>
                </button>
                <button
                    type="button"
                    className="items-center justify-center hidden w-8 h-8 mr-1 border rounded-full md:flex bg-primary text-onPrimary hover:bg-primaryVariant disabled:bg-disabledColor border-borderColor hover:border-gray-300"
                    title="Last Page"
                    onClick={() => onPageChange(last_page, record_per_page)}
                >
                    <span className="sr-only">Last Page</span>
                    <i className="fa-solid fa-angles-right"></i>
                </button>
            </nav>
        </div>
    );
};

export default Pagination;
