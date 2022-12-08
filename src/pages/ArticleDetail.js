import React from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'


const ArticleDetail = () => {
    const { id } = useParams();
    return (
        <Container>
            <Row className='blank-space'>

            </Row>
            <Row className='judul text-center'>
                <Col>
                    <h1>Halaman detail article dengan id {id}</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default ArticleDetail