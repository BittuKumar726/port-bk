import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";

const AboutCard = () => {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Bittu Kumar </span>
            from <span className="purple"> Jharkhand, India.</span>
            <br />
            <br />I am Bittu Kumar, an{" "}
            <span className="purple">enthusiastic</span> learner with high
            motivational, problem-solving, and decision-making skills. I seek
            knowledge for self-development and aim to be a helping hand for
            community development. Highly interested in{" "}
            <span className="purple">reading books</span> and participating in{" "}
            <span className="purple">
              extracurricular activities like sports
            </span>
            , I am an excellent{" "}
            <span className="purple">
              team player with leadership qualities
            </span>
            . I am also extremely inclined towards spirituality and humanity. I
            have around <span className="purple">3.5 years</span> of experience
            as a software developer with expertise in developing web
            applications using <span className="purple">ReactJs</span>,{" "}
            <span className="purple">NodeJs</span>,{" "}
            <span className="purple">Python</span>,{" "}
            <span className="purple">Flask API</span>, and{" "}
            <span className="purple">MongoDB</span>. I have a sound
            understanding of <span className="purple">JavaScript</span>,{" "}
            <span className="purple">HTML</span>,{" "}
            <span className="purple">CSS3</span>,{" "}
            <span className="purple">Redux/ReduxToolkit</span>,{" "}
            <span className="purple">RESTful API</span>, and{" "}
            <span className="purple">databases such as MongoDB</span>. I am
            proficient in version control using{" "}
            <span className="purple">Git and Jira</span>.
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Song
            </li>
          </ul> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default AboutCard;
