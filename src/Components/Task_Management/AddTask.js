import React, { useState } from "react";
import { useSelector } from "react-redux";
import apiRespect from "../../app/apiRequest";
import { useNavigate } from "react-router-dom";

const AddTask = ({ tasks, setTasks }) => {
  const API_URL = "http://localhost:3500/items";
  const categories = useSelector((state) => state.categories);
  let navigate = useNavigate();
  const [fetchErr, setFetchErr] = useState(null);
  const categoryOptions = categories.map(
    (category) => Object.keys(category)[0]
  );
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    category: "Break",
    description: "",
  });

  const handleChange = (e) => {
    console.log("Before Functionality");
    let { name, value } = e.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const resetForm = () => {
    setForm({
      title: "",
      category: "Break",
      description: "",
    });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const id = tasks.length > 0 ? Number(tasks[tasks.length - 1].id) + 1 : 1;
    let { title, category, description } = form;
    const newTask = {
      id,
      title,
      checked: false,
      category,
      description,
    };

    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    };

    const response = await apiRespect(API_URL, postOptions);
    if (!response) {
      setTasks([...tasks, newTask]);
      resetForm();
      navigate("/");
    }
    setIsLoading(false);
  };

  return (
    <div className="add-edit-container">
      <form className="add-edit-form  highlight" onSubmit={(e) => handleAdd(e)}>
        <h2>Add Task</h2>
        <div className="form-group">
          <label htmlFor="title">Task</label>
          <input
            type="text"
            placeholder="Please type the task"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            className="categorySelect"
            name="category"
            value={form.category}
            onChange={handleChange}
          >
            {categoryOptions.map((category) => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            name="description"
            value={form.description}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="mt-2" disabled={isLoading}>
            {isLoading ? "Please Wait..." : "Add"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
