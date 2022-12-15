import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { motion } from "framer-motion"
import { useState, useEffect, useRef } from 'react'

// import Slider from 'react-slick'
import '../styles/components/Partner.css'
import PartnerImages from '../utils/PartnerImages'
// import image1 from '../assets/img/'

const Partner = () => {

    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);

    console.log(width);
    return (
        <Container>
            <div className='partner'>
                <Row className='header'>
                    <Col>
                        <h3 className='text-center'>Our Partner</h3>
                    </Col>
                </Row>
                <motion.div ref={carousel} className='carousel' whileTap={{ cursor: "grabbing" }}>
                    <motion.div
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }} className='inner-carousel'>
                        {PartnerImages.map((PartnerImage, index) => {
                            return (
                                <motion.div className="item" key={index}>
                                    <img src={PartnerImage} alt="" />
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </motion.div>
            </div>
        </Container >
    );
}

export default Partner