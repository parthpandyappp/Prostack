import React from "react";
import { data } from "../data";
import {
  ProjectListingNavbar,
  ProjectListingSidebar,
  UserListingCard,
} from "../components";

const UserListing = () => {
  return (
    <div>
      <ProjectListingNavbar />
      <main className="w-11/12 m-auto">
        <ProjectListingSidebar />
        <h1 className="text-4xl text-heading font-bold text-center">
          Find awesome teammates!
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

export { UserListing };
