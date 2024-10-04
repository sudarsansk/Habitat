import React from "react";
import { LiaEdit } from "react-icons/lia";
import { MdDeleteSweep } from "react-icons/md";
import { useSelector } from "react-redux";
import apiRespect from "../../app/apiRequest";

const TaskItem = ({ tasks, setTasks }) => {
  const API_URL = "http://localhost:3500/items";
  const view = useSelector((state) => state.layout.taskLayout)
    ? "list-view"
    : "grid-view";
  const categories = useSelector((state) => state.categories);
  const handleCheck = async (id) => {
    const presentTask = tasks.filter((task) => task.id == id);
    const patchOption = {
      method: "PATCH",
      headers: {
        "Contnet-Type": "application/json",
      },
      body: JSON.stringify({ checked: !presentTask[0].checked }),
    };
    const response = await apiRespect(`${API_URL}/${id}`, patchOption);
    if (!response) {
      const updatedTask = tasks.map((task) =>
        task.id == id ? { ...task, checked: !task.checked } : task
      );
      setTasks(updatedTask);
    }
  };
  const handleIcon = (task, element) => {
    const obj = categories.find((category) => category[task.category])[
      task.category
    ];
    return element == "icon" ? obj.icon : obj.color;
  };
  return (
    <div className={`task_content ${view}`}>
      {tasks.map((task) => (
        <div className={`task_item highlight ${view}`} key={task.id}>
          <input
            type="checkbox"
            className="check_box"
            onClick={() => handleCheck(task.id)}
          />
          <div className="task_title">
            <span
              className="category-icon"
              style={{
                backgroundColor: `${handleIcon(task, "color")}`,
              }}
            >
              {handleIcon(task, "icon")}
            </span>
            <div className="task-title">
              {task.title.length > 13
                ? `${task.title.slice(0, 13)}`
                : task.title}
            </div>
          </div>
          <div className="item_desc">
            {task.description.length > 50
              ? `${task.description.slice(0, 50)}...`
              : task.description}
          </div>
          <div className={`status ${task.checked ? "finish" : ""}`}>
            {task.checked ? "Completed" : "Pending"}
          </div>
          <div className="edit-delete">
            <LiaEdit className="icon" />
            <MdDeleteSweep className="icon" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskItem;
