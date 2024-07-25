import { Col, Row } from "react-bootstrap";
import { FcLinux } from "react-icons/fc";
import {
  SiNetlify,
  SiPostman,
  SiVisualstudiocode,
  SiWindows10,
} from "react-icons/si";

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows10 color="#2272b6" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FcLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode color="#1e97e8" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman color="#e84d31" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify color="#24c1b1" />
      </Col>
    </Row>
  );
};

export default Toolstack;
