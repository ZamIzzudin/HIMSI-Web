import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import '../styles/components/SocialMedia.css'

const SocialMedia = () => {
    return (

        <Container>
            <div className='social-media mt-5'>
                <Row className='header mb-5'>
                    <Col>
                        <h4 className='judul text-center'>Social Media</h4>
                    </Col>
                </Row>
                <Row className='mb-5'>
                    <Col className='logo-sosmed d-flex justify-content-center flex-wrap  '>
                        <i class="fa-brands fa-instagram mx-4 mx-sm-3 pb-4 "></i>
                        <i class="fa-brands fa-facebook mx-4 mx-sm-3pb-4"></i>
                        <i class="fa-brands fa-twitter mx-4 mx-sm-3 pb-4"></i>
                        <i class="fa-brands fa-discord mx-4 mx-sm-3 pb-4"></i>
                        <i class="fa-brands fa-tiktok mx-4 mx-sm-3 pb-4"></i>
                        <i class="fa-brands fa-youtube mx-4 mx-sm-3 pb-4"></i>
                        <i class="fa-brands fa-linkedin mx-4 mx-sm-3 pb-4"></i>
                    </Col>
                </Row>
            </div>
        </Container>

    )
}

export default SocialMedia