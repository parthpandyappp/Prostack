import { useState } from "react";
import { ProjectListingNavbar, TagsInput } from "../components";
import { useAuth } from "../context";
import {
  collection,
  updateDoc,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase/firebase";

function ProjectForm() {
  const [tagArray, setTagArray] = useState([]);
  const [gitHubLink, setGitHubLink] = useState("");
  const [description, setDescription] = useState("");
  const [projectName, setProjectName] = useState("");
  const [category, setCategory] = useState("Productivity");
  const [techStackArray, setTechStackArray] = useState([]);

  console.log({
    projectName,
    description,
    gitHubLink,
    category,
    tagArray,
    techStackArray,
  });

  const postProjectDataToFirestore = async () => {
    const res = updateDoc(collection(db, "projects"), {});
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
              placeholder="Project name"
              onChange={(e) => setProjectName(e.target.value)}
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
              name="point-of-contact"
              id="category"
              value={category}
              className="mb-4 py-2 border-2 border-gray-100 block w-full focus:border-button"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Remote">Remote</option>
              <option value="Community">Community</option>
              <option value="Dev tools">Dev tools</option>
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
                placeholder="Describe your project"
                onChange={(e) => setDescription(e.target.value)}
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
            <TagsInput arr={tagArray} setArr={setTagArray} />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="tech-stack"
            >
              Tech stack
            </label>
            <TagsInput arr={techStackArray} setArr={setTechStackArray} />
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
              placeholder="Project GitHub link"
              onChange={(e) => setGitHubLink(e.target.value)}
            />
          </div>
          <label
            htmlFor="point-of-contact"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Preferred mode of contact
          </label>
          <select
            name="point-of-contact"
            id="social-links"
            className="mb-4 py-2 border-2 border-gray-100 block w-full focus:border-button"
          >
            <option value="Twitter">Twitter</option>
            <option value="Discord">Discord</option>
          </select>
          <input
            className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-button mb-4"
            id="username"
            type="text"
            placeholder="Enter the selected profile link for collaboration"
          />
          <div className="flex space-x-2 ">
            <button
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
