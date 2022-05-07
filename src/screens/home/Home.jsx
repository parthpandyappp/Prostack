import React from "react";
import { AiFillGithub } from "react-icons/ai";
const Home = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center ">
      <button className="bg-black text-white flex items-center gap-2 px-2 py-4 rounded font-medium   hover:opacity-90">
        <AiFillGithub /> Sign in with Github
      </button>
    </div>
  );
};

export default Home;
