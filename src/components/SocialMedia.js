import { useEffect, useState } from 'react';

import api from '../utils/api'
import { Container, Row, Col } from 'react-bootstrap'

import '../styles/components/SocialMedia.css'

const SocialMedia = () => {
    const [socmed, setSocmed] = useState()

    async function getLinkSocmed() {
        const data = await api.getSocmed()

        setSocmed(data)
    }

    useEffect(() => {
        getLinkSocmed()
    }, [])

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
                        <a target="_blank" rel="noreferrer" href={socmed?.Instagram}>
                            <i class="fa-brands fa-instagram mx-4 mx-sm-3  "></i>
                        </a>
                        <a target="_blank" rel="noreferrer" href={socmed?.Facebook}>
                            <i class="fa-brands fa-facebook mx-4 mx-sm-3"></i>
                        </a>
                        <a target="_blank" rel="noreferrer" href={socmed?.Twitter}>
                            <i class="fa-brands fa-twitter mx-4 mx-sm-3 "></i>
                        </a>
                        <a target="_blank" rel="noreferrer" href={socmed?.Discord}>
                            <i class="fa-brands fa-discord mx-4 mx-sm-3 "></i>
                        </a>
                        <a target="_blank" rel="noreferrer" href={socmed?.TikTok}>
                            <i class="fa-brands fa-tiktok mx-4 mx-sm-3 "></i>
                        </a>
                        <a target="_blank" rel="noreferrer" href={socmed?.Youtube}>
                            <i class="fa-brands fa-youtube mx-4 mx-sm-3 "></i>
                        </a>
                        <a target="_blank" rel="noreferrer" href={socmed?.Linkedin}>
                            <i class="fa-brands fa-linkedin mx-4 mx-sm-3 "></i>
                        </a>
                    </Col>
                </Row>
            </div>
        </Container>

    )
}

export default SocialMedia