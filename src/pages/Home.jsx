import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { useAuth } from "../context";
import firebase from "../firebase/firebase";
// import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";

const Home = () => {
  const { userData, signin } = useAuth();
  console.log(userData);
  console.log("firebase: ", firebase);

  const authenticateUser = async (provider) => {
    console.log("Reached", provider);
    // var provider = new provider();
    await signin(provider).catch((err) => console.log(JSON.stringify(err)));
  };

  return (
    <div className="w-full h-screen flex justify-center items-center ">
      <button
        className="bg-black text-white flex items-center gap-2 px-2 py-4 rounded font-medium   hover:opacity-90"
        onClick={() => authenticateUser(firebase.auth.GithubAuthProvider)}
      >
        <AiFillGithub /> Sign in with Github
      </button>
    </div>
  );
};

export { Home };
