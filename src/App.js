import "./App.css";
import SideNavigation from "./Components/Side_Navigation/SideNavigation";
import Task from "./Components/Task_Management/Task";
import Post from "./Components/Review_Post/Post";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AddPost from "./Components/Review_Post/AddPost";
import AddTask from "./Components/Task_Management/AddTask";
import AllPosts from "./Components/Review_Post/AllPosts";
import Category from "./Components/Categories/Categories";

function App() {
  const API_URL = "http://localhost:3500/items";
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Data Not Found");
        const taskItems = await response.json();
        setTasks(taskItems);
        setFetchError(null);
      } catch (e) {
        setFetchError(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    (async () => await fetchItem())();
  }, []);

  return (
    <div className="App">
      <SideNavigation />
      <Routes>
        <Route path="/" element={<Task tasks={tasks} setTasks={setTasks} />} />
        <Route
          path="/add_task"
          element={<AddTask tasks={tasks} setTasks={setTasks} />}
        ></Route>
        <Route path="/add_post" element={<AddPost />}></Route>
        <Route path="/categories" element={<Category />}></Route>
        <Route path="/posts" element={<AllPosts />}></Route>
      </Routes>
      <Post />
    </div>
  );
}

export default App;
