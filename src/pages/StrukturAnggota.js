import api from "../utils/api";
import { useState, useEffect } from "react";

import "../styles/components/StrukturAnggota.css";
import Instagram from "../assets/img/instagram.png";
import { Card, Col, Row } from "react-bootstrap";

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
            Pengurus HIMSI 2022
            <span className="dot"></span>
          </h1>
        </div>

        <div className="content">
          {struktur?.map((item) => (
            <div className="PSDM">
              <img
                alt="logo"
                src={item.logo_bidang.url}
                className="icon-pengurus "
              />
              <h2 className="heading-2">{item.nama_bidang}</h2>
              <p className="description-1">{item.kepanjangan_bidang}</p>
              <p className="description-2">{item.deskripsi_bidang}</p>
              <p className="divisi">Divisi</p>
              <div className="container">
                {item.divisi.map((divisi, index) => (
                  <div className={`box-${index + 1}`}>{divisi}</div>
                ))}
              </div>
              <Row xs={1} md={3} className="gallery g-4">
                {item.pengurus.map((pengurus, index) => (
                  <Col>
                    <Card
                      className="card-pengurus"
                      style={{ borderRadius: "16px", border: "none" }}>
                      <Card.Img
                        variant="top"
                        src={pengurus.foto_pengurus.url}
                      />
                      <Card.Body>
                        <Card.Title
                          className="name-anggota"
                          style={{ fontWeight: "700" }}>
                          {pengurus.nama_pengurus}
                        </Card.Title>
                        <Card.Text className="name-bidang">
                          {pengurus.jabatan}
                        </Card.Text>
                        <img
                          alt="logo"
                          src={Instagram}
                          className="icon-instagram "
                        />
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StrukturAnggota;
