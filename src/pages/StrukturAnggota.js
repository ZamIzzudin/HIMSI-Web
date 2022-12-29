import "../styles/components/StrukturAnggota.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const StrukturAnggota = () => {
  const bph = [
    {
      nama: "Muhammad Hanif",
      bidang: "Ketua HIMSI",
    },
    {
      nama: "Musyaffa Bian A R",
      bidang: "Wakil Ketua HIMSI",
    },
    {
      nama: "Jihan Fadhilah",
      bidang: "Sekretaris 1",
    },
    {
      nama: "Aqilla Amalian P N",
      bidang: "Sekretaris 2",
    },
    {
      nama: "Dewi Syifa A",
      bidang: "Bendahara 1",
    },
    {
      nama: "Salma Riyanti H",
      bidang: "Bendahara 2",
    },
  ];

  const dikti = [
    {
      nama: "Muhammad Bramadya R",
      bidang: "Ketua Bidang",
    },
    {
      nama: "Annisa Safa",
      bidang: "Sekretaris Bidang",
    },
    {
      nama: "Sadam Alfian P",
      bidang: "Ketua Divisi Pengembangan Skill",
    },
    {
      nama: "Assiva Nurul H",
      bidang: "Ketua Divisi Kajian Keilmuan",
    },
    {
      nama: "Faisal Abu Bakar R",
      bidang: "Anggota",
    },
    {
      nama: "Farhan Fadhilah R",
      bidang: "Anggota",
    },
    {
      nama: "Mohammad Novrizal S",
      bidang: "Anggota",
    },
    {
      nama: "Adit Prasetyo",
      bidang: "Anggota",
    },
    {
      nama: "Muhammad Asyraf F K",
      bidang: "Anggota",
    },
    {
      nama: "Murni Damayanti",
      bidang: "Anggota",
    },
  ];

  const psdm = [
    {
      nama: "Fahira Zuhra",
      bidang: "Ketua Bidang",
    },
    {
      nama: "Afrida Chaerunnisa",
      bidang: "Sekretaris Bidang",
    },
    {
      nama: "Gerard Abdul Rasyid",
      bidang: "Ketua Divisi Minat dan Bakat",
    },
    {
      nama: "Chevko Ronaldi S",
      bidang: "Ketua Divisi Kaderisasi",
    },
    {
      nama: "Shafa Salsabila K",
      bidang: "Ketua Divisi Biro Internal",
    },
    {
      nama: "Anis Nur Safarina Z",
      bidang: "Anggota",
    },
    {
      nama: "Fahriza Abdillah",
      bidang: "Bendahara 2",
    },
    {
      nama: "Luthfiyyah Zharifa F",
      bidang: "Anggota",
    },
    {
      nama: "Muhammad Ridwan A R",
      bidang: "Anggota",
    },
    {
      nama: "Hilmi Adriansyah",
      bidang: "Anggota",
    },
    {
      nama: "Rayhan Maulana L",
      bidang: "Anggota",
    },
    {
      nama: "Mutiara Novita S",
      bidang: "Anggota",
    },
    {
      nama: "Dwi Oktaviyani A",
      bidang: "Anggota",
    },
    {
      nama: "Alifia Maharani",
      bidang: "Anggota",
    },
    {
      nama: "Faizal Abdillah",
      bidang: "Anggota",
    },
  ];

  const medkom = [
    {
      nama: "Raqqat Nuari",
      bidang: "Ketua Bidang",
    },
    {
      nama: "Dinda Tsabita R",
      bidang: "Sekretaris Bidang",
    },
    {
      nama: "Della Novia R",
      bidang: "Anggota",
    },
    {
      nama: "Naufla Zaharani F",
      bidang: "Anggota",
    },
    {
      nama: "Adib Taufiqur R",
      bidang: "Anggota",
    },
    {
      nama: "Faisal Rahman",
      bidang: "Anggota",
    },
    {
      nama: "Faiz Rizki S",
      bidang: "Anggota",
    },
    {
      nama: "Kahla Ulayya I",
      bidang: "Anggota",
    },
    {
      nama: "Muhammad Ariq P",
      bidang: "Anggota",
    },
  ];

  const perhub = [
    {
      nama: "Ari Lathifah",
      bidang: "Ketua Bidang",
    },
    {
      nama: "Maisa Tsara S",
      bidang: "Sekretaris Bidang",
    },
    {
      nama: "Muhammad Nizar S B",
      bidang: "Anggota",
    },
    {
      nama: "Deara Mayanda",
      bidang: "Anggota",
    },
    {
      nama: "Fitria Retno S",
      bidang: "Anggota",
    },
    {
      nama: "Widia Ramadhani",
      bidang: "Anggota",
    },
    {
      nama: "Rahel Saffana A",
      bidang: "Anggota",
    },
  ];

  const adkesma = [
    {
      nama: "Naila Ariqah",
      bidang: "Ketua Bidang",
    },
    {
      nama: "Putri Ghanisa",
      bidang: "Sekretaris Bidang",
    },
    {
      nama: "Ridho Pamungkas",
      bidang: "Anggota",
    },
    {
      nama: "Adinda Rahmalia",
      bidang: "Anggota",
    },
    {
      nama: "Adhitya Naufal I",
      bidang: "Anggota",
    },
    {
      nama: "Nabila Nur A",
      bidang: "Anggota",
    },
  ];

  const urt = [
    {
      nama: "Muhammad Irsyad",
      bidang: "Ketua Bidang",
    },
    {
      nama: "Nisrina Rihadatul A",
      bidang: "Sekretaris Bidang",
    },
    {
      nama: "Rizki Aji Mahardika",
      bidang: "Ketua Divisi Kesekretariatan Umum",
    },
    {
      nama: "Mar’atus Sholihah",
      bidang: "Ketua Divisi Kerohanian",
    },
    {
      nama: "Liza Estu Mulyani",
      bidang: "Ketua Divisi Kewirausahaan",
    },
    {
      nama: "Azka Septia R",
      bidang: "Anggota",
    },
    {
      nama: "Lhutfia Ichsan",
      bidang: "Anggota",
    },
    {
      nama: "Yuliwanda Anggi K",
      bidang: "Anggota",
    },
    {
      nama: "Muhammad Irfan B",
      bidang: "Anggota",
    },
    {
      nama: "Zinda Rud Faiza N",
      bidang: "Anggota",
    },
    {
      nama: "Alda Eva S",
      bidang: "Anggota",
    },
    {
      nama: "Intan Nas Nas R",
      bidang: "Anggota",
    },
    {
      nama: "Dizar Wangsa S",
      bidang: "Anggota",
    },
    {
      nama: "Muhammad Sharhan K",
      bidang: "Anggota",
    },
    {
      nama: "Nazla Khalisha",
      bidang: "Anggota",
    },
  ];

  return (
    <div className="container">
      <div className="struktur-anggota">
        {/* Bagian Judul */}
        <div className="title text-center">
          <h1 className="heading-1">
            <span className="dot"></span>Pengurus HIMSI 2022
            <span className="dot"></span>
          </h1>
        </div>

        <div className="content">
          {/* Bagian BPH */}
          <div className="BPH ms-auto">
            <h2 className="heading-2">BPH</h2>
            <p className="description-1">Badan Pengurus Harian</p>
            <Row xs={1} md={3} className="gallery g-4">
              {bph.map((StrukturAnggota, index) => (
                <Col>
                  <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                      <Card.Title>{StrukturAnggota.nama}</Card.Title>
                      <Card.Text>{StrukturAnggota.bidang}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>

          {/* Bagian PSDM */}
          <div className="PSDM">
            <h2 className="heading-2">PSDM</h2>
            <p className="description-1">Pengembangan Sumber Daya Mahasiswa</p>
            <p className="description-2">
              Wadah Pengembangan Potensi SDM HIMSI di bidang Non-Akademik dan
              mempersiapkan kader-kader HIMSI.
            </p>
            <p className="divisi">Divisi</p>
            <div className="container">
              <div className="box-1">Kaderisasi</div>
              <div className="box-2">Minat Bakat</div>
              <div className="box-3">Biro Internal</div>
            </div>
            <Row xs={1} md={3} className="gallery g-4">
              {psdm.map((StrukturAnggota, index) => (
                <Col>
                  <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                      <Card.Title>{StrukturAnggota.nama}</Card.Title>
                      <Card.Text>{StrukturAnggota.bidang}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>

          {/* Bagian DIKTI */}
          <div className="DIKTI ms-auto">
            <h2 className="heading-2">DIKTI</h2>
            <p className="description-1">Pendidikan dan Penelitian</p>
            <p className="description-2">
              Wadah Penyaluran potensi, kemampuan akademik dan prestasi bagi
              mahasiswa SI.
            </p>
            <p className="divisi">Divisi</p>
            <div className="container">
              <div className="box-1">Kajian Keilmuan</div>
              <div className="box-2">Pengembangan Skill</div>
            </div>
            <Row xs={1} md={3} className="gallery g-4">
              {dikti.map((StrukturAnggota, index) => (
                <Col>
                  <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                      <Card.Title>{StrukturAnggota.nama}</Card.Title>
                      <Card.Text>{StrukturAnggota.bidang}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>

          {/* Bagian MEDKOM */}
          <div className="MEDKOM ms-auto">
            <h2 className="heading-2">MEDKOM</h2>
            <p className="description-1">Media dan Komunikasi</p>
            <p className="description-2">
              Sarana publikasi HIMSI yang transparan.
            </p>
            <Row xs={1} md={3} className="gallery g-4">
              {medkom.map((StrukturAnggota, index) => (
                <Col>
                  <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                      <Card.Title>{StrukturAnggota.nama}</Card.Title>
                      <Card.Text>{StrukturAnggota.bidang}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>

          {/* Bagian PERHUB */}
          <div className="PERHUB ms-auto">
            <h2 className="heading-2">PERHUB</h2>
            <p className="description-1">Perhubungan Eksternal</p>
            <p className="description-2">
              Sarana penghubung HIMSI baik eksternal maupun internal.
            </p>
            <Row xs={1} md={3} className="gallery g-4">
              {perhub.map((StrukturAnggota, index) => (
                <Col>
                  <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                      <Card.Title>{StrukturAnggota.nama}</Card.Title>
                      <Card.Text>{StrukturAnggota.bidang}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>

          {/* Bagian ADKESMA */}
          <div className="ADKESMA ms-auto">
            <h2 className="heading-2">ADKESMA</h2>
            <p className="description-1">Advokasi Kesejahteraan Mahasiswa</p>
            <p className="description-2">
              Menjembatani kebutuhan mahasiswa dengan pemangku kebijakan.
              Menampung semua aspirasi yang masuk, mengevaluasi, dan
              merealisasikannya.
            </p>
            <Row xs={1} md={3} className="gallery g-4">
              {adkesma.map((StrukturAnggota, index) => (
                <Col>
                  <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                      <Card.Title>{StrukturAnggota.nama}</Card.Title>
                      <Card.Text>{StrukturAnggota.bidang}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>

          {/* Bagian URT */}
          <div className="URT ms-auto">
            <h2 className="heading-2">URT</h2>
            <p className="description-1">Urusan Rumah Tangga</p>
            <p className="description-2">
              Berperan dalam mendukung pengelolaan internal HIMSI dari keungan,
              aset, sampai spiritualitas anggota HIMSI.
            </p>
            <p className="divisi">Divisi</p>
            <div className="container">
              <div className="box-1">Kewirus</div>
              <div className="box-2">Perohanian</div>
              <div className="box-3">Kesekum</div>
            </div>
            <Row xs={1} md={3} className="gallery g-4">
              {urt.map((StrukturAnggota, index) => (
                <Col>
                  <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                      <Card.Title>{StrukturAnggota.nama}</Card.Title>
                      <Card.Text>{StrukturAnggota.bidang}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
    </div>

  );
};

export default StrukturAnggota;
