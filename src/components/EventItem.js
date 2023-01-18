import { Link } from 'react-router-dom';
import { Container, Button, Card } from 'react-bootstrap'
import "../styles/components/ArticleItem.css"

const EventItem = ({ event, index }) => {
  return (
    <Container className='ctn'>
      <div className="artikelitem">
        <div className="list-artikel">
          <Card key={index}>
            <div className="card-image">
              <div className="card-gradient">
                <div className="overlay-gradient">
                  <Card.Img src={event?.header_event.url} />
                </div>
              </div>
            </div>
            <Card.Body>
              <div className=" kategori-ctn d-flex gap-2">
                <span className="kategori-tag text-center">{event?.bidang}</span>
                <span className="kategori-tag text-center">{event?.status_event}</span>
              </div>
              <Card.Title>{event?.judul_event}</Card.Title>
              <Card.Text className='content-date'>{event?.tanggal_mulai?.toString().substring(0, 10)}</Card.Text>
              <Card.Text className='content-description' dangerouslySetInnerHTML={{ __html: `${event?.isi_event}` }}></Card.Text>
              <Link to={`/event-detail/${event._id}`}>
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

export default EventItem