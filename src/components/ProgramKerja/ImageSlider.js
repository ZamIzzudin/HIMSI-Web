import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../styles/components/ProgramKerja/ImageSlider.css";
import img from '../../assets/img/meetup.png'

// import required modules
import { Pagination, Navigation } from "swiper";
const ImageSlider = () => {
    return (
        <div className='img-slider'>
            <div className='layout'>
                <Swiper
                    slidesPerView={1}
                    grabCursor={true}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={img} alt="image-slider" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default ImageSlider