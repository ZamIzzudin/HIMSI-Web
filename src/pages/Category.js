import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../styles/pages/Category.css";

import { Link } from "react-router-dom";

function Category() {
  return (
    // Bagian List Kegiatan

    <div>
      <div className="container p-5">
        <div className="list">
          <div className="row">
            <div className="col-4">
              <h3 className="p-3">Kategori kegiatan HIMSI</h3>
            </div>
          </div>
          <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
            <Row>
              <Col sm={6}>
                <ListGroup>
                  <ListGroup.Item action href="#link1">
                    BPH
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link3">
                    PSDM
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link4">
                    Kominfo
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link5">
                    Dikti
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link6">
                    URT
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link7">
                    Adkesma
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col sm={4}>
                <div className="search-bar">
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                  </Form>
                </div>
                <Tab.Content>
                  <Tab.Pane eventKey="#link1">
                    <h4>Program Kerja BPH</h4>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Eveniet, velit.
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link3">
                    <h4>Program Kerja PSDM</h4>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Eveniet, velit.
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link4">
                    <h4>Program Kerja Kominfo</h4>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Eveniet, velit.
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link5">
                    <h4>Program Kerja Dikti</h4>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Eveniet, velit.
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link6">
                    <h4>Program Kerja URT</h4>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Eveniet, velit.
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link7">
                    <h4>Program Kerja Adkesma</h4>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Eveniet, velit.
                    </p>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>

        {/* Bagian Search Bar */}
        <div className="search-bar">
          <form></form>
        </div>
      </div>

      <div className="link-detailProker">
        <Button>
          <Link to={`/detail-program-kerja`}>Detail Proker</Link>
        </Button>
      </div>
    </div>
  );
}

export default Category;
