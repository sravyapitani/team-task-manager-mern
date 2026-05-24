import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function Tasks() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState([]);

  // Fetch Tasks
  const fetchTasks = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/tasks"
      );

      setTasks(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    fetchTasks();

  }, []);

  // Create Task
  const handleTask = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:5000/api/tasks",
        {
          title,
          description
        }
      );

      alert("Task Created");

      setTitle("");
      setDescription("");

      fetchTasks();

    } catch (error) {

      alert("Error Creating Task");

      console.log(error);

    }

  };

  // Delete Task
  const deleteTask = async (id) => {

    try {

      await axios.delete(
        `http://localhost:5000/api/tasks/${id}`
      );

      alert("Task Deleted");

      fetchTasks();

    } catch (error) {

      console.log(error);

    }

  };

  // Update Status
  const updateStatus = async (id) => {

    try {

      await axios.put(
        `http://localhost:5000/api/tasks/${id}`,
        {
          status: "Completed"
        }
      );

      alert("Task Completed");

      fetchTasks();

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div>

      <Navbar />

      <div className="container">

        <h1>Tasks</h1>

        <form onSubmit={handleTask}>

          <input
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <br /><br />

          <textarea
            placeholder="Task Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <br /><br />

          <button type="submit">
            Create Task
          </button>

        </form>

        <br /><br />

        <h2>All Tasks</h2>

        {

          tasks.map((task) => (

            <div
            key={task._id}
            className="card"
            >

              <h3>{task.title}</h3>

              <p>{task.description}</p>

              <p>Status: {task.status}</p>

              <button
                onClick={() => updateStatus(task._id)}
              >
                Mark Completed
              </button>

              <button
                onClick={() => deleteTask(task._id)}
                style={{ marginLeft: "10px" }}
              >
                Delete
              </button>

            </div>

          ))

        }

      </div>

    </div>

  );

}

export default Tasks;