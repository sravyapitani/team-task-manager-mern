import { Link } from "react-router-dom";

function Navbar() {

  return (

    <div className="navbar">

      <Link to="/dashboard">
        Dashboard
      </Link>

      <Link to="/projects">
        Projects
      </Link>

      <Link to="/tasks">
        Tasks
      </Link>

      <Link to="/">
        Logout
      </Link>

    </div>

  );

}

export default Navbar;