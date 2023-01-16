import { NavLink } from 'react-router-dom'
import SubscribeModal from './SubsribeModal'
import Logo from "../assets/img/logohimsi.png";

import { useState } from 'react'

import '../styles/components/Navbar.css'

export default function Navbar() {
    const [toggle, showMenu] = useState(false);
    const [showSubscribeModal, setSubscribeModal] = useState(false)
    // const [active, setActive] = useState('');
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
                    <NavLink exact to="/profile">Profile</NavLink>
                    <NavLink exact to="/event" >Event</NavLink>
                    <NavLink exact to="/article" >Article</NavLink>
                    <NavLink exact to="/layanan-mahasiswa">Layanan Mahasiswa</NavLink>
                    <NavLink exact to="/layanan-mahasiswa">
                    </NavLink>
                    <button className='button-contact' type="button" >Contact us</button>
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