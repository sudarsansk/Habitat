import React from "react";

const EditTask = () => {
  return (
    <div className="add-edit-container">
      <form className="add-edit-form  highlight">
        <h2>Add Task</h2>
        <div className="form-group">
          <label htmlFor="title">Task</label>
          <input type="text" placeholder="Please type the task" />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select name="" id="">
            <option value="">Work</option>
            <option value="">Health</option>
            <option value="">Medicine</option>
            <option value="">Research</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input type="text" />
        </div>
        <button type="submit" className="mt-2">
          Sample
        </button>
      </form>
    </div>
  );
};

export default EditTask;
