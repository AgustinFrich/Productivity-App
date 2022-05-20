import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const register = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:5000/api/register",
      { username: username, password: password },
      { "Content-Type": "application/json" }
    );

    const data = await response;
    if (data.data.status === "ok") {
      navigate("../Login");
    }
  };

  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={register}>
        <input
          type={"text"}
          name="username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        ></input>
        <br />
        <input
          type={"password"}
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        ></input>
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
};

export default SignUp;
