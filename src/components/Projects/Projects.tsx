import { Container, Row, Col } from "react-bootstrap";
// import speech from "../../assets/Projects/speech.jpg";
// import onlineExam from "../../assets/Projects/online-exam.jpg";
// import covid from "../../assets/Projects/corona1.jfif";
// import chat from "../../assets/Projects/chat1.jpg";
import ProjectCards from "./ProjectCards";
import { useEffect, useState } from "react";
import portApi from "../../api/portApi";

const Projects = () => {
  const [data, setData] = useState({ projects: [] });
  const getProjects = async () => {
    try {
      const response = await portApi.get("/get/project");
      setData(response?.data);
    } catch (error) {}
  };

  console.log({ data });

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {data?.projects.length > 0
            ? data?.projects.map((item: any, idx: number) => {
                return (
                  <Col md={4} className="project-card" key={`${idx}-project`}>
                    <ProjectCards
                      imgPath={item?.cardImgUrl}
                      isBlog={false}
                      title={<h3>{item?.title}</h3>}
                      description={`${item?.description}`}
                      link={item?.demoUrl}
                      repoLink={item?.repoUrl}
                    />
                  </Col>
                );
              })
            : null}
          {/* <Col md={4} className="project-card">
            <ProjectCards
              imgPath={onlineExam}
              isBlog={false}
              title={<h3>Online eBook Store Project</h3>}
              description={`<span><strong style="font-size: 1.5em; margin-bottom:1em;">Project Overview</strong></span>
                <span>Developed an online eBook store featuring a variety of books, including story books, study books, joke books, religious books, sports books, and more. This web application offers a seamless user experience for exploring and reading eBooks.</span>
                <span></span>
                <span><strong style="font-size: 1.5em; margin-bottom:1em;">Technologies Used</strong></span>
                <span><strong>Frontend:</strong> React, JavaScript, Tailwind CSS, daisyUI, CSS &amp; HTML</span>
                <span><strong>Backend:</strong> Node.js, Express.js, bcrypt, Cloudinary, cookie-parser, JWT</span>
                <span><strong>Database:</strong> MongoDB, Mongoose</span>
                <span><strong>Version Control:</strong> Git</span>
                <span></span>
                <span><strong style="font-size: 1.5em; margin-bottom:1em;">Key Features</strong></span>
                <p><strong>User Authentication:</strong> Secure registration and login with JWT-based sessions.<br><strong>Book Management:</strong> Admin panel for book management and Cloudinary integration for cover images.<br><strong>Browsing and Search:</strong> Browse by categories and powerful search functionality.<br><strong>Book Details:</strong> Detailed book views with descriptions and reviews.<br><strong>User Reviews and Ratings:</strong> Users can review and rate books.<br><strong>Responsive Design:</strong> Mobile-friendly interface.</p>
                <span><strong style="font-size: 1.5em; margin-bottom:1em;">Challenges and Solutions</strong></span>
                <p><strong>Scalability:</strong> Optimized database queries and efficient data structures.<br><strong>Security:</strong> Implemented robust authentication and authorization.<br><strong>User Experience:</strong> Created an intuitive and engaging UI.</p>  
                `}
              link="https://bkumarstore.netlify.app/"
              repoLink="https://github.com/AdityaRaj140/learning-pro"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={speech}
              isBlog={false}
              title="Speech Recognition"
              description={`-> Speech recognition is to convert speech into a sequence of words by  a computer program.
              -> Speech recognition applications include voice user interface such as voice dialing.
              -> As the most natural communication modality for humans, the ultimate dream of speech recognition is to enable people to communicate more naturally and effectively.
              -> User can easily control the system & play with personal assistance.`}
              link="https://github.com/BittuKumar726/SpeechRecognition.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={covid}
              isBlog={false}
              title="COVID-19 TRACKER"
              description={`-> The World Health Organization has declared the outbreak of the novel coronavirus, Covid-19 as pandemic across the world. With its alarming surge of affected cases throughout the world, lockdown, and awareness (social distancing, use of masks etc.) 
              -> This application is designed to track the current covid case in the world and also country wise. `}
              link="https://bittukumar726.github.io/covid-19-tracker/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={chat}
              isBlog={false}
              title="Real Time Chat Application"
              description={`-> Developed a real time chat application where the users can create their Username & start chatting with the other people in the chat room.`}
              link="https://chatvet.herokuapp.com/index.html"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
