import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CV_URL } from "../../utils/constants";
import ResumeContent from "./ResumeContent";

const Resume = () => {
  // const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  // const [spojRank, upadteSpojRank] = useState(0);
  // const [hackerrank, upadteHackerank] = useState(0);
  // const [sem, upadateSem] = useState(0);
  // const [cgpa, upadteCgpa] = useState(0);

  // useEffect(() => {
  //   axios
  //     .get(uri)
  //     .then((res) => {
  //       upadteSpojRank(res.data.message[0].spojRank);
  //       upadteHackerank(res.data.message[1].hackerrank);
  //       upadteCgpa(res.data.message[2].cgpa);
  //       upadateSem(res.data.message[3].sem);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <Container fluid className="resume-section">
      {/* <Particle /> */}
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={CV_URL} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <ResumeContent
              title="Software developer 2 - ( Folksmedia India Pvt Ltd )"
              date="July 2023 - Present"
              isProject={true}
              content={[
                {
                  projectName: "Project CVC/GVC",
                  desc: [
                    "Developed an ERP system for CVC/GVC using ReactJs, Typescript, NodeJs, Python, FastApi, Django, Express, Ant Design/Material UI and MongoDB",
                    "Implemented live notifications using pusher.js and custom timezone settings for various project time zones.",
                    "Enhanced web app functionalities, ensuring design consistency and performance optimization.",
                    "Ensured cross-browser compatibility and collaborated with back-end developers for seamless API integration.",
                    "Conducted thorough testing, bug fixing, and participated in code reviews.",
                  ],
                },
              ]}
            />
            <ResumeContent
              title="Software developer - ( Siscaso Pvt Ltd Technologies )"
              date="October 2020 - June 2023"
              projectName="CVC/GVC"
              isProject={true}
              content={[
                {
                  projectName: "Project Medical Council",
                  desc: [
                    "Designed and implemented a user management system for students, doctors, institutes, admins and super admins using ReactJs, Typescript, Python, Flask, Ant Design/Material UI, MongoDB.",
                    "Integrated bulk data upload functionality for institutes, streamlining ad￾ministrative processes.",
                    "Ensured secure access and data integrity with advanced authentication and authorization mechanisms.",
                  ],
                },
                {
                  projectName: "Project Bar Council",
                  desc: [
                    "Developed a portal for advocates, associations, and public welfare fund nominees, facilitating seamless registration and data management using ReactJs, Typescript, Python, Flask, Ant Design/Material UI, MongoDB.",
                    "Created a search portal for efficient access to advocate information and bar association records.",
                  ],
                },
                {
                  projectName: "Project School & Test portal",
                  desc: [
                    "Led the creation of an online testing platform for educational and place￾ment assessments across India.",
                    "Supervised the entire project lifecycle, from planning and design to de￾ployment.",
                    "Implemented real-time reporting and analytics tools to track test perfor￾mance and participation rates using ReactJs, Typescript, Python, Flask, Ant Design/Material UI, MongoDB technologies.",
                  ],
                },
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <ResumeContent
              title="Bachelor of Technology ( Gandhi Institute of Engineering and Technology, Gunupur )"
              date="2017 - 2021"
              content={[`CGPA: ${8.5}`]}
            />

            <h3 className="resume-title">CERTIFICATIONS</h3>
            <ResumeContent
              title="React/JavaScript ( Haker Rank, Cutshort ) - 2022"
              date=""
              content={[]}
            />
            <ResumeContent
              title="Front End Development Libraries ( freeCodeCamp ) - 2024"
              date=""
              content={[]}
            />

            <ResumeContent
              title="Legacy JavaScript Algorithms and Data Structures ( freeCodeCamp ) - 2024"
              date=""
              content={[]}
            />

            <h3 className="resume-title">PERSONAL PROJECTS</h3>
            <ResumeContent
              title={<Link to="/project">Movies List</Link>}
              content={[
                "The Movie Watchlist App is a dynamic web application that offers a variety of features designed to enhance users movie-watching experience.",
              ]}
            />
            <ResumeContent
              title={<Link to="/project">Meal Hub</Link>}
              content={[
                "Users can browse through various meal cate￾gories, discovering a wide array of dishes tailored to their preferences.",
              ]}
            />
            <ResumeContent
              title={<Link to="/project">Book Store</Link>}
              content={[
                "An e-commerce site for browsing and purchas￾ing books, featuring user reviews, ratings, and a recommendation engine.",
              ]}
            />
            {/* <h3 className="resume-title">Publications</h3>
            <ResumeContent
              title=""
              content={[
                "Article entitled An Overlapping Sliding Window and Combined Feature based Emotion Recognition System for EEG Signals publised in Emerald Publication;10.1108/ACI-05-2021-0130",
              ]}
            /> */}

            {/* <h3 className="resume-title">Ranks and Achivements</h3> */}
            {/* <ResumeContent
              title=""
              content={[
                `Current rank in Spoj ${spojRank}`,
                `Current rank in HackerRank  ${hackerrank}`,
                "Top Performer in Code-Break 1.0",
                "Participant in Hack-A-Bit 2019",
              ]}
            /> */}
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={CV_URL} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
};

export default Resume;
