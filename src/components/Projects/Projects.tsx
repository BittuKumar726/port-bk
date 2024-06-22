import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import { useEffect, useState } from "react";
// import portApi from "../../api/portApi";
import projectData from "../../data/project_data.json";

const Projects = () => {
  const [data, setData] = useState<any>({ projects: [] });
  const getProjects = async () => {
    // try {
    //   const response = await portApi.get("/get/project");
    //   setData(response?.data);
    // } catch (error) {}
    setData(projectData);
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
              imgPath={
                "https://res.cloudinary.com/bk-store/image/upload/v1719077925/youtube-banner-8077450_1280_b8e0yu.jpg"
              }
              isBlog={false}
              title={<h3>Meal Hub</h3>}
              description={
                "<span><strong style='font-size: 1.5em; margin-bottom:1em;'>Project Overview</strong></span> <p>Meal Hub is a dynamic web application. It offers a variety of features designed to enhance users' culinary experience:</p> <h2 id='features'>Features</h2> <ul> <li><p><strong>Menu Exploration</strong>: Users can browse through various meal categories, discovering a wide array of dishes tailored to their preferences.</p> </li> <li><p><strong>Favorite Meals</strong>: A personalized feature allows users to save their favorite meals for easy access and reference.</p> </li> <li><p><strong>Random Meal Generator</strong>: Provides users with a random meal suggestion for culinary inspiration or a surprise dish.</p> </li> <li><p><strong>About Section</strong>: Learn more about the website, its creators, and its development journey through the dedicated About section.</p> </li> <li><p><strong>Responsive Design</strong>: Optimized for various devices, ensuring a seamless experience whether accessed from a desktop, tablet, or mobile phone.</p> </li> </ul> <p>Explore <a href='https://bkmealhub.netlify.app/'>Meal Hub</a> today to discover and enjoy a world of culinary delights!</p>"
              }
              link="https://bkumarstore.netlify.app/"
              repoLink="https://github.com/AdityaRaj140/learning-pro"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={
                "https://res.cloudinary.com/bk-store/image/upload/v1717068660/bkport/online-exam_wkgt2l.jpg"
              }
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
              imgPath={
                "https://res.cloudinary.com/bk-store/image/upload/v1717068661/bkport/speech_d9y4q3.jpg"
              }
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
              imgPath={
                "https://res.cloudinary.com/bk-store/image/upload/v1717068662/bkport/corona_g43uft.jpg"
              }
              isBlog={false}
              title="COVID-19 TRACKER"
              description={`-> The World Health Organization has declared the outbreak of the novel coronavirus, Covid-19 as pandemic across the world. With its alarming surge of affected cases throughout the world, lockdown, and awareness (social distancing, use of masks etc.) 
              -> This application is designed to track the current covid case in the world and also country wise. `}
              link="https://bittukumar726.github.io/covid-19-tracker/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={
                "https://res.cloudinary.com/bk-store/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1717077254/comment-widget_unjgxd.jpg"
              }
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
