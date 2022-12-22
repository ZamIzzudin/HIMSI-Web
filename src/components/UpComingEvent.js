import React from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
// import Slider from 'react-slick'
import { useEffect, useRef } from 'react'

import hero1 from "../assets/img/mcmeetup.png"
import { ComingEvent } from '../utils/ComingEvent'


import "../styles/components/UpComingEvents.css"


const UpComingEvent = () => {
    const ref = useRef();

    useEffect(() => {
        const el = ref.current;

        if (el) {
            const onWheel = e => {
                e.preventDefault();
                el.scrollTo({
                    left: el.scrollLeft + e.deltaY * 1,
                    behavior: 'smooth'
                })
            }
            el.addEventListener('wheel', onWheel);
            return () => el.removeEventListener('wheel', onwheel);
        }

    }, [])
    return (
        <Container>
            <div className='UpComingEvent'>
                <Row className='header mb-4' >
                    <Col className='d-flex justify-content-between align-items-center '>
                        <h3 className='title-header'>Up Coming Events</h3>
                        <Button className='btn-header' variant="primary">View More</Button>
                    </Col>
                </Row>

                <div className='listEvent'
                    ref={ref}
                >
                    {ComingEvent.map((event, index) => {
                        return (
                            <div className='layout'>
                                <Card key={index}>
                                    <div className='gradient'>
                                        <div className='gradient-overlay'></div>
                                        <Card.Img src={hero1} />
                                    </div>
                                    <Card.Body>
                                        <Card.Title>{event.title}</Card.Title>
                                        <Card.Text>{event.content}</Card.Text>
                                        <Button className='btn-card'>Read More</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    })}
                </div>
            </div >
        </Container>
    )
}

export default UpComingEvent