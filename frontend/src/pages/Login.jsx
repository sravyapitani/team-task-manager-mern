import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "https://team-task-manager-mern-ad0z.onrender.com/api/auth/login",
        {
          email,
          password
        }
      );

      alert("Login Successful");

      navigate("/dashboard");

    } catch (error) {

      alert("Login Failed");

      console.log(error);

    }

  };

  return (

    <div className="container">

      <h1>Login</h1>

      <form onSubmit={handleLogin}>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br /><br />

        <button type="submit">
          Login
        </button>

      </form>

      <br />

      <p>

        New user?

        <a
          href="/"
          style={{
            color: "#38bdf8",
            marginLeft: "8px"
          }}
        >
          Signup
        </a>

      </p>

    </div>

  );

}

export default Login;