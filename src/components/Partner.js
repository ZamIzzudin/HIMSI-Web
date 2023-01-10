import { Container, Row, Col } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import api from '../utils/api'
import ImgPancingan from '../assets/img/partner/image1.png'

import '../styles/components/Partner.css'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/grid";
import "swiper/css/pagination";
import { FreeMode, Grid, Pagination } from "swiper";


const Partner = () => {
    const [partner, setPartner] = useState([])

    async function getPartner() {
        const data = await api.getPartner()
        setPartner(data)
    }

    useEffect(() => {
        getPartner()
    }, [])

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
                        {partner.map((item, index) => {
                            return (
                                <SwiperSlide key={`patner ${index}`}>
                                    <img src={item.logo_partner.url} alt={`patner ${index}`}></img>
                                </SwiperSlide>
                            );
                        })}
                        {/* <SwiperSlide>
                            <img src={ImgPancingan} alt="s"></img>
                        </SwiperSlide> */}
                    </Swiper>
                </div>
            </div>
        </Container>
    );
}

export default Partner