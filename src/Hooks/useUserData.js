/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt from "jsonwebtoken";
import axios from "axios";

const useUserData = () => {
  const navigate = useNavigate();

  const [work, setWork] = useState(0);
  const [study, setStudy] = useState(0);
  const [hobbies, setHobbies] = useState(0);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
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
    const response = await axios.get(
      "https://productivity-app-frich.herokuapp.com/api/userdata",
      {
        headers: { "x-access-token": localStorage.getItem("token") },
      }
    );

    setWork(response.data.work);
    setHobbies(response.data.hobbies);
    setStudy(response.data.study);
    setLoading(false);
  };

  const updateData = async () => {
    const response = await axios.post(
      "https://productivity-app-frich.herokuapp.com/api/userdata",
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

  return {
    work,
    setWork,
    study,
    setStudy,
    hobbies,
    setHobbies,
    loading,
    updateData,
  };
};

export default useUserData;
