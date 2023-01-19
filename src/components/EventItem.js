import { Link } from 'react-router-dom';
import { Container, Button, Card } from 'react-bootstrap'
import "../styles/components/ArticleItem.css"
import { useState } from 'react';
import { useEffect } from 'react';

const EventItem = ({ event, index }) => {
  const [tags, setTags] = useState('');


  useEffect(() => {
    
    function handleTags () {

      switch (event?.bidang) {
        case "BPH":
          return "BPH-TAG basic"
  
        case "PSDM":
          return "PSDM-TAG basic"
  
        case "DIKTI":
          return"DIKTI-TAG basic"
  
        case "MEDKOM":
          return"MEDKOM-TAG basic"
  
        case "PERHUB":
          return"PERHUB-TAG basic"
  
        case "ADKESMA":
          return "ADKESMA-TAG basic"
  
        case "URT":
          return "URT-TAG basic"
  
        default:
          return "basic"
      }
  
    }
  
    setTags(handleTags())  
  }, [event])

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
                <span className={`${tags} text-center`}>{event?.bidang}</span>
              </div>
              <Card.Title>{event?.judul_event}</Card.Title>
              <Card.Text className='content-date'>{event?.tanggal_mulai_event?.toString().substring(0, 10)}</Card.Text>
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