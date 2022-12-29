import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import EventItem from "../components/EventItem";
// import Pagination from "react-bootstrap/Pagination";

import "../styles/pages/ProgramKerja.css";

const ProgramKerja = () => {
  const detailEvents = [
    {
      tag: "ADKESMA",
      title: "Meet Up 13.0",
      date: "01/12/21",
      deskripsi:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. ",
      img: "../assets/img/meetup.png",
      id: "1",
    },
    {
      tag: "PSDM",
      title: "Meet Up 13.0",
      date: "01/12/21",
      deskripsi:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. ",
      img: "../assets/img/meetup.png",
      id: "10",
    },
    {
      tag: "DIKTI",
      title: "Meet Up 13.0",
      date: "01/12/21",
      deskripsi:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. ",
      img: "../assets/img/meetup.png",
      id: "3",
    },
  ];

  return (

    <Container>
      <div className="search-bar">
        <form>
          <input type="text" name="" placeholder="Search Proker" />
          <input type="submit" name="" value="Search" />
          <div className="clear"></div>
        </form>
      </div>
      <div className="eventList">
        <div className="clear"></div>
        <Row className="blank-space"></Row>
        <Row className="judul text-center">
          <Col>
            <h1>Program Kerja</h1>
          </Col>
          <Row className="blank-space"></Row>
        </Row>
        {detailEvents.map((detailEvent, index) => {
          return <EventItem detailEvent={detailEvent} index={index} />;
        })}
      </div>
    </Container>
  );
};

export default ProgramKerja;
