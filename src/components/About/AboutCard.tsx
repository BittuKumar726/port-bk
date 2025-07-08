import Card from "react-bootstrap/Card";
import MarkdownContent from "../features/markdown";
// import { ImPointRight } from "react-icons/im";

const AboutCard = ({data}: any) => {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Bittu Kumar </span>
            from <span className="purple"> Jharkhand, India.</span>
            <br />
            <br/>
            <MarkdownContent data={data?.aboutIntro} />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default AboutCard;
