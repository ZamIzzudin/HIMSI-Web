import React from 'react'
import '../styles/components/TestSwiper.css'
import Image from '../assets/img/partner/image9.png'
import Image1 from '../assets/img/partner/image6.png'
import Image2 from '../assets/img/partner/image10.png'
import PartnerImages from '../utils/PartnerImages'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/grid";
import "swiper/css/pagination";
import { FreeMode, Grid, Pagination } from "swiper";
import { Container } from 'react-bootstrap';

const TestSwiper = () => {

    return (
        <Container>
            <div className='test'>
                <div className='header'>
                    <h1>TestSwiper</h1>
                </div>
                <div className='slider'>
                    <Swiper
                        slidesPerView='auto'
                        grid={{
                            rows: 2,
                            fill: 'row'
                        }}
                        spaceBetween={70}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Grid, Pagination]}
                        className="mySwiper"
                    >
                        {PartnerImages.map((image, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <img src={image}></img>
                                </SwiperSlide>
                            );
                        })}
                        <SwiperSlide>
                            <img src={Image}></img>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </Container>
    )
}

export default TestSwiper