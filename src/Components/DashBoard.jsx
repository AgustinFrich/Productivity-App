import useUserData from "../Hooks/useUserData";
import Timer from "./Timer";

const DashBoard = () => {
  const {
    work,
    setWork,
    hobbies,
    setHobbies,
    study,
    setStudy,
    updateData,
    loading,
  } = useUserData();

  if (loading) {
    return (
      <div>
        <h1>Dashboard</h1>
        <p>Loading...</p>
      </div>
    );
  } else {
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
  }
};

export default DashBoard;

//
