import { Col, Row } from "react-bootstrap";
import {
  DiDjango,
  DiGit,
  DiHtml5,
  DiJavascript1,
  DiNodejs,
  DiPython,
  DiReact,
} from "react-icons/di";
import { FaJira } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiAntdesign,
  SiExpress,
  SiFastapi,
  SiFlask,
  SiMongodb,
  SiRedux,
  SiTypescript,
} from "react-icons/si";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Cols icon={<DiHtml5 color="#df4d26" />} label="HTML5" />
      <Cols icon={<DiJavascript1 color="#ffff00" />} label="Javascript" />
      <Cols icon={<SiTypescript color="#0175c9" />} label="Typescript" />
      <Cols icon={<DiPython style={{ color: "#3776AB" }} />} label="Python" />
      <Cols icon={<DiNodejs color="#83cd29" />} label="Node Js" />
      <Cols icon={<DiReact color="cyan" />} label="React" />
      <Cols icon={<SiMongodb color="green" />} label="MongoDB" />
      <Cols icon={<DiDjango color="#83cd33" />} label="Django" />
      <Cols icon={<SiFlask />} label="Flask" />
      <Cols icon={<SiFastapi color="#05978a" />} label="FastAPi" />
      <Cols icon={<SiExpress color="#83cd33" />} label="Express Js" />
      <Cols icon={<DiGit color="#e84d31" />} label="Git" />
      <Cols icon={<SiRedux color="#7248b6" />} label="Redux" />
      <Cols icon={<RiTailwindCssFill color="#19b3b6" />} label="Tailwind CSS" />
      <Cols icon={<SiAntdesign color="#1ba8ee" />} label="Ant design" />
      <Cols icon={<FaJira color="#0352c9" />} label="Jira" />
    </Row>
  );
};

const Cols = ({ icon, label }: { icon: React.ReactNode; label: String }) => {
  return (
    <Col xs={4} md={2} className="tech-icons">
      {icon}
      <h6>{label ? label : ""}</h6>
    </Col>
  );
};

export default Techstack;
