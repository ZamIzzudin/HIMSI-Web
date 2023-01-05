import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import EventItem from "../components/EventItem";

import "../styles/pages/ProgramKerja.css";

const ProgramKerja = () => {
  // detailEvents Variable
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

  // Filter Button Variable
  const [show, setShow] = useState(false);

  const [checkboxs, setCheckboxs] = useState();

  useEffect(() => {
    setCheckboxs([
      {
        id: "1",
        name: "internal_HIMSI",
      },
      {
        id: "2",
        name: "eksternal_HIMSI",
      },
    ])
  }, [])

  // const renderCheckboxs = () => {
  //   return checkboxs.map((item) => {
  //     <div className="filter-box" key={item.id}>
  //       {/* Kategori */}
  //       <p className="filter-box-kategori">Kategori</p>
  //       <label for="internal_HIMSI" className="container">
  //         {item.name}
  //         <span>{item.inStock}</span>
  //         <input
  //           type="checkbox"
  //           id={item.id}
  //           name="internal_HIMSI"
  //           value="Internal HIMSI"
  //         />
  //         <span class="checkmark"></span>
  //         <p>Internal HIMSI</p>
  //       </label>
  //       <br />
  //       <label for="external_HIMSI" className="container">
  //         <input
  //           type="checkbox"
  //           id="external_HIMSI"
  //           name="external_HIMSI"
  //           value="External HIMSI"
  //         />
  //         <span class="checkmark"></span>
  //         <p>External HIMSI</p>
  //       </label>
  //       <br />

  //       {/* Bidang */}
  //       <p className="filter-box-bidang">Bidang</p>
  //       <label for="BPH" className="container">
  //         <input type="checkbox" id="BPH" name="BPH" value="BPH" />
  //         <span class="checkmark"></span>
  //         <p>BPH</p>
  //       </label>
  //       <br />
  //       <label for="PSDM" className="container">
  //         <input type="checkbox" id="PSDM" name="PSDM" value="PSDM" />
  //         <span className="checkmark"></span>
  //         <p>PSDM</p>
  //       </label>
  //       <br />
  //       <label for="DIKTI" className="container">
  //         <input type="checkbox" id="DIKTI" name="DIKTI" value="DIKTI" />
  //         <span className="checkmark"></span>
  //         <p>DIKTI</p>
  //       </label>
  //       <br />
  //       <label for="MEDKOM" className="container">
  //         <input type="checkbox" id="MEDKOM" name="MEDKOM" value="MEDKOM" />
  //         <span className="checkmark"></span>
  //         <p>MEDKOM</p>
  //       </label>
  //       <br />
  //       <label for="PERHUB" className="container">
  //         <input type="checkbox" id="PERHUB" name="PERHUB" value="PERHUB" />
  //         <span className="checkmark"></span>
  //         <p>PERHUB</p>
  //       </label>
  //       <br />
  //       <label for="ADKESMA" className="container">
  //         <input type="checkbox" id="ADKESMA" name="ADKESMA" value="ADKESMA" />
  //         <span className="checkmark"></span>
  //         <p>ADKESMA</p>
  //       </label>
  //       <br />
  //       <label for="URT" className="container">
  //         <input type="checkbox" id="URT" name="URT" value="URT" />
  //         <span className="checkmark"></span>
  //         <p>URT</p>
  //       </label>
  //     </div>;
  //   });
  // };

  const renderFilters = () => {
    return checkboxs.map((item) => {
      if (item.check) {
        return (
          <span className="option" key={item.id}>
            {item.name}
          </span>
        );
      } else {
        return null;
      }
    });
  };

  return (
    <>
      <div className="gradient"></div>
      <Container>
        <div className="search-bar">
          {renderFilters()}
          <form>
            <input type="text" name="" placeholder="Search Proker" />
            <input type="submit" name="" value="Search" />
          </form>

          {/* filter button */}
          <svg
            onClick={() => setShow(!show)}
            className="filter-img"
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none">
            <rect width="56" height="56" rx="28" fill="#F49C45" />
            <path
              d="M32.9585 25.75C32.5443 25.75 32.2085 25.4142 32.2085 25L32.2085 18C32.2085 17.5858 32.5443 17.25 32.9585 17.25C33.3727 17.25 33.7085 17.5858 33.7085 18L33.7085 25C33.7085 25.4142 33.3727 25.75 32.9585 25.75Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M23 21.75C25.071 21.75 26.75 23.4289 26.75 25.5C26.75 27.5711 25.071 29.25 23 29.25C20.9289 29.25 19.25 27.5711 19.25 25.5C19.25 23.4289 20.9289 21.75 23 21.75ZM25.25 25.5C25.25 24.2574 24.2426 23.25 23 23.25C21.7573 23.25 20.75 24.2574 20.75 25.5C20.75 26.7426 21.7573 27.75 23 27.75C24.2426 27.75 25.25 26.7426 25.25 25.5Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M33 34.25C35.071 34.25 36.75 32.5711 36.75 30.5C36.75 28.4289 35.071 26.75 33 26.75C30.9289 26.75 29.25 28.4289 29.25 30.5C29.25 32.5711 30.9289 34.25 33 34.25ZM35.25 30.5C35.25 31.7426 34.2426 32.75 33 32.75C31.7573 32.75 30.75 31.7426 30.75 30.5C30.75 29.2574 31.7573 28.25 33 28.25C34.2426 28.25 35.25 29.2574 35.25 30.5Z"
              fill="white"
            />
            <path
              d="M22.2085 31C22.2085 30.5858 22.5443 30.25 22.9585 30.25C23.3727 30.25 23.7085 30.5858 23.7085 31V38C23.7085 38.4142 23.3727 38.75 22.9585 38.75C22.5443 38.75 22.2085 38.4142 22.2085 38V31Z"
              fill="white"
            />
            <path
              d="M32.9585 38.75C32.5443 38.75 32.2085 38.4142 32.2085 38V36C32.2085 35.5858 32.5443 35.25 32.9585 35.25C33.3727 35.25 33.7085 35.5858 33.7085 36V38C33.7085 38.4142 33.3727 38.75 32.9585 38.75Z"
              fill="white"
            />
            <path
              d="M22.2085 18C22.2085 17.5858 22.5443 17.25 22.9585 17.25C23.3727 17.25 23.7085 17.5858 23.7085 18V20C23.7085 20.4142 23.3727 20.75 22.9585 20.75C22.5443 20.75 22.2085 20.4142 22.2085 20V18Z"
              fill="white"
            />
            {show === true ? "Hide" : "Show"}
          </svg>
        </div>

        {/* filter button: show */}
        {show && (
          <div className="filter-box">
            {/* Kategori */}
            <p className="filter-box-kategori">Kategori</p>
            <label for="internal_HIMSI" className="container">
              <input
                type="checkbox"
                id="internal_HIMSI"
                name="internal_HIMSI"
                value="Internal HIMSI"
              />
              <span class="checkmark"></span>
              <p>Internal HIMSI</p>
            </label>
            <br />
            <label for="external_HIMSI" className="container">
              <input
                type="checkbox"
                id="external_HIMSI"
                name="external_HIMSI"
                value="External HIMSI"
              />
              <span class="checkmark"></span>
              <p>External HIMSI</p>
            </label>
            <br />

            {/* Bidang */}
            <p className="filter-box-bidang">Bidang</p>
            <label for="BPH" className="container">
              <input type="checkbox" id="BPH" name="BPH" value="BPH" />
              <span class="checkmark"></span>
              <p>BPH</p>
            </label>
            <br />
            <label for="PSDM" className="container">
              <input type="checkbox" id="PSDM" name="PSDM" value="PSDM" />
              <span className="checkmark"></span>
              <p>PSDM</p>
            </label>
            <br />
            <label for="DIKTI" className="container">
              <input type="checkbox" id="DIKTI" name="DIKTI" value="DIKTI" />
              <span className="checkmark"></span>
              <p>DIKTI</p>
            </label>
            <br />
            <label for="MEDKOM" className="container">
              <input type="checkbox" id="MEDKOM" name="MEDKOM" value="MEDKOM" />
              <span className="checkmark"></span>
              <p>MEDKOM</p>
            </label>
            <br />
            <label for="PERHUB" className="container">
              <input type="checkbox" id="PERHUB" name="PERHUB" value="PERHUB" />
              <span className="checkmark"></span>
              <p>PERHUB</p>
            </label>
            <br />
            <label for="ADKESMA" className="container">
              <input
                type="checkbox"
                id="ADKESMA"
                name="ADKESMA"
                value="ADKESMA"
              />
              <span className="checkmark"></span>
              <p>ADKESMA</p>
            </label>
            <br />
            <label for="URT" className="container">
              <input type="checkbox" id="URT" name="URT" value="URT" />
              <span className="checkmark"></span>
              <p>URT</p>
            </label>
          </div>
        )}

        {/* Event List */}
        <div className="clear"></div>
        <Row className="blank-space"></Row>
        <Row className="judul text-center">
          <Col>
            <h1>Event</h1>
          </Col>
          <Row className="blank-space"></Row>
        </Row>
        <div className="eventList">
          <div className="clear"></div>
          {detailEvents.map((detailEvent, index) => {
            return <EventItem detailEvent={detailEvent} index={index} />;
          })}
        </div>
      </Container>
    </>
  );
};

export default ProgramKerja;
