import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
// import { useState, useEffect, useRef } from 'react'

// import Slider from 'react-slick'
import '../styles/components/Partner.css'
import PartnerImages from '../utils/PartnerImages'
import Image from '../assets/img/partner/image9.png'
// import image1 from '../assets/img/'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/grid";
import "swiper/css/pagination";
import { FreeMode, Grid, Pagination } from "swiper";


const Partner = () => {

    return (
        <Container>
            <div className='partner'>
                <Row className='header mb-5'>
                    <Col>
                        <h4 className='judul text-center'>Partner</h4>
                    </Col>
                </Row>
                <div className='slider'>
                    <Swiper
                        slidesPerView='auto'
                        grid={{
                            rows: 2,
                            fill: 'row'
                        }}
                        spaceBetween={70}
                        grabCursor={true}
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
                                    <img src={image} alt={`patner ${index}`}></img>
                                </SwiperSlide>
                            );
                        })}
                        <SwiperSlide>
                            <img src={Image} alt='patner'></img>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </Container>
    );
}

export default Partner