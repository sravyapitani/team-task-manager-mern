import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function Projects() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [projects, setProjects] = useState([]);

  // Fetch Projects
  const fetchProjects = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/projects"
      );

      setProjects(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    fetchProjects();

  }, []);

  // Create Project
  const handleProject = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "https://team-task-manager-mern-ad0z.onrender.com/api/projects",
        {
          title,
          description
        }
      );

      alert("Project Created");

      setTitle("");
      setDescription("");

      fetchProjects();

    } catch (error) {

      alert("Error Creating Project");

      console.log(error);

    }

  };

  return (

    <div>

      <Navbar />

      <div className="container">

        <h1>Projects</h1>

        <form onSubmit={handleProject}>

          <input
            type="text"
            placeholder="Project Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <br /><br />

          <textarea
            placeholder="Project Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <br /><br />

          <button type="submit">
            Create Project
          </button>

        </form>

        <br /><br />

        <h2>All Projects</h2>

        {

          projects.map((project) => (

            <div
            key={project._id}
            className="card"
            >

              <h3>{project.title}</h3>

              <p>{project.description}</p>

            </div>

          ))

        }

      </div>

    </div>

  );

}

export default Projects;