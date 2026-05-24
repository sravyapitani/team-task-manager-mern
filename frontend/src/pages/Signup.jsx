import { useState } from "react";
import axios from "axios";

function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "https://team-task-manager-mern-ad0z.onrender.com/auth/signup",
        {
          name,
          email,
          password,
          role: "Member"
        }
      );

      alert("Signup Successful");

      setName("");
      setEmail("");
      setPassword("");

      window.location.href = "/login";

    } catch (error) {

      alert("Signup Failed");

      console.log(error);

    }

  };

  return (

    <div className="container">

      <h1>Signup</h1>

      <form onSubmit={handleSignup}>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

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
          Signup
        </button>

      </form>

      <br />

      <p>

        Already have an account?

        <a
          href="/login"
          style={{
            color: "#38bdf8",
            marginLeft: "8px"
          }}
        >
          Login
        </a>

      </p>

    </div>

  );

}

export default Signup;