import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Article = () => {

  const testArticles = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3
    }
  ]

  return (
    <div>
      <Container className='text-center'>
        <Row className='blank-space'>

        </Row>
        <Row>
          <Col>
            <h1>Halaman Article</h1>
          </Col>
        </Row>
        {testArticles.map((article, index) => {
          return (
            <Row key={index} >
              <h3>Article List id:{article.id}</h3>
              <Link to={`/article-detail/${article.id}`}>Baca Selengkapnya...</Link>
            </Row>
          )
        })}
      </Container>
    </div>
  )
}

export default Article