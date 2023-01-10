import { useState, useEffect } from "react";
import { Container, Pagination } from "react-bootstrap";

import { filterData } from '../utils/filterEvent'
import api from '../utils/api';

import EventItem from "../components/EventItem";

import icon from "../assets/img/ArticlePage/menu.png"
import { ReactComponent as Search } from "../assets/icons/search.svg"

import "../styles/pages/Article.css"
import "../styles/pages/ProgramKerja.css";

const ProgramKerja = () => {
  const [eventList, setEventList] = useState({ event: [] })
  const [page, setPage] = useState(1)

  const [showFilterList, setFilterList] = useState(false);
  const [checkboxs, setCheckboxs] = useState(filterData)

  const handleChangeCheckBoxs = id => {
    setCheckboxs(prev => {
      return prev.map((item) => {
        if (item.id === id) {
          return { ...item, checked: !item.checked };
        } else {
          return { ...item };
        }
      })
    })
  }

  const renderFilter = () => {
    return checkboxs.map((item) => {
      if (item.checked) {
        return (
          <span onClick={() => handleChangeCheckBoxs(item.id)} className='selected-category' key={item.id}>
            {item.namaFilter} X
          </span>
        );
      } else {
        return null;
      }
    })
  }

  // Get data from API
  async function getDataEvent(page) {
    const data = await api.getEvent(page)
    setEventList(data)
  }

  useEffect(() => {
    getDataEvent(page)
  }, [page])

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  // Pagination
  let items = [];
  for (let number = 1; number <= eventList.total / 2; number++) {
    items.push(
      <Pagination.Item key={number} active={number === page} onClick={() => setPage(number)}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <Container>
      <div className="article-header">
        <div className="filter-category">
          <div className="search-bar-viewpoint">
            <div className="category-display">
              <div className="search-bar-display">
                <Search />
                {renderFilter()}
              </div>
              <input className="search-bar-input" type="search" placeholder='Search' />
            </div>
            <button className="search-bar-button">Search</button>
          </div>

          <button className='filter-button' onClick={() => setFilterList(!showFilterList)}>
            <img className='menu-icon' src={icon} alt="filter-icon" />
          </button>

        </div>
        <h1 className="article-header-title">Event</h1>
      </div>

      {/* Karegori Filter Hide */}
      {showFilterList && (
        <div className='category-container'>
          <h5>Lingkup Event</h5>
          {checkboxs.map((category) => (
            <>
              {category.type === "Kategori" && (
                <div className='wrapper-list' key={category.id}>
                  <form action="">
                    <input type="checkbox" checked={category.checked} id={category.id} onClick={() => handleChangeCheckBoxs(category.id)} />
                    <label htmlFor="">{category.namaFilter}</label>
                  </form>
                </div>
              )}
            </>
          ))}

          <h5>Bidang</h5>
          {checkboxs.map((category) => (
            <>
              {category.type === "Bidang" && (
                <div className='wrapper-list' key={category.id}>
                  <form action="">
                    <input type="checkbox" checked={category.checked} id={category.id} onClick={() => handleChangeCheckBoxs(category.id)} />
                    <label htmlFor="">{category.namaFilter}</label>
                  </form>
                </div>
              )}
            </>
          ))}

        </div>
      )}

      <div className="article-list">
        {eventList.event.map((event, index) => (
          <EventItem event={event} index={index} />
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <Pagination className="pagination-items">{items}</Pagination>
        <br />
      </div>
    </Container>
  );
};

export default ProgramKerja;
