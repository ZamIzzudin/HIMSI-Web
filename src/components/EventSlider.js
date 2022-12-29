import React from 'react'
import { Container } from 'react-bootstrap'
import '../styles/components/EventSlider.css'
import { ComingEvent } from '../utils/ComingEvent'
import { Button } from 'react-bootstrap'
import hero1 from "../assets/img/mcmeetup.png"



// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";

const EventSlider = () => {
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
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    {ComingEvent.map((event, index) => {
                        return (
                            <SwiperSlide>
                                <div className='gradient'>
                                    <div className="gradient-overlay"></div>
                                    <img src={hero1} alt="hero" />
                                </div>
                                <div className="event-body">
                                    <h5 className='title'>{event.title}</h5>
                                    <p className='deskripsi'>{event.content}</p>
                                    <Button className='btn-card'>Read More</Button>
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