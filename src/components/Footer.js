import "../styles/components/Footer.css";
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'


const Footer = () => {
    return (

        <footer class="footer-bs">
                <div class="row">
        	        <div class="col-md-2 footer-brand animated fadeInLeft">
            	        <h2 className="footer-judul">HIMSI</h2>
                        <p>Jl. Ir H. Juanda No.95, Cemp. Putih,<br></br> Kec. Ciputat Tim., Kota Tangerang <br></br>Selatan, Banten 15412</p>
                        <p>Email : <br></br> uinjakarta@gmail.com <br></br> Website : HIMSI.uinjkt.ac.id </p>
                </div>
        	<div class="col-md-2 footer-social animated fadeInUp">
            	<h2 className="footer-judul">Informasi</h2>
                    <ul class="pages">
                        <li><Link to ="/profile">Profile HIMSI</Link></li>
                        <li><Link to ="/">Berita terbaru</Link></li>
                        <li><Link to ="/">Upcoming Events</Link></li>
                        <li><Link to ="/">FAQ</Link></li>
                        <li><Link to ="/">Hubingi Kami</Link></li>
                    </ul>
            </div>
        	<div class="col-md-3 footer-social animated fadeInDown">
            	<h2 className="footer-judul">Tautan Penting </h2>
            	<ul>
                        <li><Link to ="/">Layanan Mahsiswa</Link></li>
                        <li><Link to ="/">Database Materi</Link></li>
                        <li><Link to ="/">Laporan PKL & KKN</Link></li>
                        <li><Link to ="/">Skripsi</Link></li>
                        <li><Link to ="/">E-letter FST</Link></li>
                </ul>
            </div>
        	    <div class="col-md-5 footer-ns animated fadeInRight">
            	    <h2 className="footer-judul" >Dapatkan Informasi Terbaru</h2> 
                <p>Subscribe untuk mendapatkan <br></br> info terbaru terkait HIMSI</p>
                <p>
                    
                            <div className="mb-5">
                                <input 
                                type="email" 
                                placeholder="Masukan Email anda " 
                                className="footer-input"/> 
                                <button type="submit" class="footer-btn btn-primary">Submit</button>
                            </div>

                    
                </p>
                <h2 className="footer-judul"> Social Media </h2>
                <Row className='mb-2'>
                    <Col className='logo-sosmed d-flex justify-content-left flex-wrap  '>
                        <i class="fa-brands fa-instagram mx-4 mx-sm-3  pb-4" ></i>
                        <i class="fa-brands fa-facebook mx-4 mx-sm-3 pb-4"></i>
                        <i class="fa-brands fa-twitter mx-4 mx-sm-3 pb-4"></i>
                        <i class="fa-brands fa-discord mx-4 mx-sm-3 pb-4"></i>
                        <i class="fa-brands fa-tiktok mx-4 mx-sm-3 pb-4"></i>
                        <i class="fa-brands fa-youtube mx-4 mx-sm-3 pb-4"></i>
                        <i class="fa-brands fa-linkedin mx-4 mx-sm-3 pb-4"></i>
                    </Col>
                </Row>
            </div>
        </div>

        <div>
            <p className="footer-copyright">Hak cipta © 2022-2023 HIMSI UIN Syarif Hidayatulah jakarta <br></br> Dibuat dan dikembangkang oleh MCD Internship</p>
        </div>

    </footer>


    )
}

export default Footer;