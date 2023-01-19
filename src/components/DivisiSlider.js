import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from 'react-bootstrap';

// Import Image
import PSDM from '../assets/img/PSDM.svg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../styles/components/DivisiSlider.css";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper";

const divisiSlider = () => {
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
                    <SwiperSlide>
                        <div className="divisi-card">
                            <div className="xxx">
                                <div className="divisi-logo">
                                    <img src={PSDM} alt="PSDM" />
                                </div>
                                <div className="divisi-judul">
                                    <h2>PSDM</h2>
                                    <p>(Pengembangan Sumber Daya Mahasiswa)</p>
                                </div>
                            </div>
                            <div className="divisi-deskripsi">
                                <p>Wadah pengembangan potensi SDM HIMSI di bidang Non-Akademik dan mempersiapkan kader-kader HIMSI.Wadah pengembangan potensi SDM HIMSI di bidang Non-Akademik dan mempersiapkan kader-kader HIMSI.Wadah pengembangan potensi SDM HIMSI di bidang Non-Akademik dan mempersiapkan kader-kader HIMSI.</p>
                            </div>
                            <div className="divisi-bagian">
                                <h3>Divisi</h3>
                                <div className="divisi-tags">
                                    <div className="divisi-tag">
                                        <p>Kaderisasssssssssssssssssi</p>
                                    </div>
                                    <div className="divisi-tag">
                                        <p>Kaderisasi</p>
                                    </div>
                                    <div className="divisi-tag">
                                        <p>Kaderisasi</p>
                                    </div>
                                    <div className="divisi-tag">
                                        <p>Kaderisasi</p>
                                    </div>
                                    <div className="divisi-tag">
                                        <p>Kaderisasi</p>
                                    </div>
                                    <div className="divisi-tag">
                                        <p>Kaderisasi</p>
                                    </div>
                                </div>
                            </div>
                            <div className="line-end"></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="divisi-card">
                            <div className="xxx">
                                <div className="divisi-logo">
                                    <img src={PSDM} alt="PSDM" />
                                </div>
                                <div className="divisi-judul">
                                    <h2>PSDM</h2>
                                    <p>(Pengembangan Sumber Daya Mahasiswa)</p>
                                </div>
                            </div>
                            <div className="divisi-deskripsi">
                                <p>Wadah pengembangan potensi SDM HIMSI di bidang Non-Akademik dan mempersiapkan kader-kader HIMSI.Wadah pengembangan potensi SDM HIMSI di bidang Non-Akademik dan mempersiapkan kader-kader HIMSI.Wadah pengembangan potensi SDM HIMSI di bidang Non-Akademik dan mempersiapkan kader-kader HIMSI.</p>
                            </div>
                            <div className="divisi-bagian">
                                <h3>Divisi</h3>
                                <div className="divisi-tags">
                                    <div className="divisi-tag">
                                        <p>Kaderisasssssssssssssssssi</p>
                                    </div>
                                    <div className="divisi-tag">
                                        <p>Kaderisasi</p>
                                    </div>
                                    <div className="divisi-tag">
                                        <p>Kaderisasi</p>
                                    </div>
                                    <div className="divisi-tag">
                                        <p>Kaderisasi</p>
                                    </div>
                                    <div className="divisi-tag">
                                        <p>Kaderisasi</p>
                                    </div>
                                    <div className="divisi-tag">
                                        <p>Kaderisasi</p>
                                    </div>
                                </div>
                            </div>
                            <div className="line-end"></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="divisi-card">
                            <div className="xxx">
                                <div className="divisi-logo">
                                    <img src={PSDM} alt="PSDM" />
                                </div>
                                <div className="divisi-judul">
                                    <h2>PSDM</h2>
                                    <p>(Pengembangan Sumber Daya Mahasiswa)</p>
                                </div>
                            </div>
                            <div className="divisi-deskripsi">
                                <p>Wadah pengembangan potensi SDM HIMSI di bidang Non-Akademik dan mempersiapkan kader-kader HIMSI.Wadah pengembangan potensi SDM HIMSI di bidang Non-Akademik dan mempersiapkan kader-kader HIMSI.Wadah pengembangan potensi SDM HIMSI di bidang Non-Akademik dan mempersiapkan kader-kader HIMSI.</p>
                            </div>
                            <div className="divisi-bagian">
                                <h3>Divisi</h3>
                                <div className="divisi-tags">
                                    <div className="divisi-tag">
                                        <p>Kaderisasssssssssssssssssi</p>
                                    </div>
                                    <div className="divisi-tag">
                                        <p>Kaderisasi</p>
                                    </div>
                                    <div className="divisi-tag">
                                        <p>Kaderisasi</p>
                                    </div>
                                    <div className="divisi-tag">
                                        <p>Kaderisasi</p>
                                    </div>
                                    <div className="divisi-tag">
                                        <p>Kaderisasi</p>
                                    </div>
                                    <div className="divisi-tag">
                                        <p>Kaderisasi</p>
                                    </div>
                                </div>
                            </div>
                            <div className="line-end"></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="divisi-card">
                            <div className="xxx">
                                <div className="divisi-logo">
                                    <img src={PSDM} alt="PSDM" />
                                </div>
                                <div className="divisi-judul">
                                    <h2>PSDM</h2>
                                    <p>(Pengembangan Sumber Daya Mahasiswa)</p>
                                </div>
                            </div>
                            <div className="divisi-deskripsi">
                                <p>Wadah pengembangan potensi SDM HIMSI di bidang Non-Akademik dan mempersiapkan kader-kader HIMSI.Wadah pengembangan potensi SDM HIMSI di bidang Non-Akademik dan mempersiapkan kader-kader HIMSI.Wadah pengembangan potensi SDM HIMSI di bidang Non-Akademik dan mempersiapkan kader-kader HIMSI.</p>
                            </div>
                            <div className="divisi-bagian">
                                <h3>Divisi</h3>
                                <div className="divisi-tags">
                                    <div className="divisi-tag">
                                        <p>Kaderisasssssssssssssssssi</p>
                                    </div>
                                    <div className="divisi-tag">
                                        <p>Kaderisasi</p>
                                    </div>
                                    <div className="divisi-tag">
                                        <p>Kaderisasi</p>
                                    </div>
                                    <div className="divisi-tag">
                                        <p>Kaderisasi</p>
                                    </div>
                                    <div className="divisi-tag">
                                        <p>Kaderisasi</p>
                                    </div>
                                    <div className="divisi-tag">
                                        <p>Kaderisasi</p>
                                    </div>
                                </div>
                            </div>
                            <div className="line-end"></div>
                        </div>
                    </SwiperSlide>


                </Swiper>
            </div>
        </Container>
    )
}

export default divisiSlider