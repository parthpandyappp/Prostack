import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import errorPage from "../assets/errorPage.svg";

export default function ErrorPage() {
  return (
    <div>
      <nav className="flex justify-between px-8 pt-6 items-center">
        <h1 className="text-2xl font-bold">
          Pro<span className="text-button">Stack</span>
        </h1>
        <a
          href="https://github.com/parthpandyappp/Prostack/tree/main"
          className="font-medium border-button border-b-4 hover:border-b-blue-500"
        >
          GitHub
        </a>
      </nav>
      <main>
        <img
          src={errorPage}
          alt="landing-img"
          className="mt-10 mx-auto md:m-auto w-[28rem]"
        />
        <div className="font-bold text-center mb-6">
          <p className="text-2xl md:text-4xl">
            404<span className="text-button text-md"> Page not found</span>
          </p>
        </div>
        <Link to="/">
          <button className="bg-black mx-auto text-xl text-white flex items-center gap-2 px-8 py-2 rounded hover:opacity-90">
            <AiFillHome />
            Go Home
          </button>
        </Link>
      </main>
    </div>
  );
}
