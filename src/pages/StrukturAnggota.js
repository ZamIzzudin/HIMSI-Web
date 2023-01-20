import api from "../utils/api";
import { useState, useEffect } from "react";

import Instagram from "../assets/img/instagram.png";
import { Card, Col, Row } from "react-bootstrap";

import "../styles/components/StrukturAnggota.css";

const StrukturAnggota = () => {
  const [struktur, setStruktur] = useState();

  async function getDataStruktur() {
    const data = await api.getStruktur([]);

    setStruktur(data);
  }

  useEffect(() => {
    getDataStruktur();
  }, []);

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <div className="struktur-anggota">
        {/* Bagian Judul */}
        <div className="title text-center">
          <h1 className="heading-1">
            <span className="dot"></span>
            Pengurus HIMSI
            <span className="dot"></span>
          </h1>
        </div>

        <div className="content">
          {struktur?.map((item) => (
            <div className="PSDM">
              <div className="head-container">
                <img
                  alt="logo"
                  src={item.logo_bidang.url}
                  className="icon-pengurus"
                />
                <h2 className="heading-2">{item.nama_bidang}</h2>
              </div>
              <p className="description-1">{item.kepanjangan_bidang}</p>
              <p className="description-2">{item.deskripsi_bidang}</p>
              <p className="divisi mt-3">Divisi</p>
              <div className="container">
                {item.divisi.map((divisi, index) => (
                  <div className={`box-${index + 1} lll`}>{divisi}</div>
                ))}
              </div>
              <Row xs={1} md={3} className="gallery g-4">
                {item.pengurus.map((pengurus, index) => (
                  <Col className="col-6 col-md-4">
                    <Card className="card-pengurus" style={{ borderRadius: '16px', border: 'none' }}>
                      <Card.Img variant="top" src={pengurus.foto_pengurus.url} />
                      <Card.Body>
                        <Card.Title className="name-anggota" style={{ fontWeight: '700' }} >{pengurus.nama_pengurus}</Card.Title>
                        <Card.Text className="name-bidang" >{pengurus.jabatan}</Card.Text>
                        <a target="_blank" rel="noreferrer" href={pengurus.media_social}>
                          <img alt="logo" src={Instagram} className="icon-instagram " />
                        </a>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          ))}
        </div>
      </div>
    </div >
  );
};

export default StrukturAnggota;
