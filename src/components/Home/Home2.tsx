import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/b2.jpeg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Home2 = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              <span>
                {" "}
                I am experienced software developer with over{" "}
                <b className="purple">3.5 years </b> of expertise in crafting
                robust web applications using{" "}
                <b className="purple">
                  ReactJs, NodeJs, Python, Flask API, and MongoDB
                </b>
                .{" "}
              </span>
              <br />
              Skilled in front-end technologies including{" "}
              <b className="purple">JavaScript, HTML, and CSS3 </b>, with
              proficiency in state management using{" "}
              <b className="purple">Redux and ReduxToolkit</b>. <br />
              <span>
                Experienced in building and consuming RESTful APIs and
                proficient in version control using{" "}
                <b className="purple">Git</b> and project management with
                <b className="purple"> Jira</b>.
              </span>{" "}
              <br />
              <span>
                {" "}
                A proactive team player with demonstrated leadership qualities,
                I am passionate about continuous learning, self-development, and
                leveraging technology for community development initiatives.
              </span>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                style={{
                  borderRadius: "50%",
                  color: "#3a0202",
                  filter: "opacity(0.8) drop-shadow(0 0 0)",
                  width: "80%",
                  height: "80%",
                }}
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/BittuKumar726"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="http://www.linkedin.com/in/kumarbittu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
export default Home2;
