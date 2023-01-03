import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ArticleItem from "../components/ArticleItem"
import { useState } from 'react'
// import "../styles/pages/ProgramKerja.css";
import "../styles/pages/Article.css"
import icon from "../assets/img/ArticlePage/menu.png"
const Article = () => {

  const testArticles = [
    {
      tag: "ADKESMAGAZINE",
      title: "Meet Up 13.0",
      date: "01/12/21",
      deskripsi:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. ",
      img: "../assets/img/meetup.png",
      id: "1",
    },
    {
      tag: "Viralisme Kebaikan",
      title: "Meet Up 13.0",
      date: "01/12/21",
      deskripsi:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. ",
      img: "../assets/img/meetup.png",
      id: "10",
    },
    {
      tag: "OMOS",
      title: "Meet Up 13.0",
      date: "01/12/21",
      deskripsi:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. ",
      img: "../assets/img/meetup.png",
      id: "3",
    },
    {
      tag: "BeriSi",
      title: "Meet Up 13.0",
      date: "01/12/21",
      deskripsi:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. ",
      img: "../assets/img/meetup.png",
      id: "3",
    },
    {
      tag: "HIMSI TechNews",
      title: "Meet Up 13.0",
      date: "01/12/21",
      deskripsi:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. ",
      img: "../assets/img/meetup.png",
      id: "3",
    },
  ]

  // const categoryList = ['Adkesmagazine', 'Viralisme Kebaikan', 'OMOS', 'BeriSI', 'HIMSI TechNews', 'Sharing Sessions', 'Hismi FunFact', 'Company Visit', 'Public Hearing',
  //                       'SK Resmi', 'Care For Maba', 'Informasi Akademik', 'ApresiaSI', 'Wadah Aspirasi', 'Prestasi Mahasiswa'];

  const [showKategoriList, setShowKategoriList] = useState(false);

  const [checkboxs, setCheckboxs] = useState([
      {
        id: 1,
        namaFilter: 'Adkesmagazine',
        checked: false,
      },
      {
        id: 2,
        namaFilter: 'Viralisme Kebaikan',
        checked: false,
      },
      {
        id: 3,
        namaFilter: 'OMOS',
        checked: false,
      },
      {
        id: 4,
        namaFilter: 'BeriSI',
        checked: false,
      },
      {
        id: 5,
        namaFilter: 'HIMSI TechNews',
        checked: false,
      },
      {
        id: 6,
        namaFilter: 'Sharing Sessions',
        checked: false,
      },
      {
        id: 7,
        namaFilter: 'HIMSI FunFact',
        checked: false,
      },
      {
        id: 8,
        namaFilter: 'Company Visit',
        checked: false,
      },
      {
        id: 9,
        namaFilter: 'Public Hearing',
        checked: false,
      },
      {
        id: 10,
        namaFilter: 'SK Resmi',
        checked: false,
      },
      {
        id: 11,
        namaFilter: 'Care For Maba',
        checked: false,
      },
      {
        id: 12,
        namaFilter: 'Informasi Akademik',
        checked: false,
      },
      {
        id: 13,
        namaFilter: 'ApresiaSI',
        checked: false,
      },
      {
        id: 14,
        namaFilter: 'Wadah Aspirasi',
        checked: false,
      },
      {
        id: 15,
        namaFilter: 'Prestasi Mahasiswa',
        checked: false,
      },
  ])

  const handleChangeCheckBoxs = id => {
    setCheckboxs(prev => {
        return prev.map((item) => {
          if(item.id === id) {
            return { ...item, checked: !item.checked};
          } else {
            return { ...item};
          }
        })
    })
  }

  const renderFilter = () => {
    return checkboxs.map((item) => {
      if(item.checked){
        return(
          <span onClick={()=> handleChangeCheckBoxs(item.id)} 
          className='checked' key={item.id}>
            {item.namaFilter} X
          </span>
        );
      } else{
        return null;
      }
    })
  }
  return (

    <Container>
      <div className='search-bar'>
          <Row>
            <Col xs={11}>
              <form>
                <div className='category-wrapper'>
                  <div className='display-bubble'>
                      {renderFilter()}
                  </div>
                  <input type="submit" name="" value="Search" />
                </div>
                  <div className="clear"></div>
              </form>
            </Col>
            <Col>
                <button className='menu-button' onClick={() => setShowKategoriList(!showKategoriList)}>
                     <img className='menu-icon' src={icon} alt="menu" />
                </button>
            </Col>
          </Row>       
      </div>
      {showKategoriList && <div className='category-container'>
            <div>
                {checkboxs.map((category) => {
                  return(
                    <div className='wrapper-list' key={category.id}>
                      <form action="">
                          <input type="checkbox" id={category.id} onClick={() => handleChangeCheckBoxs(category.id)} />
                          <label htmlFor="">{category.namaFilter}</label>
                      </form>
                    </div>
                    )
                })}
            </div>
        </div>}
        <div className='eventList'>
          <div className='clear'></div>
          <Row className='blank-space'></Row>
          <Row className="judul text-center">
            <Col>
              <h1>Halaman Article</h1>
            </Col>
            <Row className='blank-space'></Row>
        </Row>
        {testArticles.map((Detailarticle, index) => {
          return (
            <ArticleItem detailEvent={Detailarticle} index={index} />
            )
          })}
    </div>
    </Container>
  )
}

export default Article;