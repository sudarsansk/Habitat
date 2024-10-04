import React from "react";

const EditPost = () => {
  return (
    <div className="add-edit-container">
      <form className="add-edit-form  highlight">
        <h2>Add Post</h2>
        <div className="form-group">
          <label htmlFor="name">Customer Name</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="review">Review</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Rating</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="image upload">Upload Image</label>
          <input type="text" />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default EditPost;
