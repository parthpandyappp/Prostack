import { AiFillTwitterCircle } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { TagsInput } from "../../components/TagsInput/TagsInput";

export default function ProjectForm() {
  const selectedTags = (tags) => {
    console.log(tags);
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8">
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Project name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Category
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Category"
          />
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              type="text"
              rows="3"
              placeholder="Describe your project"
            ></textarea>
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Tags
          </label>
          <div className="flex flex-wrap justify-center space-x-2">
            <span className="px-4 py-2 rounded-full text-gray-500 bg-gray-200 font-semibold text-xs flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
              Text
            </span>

            <span className="px-4 py-2 rounded-full text-gray-500 bg-gray-200 font-semibold text-xs flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
              Text
              <button className="bg-transparent hover focus:outline-none"></button>
            </span>
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Tech stack
          </label>
          {/* <div className="flex flex-wrap justify-center space-x-2">
            <span className="px-4 py-2 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
              Text
            </span>

            <span className="px-4 py-2 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
              Text
              <button className="bg-transparent hover focus:outline-none"></button>
            </span>
          </div> */}
          <TagsInput selectedTags={selectedTags} tags={["Nodejs", "MongoDB"]} />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="github"
          >
            Project github link
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="github"
            type="text"
            placeholder="Project github link"
          />
        </div>
        <label
          htmlFor="point-of-contact"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Contact
        </label>

        {/* <select name="point-of-contact" id="cars" className="mb-4">
          <option value="Twitter">Twitter</option>
          <option value="Discord">Discord</option>
        </select> */}
        <div>
          <AiFillTwitterCircle /> jrhjhgj
          <FaDiscord />
        </div>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
          id="username"
          type="text"
          placeholder="contact"
        />
        <div className="flex space-x-2 justify-center">
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-[#3da9fc] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
