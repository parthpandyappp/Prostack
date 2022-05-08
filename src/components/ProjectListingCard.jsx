import React from "react";
import { AiFillGithub } from "react-icons/ai";

const ProjectListingCard = ({ projectInfo }) => {
  const {
    projectName,
    gitHubLink,
    category,
    tagArray,
    description,
    techStackArray,
  } = projectInfo;

  return (
    <div className="p-8 w-10/12 m-auto shadow-lg flex flex-col gap-2 rounded-lg">
      <div className="flex justify-between items-center gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <p className="text-3xl font-semibold text-heading">{projectName}</p>
          <a href={gitHubLink} target="_blank" rel="noreferrer">
            <AiFillGithub className="text-2xl" />
          </a>
        </div>
        <p className="text-button text-xs font-bold border-2 border-button p-2 rounded-full">
          {category.toUpperCase()}
        </p>
      </div>
      <div className="flex gap-1 flex-wrap">
        {tagArray.map((tag) => {
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
        Tech Stack: {techStackArray.join(", ")}
      </div>
    </div>
  );
};

export { ProjectListingCard };
