import React from "react";
import { data } from "../data";
import {
  ProjectListingNavbar,
  ProjectListingTabs,
  ProjectListingSidebar,
} from "../index";
import UserListingCard from "./UserListingCard";

const UserListing = () => {
  return (
    <div>
      <ProjectListingNavbar />
      <ProjectListingTabs />
      <main className="w-11/12 m-auto">
        <ProjectListingSidebar />
        <h1 className="text-4xl text-heading font-bold text-center">
          Find awsome teammates!
        </h1>
        <div className="flex flex-col gap-4 my-6">
          {data.map((user, index) => {
            return <UserListingCard key={index} userInfo={user} />;
          })}
        </div>
      </main>
    </div>
  );
};

export default UserListing;
