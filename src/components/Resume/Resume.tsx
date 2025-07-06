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
              title="Senior software developer - ( Millipixels )"
              date="Feb 2025 - Present"
              isProject={true}
              content={[
                {
                  projectName: "",
                  desc: [
                    "<b>Driving Scalable Frontend Architecture :</b> Leading the design and implementation of modular, maintainable UI components using React, TypeScript, and modern design systems, improving development efficiency by 30%",
                    "<b>Cross-Functional Collaboration & Mentorship :</b> Collaborating closely with backend, QA, and product teams to deliver high-performance features; mentoring junior developers and conducting code reviews to uphold code quality and best practices",
                    "<b>Spearheaded performance, UX, and accessibility</b> improvements across core web applications, resulting in faster load times, enhanced user engagement, and significantly improved Lighthouse scores"
                  ],
                },
              ]}
            />
            <ResumeContent
              title="Software development Engineer - ( Futuristic Labs )"
              date="Sep 2024 - Jan 2025"
              isProject={true}
              content={[
                {
                  projectName: "",
                  desc: [
                    "<b>Built Smart Kitchen UI :</b> Developed a responsive, user-friendly interface for IoT-enabled kitchen appliances using React.js and Material UI",
                    "<b>Boosted Appliance Efficiency :</b> Achieved a 20% improvement in functionality through seamless automation and integration of IoT devices",
                    "<b>Enhanced Real-Time Performance :</b> Optimized data flow and live updates with Firebase and MongoDB, ensuring reliable and efficient IoT interactions"
                  ],
                },
              ]}
            />
            <ResumeContent
              title="Software developer 2 - ( Folksmedia India Pvt Ltd )"
              date="July 2023 - Aug 2024"
              isProject={true}
              content={[
                {
                  projectName: "",
                  desc: [
                    "<b>Led ERP System Development :</b> Spearheaded a modern ERP platform using React, Node.js, and MongoDB, streamlining core business operations and boosting efficiency",
                    "<b>Enhanced Global UX :</b> Integrated real-time alerts and timezone customization to deliver a seamless user experience across regions",
                    "<b>Built Scalable Architecture :</b> Developed modular, reusable components and ensured robust API integration through close backend collaboration and code reviews"
                  ],
                },
              ]}
            />
            <ResumeContent
              title="Software developer - ( Siscaso Pvt Ltd Technologies )"
              date="October 2020 - June 2023"
              isProject={true}
              content={[
                {
                  projectName: "",
                  desc: [
                    "<b>Engineered Secure User Management :</b> Designed robust systems ensuring secure, role-based access and data integrity for diverse users including students, doctors, and admins",
                    "<b>Boosted Workflow Efficiency :</b> Led development of a scalable testing platform with real-time analytics and streamlined bulk data uploads, revolutionizing educational assessments nationwide",
                    "<b>Delivered Full-Stack Solutions :</b> Managed end-to-end portal development for registration and data workflows, building modular components with React and Flask, and maintaining high-quality, tested code"
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
