/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const useTimer = ({ timer, setTimer, updateData }) => {
  const [isActive, setIsActive] = useState(false);
  const [activatedOnce, setActivatedOnce] = useState(false);

  function toggle() {
    setIsActive(!isActive);
    if (!activatedOnce) setActivatedOnce(true);
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
    } else if (!isActive && timer !== 0 && activatedOnce) {
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

    var hDisplay = h > 0 ? h + " : " : "00 : ";
    var mDisplay = m > 0 ? m + " : " : "00 : ";
    var sDisplay = s < 10 ? (s !== 0 ? "0" + s : "00") : s;

    return hDisplay + mDisplay + sDisplay;
  };

  return { secondsToHms, toggle, isActive, reset };
};

export default useTimer;
