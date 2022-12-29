import React from 'react'
import { Button, Container } from 'react-bootstrap'

import '../styles/pages/DetailProker.css'
import EventSlider from '../components/EventSlider'
import ImageHeader from '../assets/img/meetup.png'
import bgProker from '../assets/img/bg-proker.png'


const DetailProker = () => {
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
                        <h4 className='judul'>Meet Up HIMSI</h4>
                        <div className='sub-judul'>
                            <div>
                                <p className='penulis'>Amir Kholiluddin Ismail</p>
                                <p className='tanggal'>Desember 19, 2022</p>
                            </div>
                            <Button className='PSDM'>PSDM</Button>
                        </div>
                    </div>
                    <div className='deskripsi'>
                        {/* <div className="image-content">
                            <img src="" alt="" />
                        </div> */}
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus numquam nihil tenetur nesciunt reiciendis temporibus natus doloremque consequatur vero molestias nemo, laudantium non dolorem distinctio ab soluta corporis saepe accusantium ipsum rerum nam. Voluptatem illo commodi cupiditate saepe sunt architecto unde, quae ipsa ipsum modi suscipit praesentium, facere, repellendus aspernatur molestiae explicabo autem at? Necessitatibus, sequi? Unde, nulla consequuntur. Consequatur voluptates qui tempore eaque quae earum provident fuga exercitationem assumenda repellat velit, eum quam magnam officia quis asperiores expedita corporis iusto aut neque rem error. Nemo quia doloribus minus error numquam similique, assumenda ipsum. Voluptates voluptatibus ipsam rem sit aliquid.
                            Lorem ipsum dolor sit amet <br /> <span>consectetur</span> adipisicing elit. Minus numquam nihil tenetur nesciunt reiciendis temporibus natus doloremque consequatur vero molestias nemo, laudantium non dolorem distinctio ab soluta corporis saepe accusantium ipsum rerum nam. Voluptatem illo commodi cupiditate saepe sunt architecto unde, quae ipsa ipsum modi suscipit praesentium, facere, repellendus aspernatur molestiae explicabo autem at? Necessitatibus, sequi? Unde, nulla consequuntur. Consequatur voluptates qui tempore eaque quae earum provident fuga exercitationem assumenda repellat velit, eum quam magnam officia quis asperiores expedita corporis iusto aut neque rem error. Nemo quia doloribus minus error numquam similique, assumenda ipsum. Voluptates voluptatibus ip adipisicing elit. Minus numquam nihil tenetur nesciunt reiciendis temporibus natus doloremque consequatur vero molestias nemo, laudantium non dolorem distinctio ab soluta corporis saepe accusantium ipsum rerum nam. Voluptatem illo commodi cupiditate saepe sunt architecto unde, quae ipsa ipsum modi suscipit praesentium, facere, repellendus aspernatur molestiae explicabo autem at? Necessitatibus, sequi? Unde, nulla consequuntur. Consequatur voluptates qui tempore eaque quae earum provident fuga exercitationem assumenda repellat velit, eum quam magnam officia quis asperiores expedita corporis iusto aut neque rem error. Nemo quia doloribus minus error numquam similique, assumenda ipsum. Voluptates voluptatibus ip
                        </p>

                    </div>
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