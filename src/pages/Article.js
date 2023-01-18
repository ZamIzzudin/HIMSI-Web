import { Pagination } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import api from '../utils/api'
import xIcon from '../assets/icons/x-circle.svg'
import ArticleItem from "../components/ArticleItem"
import icon from "../assets/img/ArticlePage/menu.png"
import { ReactComponent as Search } from "../assets/icons/search.svg"
import { Container } from 'react-bootstrap';

import "../styles/pages/Article.css"

const Article = () => {
  const [articleList, setArticleList] = useState({ berita: [] })

  const [showKategoriList, setShowKategoriList] = useState(false)
  const [checkboxs, setCheckboxs] = useState()
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')
  const [params, setParams] = useState('')

  function handleChangeCheckBoxs (namaFilter) {
    setCheckboxs(prev => {

      return prev.map((item) => {
        if (item.namaFilter === namaFilter) {
          return { ...item, checked: !item.checked };
          
        } else {
          return { ...item };
        }
      })
    })
  }

  const renderFilter = () => {
    return checkboxs?.map((item) => {
      if (item.checked) {
        return (
          <span onClick={() => handleChangeCheckBoxs(item.namaFilter)} className='selected-category' key={item.namaFilter}>
            {item.namaFilter} <img className='del-category-icon' src={xIcon} alt="x-circle-filter" />
          </span>
        );
      } else {
        return null;
      }
    })
  }

  function setFilterParams(e) {
    e.preventDefault();
    const kategori = checkboxs.filter(item => item.checked)
    
    let url = '?'

    if (search !== '') {
      url += `search=${search}&`
    }

    if (kategori.length > 0) {
      kategori.forEach(item => {
        url += `kategori=${item.namaFilter}&`
      })
    }

    setPage(1)
    setParams(url)
  }
  
  // Get data from API
  async function getDataArticle(page) {
    const data = await api.getArticle(page)
    setArticleList(data)

  }

  async function getDataArticleByParams(page, params) {
    const data = await api.getArticleByParams(page, params)

    setArticleList(data)
  }

  async function getDataKategori(){
    const data = await api.getListKategori()
    
    const kategori = data.map((item) => ({
      namaFilter: item,
      checked: false
    }))

    setCheckboxs(kategori)
  }

  useEffect(() => {
    if (params !== '') {
      getDataArticleByParams(page, params)
    } else {
      getDataArticle(page)
    }
  }, [page, params])

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  useEffect(() => {
    getDataKategori();
  },[])
  // Pagination
  let items = [];
  for (let number = 1; number <= Math.round(articleList?.total / 4); number++) {
    items.push(
      <Pagination.Item key={number} active={number === page} onClick={() => setPage(number)}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <Container className='ctn'>
      <div className="article-header">
        <div className="filter-category">
          <form onSubmit={(e) => setFilterParams(e)} className="search-bar-viewpoint">
            <div className="category-display">
              <div className="search-bar-display">
                <Search className='image-search' />
                {renderFilter()}
              </div>
              <input onChange={(e) => setSearch(e.target.value)} value={search} className="search-bar-input" type="search" placeholder='Search' />
            </div>
            <button type="submit" className="search-bar-button">Search</button>
          </form>

          <button className='filter-button' onClick={() => setShowKategoriList(!showKategoriList)}>
            <img className='menu-icon-kategori' src={icon} alt="filter-icon" />
          </button>

        </div>
        <h1 className="article-header-title">Article</h1>
      </div>

      {/* Karegori Filter Hide */}
      {showKategoriList && (
        <div className='category-container'>
          <h5>Kategori</h5>
          <div>
            {checkboxs?.map((category) => {
              return (
                <div className='wrapper-list' key={category.namaFilter}>
                  <form>
                    <input type="checkbox" checked={category.checked} id={category.namaFilter} onClick={() => handleChangeCheckBoxs(category.namaFilter)} />
                    <label htmlFor="">{category.namaFilter}</label>
                  </form>
                </div>
              )
            })}
          </div>
        </div>
      )}
      <div className="article-list">
        {articleList?.berita.length === 0 ?
          (<div className='not-found-container'>
            <div className='article-not-found'>
              <p>Maaf Artikel yang anda cari tidak tersedia :(</p>
            </div>
          </div>)
          : (
            <>
              {articleList?.berita.map((article, index) => (
                <ArticleItem article={article} index={index} />
              ))}
            </>)
        }

      </div>

      <div className="pagination-artikel">
        <Pagination className="pagination-items">{items}</Pagination>
      </div>
    </Container>
  )
}

export default Article;