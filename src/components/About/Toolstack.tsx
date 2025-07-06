import { Col, Row } from "react-bootstrap";
import { FcLinux } from "react-icons/fc";
import {
  SiApple,
  SiNetlify,
  SiPostman,
} from "react-icons/si";
import { FaWindows } from "react-icons/fa";
import { BiLogoVisualStudio } from "react-icons/bi";



const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaWindows color="#2272b6" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApple color="#e4dddd" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FcLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiLogoVisualStudio color="#1e97e8" />
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
