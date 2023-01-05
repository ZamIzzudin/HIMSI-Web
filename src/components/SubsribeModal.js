import { Button, Modal, Form } from 'react-bootstrap'
import { useState } from 'react'

export default function SubscribeModal({ showSubscribeModal, setSubscribeModal }) {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')

    function handleSubmit(e) {
        e.preventDefault()

        const userData = {
            email, name
        }

        console.log(userData)

        setEmail('')
        setName('')
        setSubscribeModal(false)
    }

    return (
        <Modal
            size="large"
            centered
            show={showSubscribeModal}
            onHide={() => setSubscribeModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Subscribe</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={(e) => handleSubmit(e)}>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} required type="email" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control value={name} onChange={(e) => setName(e.target.value)} required />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}