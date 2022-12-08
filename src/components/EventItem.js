import imageEvent from "../assets/img/event1.jpeg"
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function EventItem({ detailEvent, index }) {
    return (
        <Row key={index}>
            <Col className='eventItem d-flex flex-row p-4 border mb-3'>
                <img src={imageEvent} alt="" className='imageEvent rounded-2' />
                <div className='ms-3 d-flex \ flex-column'>
                    <span className='tag'>{detailEvent.tag}</span>
                    <h2>{detailEvent.title}</h2>
                    <p>{detailEvent.deskripsi}</p>
                    {/* manggil detailEvent id */}
                    <Link to={`/event-detail/${detailEvent.id}`}>
                        Baca Selengkapnya..
                    </Link>
                </div>
            </Col>
        </Row>
    )
}