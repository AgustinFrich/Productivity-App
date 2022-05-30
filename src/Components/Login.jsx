import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const login = async (e) => {
    setLoading(true);
    e.preventDefault();
    const response = await axios.post(
      "https://productivity-app-frich.herokuapp.com/api/login",
      { username: username, password: password },
      { "Content-Type": "application/json" }
    );

    const data = await response;
    setLoading(false);
    if (data.data.user) {
      localStorage.setItem("token", data.data.user);
      navigate("../dashboard");
    } else {
      setErrorMsg("Username or password are incorrect.");
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center m-5">
        <Card className="p-4">
          <h1>Loading</h1>
          <hr />
          <br />
        </Card>
      </div>
    );
  }
  return (
    <div className="d-flex justify-content-center m-5">
      <Card className="p-4">
        <h1>Log In</h1>
        <form onSubmit={login}>
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
            {errorMsg !== "" ? (
              <p style={{ color: "#FF0000" }}>{errorMsg}</p>
            ) : (
              <></>
            )}
            <br />
            <button className=" btn btn-primary" type="submit">
              Log In
            </button>
            <br />
            <p>
              Or else <a href="../signup">Sign Up</a>
            </p>
          </div>
          <br />
        </form>
      </Card>
    </div>
  );
};

export default Login;
