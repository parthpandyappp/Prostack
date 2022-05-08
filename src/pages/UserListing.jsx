import React from "react";
import {
  ProjectListingNavbar,
  ProjectListingSidebar,
  UserListingCard,
} from "../components";
import Footer from "../components/Footer";
import { useData } from "../context";

const UserListing = () => {
  const { dataState } = useData();
  const { collabUserList } = dataState;
  return (
    <div>
      <ProjectListingNavbar />
      <main className="w-11/12 m-auto">
        <ProjectListingSidebar />
        <h1 className="text-4xl text-heading font-bold text-center">
          Find awesome teammates!
        </h1>
        <div className="flex flex-col gap-4 my-6">
          {collabUserList.map((user, index) => {
            return <UserListingCard key={index} userInfo={user} />;
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export { UserListing };
