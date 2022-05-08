import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function ProjectCard({ projectInfo }) {
  const { title, tags, githubLink, description, techStack } = projectInfo;
  return (
    <div className="mx-24 mt-5 flex gap-10 px-10 py-5 h-56 shadow-lg rounded-lg">
      <div className="project-details flex flex-col gap-3 w-full">
        <h1 className="text-2xl font-semibold text-heading">{title}</h1>
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
        <p className="text-md text-gray-600">{description}</p>
        <div className="flex gap-3 text-heading font-medium">
          Tech Stack: {techStack.join(", ")}
        </div>
      </div>
      <a
        href={githubLink}
        className="self-end h-8 w-10 bg-button rounded-full flex justify-center items-center"
      >
        <MdOutlineKeyboardArrowRight className="text-2xl font-bold text-buttonText" />
      </a>
    </div>
  );
}

export { ProjectCard };
