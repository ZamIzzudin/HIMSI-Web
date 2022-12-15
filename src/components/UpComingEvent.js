import React from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import Slider from 'react-slick'

import hero1 from "../assets/img/mcmeetup.png"
import { dataEvents } from '../utils/dataEvent'


import "../styles/components/UpComingEvents.css"


const UpComingEvent = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 0,
        // adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <Container>
            <div className='UpComingEvent'>
                <Row className='header mb-4' >
                    <Col className='d-flex justify-content-between align-items-center '>
                        <h3 className='judul'>Up Coming Events</h3>
                        <Button className='hei' variant="primary">View More</Button>
                    </Col>
                </Row>

                <Slider className='event' {...settings}>
                    {dataEvents.map((event, index) => {
                        return (
                            <Card key={index}>
                                <div className='gradient'>
                                    <div className='gradient-overlay'></div>
                                    <Card.Img src={hero1} />
                                </div>
                                <Card.Body>
                                    <Card.Title>{event.title}</Card.Title>
                                    <Card.Text className='lg-'>{event.content}</Card.Text>
                                    <Button className='btn-card'>View More</Button>
                                </Card.Body>
                            </Card>
                        )
                    })}
                </Slider>
            </div >
        </Container>
    )
}

export default UpComingEvent