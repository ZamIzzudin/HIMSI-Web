import imageEvent from "../assets/img/meetup.png";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/components/EventItem.css";

export default function EventItem({ detailEvent, index }) {
  return (
    <Row key={index} border="light">
      <Col className="eventItem d-flex flex-row mb-3 p-0">
        <div className="content me-auto d-flex \ flex-column">
          <span className="tag text-center">{detailEvent.tag}</span>
          <h2 className="judul">{detailEvent.title}</h2>
          <p className="date">{detailEvent.date}</p>
          <p className="deskripsi">{detailEvent.deskripsi}</p>
          {/* manggil detailEvent id */}
          <button>
            <Link to={`/event-detail/${detailEvent.id}`}>Learn More ➜</Link>
          </button>
        </div>
        <img src={imageEvent} alt="" className="imageEvent ms-auto" />
      </Col>
    </Row>
  );
}
