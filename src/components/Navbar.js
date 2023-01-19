import { NavLink, useLocation } from 'react-router-dom'
import SubscribeModal from './SubsribeModal'
import Logo from "../assets/img/logohimsi.png";
import ExpandArrow from "../assets/icons/expand.svg"
import { useEffect, useState } from 'react'

import '../styles/components/Navbar.css'

export default function Navbar() {
    const [toggle, showMenu] = useState(false);
    const [toggleProfile, setToggleProfile] = useState(false);
    const {pathname} = useLocation()
    const [showSubscribeModal, setSubscribeModal] = useState(false)
    // const [active, setActive] = useState('');
    function scrollWin() {
        window.scrollTo(0, document.body.scrollHeight - 1350)
    }

    // console.info(pathname);
    useEffect(() => {

        if(pathname !== '/profile') {
            setToggleProfile(false)
        }
    }, [pathname])
    return (
        <nav>
            <div>
                <NavLink to="/">
                    <img
                        alt="logo"
                        src={Logo}
                        className="nav-logo " />
                    <span class="d-inline-block">
                        <h1 className='nav-HIMSI'>HIMSI</h1>
                        <p className='nav-univ'>UIN Syarif Hidayatulah Jakarta</p>
                    </span>
                </NavLink>
            </div>
            <div className={toggle ? "navbar-items show-menu" : "navbar-items"}>
                <ul className="nav-list">
                    <NavLink exact to="/" className="links">Home</NavLink>
                    <NavLink exact to="/profile">
                        Profile <span onClick={() => setToggleProfile(!toggleProfile)}><img className={toggleProfile ? 'expanded-arrow-active' : 'expanded-arrow' } 
                        src={ExpandArrow} alt="expand-arrow"/></span>
                        </NavLink>
                        {toggleProfile && (
                            <div className='profile-section-container'>
                                <div className='profile-section-wrapper'>
                                    <ul className='list-profile'>
                                        <li><a href="#visi">Visi</a></li>
                                        <li><a href="#misi">Misi</a></li>
                                        <li><a href="#bidangdivisi">Bidang & Divisi</a></li>
                                        <li><a href="#strukturorganisasi">Struktur Organisasi</a></li>
                                        <li><a href="#pengurushimsi">Pengurus Himsi</a></li>          
                                    </ul>
                                </div>
                            </div>
                        )}
                    <NavLink exact to="/event" >Event</NavLink>
                    <NavLink exact to="/article" >Article</NavLink>
                    <NavLink exact to="/layanan-mahasiswa">Layanan Mahasiswa</NavLink>
                    <NavLink exact to="/layanan-mahasiswa">
                    </NavLink>
                    <button onClick={() => scrollWin()} className='button-contact' type="button">Contact us</button>
                </ul>
                <i className="uil uil-times nav-close" onClick={() => showMenu(!toggle)}></i>
            </div>
            <div className="nav-toggle" onClick={() => showMenu(!toggle)}>
                <i className="uil uil-apps"></i>
            </div>
            <SubscribeModal showSubscribeModal={showSubscribeModal} setSubscribeModal={setSubscribeModal} />
        </nav >
    )
}