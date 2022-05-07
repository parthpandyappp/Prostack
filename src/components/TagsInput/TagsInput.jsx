import React, { useState } from "react";

export const TagsInput = () => {
  const [tag, setTag] = useState("");
  const [tagArray, setTagArray] = useState([]);
  const changeHandler = (e) => {
    setTag(e.target.value);
  };
  const keyDownHandler = (e) => {
    if (e.keyCode === 8 && tag === "") {
      setTagArray((prev) => [...tagArray.slice(0, tagArray.length - 1)]);
    }
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
    <div className="flex flex-col">
      <div className="flex">
        {tagArray.map((tag, index) => {
          return (
            <span
              key={index}
              className="tag px-4 py-2 rounded-full text-gray-500 bg-gray-200 font-semibold text-xs flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease"
            >
              {tag}
            </span>
          );
        })}
      </div>
      <input
        type="text"
        className="tag-input bg-paragraph text-buttonText w-full"
        placeholder="Add tags"
        onChange={changeHandler}
        onKeyDown={keyDownHandler}
        value={tag}
      />
    </div>
  );
};

export default TagsInput;
