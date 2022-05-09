import React from "react";
import errorpage from "../assets/errorPage.svg";

export default function EmptyPage() {
  return (
    <div>
      <img
        src={errorpage}
        alt="landing-img"
        className="mt-10 mx-auto md:m-auto w-[28rem]"
      />
    </div>
  );
}
