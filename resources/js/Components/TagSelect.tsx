import React, { useState } from "react";

const TagSelect: React.FC = () => {
    const [tags, setTags] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>("");

    const handleAddTag = () => {
        const trimmedValue = inputValue.trim();
        if (trimmedValue && !tags.includes(trimmedValue)) {
            setTags([...tags, trimmedValue]);
            setInputValue("");
        }
    };

    const handleRemoveTag = (tagToRemove: string) => {
        setTags(tags.filter((tag) => tag !== tagToRemove));
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleAddTag();
        }
    };

    return (
        <div className="flex flex-col">
            <label htmlFor="tags" className="mb-2 font-bold">
                Select Tags
            </label>
            <div className="flex flex-wrap gap-2 p-2 border rounded-md border-borderColor bg-background">
                <div className="flex items-center justify-end ">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Add a tag"
                        className="w-full py-1 border rounded-sm bg-surface md:w-80 border-borderColor focus:border-borderColor disabled:bg-disabled focus:ring focus:ring-borderColor focus:ring-opacity-20 text-onSurface"
                    />
                    <button
                        type="button"
                        className="px-2 py-1 border rounded-r text-onSecondary border-borderColor disabled:bg-disabled hover:bg-secondaryVariant bg-secondary"
                        onClick={handleAddTag}
                    >
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-1">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="bg-brand text-onBrand text-sm font-medium px-2.5 py-0.5 rounded-full"
                        >
                            {tag}
                            <button
                                type="button"
                                onClick={() => handleRemoveTag(tag)}
                                className="ml-2 text-blue-500 hover:text-blue-700"
                            >
                                &times;
                            </button>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TagSelect;
