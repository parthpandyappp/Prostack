export default function ProjectForm() {
  return (
    <div class="flex justify-center">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {" "}
        <h1 class="text-center font-bold text-[#094067] text-3xl mb-4">
          Project details form
        </h1>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Project name
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Project name"
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Category
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Category"
          />
        </div>
        <div class="flex">
          <div class="mb-4 w-full">
            <label
              for="description"
              class="block text-gray-700 text-sm font-bold mb-2"
            >
              Description
            </label>
            <textarea
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              type="text"
              rows="3"
              placeholder="Describe your project"
            ></textarea>
          </div>
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Tags
          </label>
          <div class="flex flex-wrap justify-center space-x-2">
            <span class="px-4 py-2 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
              Text
            </span>

            <span class="px-4 py-2 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
              Text
              <button class="bg-transparent hover focus:outline-none"></button>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}
