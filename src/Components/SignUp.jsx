import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Card } from "react-bootstrap";

const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const register = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "https://productivity-app-frich.herokuapp.com/api/register",
      { username: username, password: password },
      { "Content-Type": "application/json" }
    );

    const data = await response;
    if (data.data.status === "ok") {
      navigate("../Login");
    }
  };

  return (
    <div className="d-flex justify-content-center m-5">
      <Card className="p-4">
        <h1>Sign Up</h1>
        <form onSubmit={register}>
          <div className="d-grid justify-content-center">
            <hr />
            <h6 className="m-2">User name</h6>
            <input
              type={"text"}
              name="username"
              placeholder="Examle123"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            ></input>
            <h6 className="m-2">Password</h6>
            <input
              type={"password"}
              name="password"
              placeholder="••••••••"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            ></input>
            <br />
            <br />
            <button className=" btn btn-primary" type="submit">
              Sign Up
            </button>
            <br />
            <p>
              Or else <a href="../login">Log In</a>
            </p>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default SignUp;
