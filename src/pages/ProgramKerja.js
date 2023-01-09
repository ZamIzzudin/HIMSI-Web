import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import EventItem from "../components/EventItem";
import Pagination from "react-bootstrap/Pagination";
import "../styles/pages/ProgramKerja.css";

const ProgramKerja = () => {
  // detailEvents Variable
  const detailEvents = [
    {
      tag: "ADKESMA",
      title: "Care for Maba",
      date: "01/12/21",
      deskripsi:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. ",
      img: "../assets/img/meetup.png",
      id: "1",
    },
    {
      tag: "PERHUB",
      title: "HIMSI Goes to School",
      date: "01/12/21",
      deskripsi:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. ",
      img: "../assets/img/meetup.png",
      id: "2",
    },
    {
      tag: "DIKTI",
      title: "Mini Club Developer",
      date: "01/12/21",
      deskripsi:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. ",
      img: "../assets/img/meetup.png",
      id: "3",
    },
    {
      tag: "PSDM",
      title: "PBAK",
      date: "01/12/21",
      deskripsi:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. ",
      img: "../assets/img/meetup.png",
      id: "4",
    },
    {
      tag: "MEDKOM",
      title: "Social Media HIMSI",
      date: "01/12/21",
      deskripsi:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. ",
      img: "../assets/img/meetup.png",
      id: "5",
    },
  ];

  const [show, setShow] = useState(false);

  const [checkboxsKategori, setCheckboxsKategori] = useState([
    {
      id: 1,
      namaFilter: "Internal HIMSI",
      checked: false,
    },
    {
      id: 2,
      namaFilter: "Eksternal HIMSI",
      checked: false,
    },
  ]);

  const [checkboxsBidang, setCheckboxsBidang] = useState([
    {
      id: 1,
      namaFilter: "BPH",
      checked: false,
    },
    {
      id: 2,
      namaFilter: "PSDM",
      checked: false,
    },
    {
      id: 3,
      namaFilter: "DIKTI",
      checked: false,
    },
    {
      id: 4,
      namaFilter: "MEDKOM",
      checked: false,
    },
    {
      id: 5,
      namaFilter: "PERHUB",
      checked: false,
    },
    {
      id: 6,
      namaFilter: "ADKESMA",
      checked: false,
    },
    {
      id: 7,
      namaFilter: "URT",
      checked: false,
    },
  ]);

  const renderFilterKategori = () => {
    return checkboxsKategori.map((item) => {
      if (item.checked) {
        return (
          <span
            onClick={() => handleChangeCheckBoxsKategori(item.id)}
            className="checked"
            key={item.id}>
            {item.namaFilter} X
          </span>
        );
      } else {
        return null;
      }
    });
  };

  const renderFilterBidang = () => {
    return checkboxsBidang.map((item) => {
      if (item.checked) {
        return (
          <span
            onClick={() => handleChangeCheckBoxsBidang(item.id)}
            className="checked"
            key={item.id}>
            {item.namaFilter} X
          </span>
        );
      } else {
        return null;
      }
    });
  };

  const handleChangeCheckBoxsKategori = (id) => {
    setCheckboxsKategori((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return { ...item, checked: !item.checked };
        } else {
          return { ...item };
        }
      });
    });
  };

  const handleChangeCheckBoxsBidang = (id) => {
    setCheckboxsBidang((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return { ...item, checked: !item.checked };
        } else {
          return { ...item };
        }
      });
    });
  };

  // ----------PAGINATION-----------
  let active = 1;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <>
      <div className="gradient"></div>
      <Container>
        {/* Search Bar */}
        <div className="search-bar">
          <form>
            <div className="checkbox-value">
              {renderFilterKategori()}
              {renderFilterBidang()}
            </div>
            <input
              type="submit"
              name=""
              value="Search"
              className="search-bar-submit"
            />
            <input
              type="text"
              name=""
              placeholder="Search Proker"
              className="search-bar-text"
            />
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
          <div className="filter-container">
            <p className="filter-kategori">Kategori</p>
            <div>
              {checkboxsKategori.map((filter) => {
                return (
                  <div className="wrapper-list" key={filter.id}>
                    <form action="">
                      <input
                        type="checkbox"
                        id={filter.id}
                        onClick={() => handleChangeCheckBoxsKategori(filter.id)}
                      />
                      <label htmlFor="">{filter.namaFilter}</label>
                    </form>
                  </div>
                );
              })}
            </div>
            <p className="filter-bidang">Bidang</p>
            {checkboxsBidang.map((filter) => {
              return (
                <div className="wrapper-list" key={filter.id}>
                  <form action="">
                    <input
                      type="checkbox"
                      id={filter.id}
                      onClick={() => handleChangeCheckBoxsBidang(filter.id)}
                    />
                    <label htmlFor="">{filter.namaFilter}</label>
                  </form>
                </div>
              );
            })}
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

        {/* Pagination */}
        <div className="pagination">
          <Pagination className="pagination-items">{items}</Pagination>
          <br />
        </div>
      </Container>
    </>
  );
};

export default ProgramKerja;
