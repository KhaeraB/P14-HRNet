import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Backdrop, ModalForm } from "./index.styles";

const ValidationModal = (props, show, handleClose) => {
  
  return (
    <>
      <Backdrop>
        <ModalForm show={show} onHide={handleClose} keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title>{props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{props.body}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </ModalForm>
      </Backdrop>
    </>
  );
};
export default ValidationModal;
