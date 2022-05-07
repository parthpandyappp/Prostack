import { TagsInput } from "../../components/TagsInput/TagsInput";

export default function ProjectForm() {
  return (
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
            className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-button mb-4"
            id="username"
            type="text"
            placeholder="Project category - productivity, education, community etc"
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:outline-button"
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
            htmlFor="tags"
          >
            Tags
          </label>
          <TagsInput />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="tech-stack"
          >
            Tech stack
          </label>
          <TagsInput />
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
            type="text"
            placeholder="Project GitHub link"
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
  );
}
