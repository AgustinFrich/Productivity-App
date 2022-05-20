/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
const Timer = ({ name, timer, setTimer, updateData }) => {
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setTimer(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
    } else if (!isActive && timer !== 0) {
      clearInterval(interval);
      updateData();
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, timer]);

  const secondsToHms = (d) => {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor((d % 3600) / 60);
    var s = Math.floor((d % 3600) % 60);

    var hDisplay = h > 0 ? h + (h === 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m === 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s + (s === 1 ? " second" : " seconds");
    return hDisplay + mDisplay + sDisplay;
  };

  return (
    <div>
      <h6>{name}</h6>
      <p>Time: {secondsToHms(timer)}</p>
      <button onClick={toggle}>{isActive ? "Pause" : "Start"}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Timer;
