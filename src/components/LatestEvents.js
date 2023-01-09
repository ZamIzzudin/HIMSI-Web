import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import api from '../utils/api'
import { Container, Button, Card } from 'react-bootstrap'

import '../styles/components/LastestEvents.css'

const LatestEvents = () => {
    const [latestEvent, setLatestEvent] = useState([])

    async function getDataLatestEvent() {
        const data = await api.getLatestEvent()

        setLatestEvent(data)
    }

    useEffect(() => {
        getDataLatestEvent()
    }, [])

    return (
        <Container>
            <div className='lastestEvents'>
                <div className='list-event'>
                    {latestEvent?.map((event, index) => {
                        return (
                            <Card key={index}>
                                <div className='img-layout'>
                                    <div className='gradient'>
                                        <div className='gradient-overlay'></div>
                                        <Card.Img src={event?.gambar_event.url} />
                                    </div>
                                </div>
                                <Card.Body>
                                    <Card.Title>{event?.judul_event}</Card.Title>
                                    <Card.Text className='date'>{event?.tanggal_mulai_event.toString().substring(0, 10)}</Card.Text>
                                    <Card.Text className='deskripsi' dangerouslySetInnerHTML={{ __html: `${event?.isi_event}` }}></Card.Text>
                                    <Link to={`/event-detail/${event?._id}`}>
                                        <Button className='btn-card flex-fill'>
                                            Learn More
                                        </Button>
                                    </Link>

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