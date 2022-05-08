import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { useAuth } from "../context";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

function ProjectCard({ projectInfo }) {
  const {
    projectName,
    gitHubLink,
    category,
    tagArray,
    description,
    techStackArray,
  } = projectInfo;

  const { currentUser, getUser } = useAuth();

  const deleteHandler = async (e) => {
    try {
      const docRef = doc(db, "users", currentUser.uid);
      const projectArr = currentUser.projects;
      const filteredProjectArr = projectArr.filter(
        (project) => project.projectName !== projectName
      );
      await updateDoc(docRef, {
        projects: filteredProjectArr,
      });
      await getUser(currentUser.uid);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-8 w-10/12 m-auto shadow-lg flex flex-col gap-2 rounded-lg">
      <div className="flex justify-between items-center gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <p className="text-3xl font-semibold text-heading">{projectName}</p>
          <div>
            <AiFillDelete
              className="text-red-700 text-2xl cursor-pointer"
              onClick={deleteHandler}
            />
          </div>
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
      <a
        href={gitHubLink}
        className="self-end h-8 w-10 bg-button rounded-full flex justify-center items-center"
      >
        <MdOutlineKeyboardArrowRight className="text-2xl font-bold text-buttonText" />
      </a>
    </div>
  );
}

export { ProjectCard };
