import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { useAuth } from "../context";

const Home = () => {
  const { currentUser, signin } = useAuth();

  return (
    <div className="w-full h-screen flex justify-center items-center ">
      <button
        className="bg-black text-white flex items-center gap-2 px-2 py-4 rounded font-medium   hover:opacity-90"
        onClick={signin}
      >
        <AiFillGithub /> Sign in with Github
      </button>
    </div>
  );
};

export { Home };
