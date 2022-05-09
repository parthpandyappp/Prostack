import { useState } from "react";
import { ProjectListingNavbar, TagsInput } from "../components";
import { useAuth, useData } from "../context";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { notifyError, notifyProjectListUpdate } from "../helper-functions";

function ProjectForm() {
  const initialFormData = {
    tagArray: [],
    gitHubLink: "",
    description: "",
    projectName: "",
    category: "Productivity",
    techStackArray: [],
    contactMethod: "Twitter",
    contactLink: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const navigate = useNavigate();
  const { setIsDataUpdated } = useData();

  const {
    projectName,
    description,
    gitHubLink,
    category,
    tagArray,
    techStackArray,
    contactLink,
    contactMethod,
  } = formData;

  const { currentUser, getUser, setCurrentUser } = useAuth();
  const { uid, projects } = currentUser;
  const postProjectDataToFirestore = async (notifySuccess, notifyError) => {
    try {
      const formData = {
        projectName,
        description,
        gitHubLink,
        category,
        tagArray,
        techStackArray,
        contactLink,
        contactMethod,
      };
      const newProjectArr = [...projects, formData];
      const docRef = doc(db, "users", uid);
      await updateDoc(docRef, {
        projects: newProjectArr,
      });
      await getUser(uid, setCurrentUser, notifyError);
      setIsDataUpdated((prev) => !prev);
      navigate("/listing/projects");
      setFormData(initialFormData);
      notifySuccess();
    } catch (error) {
      console.error(error);
      notifyError();
    }
  };

  const changeHandler = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <ProjectListingNavbar />
      <div className="flex justify-center items-center m-4">
        <form className="bg-white shadow-lg rounded px-8 pt-6 pb-8 max-w-lg w-3/5">
          <h1 className="text-center font-bold text-[#094067] text-3xl mb-4">
            Project details form
          </h1>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Project name
            </label>
            <input
              className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-button mb-4"
              id="username"
              type="text"
              placeholder="Enter project title"
              name="projectName"
              value={projectName}
              onChange={changeHandler}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Category
            </label>
            <select
              name="category"
              id="category"
              value={category}
              className="mb-4 py-2 border-2 border-gray-100 block w-full focus:border-button"
              onChange={changeHandler}
            >
              <option value="Remote">Remote</option>
              <option value="Community">Community</option>
              <option value="DevTools">DevTools</option>
              <option value="Education">Education</option>
              <option value="Productivity">Productivity</option>
            </select>
          </div>
          <div className="flex">
            <div className="mb-4 w-full">
              <label
                htmlFor="description"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Description
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:outline-button"
                id="description"
                type="text"
                rows="3"
                value={description}
                name="description"
                placeholder="Describe your project"
                onChange={changeHandler}
              ></textarea>
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="tags"
            >
              Tags
            </label>
            <TagsInput arr={tagArray} setArr={setFormData} name={"tagArray"} />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="tech-stack"
            >
              Tech stack
            </label>
            <TagsInput
              arr={techStackArray}
              setArr={setFormData}
              name="techStackArray"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="github"
            >
              Project GitHub link
            </label>
            <input
              className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-button mb-4"
              id="github"
              type="url"
              name="gitHubLink"
              placeholder="Project GitHub link"
              value={gitHubLink}
              onChange={changeHandler}
            />
          </div>
          <label
            htmlFor="point-of-contact"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Preferred mode of contact
          </label>
          <select
            name="contactMethod"
            id="social-links"
            className="mb-4 py-2 border-2 border-gray-100 block w-full focus:border-button"
            value={contactMethod}
            onChange={changeHandler}
          >
            <option value="Twitter">Twitter</option>
            <option value="Discord">Discord</option>
          </select>
          <input
            className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-button mb-4"
            id="username"
            type="text"
            placeholder="Enter the selected profile link for collaboration"
            value={contactLink}
            name="contactLink"
            onChange={changeHandler}
          />
          <div className="flex space-x-2 ">
            <button
              onClick={() =>
                postProjectDataToFirestore(notifyProjectListUpdate, notifyError)
              }
              type="button"
              className="w-full text-buttonText bg-button hover:opacity-90 focus:ring-4  font-medium rounded text-md px-5 py-2.5"
            >
              Add project
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export { ProjectForm };
