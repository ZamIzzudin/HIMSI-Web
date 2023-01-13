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
        <div className="desc-container">
          <h2 className="judul-artikel">{article.judul_berita}</h2>
          <p className="date-artikel">{article.tanggal_berita?.toString().substring(0, 10)}</p>
          <p className="card-deskripsi-artikel" dangerouslySetInnerHTML={{ __html: `${article?.isi_berita}` }}></p>
        </div>

          <Link to={`/article-detail/${article._id}`}>
            <div className="learn-more-artikel">
              Learn More ➜
            </div>
          </Link>

        </div>
        <img src={article.header_berita.url} alt="display article" className="imageArtikel ms-auto" />
      </Col>
    </Row>
  );
}
