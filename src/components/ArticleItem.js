import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Button , Card } from 'react-bootstrap'
import "../styles/components/ArticleItem.css"

const ItemArtikel = ({ article, index }) => {
  return (
    <Container className='ctn'>
        <div className="artikelitem">
            <div className="list-artikel">
                <Card key={index}>
                    <div className="card-image">
                        <div className="card-gradient">
                            <div className="overlay-gradient">
                                <Card.Img src={article?.header_berita.url} />
                            </div>
                        </div>
                    </div>
                    <Card.Body>
                        <div className=" kategori-ctn d-flex gap-2">
                            {article.kategori_berita.map(kategori => (
                                <span className="kategori-tag text-center">{kategori}</span>
                            ))}
                        </div>
                        <Card.Title>{article?.judul_berita}</Card.Title>
                        <Card.Text className='content-date'>{article?.tanggal_berita?.toString().substring(0, 10)}</Card.Text>
                        <Card.Text className='content-description' dangerouslySetInnerHTML={{__html: `${article?.isi_berita}`}}></Card.Text>
                        <Link to={`/article-detail/${article._id}`}>
                            <Button className='btn-card flex-fill'>
                                Learn More
                            </Button>
                        </Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    </Container>
  )
}

export default ItemArtikel
