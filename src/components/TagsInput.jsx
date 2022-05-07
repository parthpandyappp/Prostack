import React, { useState } from "react";

const TagsInput = () => {
  const [tag, setTag] = useState("");
  const [tagArray, setTagArray] = useState([]);
  const changeHandler = (e) => {
    setTag(e.target.value);
  };
  const keyDownHandler = (e) => {
    if (tag === "" || tag === " ") return;
    if (tagArray.includes(tag.trim())) return setTag("");
    if (e.keyCode === 13 || e.keyCode === 32) {
      setTagArray((prev) => {
        return [...prev, tag];
      });
      setTag("");
    }
  };
  return (
    <div className="flex flex-col gap-[10px]">
      <div className="flex gap-[5px] flex-wrap">
        {tagArray.map((tag, index) => {
          return (
            <span
              key={index}
              className="bg-gray-200 text-paragraph text-sm px-2 rounded-full cursor-pointer transition duration-300 ease"
            >
              {tag}
            </span>
          );
        })}
      </div>
      <input
        type="text"
        className="tag-input bg-paragraph/20 rounded px-4 py-2 text-buttonText w-full text-black focus:outline-paragraph"
        placeholder="Add tags"
        onChange={changeHandler}
        onKeyDown={keyDownHandler}
        value={tag}
      />
    </div>
  );
};

export { TagsInput };
