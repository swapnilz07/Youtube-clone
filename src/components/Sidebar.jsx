import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

import SidebarMenuIcon from "./SidebarMenuIcon.jsx";
import { categories } from "../utils/constants.js";
import { Context } from "../context/contextApi.js";

const Sidebar = () => {
  const { selectedCategory, setSelectedCategory, mobileMenu } =
    useContext(Context);

  const navigate = useNavigate();

  const clickHandler = (name, type) => {
    switch (type) {
      case "category":
        return setSelectedCategory(name);
      case "home":
        return setSelectedCategory(name);
      case "menu":
        return false;
      default:
        break;
    }
  };

  return (
    <div
      className={`md:block w-[240px] overflow-y-auto h-full py-4 bg-black fixed z-10 translate-x-[-240px] md:translate-x-0 transition-all sidebar-scrollbar ${
        mobileMenu ? "translate-x-0" : ""
      }`}
    >
      <div className="flex px-5 flex-col">
        {categories.map((item) => {
          return (
            <div key={item.name}>
              <SidebarMenuIcon
                text={item.type === "home" ? "Home" : item.name}
                icon={item.icon}
                action={() => {
                  clickHandler(item.name, item.type);
                  navigate("/");
                }}
                className={`${
                  selectedCategory === item.name ? "bg-white/[0.15]" : ""
                }`}
              />
              {item.divider && <hr className="my-5 border-white/[0.2]" />}
            </div>
          );
        })}
        <hr className="my-5 border-white/[0.2]" />
        <div className="font-bold text-gray-600 opacity-80 text-sm text-center">
          Create by swapnil
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
