import React from "react";
import { IoAdd } from "react-icons/io5";
import TaskItem from "./TaskItem";
import { Link } from "react-router-dom";

const Task = ({ tasks }) => {
  return (
    <div className="task-container flex-item">
      <div className="task_header highlight">
        <input type="search" className="search_bar" placeholder="Search Task" />
        <div className="header_button">
          <Link to="/add_task">
            <button className="task_button link_element">
              <IoAdd />
              Add Task
            </button>
          </Link>
          <Link to="/add_post">
            <button className="link_element">
              <IoAdd />
              Add Post
            </button>
          </Link>
        </div>
      </div>
      <>
        <TaskItem tasks={tasks} />
      </>
    </div>
  );
};

export default Task;
