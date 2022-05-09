import { ToggleSwitch, ProjectCard, ProjectListingNavbar } from "../components";
import { BsGlobe, BsTwitter } from "react-icons/bs";
import { useAuth } from "../context";
import EmptyPage from "../components/EmptyPage";
function UserProfile() {
  const { currentUser } = useAuth();
  const { avatar, displayName, bio, blog, twitter } = currentUser;

  return (
    <>
      <ProjectListingNavbar />
      <div className="">
        <section className="flex flex-col justify-center md:flex-row md:items-center md:justify-between md:mx-4 bg-gradient-to-tr from-button/70 to-button/20 p-4 rounded-lg">
          <div className="flex flex-col items-center md:flex-row md:gap-4">
            <div className="h-44 w-44 rounded-full overflow-hidden">
              <img src={avatar} alt="user-pic" />
            </div>
            <div className="flex flex-col text-center w-60 md:text-left">
              <h1 className="font-bold text-xl">{displayName}</h1>
              <p className="text-sm ">{bio}</p>
            </div>
          </div>
          <div className="socials flex flex-col-reverse items-center mt-2 gap-3 md:items-end">
            <ToggleSwitch />
            <div className="socials flex gap-3 mt-4 justify-end text-3xl">
              {blog && (
                <a
                  href={blog}
                  target="_blank"
                  className="flex items-center gap-2 hover:text-button"
                  rel="noreferrer"
                >
                  <BsGlobe />
                </a>
              )}
              <a
                href={`https://twitter.com/${twitter}`}
                target="_blank"
                className="flex items-center gap-2 hover:text-button"
                rel="noreferrer"
              >
                <BsTwitter />
              </a>
            </div>
          </div>
        </section>
        <h1 className="text-center text-heading text-3xl mt-5 font-semibold">
          Your Projects
        </h1>
        <ul className="mt-5 mx-auto mb-10">
          {currentUser.projects.length > 0 ? (
            currentUser.projects.map((projectInfo, index) => (
              <ProjectCard projectInfo={projectInfo} key={index} />
            ))
          ) : (
            <EmptyPage />
          )}
        </ul>
      </div>
    </>
  );
}

export { UserProfile };
