import { Button, Container } from 'react-bootstrap'

import '../styles/pages/DetailProker.css'
import EventSlider from '../components/EventSlider'
import ImageHeader from '../assets/img/meetup.png'
import bgProker from '../assets/img/bg-proker.png'
import imgLink from '../assets/img/link.svg'
import ImageSlider from '../components/ProgramKerja/ImageSlider'


const DetailProker = () => {

    // innner HTML (p)
    function handleP() {
        return { __html: `${EventProker.isi}` }
    }

    const EventProker = {
        judul: 'Meet Up HIMSI',
        penulis: 'Amir Kholiluddin Ismail',
        tanggal: '19 Desember 2022',
        divisi: 'PSDM',
        isi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus numquam nihil tenetur nesciunt reiciendis temporibus natus doloremque consequatur vero molestias nemo, laudantium non dolorem distinctio ab soluta corporis saepe accusantium ipsum rerum nam. Voluptatem illo commodi cupiditate saepe sunt architecto unde, quae ipsa ipsum modi suscipit praesentium, facere, repellendus aspernatur molestiae explicabo autem at? Necessitatibus, sequi? Unde, nulla consequuntur. Consequatur voluptates qui tempore eaque quae earum provident fuga exercitationem assumenda repellat velit, eum quam magnam officia quis asperiores expedita corporis iusto aut neque rem error. Nemo quia doloribus minus error numquam similique, assumenda ipsum. Voluptates voluptatibus ipsam rem sit aliquid. <br/> <b> consectetur </b> Lorem ipsum dolor sit ametadipisicing elit.Minus numquam nihil tenetur nesciunt reiciendis temporibus natus doloremque consequatur vero molestias nemo, laudantium non dolorem distinctio ab soluta corporis saepe accusantium ipsum rerum nam.Voluptatem illo commodi cupiditate saepe sunt architecto unde, quae ipsa ipsum modi suscipit praesentium, facere, repellendus aspernatur molestiae explicabo autem at?Necessitatibus, sequi?Unde, nulla consequuntur.Consequatur voluptates qui tempore eaque quae earum provident fuga exercitationem assumenda repellat velit, eum quam magnam officia quis asperiores expedita corporis iusto aut neque rem error.Nemo quia doloribus minus error numquam similique, assumenda ipsum.Voluptates voluptatibus ip adipisicing elit.Minus numquam nihil tenetur nesciunt reiciendis temporibus natus doloremque consequatur vero molestias nemo, laudantium non dolorem distinctio ab soluta corporis saepe accusantium ipsum rerum nam.Voluptatem illo commodi cupiditate saepe sunt architecto unde, quae ipsa ipsum modi suscipit praesentium, facere, repellendus aspernatur molestiae explicabo autem at?Necessitatibus, sequi?Unde, nulla consequuntur.Consequatur voluptates qui tempore eaque quae earum provident fuga exercitationem assumenda repellat velit, eum quam magnam officia quis asperiores expedita corporis iusto aut neque rem error.Nemo quia doloribus minus error numquam similique, assumenda ipsum.Voluptates voluptatibus ip",
        link: 'https://www.youtube.com/LoremipsumdolorsitametconsecteturadipisicingelitPariatuquaeratestutquasdelenitiexrerumevenietommodivoluptatibussequi?'
    }

    return (
        <div className='detail-proker'>
            <div className='blank-space'></div>
            {/* -------------------------- Bagian Img Header ------------------------- */}
            <div className='img-header'>
                <img src={ImageHeader} alt="header" />
            </div>
            <Container>
                <div className='background'>
                    <div className="bg-1">
                        <img src={bgProker} alt="h" />
                    </div>
                    <div className="bg-2">
                        <img src={bgProker} alt="h" />
                    </div>
                </div>
                {/* -------------------------- Content ------------------------- */}
                <div className='content'>
                    <div className='header'>
                        <h4 className='judul'>{EventProker.judul}</h4>
                        <div className='sub-judul'>
                            <div>
                                <p className='penulis'>{EventProker.penulis}</p>
                                <p className='tanggal'>{EventProker.tanggal}</p>
                            </div>
                            <Button className={`${EventProker.divisi}`}>{EventProker.divisi}</Button>
                        </div>
                    </div>
                    <div className='deskripsi'>
                        <div className="image-content">
                            <img src={ImageHeader} alt="preview" />
                        </div>
                        <p
                            dangerouslySetInnerHTML={handleP()}
                        ></p>
                    </div>
                    <div className='link'>
                        <img src={imgLink} alt="" />
                        <a href="https://www.youtube.com/">{EventProker.link}</a>
                    </div>
                    <ImageSlider />
                </div>
                {/*--------------------- header-event -----------------------*/}
                <div className="header-event">
                    <h3 className='title' >Event Lainnya</h3>
                </div>
                <EventSlider />
            </Container>
            {/* -------------------------- Artikel Lainnya ------------------------- */}
        </div >

    )
}

export default DetailProker