import "../../../src/index.css";

export default function UserProfile() {
  return (
    <div className="h-screen relative">
      <div className="bg-gradient-to-tr from-[#094067] to-[#3da9fc] h-1/4 mx-4 mt-3 rounded-lg"></div>
      <section className="bg-transparent p-5 rounded-md absolute w-11/12 right-1/2 translate-x-1/2 bottom-3/4 translate-y-2/3">
        <div className="user-profile flex items-center gap-5">
          <div className="user-image h-52 w-52 rounded-full overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src="https://www.mensjournal.com/wp-content/uploads/mf/1280-selfie.jpg?quality=86&strip=all"
              alt="profile-pic"
            />
          </div>
          <div className="user-details">
            <h1 className="font-bold">John Doe</h1>
            <p className="text-sm text-gray-500">UI/UX Designer</p>
            <p className="text-sm text-gray-500">
              Skills: HTML, CSS, ReactJS, VanillaJS
            </p>
          </div>
        </div>
      </section>
      <ul className="mt-48 ml-10">
        <li>
          <div className="project-details">
            <h3 className="font-bold">Project 1</h3>
            <p>Tech Stack: MERN</p>
          </div>
          <div className="collaborators">
            <div class="flex -space-x-2 overflow-hidden">
              <img
                class="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <img
                class="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <img
                class="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                alt=""
              />
              <img
                class="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
          </div>
          <button
            type="button"
            className="bg-button hover:opacity-90 focus:ring-4 font-medium rounded text-md px-5 py-2.5"
          >
            View Details
          </button>
        </li>
        <li>Project 1</li>
        <li>Project 1</li>
        <li>Project 1</li>
        <li>Project 1</li>
      </ul>
    </div>
  );
}
