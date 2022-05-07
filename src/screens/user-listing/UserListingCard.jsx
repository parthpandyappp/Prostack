import React from "react";
import { AiFillGithub } from "react-icons/ai";

const UserListingCard = ({ userInfo }) => {
  const { title, githubLink, tags, description, techStack } = userInfo;
  return (
    <div className="p-8 w-10/12 m-auto shadow-lg flex flex-col gap-2 rounded-lg">
      <div className="flex items-center gap-2">
        <p className="text-3xl font-semibold text-heading">{title}</p>
        <a href={githubLink} target="_blank" rel="noreferrer">
          <AiFillGithub className="text-2xl" />
        </a>
      </div>
      <div className="flex gap-1 flex-wrap">
        {tags.map((tag) => {
          return (
            <span
              key={tag}
              className="bg-button text-white font-medium py-[2px] px-4 rounded-full"
            >
              {tag}
            </span>
          );
        })}
      </div>
      <p className="text-paragraph">{description}</p>
      <div className="text-heading font-medium">
        Tech Stack: {techStack.join(", ")}
      </div>
    </div>
  );
};

export default UserListingCard;
