import { Card } from "react-bootstrap";
import "./App.css";

const App = () => {
  return (
    <div className="d-flex justify-content-center m-5">
      <Card className="p-4">
        <br />
        <h1>Welcome!</h1>
        <hr />
        <div className="d-flex">
          <a href="./signup">
            <button className="m-2 btn btn-primary">Sign Up</button> <br />
          </a>
          <a href="./login">
            <button className="m-2 btn btn-light">Log In</button> <br />
          </a>
        </div>
      </Card>
    </div>
  );
};

export default App;

// Dictionary
// https://api.dictionaryapi.dev/api/v2/entries/en/{word}

//Weather
//https://openweathermap.org/current
