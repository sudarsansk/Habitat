import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { postToggle, taskToggle } from "../../features/layoutSlice";
const SideMenuList = ({ item }) => {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState(false);
  const handleToggle = (layout) => {
    if (layout == "tasks") {
      dispatch(taskToggle(toggle));
    } else if (layout == "posts") {
      dispatch(postToggle(toggle));
    }
    setToggle(!toggle);
  };
  if (item.subMenu) {
    return (
      <div className={`side_nav_item ${open ? "open" : ""}`}>
        {item.link ? (
          <NavLink
            to={item.link}
            className={({ isActive }) =>
              `link_element side_nav_title ${isActive ? "active-menu" : ""}`
            }
            onClick={() => setOpen(!open)}
          >
            <span className="side_nav_header">
              {item.icon}
              <span className="title">{item.title}</span>
            </span>
            <i className="bi bi-chevron-down toggle-btn"></i>
          </NavLink>
        ) : (
          <span
            to={item.link}
            className="side_nav_title"
            onClick={() => setOpen(!open)}
          >
            <span className="side_nav_header">
              {item.icon}
              <span className="title">{item.title}</span>
            </span>
            <i className="bi bi-chevron-down toggle-arrow"></i>
          </span>
        )}

        <div className="side_nav_submenu">
          {item.subMenu.map((subMenu, index) => (
            <SideMenuList item={subMenu} key={index} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="side_nav_item">
        {item.link ? (
          <NavLink
            to={item.link}
            className={({ isActive }) =>
              `link_element side_nav_title ${isActive ? "active-menu" : ""}`
            }
          >
            <span className="side_nav_header">
              {item.icon}
              <span className="title">{item.title}</span>
            </span>
            {item.layout ? (
              <button
                onClick={() => handleToggle(item.layout)}
                className={`toggle-btn ${toggle ? "toggled" : ""}`}
              >
                <div className="inner-btn"></div>
              </button>
            ) : (
              ""
            )}
          </NavLink>
        ) : (
          <span className="side_nav_title">
            <span className="side_nav_header">
              {item.icon}
              <span className="title">{item.title}</span>
            </span>
            {item.layout ? (
              <button
                onClick={() => handleToggle(item.layout)}
                className={`toggle-btn ${toggle ? "toggled" : ""}`}
              >
                <div className="inner-btn"></div>
              </button>
            ) : (
              ""
            )}
          </span>
        )}
      </div>
    );
  }
};

export default SideMenuList;
