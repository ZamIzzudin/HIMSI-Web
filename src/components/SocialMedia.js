import { useEffect, useState } from 'react';

import api from '../utils/api'
import { Container, Row, Col } from 'react-bootstrap'

import '../styles/components/SocialMedia.css'
// logo sosmed
import instagram from '../assets/img/SocialMedia/instagram.svg'
import facebook from '../assets/img/SocialMedia/facebook.svg'
import twitter from '../assets/img/SocialMedia/twitter.svg'
import discord from '../assets/img/SocialMedia/discord.svg'
import tiktok from '../assets/img/SocialMedia/tiktok.svg'
import youtube from '../assets/img/SocialMedia/youtube.svg'
import linkedin from '../assets/img/SocialMedia/linkedin.svg'

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
            <div className='social-media'>
                <Row className='header'>
                    <Col>
                        <h4 className='judul text-center'>Social Media</h4>
                    </Col>
                </Row>
                <Row className='mb-5'>
                    <Col className='logo-sosmed d-flex justify-content-center flex-wrap  '>
                        <a target="_blank" rel="noreferrer" href={socmed?.Instagram}>
                            <img src={instagram} alt="instagram" className='mx-4 mx-sm-3' />
                        </a>
                        <a target="_blank" rel="noreferrer" href={socmed?.Facebook}>
                            <img src={facebook} alt="instagram" className='mx-4 mx-sm-3' />
                        </a>
                        <a target="_blank" rel="noreferrer" href={socmed?.Twitter}>
                            <img src={twitter} alt="instagram" className='mx-4 mx-sm-3' />
                        </a>
                        <a target="_blank" rel="noreferrer" href={socmed?.Discord}>
                            <img src={discord} alt="instagram" className='mx-4 mx-sm-3' />
                        </a>
                        <a target="_blank" rel="noreferrer" href={socmed?.TikTok}>
                            <img src={tiktok} alt="instagram" className='mx-4 mx-sm-3' />
                        </a>
                        <a target="_blank" rel="noreferrer" href={socmed?.Youtube}>
                            <img src={youtube} alt="instagram" className='mx-4 mx-sm-3' />
                        </a>
                        <a target="_blank" rel="noreferrer" href={socmed?.Linkedin}>
                            <img src={linkedin} alt="instagram" className='mx-4 mx-sm-3' />
                        </a>
                    </Col>
                </Row>
            </div>
        </Container>

    )
}

export default SocialMedia