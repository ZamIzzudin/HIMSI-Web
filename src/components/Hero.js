import React from 'react'
import { Carousel, Button } from 'react-bootstrap'
import hero from "../assets/img/meetup.png"

import '../styles/components/Hero.css'

const Hero = () => {
    return (
        <div className='hero'>
            <Carousel >
                <Carousel.Item interval={2000}>
                    <div className='gradient'>
                        <div className='gradient-overlay'></div>
                        <img
                            className="d-block w-100"
                            src={hero}
                            alt="First slide"
                        />
                    </div>
                    <Carousel.Caption>
                        <h3 className='judul'>Meet Up 13.0</h3>
                        <Button variant="primary" className=' btn-hero'>View More</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <div className='gradient'>
                        <div className='gradient-overlay'></div>
                        <img
                            className="d-block w-100"
                            src={hero}
                            alt="First slide"
                        />
                    </div>
                    <Carousel.Caption>
                        <h3 className='judul'>Lomba Milad HIMSI</h3>
                        <Button variant="primary" className='btn-hero'>View More</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <div className='gradient'>
                        <div className='gradient-overlay'></div>
                        <img
                            className="d-block w-100"
                            src={hero}
                            alt="First slide"
                        />
                    </div>
                    <Carousel.Caption>
                        <h3 className='judul'>PBAK</h3>
                        <Button variant="primary" className='btn-hero'>View More</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Hero