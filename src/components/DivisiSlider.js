import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from 'react-bootstrap';
import api from '../utils/api'

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../styles/components/DivisiSlider.css";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper";

const DivisiSlider = () => {
    const [bidang, setBidang] = useState([])

    async function getDataBidang() {
        const data = await api.getBidang()

        setBidang(data)
    }

    useEffect(() => {
        getDataBidang()
    }, [])

    return (
        <Container>
            <div className='divisi-slider'>
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    loop={true}
                    navigation={true}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        // when window width is >= 320px
                        1400: {
                            slidesPerView: 3
                        },
                        1200: {
                            slidesPerView: 3
                        },
                        992: {
                            slidesPerView: 2.5
                        },
                        // when window width is >= 480px
                        768: {
                            slidesPerView: 2
                        },
                        // when window width is >= 640px
                        576: {
                            slidesPerView: 1
                        },
                        320: {
                            slidesPerView: 1
                        }
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <h2 className='divisi-title-header'>Bidang & Divisi</h2>
                    {bidang?.map(item => (
                        <SwiperSlide>
                            <div className="divisi-card">
                                <div className="xxx">
                                    <div className="divisi-logo">
                                        <img src={item.logo_bidang.url} alt="PSDM" />
                                    </div>
                                    <div className="divisi-judul">
                                        <h2>{item.nama_bidang}</h2>
                                        <p>({item.kepanjangan_bidang})</p>
                                    </div>
                                </div>
                                <div className="divisi-deskripsi">
                                    <p>{item.deskripsi_bidang}</p>
                                </div>
                                <div className="divisi-bagian">
                                    <h3>Divisi</h3>
                                    <div className="divisi-tags">
                                        {item.divisi.map(divisi => (
                                            <div className="divisi-tag">
                                                <p>{divisi}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="line-end"></div>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </Container>
    )
}

export default DivisiSlider