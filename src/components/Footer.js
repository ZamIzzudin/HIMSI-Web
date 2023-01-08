import "../styles/components/Footer.css";
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import Whatsapp from"../assets/img/Whatsapp.png";
import Gmail from"../assets/img/Gmail.png";


const Footer = () => {
    return (
        <footer class="footer-bs">
                <div className="row">
                    <div className="col-sm-6 footer-brand ">
                        <h2 className="footer-judul" >Dapatkan Informasi Terbaru</h2> 
                        <p>Subscribe untuk mendapatkan info terbaru terkait HIMSI</p>
                        <p>
                        
                                <div className="mb-5">
                                    <input 
                                    type="email" 
                                    placeholder="Masukan Email anda " 
                                    className="footer-input"/> 
                                    <button type="submit" class="footer-btn btn-primary">Submit</button>
                                </div>
                        </p>
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
                        <p>Jl. Ir H. Juanda No.95, Cemp. Putih,<br></br> Kec. Ciputat Tim., Kota Tangerang <br></br>Selatan, Banten 15412</p>
                        <p>Email : <br></br> uinjakarta@gmail.com <br></br> Website : HIMSI.uinjkt.ac.id </p>
                    </div>

                <div class="col-sm-2 footer-social  ">
                    <h2 className="footer-judul">Informasi</h2>
                        <ul className="pages">
                            <li><Link to ="/profile">Profile HIMSI</Link></li>
                            <li><Link to ="/">Berita terbaru</Link></li>
                            <li><Link to ="/">Upcoming Events</Link></li>
                            <li><Link to ="/">FAQ</Link></li>
                            <li><Link to ="/">Hubungi Kami</Link></li>
                        </ul>
                </div>

                    <div class="col-sm-3 footer-social ">
                        <h2 className="footer-judul">Tautan Penting </h2>
                            <ul className="pages">
                                <li><Link to ="/">Layanan Mahsiswa</Link></li>
                                <li><Link to ="/">Database Materi</Link></li>
                                <li><Link to ="/">Laporan PKL & KKN</Link></li>
                                <li><Link to ="/">Skripsi</Link></li>
                                <li><Link to ="/">E-letter FST</Link></li>
                            </ul>
                    </div> 
        </div> 

        <div>
            <Row className='mb-2'>
                        <Col className='logo-sosmed d-flex justify-content-center flex-wrap  '>
                            <i class="fa-brands fa-instagram mx-4 mx-sm-3  pb-4" ></i>
                            <i class="fa-brands fa-facebook mx-4 mx-sm-3 pb-4"></i>
                            <i class="fa-brands fa-twitter mx-4 mx-sm-3 pb-4"></i>
                            <i class="fa-brands fa-discord mx-4 mx-sm-3 pb-4"></i>
                            <i class="fa-brands fa-tiktok mx-4 mx-sm-3 pb-4"></i>
                            <i class="fa-brands fa-youtube mx-4 mx-sm-3 pb-4"></i>
                            <i class="fa-brands fa-linkedin mx-4 mx-sm-3 pb-4"></i>
                        </Col>
                    </Row>
            <p className="footer-copyright">Hak cipta © 2022-2023 HIMSI UIN Syarif Hidayatulah jakarta <br></br> Dibuat dan dikembangkang oleh MCD Internship</p>
        </div>

    </footer>


    )
}

export default Footer;