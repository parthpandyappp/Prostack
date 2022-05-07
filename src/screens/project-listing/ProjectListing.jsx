import React from "react";
import { data } from "../data";
import ProjectListingCard from "./ProjectListingCard";
import ProjectListingNavbar from "./ProjectListingNavbar";
import ProjectListingSidebar from "./ProjectListingSidebar";

const ProjectListing = () => {
  return (
    <div>
      <ProjectListingNavbar />
      <main className="w-11/12 m-auto">
        <ProjectListingSidebar />
        <h1 className="text-4xl text-heading font-bold text-center">
          Find exciting projects!
        </h1>
        <div className="flex flex-col gap-4 my-6">
          {data.map((project,index) => {
            return <ProjectListingCard key={index} projectInfo={project} />;
          })}
        </div>
      </main>
    </div>
  );
};

export default ProjectListing;
