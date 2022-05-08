import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth, useData } from "../context";
import { getAuth, signOut } from "firebase/auth";

import { actionTypes } from "../reducers";

const ProjectListingNavbar = () => {
  const { currentUser } = useAuth();
  const { dataDispatch } = useData();
  const { CLEAR_DATA } = actionTypes;
  const [showDropdown, setShowDropdown] = useState(false);
  const auth = getAuth();
  const navigate = useNavigate();
  const signoutHandler = () => {
    signOut(auth)
      .then(() => {
        dataDispatch({ type: CLEAR_DATA });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <nav className="flex justify-between items-center p-8 mb-4">
      <Link to="/">
        {" "}
        <h1 className="text-2xl font-bold">
          Pro<span className="text-button">Stack</span>
        </h1>
      </Link>
      <div className="flex gap-5">
        {currentUser && (
          <Link to="/project-form">
            <button
              type="button"
              className="text-buttonText bg-button hover:opacity-90 focus:ring-4  font-medium rounded text-md px-5 py-2.5"
            >
              Add project +
            </button>
          </Link>
        )}
        {currentUser && (
          <div className="relative">
            <img
              className="w-10 h-10 rounded-full"
              src={currentUser?.avatar}
              alt=""
              onClick={() => setShowDropdown(!showDropdown)}
            />
            {showDropdown && (
              <ul className="z-10 absolute -bottom-20 right-0 bg-white shadow-2xl py-4 text-md text-paragraph font-medium">
                <Link
                  to={"/userprofile"}
                  onClick={() => setShowDropdown(false)}
                >
                  <li className="hover:bg-gray-50 px-6">Profile</li>
                </Link>
                <li
                  className="hover:bg-gray-50 px-6 text-red-500 cursor-pointer"
                  onClick={signoutHandler}
                >
                  {" "}
                  Logout
                </li>
              </ul>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export { ProjectListingNavbar };
