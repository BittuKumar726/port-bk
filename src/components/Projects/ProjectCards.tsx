import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";
import CustomModal from "../features/CustomModal";

const ProjectCards = (props: any) => {
  const [showModal, setShowModal] = useState(false);

  // Function to handle modal opening
  const handleOpenModal = () => {
    setShowModal(true);
  };

  // Function to handle modal closing
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Check if content exceeds 100 characters
  const isLongContent = props.description.length > 100;

  return (
    <div>
      <Card className="project-card-view">
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify", whiteSpace: "pre-line" }}>
            {/* Display truncated content or full content based on length */}
            {isLongContent ? (
              <>
                <span
                  dangerouslySetInnerHTML={{
                    __html: props.description.slice(0, 400) + "...",
                  }}
                ></span>
                &nbsp; &nbsp;
                <span
                  style={{ color: "blue", cursor: "pointer" }}
                  onClick={handleOpenModal}
                >
                  Read More
                </span>
              </>
            ) : (
              <span
                dangerouslySetInnerHTML={{
                  __html: props.description,
                }}
              ></span>
            )}
          </Card.Text>
          <Button variant="primary" href={props.link} target="_blank">
            <BiLinkExternal /> &nbsp;
            {"Live Demo"}
          </Button>
          <span>&nbsp; &nbsp;</span>
          <Button variant="primary" href={props.repoLink} target="_blank">
            <BiLinkExternal /> &nbsp;
            {"GitHub Repository"}
          </Button>
        </Card.Body>
      </Card>

      {/* Modal for displaying full content */}
      {showModal && (
        <CustomModal {...props} show={showModal} onHide={handleCloseModal} />
      )}
    </div>
  );
};

export default ProjectCards;
