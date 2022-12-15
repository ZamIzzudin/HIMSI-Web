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
                        <h3 >Meet Up 13.0</h3>
                        <Button variant="primary" className='mb-4'>View More</Button>
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
                        <h3>Meet Up 13.1</h3>
                        <Button variant="primary" className='mb-4'>View More</Button>
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
                        <h3>Meet Up 13.2</h3>
                        <Button variant="primary" className='mb-4'>View More</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Hero