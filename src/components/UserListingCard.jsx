import React from "react";
import { AiFillGithub } from "react-icons/ai";

const UserListingCard = ({ userInfo }) => {
  console.log(userInfo);
  const { displayName, bio, username, avatar } = userInfo;
  return (
    <div className="p-8 w-10/12 m-auto shadow-lg flex flex-col gap-2 rounded-lg">
      <div className="flex items-center gap-2">
        <p className="text-3xl font-semibold text-heading">{displayName}</p>
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub className="text-2xl" />
        </a>
      </div>
      <p className="text-paragraph text-sm">{bio}</p>
      {/* <div className="flex gap-1 flex-wrap">
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
      </div> */}
      {/* <div className="text-heading font-medium">
        Tech Stack: {techStack.join(", ")}
      </div> */}
    </div>
  );
};

export { UserListingCard };
