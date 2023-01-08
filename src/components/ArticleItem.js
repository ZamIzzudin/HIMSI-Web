import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../styles/components/ArticleItem.css"

export default function ArticleItem({ article, index }) {
  return (
    <Row key={index} border="light">
      <Col className="eventItem d-flex flex-row mb-3 p-0">
        <div className="content me-auto d-flex \ flex-column">
          <span className="tag text-center">{article.kategori_berita[0]}</span>
          <h2 className="judul">{article.judul_berita}</h2>
          <p className="date">{article.tanggal_berita?.toString().substring(0, 10)}</p>
          <p className="card-deskripsi">{article.isi_berita}</p>
          {/* manggil detailArticle id */}
          <button>
            <Link to={`/detail-artikel/${article._id}`}>Learn More ➜</Link>
            {/* <Link to={`/event-detail/${article.id}`}>Learn More ➜</Link> */}
          </button>
        </div>
        <img src={article.gambar_berita.url} alt="display article" className="imageEvent ms-auto" />
      </Col>
    </Row>
  );
}
