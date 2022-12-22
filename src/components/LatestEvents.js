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
                    <Col className='d-flex justify-content-between align-items-center'>
                        <h3 className='title-header'>Lastest Events</h3>
                        <Button className='btn-header' variant="primary">View More</Button>
                    </Col>
                </Row>
                <div className='list-event'>
                    {dataEvents.map((event, index) => {
                        return (
                            <Card key={index}>
                                <div className='img-layout'>
                                    <div className='gradient'>
                                        <div className='gradient-overlay'></div>
                                        <Card.Img src={imageLastest} />
                                    </div>
                                </div>
                                <Card.Body>
                                    <Card.Title>{event.title}</Card.Title>
                                    <Card.Text className='date'>{event.date}</Card.Text>
                                    <Card.Text className='deskripsi'>{event.content}</Card.Text>
                                    <Button className='btn-card flex-fill'>Learn More - </Button>
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