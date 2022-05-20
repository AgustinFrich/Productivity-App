import { Col, Button, Row, Container, Table } from "react-bootstrap";
import useTimer from "../Hooks/useTimer";

const Timer = ({ name, timer, setTimer, updateData }) => {
  const { secondsToHms, toggle, isActive, reset } = useTimer({
    timer,
    setTimer,
    updateData,
  });

  return (
    <div>
      <Table bordered>
        <tbody>
          <Row as="tr">
            <Col className="" as="td" sm={2}>
              <div
                style={{ marginTop: "8px" }}
                className="d-flex justify-content-center align-self-center"
              >
                <h5>{name}</h5>
              </div>
            </Col>
            <Col className="" as="td">
              <h6 style={{ margin: "8px" }} className="d-flex flex-row-reverse">
                {secondsToHms(timer)}
              </h6>
            </Col>
            <Col className="" as="td" xs lg="2">
              <Container>
                <Button variant="primary" onClick={toggle}>
                  {isActive ? "Pause" : "Start"}
                </Button>{" "}
                <Button variant="danger" onClick={reset}>
                  Reset
                </Button>
              </Container>
            </Col>
          </Row>
        </tbody>
      </Table>
    </div>
  );
};

export default Timer;
/*
<h6>{name}</h6>
<p>Time: {secondsToHms(timer)}</p>
*/
