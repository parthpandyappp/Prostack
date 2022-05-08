import React, { useState } from "react";
import {
  CategoryList,
  ProjectListingCard,
  ProjectListingNavbar,
  ProjectListingSidebar,
} from "../components";
import Footer from "../components/Footer";
import { useData } from "../context";

const ProjectListing = () => {
  const [activeCategory, setActiveCategory] = useState("");
  const {
    dataState: { projects },
  } = useData();
  const categoryFilteredData = projects.filter((project) => {
    if (activeCategory === "") return projects;
    return project.category === activeCategory;
  });
  return (
    <div>
      <ProjectListingNavbar />
      <main className="w-11/12 m-auto">
        <ProjectListingSidebar />
        <h1 className="text-4xl text-heading font-bold text-center">
          Find exciting projects!
        </h1>
        <CategoryList
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <div className="flex flex-col gap-4 my-6">
          {categoryFilteredData &&
            categoryFilteredData?.map((project, index) => {
              return <ProjectListingCard key={index} projectInfo={project} />;
            })}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export { ProjectListing };
