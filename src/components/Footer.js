import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import api from '../utils/api'

import SubscribeModal from './SubsribeModal'

import Whatsapp from "../assets/img/Whatsapp.png";
import Gmail from "../assets/img/Gmail.png";
import "../styles/components/Footer.css";


const Footer = () => {
    const [dataFooter, setDataFooter] = useState()
    const [email, setEmail] = useState()
    const [socmed, setSocmed] = useState()

    const [showModal, setShowModal] = useState(false)

    async function getDataFooter() {
        const data = await api.getFooter()
        const data2 = await api.getSocmed()

        setDataFooter(data)
        setSocmed(data2)
    }

    async function handleSubscribe() {
        await api.subscribe(email)
        setShowModal(true)
    }

    useEffect(() => {
        getDataFooter()
    }, [])

    return (
        <footer class="footer-bs">
            <div className="row">
                <div className="col-sm-6 footer-brand ">
                    <h2 className="footer-judul" >Dapatkan Informasi Terbaru</h2>
                    <p>Subscribe untuk mendapatkan info terbaru terkait HIMSI</p>
                    <div className="mb-5">
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            type="email"
                            placeholder="Masukan Email anda "
                            className="footer-input" />
                        <button onClick={() => handleSubscribe()} type="button" class="footer-btn btn-primary">Submit</button>
                    </div>
                </div>

                <div class="col-sm-3 footer-contact ">
                    <h2 className="footer-judul">Contact us</h2>
                    <Row>
                        <Col className='contact-logo '>
                            <img src={Whatsapp} className="contact-logo" alt="Logo" />
                            <img src={Gmail} className="contact-logo mx-5  " alt="Logo" />
                        </Col>
                    </Row>
                </div>
            </div>


            <div class="row description">
                <div class="col-sm-3 footer-brand">
                    <h2 className="footer-judul">HIMSI</h2>
                    <p>{dataFooter?.alamat}</p>
                    <p>Email : <br></br> {dataFooter?.email} <br></br> Website : {dataFooter?.website} </p>
                </div>

                <div class="col-sm-2 footer-social  ">
                    <h2 className="footer-judul">Informasi</h2>
                    <ul className="pages">
                        <li><Link to="/profile">Profile HIMSI</Link></li>
                        <li><Link to="/event">Berita terbaru</Link></li>
                        <li><Link to="/event">Upcoming Events</Link></li>
                        <li><Link to="/layanan-mahasiswa">FAQ</Link></li>
                        <li><Link to="/layanan-mahasiswa">Hubungi Kami</Link></li>
                    </ul>
                </div>

                <div class="col-sm-3 footer-social ">
                    <h2 className="footer-judul">Tautan Penting </h2>
                    <ul className="pages">
                        <li><Link to="/layanan-mahasiswa">Layanan Mahsiswa</Link></li>
                        <li><Link to="/layanan-mahasiswa">Database Materi</Link></li>
                        <li><Link to="/layanan-mahasiswa">Laporan PKL & KKN</Link></li>
                        <li><Link to="/layanan-mahasiswa">Skripsi</Link></li>
                        <li><Link to="/layanan-mahasiswa">E-letter FST</Link></li>
                    </ul>
                </div>
            </div>

            <div>
                <Row className='mb-2'>
                    <Col className='logo-sosmed d-flex justify-content-center flex-wrap'>
                        <a target="_blank" rel="noreferrer" href={socmed?.Instagram}>
                            <i class="fa-brands fa-instagram mx-4 mx-sm-3 pb-4"></i>
                        </a>
                        <a target="_blank" rel="noreferrer" href={socmed?.Facebook}>
                            <i class="fa-brands fa-facebook mx-4 mx-sm-3 pb-4"></i>
                        </a>
                        <a target="_blank" rel="noreferrer" href={socmed?.Twitter}>
                            <i class="fa-brands fa-twitter mx-4 mx-sm-3 pb-4"></i>
                        </a>
                        <a target="_blank" rel="noreferrer" href={socmed?.Discord}>
                            <i class="fa-brands fa-discord mx-4 mx-sm-3 pb-4"></i>
                        </a>
                        <a target="_blank" rel="noreferrer" href={socmed?.TikTok}>
                            <i class="fa-brands fa-tiktok mx-4 mx-sm-3 pb-4"></i>
                        </a>
                        <a target="_blank" rel="noreferrer" href={socmed?.Youtube}>
                            <i class="fa-brands fa-youtube mx-4 mx-sm-3 pb-4"></i>
                        </a>
                        <a target="_blank" rel="noreferrer" href={socmed?.Linkedin}>
                            <i class="fa-brands fa-linkedin mx-4 mx-sm-3 pb-4"></i>
                        </a>
                    </Col>
                </Row>
                <p className="footer-copyright">Hak cipta © 2022-2023 HIMSI UIN Syarif Hidayatulah jakarta <br></br> Dibuat dan dikembangkang oleh MCD Internship</p>
            </div>
            <SubscribeModal showSubscribeModal={showModal} setSubscribeModal={setShowModal} />
        </footer>
    )
}

export default Footer;