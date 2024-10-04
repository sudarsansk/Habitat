import React from "react";
import * as MdIcon from "react-icons/md";
import * as LuIcon from "react-icons/lu";

export const SideNavData = [
  {
    icon: <MdIcon.MdSpaceDashboard />,
    title: "Dashboard",
    link: "/",
    layout: "tasks",
  },

  {
    icon: <MdIcon.MdOutlineCategory />,
    title: "Categories",
    link: "categories",
  },
  {
    icon: <MdIcon.MdOutlinePostAdd />,
    title: "All Posts",
    link: "posts",
    layout: "posts",
  },
  {
    icon: <LuIcon.LuLayoutList />,
    title: "Please Ignore",
    subMenu: [
      {
        icon: <MdIcon.MdOutlineFormatListBulleted />,
        title: "Grid Layout",
      },
      {
        icon: <MdIcon.MdOutlineGridView />,
        title: "List Layout",
      },
      {
        icon: <LuIcon.LuTable2 />,
        title: "Table Layout",
      },
    ],
  },
];
