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

const RecommendSlider = ({ data, article, event }) => {
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
                    {data?.map((item) => {
                        return (
                            <SwiperSlide>
                                <div className='gradient'>
                                    <div className="gradient-overlay"></div>
                                    {event && (
                                        <img src={item?.header_event.url} alt="hero" />
                                    )}
                                    {article && (
                                        <img src={item?.header_berita.url} alt="hero" />
                                    )}
                                </div>
                                <div className="event-body">
                                    <h5 className='title'>{item?.judul_event || item?.judul_berita}</h5>
                                    <p className='deskripsi' dangerouslySetInnerHTML={{ __html: `${item?.isi_event || item?.isi_berita}` }}></p>
                                    {event && (
                                        <Link to={`/event-detail/${item?._id}`}>
                                            <Button className='btn-card'>Read More</Button>
                                        </Link>
                                    )}
                                    {article && (
                                        <Link to={`/article-detail/${item?._id}`}>
                                            <Button className='btn-card'>Read More</Button>
                                        </Link>
                                    )}
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </Container>
        </div>
    )
}

export default RecommendSlider