import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/components/EventItem.css";

export default function EventItem({ event, index }) {
  return (
    <Row key={index} border="light">
      <Col className="eventItem d-flex flex-row mb-3 p-0">
        <div className="content me-auto d-flex \ flex-column">
          <div className="d-flex gap-1">
            <span className="tags text-center">{event?.bidang}</span>
            <span className="tags text-center">{event?.status_event}</span>
          </div>

          <h2 className="judul">{event?.judul_event}</h2>
          <p className="date">
            {event?.tanggal_mulai_event?.toString().substring(0, 10)}
          </p>
          <p
            className="deskripsi"
            dangerouslySetInnerHTML={{ __html: `${event?.isi_event}` }}></p>

          <Link to={`/event-detail/${event._id}`}>
            <button>Learn More ➜</button>
          </Link>
        </div>
        <img
          src={event?.gambar_event.url}
          alt=""
          className="imageEvent ms-auto"
        />
        <div className="clear"></div>
      </Col>
    </Row>
  );
}
