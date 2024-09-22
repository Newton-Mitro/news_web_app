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
            handleAddTag();
        }
    };

    return (
        <div className="flex flex-col">
            <label htmlFor="tags" className="mb-2 font-bold">
                Select Tags
            </label>
            <div className="flex flex-wrap p-2 border rounded-md border-borderColor bg-background">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    // onKeyDown={handleKeyDown}
                    placeholder="Add a tag"
                    className="px-2 py-1 border rounded-md bg-surface border-borderColor focus:outline-none focus:ring focus:ring-blue-300"
                />
                <button
                    onClick={handleAddTag}
                    className="px-2 ml-2 rounded-md text-onSecondary bg-secondary"
                >
                    Add
                </button>
                <div className="flex flex-wrap mt-2">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="bg-blue-200 text-blue-800 text-sm font-medium mr-2 mb-2 px-2.5 py-0.5 rounded-full"
                        >
                            {tag}
                            <button
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
