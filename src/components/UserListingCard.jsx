import React from "react";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";

const UserListingCard = ({ userInfo }) => {
  const { displayName, bio, username, avatar, twitter } = userInfo;
  return (
    <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md px-5 w-full">
      <div class="flex justify-end px-4 pt-4"></div>
      <div class="flex flex-col items-center pb-5 min-h-[0rem]">
        <img
          class="mb-3 w-24 h-24 rounded-full shadow-lg"
          src={avatar}
          alt="userImage"
        />
        <h5 class="mb-1 text-xl font-medium text-gray-900">{displayName}</h5>
        <span class="text-sm text-paragraph text-center">{bio}</span>
        <div className="flex items-center gap-3 mt-5 text-3xl">
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub className="hover:opacity-90 cursor-pointer" />
          </a>
          {twitter && (
            <a
              href={`https://twitter.com/${twitter}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineTwitter className="text-blue-500 hover:opacity-90 cursor-pointer" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export { UserListingCard };
