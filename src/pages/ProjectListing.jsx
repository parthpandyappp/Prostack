import React from "react";
import {
  ProjectListingCard,
  ProjectListingNavbar,
  ProjectListingSidebar,
} from "../components";
import Footer from "../components/Footer";
import { useData } from "../context";

const ProjectListing = () => {
  const {
    dataState: { projects },
  } = useData();
  return (
    <div>
      <ProjectListingNavbar />
      <main className="w-11/12 m-auto">
        <ProjectListingSidebar />
        <h1 className="text-4xl text-heading font-bold text-center">
          Find exciting projects!
        </h1>
        <div className="flex flex-col gap-4 my-6">
          {projects &&
            projects?.map((project, index) => {
              return <ProjectListingCard key={index} projectInfo={project} />;
            })}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export { ProjectListing };
