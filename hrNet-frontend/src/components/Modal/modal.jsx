import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types"
import { Backdrop, ModalForm } from "./index.styles";

export const ValidationModal = ({show, onHide, title, body}) => {
  
  return  (
    <>
      <Backdrop>
        <ModalForm show={show} onClick={onHide} keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{body}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onHide}>
              Close
            </Button>
          </Modal.Footer>
        </ModalForm>
      </Backdrop>
    </>
  );
};

ValidationModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired
}
