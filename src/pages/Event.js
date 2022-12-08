import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import EventItem from '../components/EventItem'

import '../styles/pages/Event.css'

const Event = () => {

    const detailEvents = [
        {
            tag: "Dikti",
            title: "Programming Class",
            deskripsi: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, velit.",
            img: "../assets/img/event1.jpeg",
            id: '1'
        },
        {
            tag: "PSDM",
            title: "Gathering Himsi 2019",
            deskripsi: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, velit.",
            img: "../assets/img/event1.jpeg",
            id: '10'
        },
        {
            tag: "Dikti",
            title: "MCD",
            deskripsi: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, velit.",
            img: "../assets/img/event1.jpeg",
            id: '3'
        }
    ];

    return (
        <div className='eventList '>
            <Container>
                <Row className='blank-space'>

                </Row>
                <Row className='judul text-center '>
                    <Col>
                        <h1>Event</h1>
                    </Col>
                </Row>
                {detailEvents.map((detailEvent, index) => {
                    return (
                        <EventItem detailEvent={detailEvent} index={index} />
                    )
                })}
            </Container>
        </div >
    )
}

export default Event