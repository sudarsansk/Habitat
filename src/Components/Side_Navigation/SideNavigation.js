import React, { useState } from "react";
import { RiListSettingsLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Images from "../../img/logo.png";
import SideMenuList from "./SideMenuList.js";
import { SideNavData } from "./SideNavData.js";

const SideNavigation = () => {
  return (
    <div className="side-nav-container highlight flex-item">
      <div className="side_header">
        <div className="logo">
          <img src={Images} className="logo"></img>
        </div>
        {SideNavData.map((item, index) => (
          <SideMenuList item={item} key={index} />
        ))}
      </div>
      <div className="side_footer">
        <li>
          <RiListSettingsLine />
          <span>Settings</span>
        </li>
        <li>Timer</li>
        <li>Footer</li>
      </div>
    </div>
  );
};

export default SideNavigation;
