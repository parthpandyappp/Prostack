import React, { useState } from "react";
import {
  CategoryList,
  ProjectListingCard,
  ProjectListingNavbar,
  ProjectListingSidebar,
  Search,
} from "../components";
import Footer from "../components/Footer";
import { useData } from "../context";

const ProjectListing = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchInput, setSearchInput] = useState("");
  const {
    dataState: { projects },
  } = useData();
  const categoryFilteredData = projects.filter((project) => {
    if (activeCategory === "All") return projects;
    return project.category === activeCategory;
  });

  const searchFilterdData = categoryFilteredData.filter((project) => {
    if (searchInput === "") return categoryFilteredData;
    const searchInputLowerCase = searchInput.toLowerCase();
    return (
      project.projectName.toLowerCase().includes(searchInputLowerCase) ||
      project.tagArray
        .map((tag) => tag.toLowerCase())
        .includes(searchInputLowerCase) ||
      project.techStackArray
        .map((stack) => stack.toLowerCase())
        .includes(searchInputLowerCase)
    );
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
        <Search searchInput={searchInput} setSearchInput={setSearchInput} />
        <div className="flex flex-col gap-4 my-6">
          {searchFilterdData &&
            searchFilterdData?.map((project, index) => {
              return <ProjectListingCard key={index} projectInfo={project} />;
            })}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export { ProjectListing };
