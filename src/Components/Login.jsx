import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "https://productivity-app-frich.herokuapp.com/api/login",
      { username: username, password: password },
      { "Content-Type": "application/json" }
    );

    const data = await response;

    if (data.data.user) {
      localStorage.setItem("token", data.data.user);
      alert("login succesful!");
      navigate("../dashboard");
    } else {
      alert("Error... upss...");
    }
  };

  return (
    <>
      <h1>Log In</h1>
      <form onSubmit={login}>
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
        <button type="submit">Log In</button>
      </form>
    </>
  );
};

export default Login;
