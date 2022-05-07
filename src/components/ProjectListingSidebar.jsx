import React from "react";
import { NavLink } from "react-router-dom";

const SidebarLink = ({ name, to }) => {
  return (
    <li className="nav-item flex-auto text-center">
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? "sidebar-link active" : "sidebar-link"
        }
      >
        {name}
      </NavLink>
    </li>
  );
};

const ProjectListingSidebar = () => {
  return (
    <ul className="nav nav-tabs flex flex-row flex-wrap list-none border-b-0 pl-0 mb-4">
      <SidebarLink name={"Projects"} to="/listing/projects" />
      <SidebarLink name={"Users"} to="/listing/users" />
    </ul>
  );
};

export { ProjectListingSidebar };
