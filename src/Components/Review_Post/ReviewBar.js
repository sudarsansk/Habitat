import React from "react";

const ReviewBar = ({ star, count, total }) => {
  return (
    <div className="review_bar_value">
      <span>{star}</span>
      <span> &#9733; </span>
      <div className="bar">
        <div
          className="inner-bar"
          style={{ width: `${(count / total) * 100}%` }}
        ></div>
      </div>
      <span className="">{count}</span>
    </div>
  );
};

export default ReviewBar;
