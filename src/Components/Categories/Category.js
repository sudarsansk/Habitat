import React from "react";

const Category = ({ category }) => {
  return (
    <div className="individual-category highlight">
      {Object.entries(category).map(([key, { icon, color }]) => (
        <div key={key}>
          <span style={{ backgroundColor: `${color}` }}>{icon}</span>
          <div>{key}</div>
        </div>
      ))}
    </div>
  );
};

export default Category;
