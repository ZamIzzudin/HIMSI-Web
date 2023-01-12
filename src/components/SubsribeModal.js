import { Modal } from 'react-bootstrap'

export default function SubscribeModal({ showSubscribeModal, setSubscribeModal }) {
    return (
        <Modal
            size="large"
            centered
            show={showSubscribeModal}
            onHide={() => setSubscribeModal(false)}>
            <Modal.Body>
                <h5 className="text-center">Check Your Email</h5>
            </Modal.Body>
        </Modal>
    )
}