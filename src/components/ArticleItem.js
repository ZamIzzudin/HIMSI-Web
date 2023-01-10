import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../styles/components/ArticleItem.css"

export default function ArticleItem({ article, index }) {
  return (
    <Row key={index} border="light">
      <Col className="eventItem d-flex flex-row mb-3 p-0">
        <div className="content me-auto d-flex \ flex-column">

          <div className="d-flex gap-1">
            {article.kategori_berita.map(kategori => (
              <span className="tag text-center">{kategori}</span>
            ))}
          </div>

          <h2 className="judul">{article.judul_berita}</h2>
          <p className="date">{article.tanggal_berita?.toString().substring(0, 10)}</p>
          <p className="card-deskripsi" dangerouslySetInnerHTML={{ __html: `${article?.isi_berita}` }}></p>

          <Link to={`/article-detail/${article._id}`}>
            <button>
              Learn More ➜
            </button>
          </Link>

        </div>
        <img src={article.gambar_berita.url} alt="display article" className="imageEvent ms-auto" />
      </Col>
    </Row>
  );
}
