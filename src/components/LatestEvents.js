import React from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import imageLastest from '../assets/img/mengajar.png'

import { dataEvents } from '../utils/dataEvent'
import '../styles/components/LastestEvents.css'

const LatestEvents = () => {
    return (
        <Container>
            <div className='lastestEvents'>
                <Row className='header mb-4'>
                    <Col className='d-flex justify-content-between '>
                        <h3>Lastest Events</h3>
                        <Button className='hei' variant="primary">View More</Button>
                    </Col>
                </Row>
                <div className='list-event'>
                    {dataEvents.map((event, index) => {
                        return (
                            <Card key={index}>
                                <div className='gradient'>
                                    <div className='gradient-overlay'></div>
                                    <Card.Img src={imageLastest} />
                                </div>
                                <Card.Body>
                                    <Card.Title>{event.title}</Card.Title>
                                    <Card.Text className='date'>{event.date}</Card.Text>
                                    <Card.Text>{event.content}</Card.Text>
                                    <Button className='btn-card'>Learn More -> </Button>
                                </Card.Body>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </Container>
    )
}

export default LatestEvents