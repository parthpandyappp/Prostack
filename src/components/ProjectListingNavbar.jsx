import React from "react";
import { Link } from "react-router-dom";

const ProjectListingNavbar = () => {
  return (
    <nav className="flex justify-between items-center p-8 mb-4">
      <Link to="/listing/projects">
        {" "}
        <h1 className="text-2xl font-bold">
          Pro<span className="text-[#3DA9FC]">Stack</span>
        </h1>
      </Link>
      <div className="flex gap-5">
        <Link to="/project-form">
          <button
            type="button"
            className="text-buttonText bg-button hover:opacity-90 focus:ring-4  font-medium rounded text-md px-5 py-2.5"
          >
            Add project +
          </button>
        </Link>
        <Link to="/userprofile">
          <img
            className="w-10 h-10 rounded-full"
            src="https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/032/medium/oapgW_Fp_400x400.jpg"
            alt=""
          />
        </Link>
      </div>
    </nav>
  );
};

export { ProjectListingNavbar };
