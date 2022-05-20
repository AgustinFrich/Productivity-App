import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt from "jsonwebtoken";
import axios from "axios";
import Timer from "./Timer";

const DashBoard = () => {
  const navigate = useNavigate();

  const [work, setWork] = useState(0);
  const [study, setStudy] = useState(0);
  const [hobbies, setHobbies] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwt.decode(token);
      if (!user) {
        localStorage.removeItem("token");
        navigate("../login");
      } else {
        getData();
      }
    }
  }, []);

  const getData = async () => {
    const response = await axios.get("http://localhost:5000/api/userdata", {
      headers: { "x-access-token": localStorage.getItem("token") },
    });
    setWork(response.data.work);
    setHobbies(response.data.hobbies);
    setStudy(response.data.study);
  };

  const updateData = async () => {
    const response = await axios.post(
      "http://localhost:5000/api/userdata",
      { study: study, hobbies: hobbies, work: work },
      {
        headers: {
          "x-access-token": localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response;
    if (data.data.status !== "ok") {
      alert(data.error);
    }
  };

  return (
    <>
      <h1>Dashboard</h1>
      <Timer
        name={"Work"}
        timer={work}
        setTimer={setWork}
        updateData={updateData}
      />
      <Timer
        name={"Hobbies"}
        timer={hobbies}
        setTimer={setHobbies}
        updateData={updateData}
      />
      <Timer
        name={"Study"}
        timer={study}
        setTimer={setStudy}
        updateData={updateData}
      />
    </>
  );
};

export default DashBoard;
