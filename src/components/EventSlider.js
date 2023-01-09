import { useState, useEffect } from 'react'
import api from '../utils/api'
import { Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import '../styles/components/EventSlider.css'

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Navigation, Pagination } from "swiper";

const EventSlider = () => {
    const [upComing, setUpComing] = useState([])

    async function getDataUpComing() {
        const data = await api.getUpComing()

        setUpComing(data)
    }

    useEffect(() => {
        getDataUpComing()
    }, [])

    return (
        <div className='event-slider'>
            <Container>
                <Swiper
                    slidesPerView='auto'
                    spaceBetween={30}
                    freeMode={true}
                    grabCursor={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[FreeMode, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {upComing?.map((event, index) => {
                        return (
                            <SwiperSlide>
                                <div className='gradient'>
                                    <div className="gradient-overlay"></div>
                                    <img src={event?.gambar_event.url} alt="hero" />
                                </div>
                                <div className="event-body">
                                    <h5 className='title'>{event?.judul_event}</h5>
                                    <p className='deskripsi' dangerouslySetInnerHTML={{ __html: `${event?.isi_event}` }}></p>
                                    <Link to={`/event-detail/${event?._id}`}>
                                        <Button className='btn-card'>Read More</Button>
                                    </Link>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </Container>
        </div>
    )
}

export default EventSlider