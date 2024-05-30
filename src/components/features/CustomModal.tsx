import { Button, Card, Modal } from "react-bootstrap";
import { BiLinkExternal } from "react-icons/bi";
const CustomModal = (props: any) => {
  const { title, description, show, onHide } = props;
  return (
    <Modal
      show={show}
      onHide={onHide}
      // size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="modal-section">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {title ? title : ""}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-card-view">
          <Card.Img variant="top" src={props.imgPath} alt="card-img" />
          <Card.Body>
            <Card.Text style={{ textAlign: "justify", whiteSpace: "pre-line" }}>
              <span
                dangerouslySetInnerHTML={{
                  __html: description,
                }}
              ></span>
            </Card.Text>
            {props.link && (
              <Button variant="primary" href={props.link} target="_blank">
                <BiLinkExternal /> &nbsp;
                {"Live Demo"}
              </Button>
            )}
            <span>&nbsp; &nbsp;</span>
            {props.repoLink && (
              <Button variant="primary" href={props.repoLink} target="_blank">
                <BiLinkExternal /> &nbsp;
                {"GitHub Repository"}
              </Button>
            )}
          </Card.Body>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
      </div>
    </Modal>
  );
};

export default CustomModal;
