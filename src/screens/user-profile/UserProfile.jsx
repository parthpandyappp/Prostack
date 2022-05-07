import ToggleSwitch from "./toggle-switch/ToggleSwitch";
import ProjectCard from "./project-card/ProjectCard";
import { BsGlobe, BsTwitter } from "react-icons/bs";
import { user } from "../user";
import { data } from "../data";

export default function UserProfile() {
  return (
    <div className="h-screen relative">
      <div className="bg-gradient-to-tr from-[#094067] to-[#3da9fc] h-1/4 mx-4 mt-3 rounded-lg"></div>
      <section className="bg-transparent p-5 rounded-md absolute w-full px-10 right-1/2 translate-x-1/2 bottom-3/4 translate-y-2/3 flex items-center justify-between">
        <div className="user-profile flex items-center gap-5">
          <div className="user-image h-44 w-44 rounded-full overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src={user.avatar}
              alt="profile-pic"
            />
          </div>
          <div className="user-details mt-12 w-1/2 flex flex-col gap-1">
            <h1 className="font-bold text-xl">{user.displayName}</h1>
            <p className="text-sm text-gray-500">UI/UX Designer</p>
            <p className="text-sm text-gray-500">
              Skills: HTML, CSS, ReactJS, VanillaJS
            </p>
            <p className="text-sm text-gray-500">Bio: {user.bio}</p>
          </div>
        </div>
        <div className="flex flex-col mt-5">
          <ToggleSwitch />
          <div className="socials flex gap-5 mt-4 justify-end">
            <a
              href={user.blog}
              className="flex items-center gap-2 hover:text-button"
            >
              <BsGlobe />
            </a>
            <a
              href={user.blog}
              className="flex items-center gap-2 hover:text-button"
            >
              <BsTwitter />
            </a>
          </div>
        </div>
      </section>
      <ul className="mt-36 mx-auto mb-10">
        {data.map((projectInfo) => (
          <ProjectCard projectInfo={projectInfo} key={projectInfo.title} />
        ))}
      </ul>
    </div>
  );
}
