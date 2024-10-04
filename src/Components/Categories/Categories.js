import React from "react";
import Category from "./Category";
import { useSelector } from "react-redux";
import { IoMdAdd } from "react-icons/io";

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  return (
    <div className="category-container">
      <div className="categories">
        {categories.map((category, index) => (
          <Category category={category} key={index} />
        ))}
        <div className="add-category">
          <button className="add-icon">
            <IoMdAdd />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
