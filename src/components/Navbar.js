import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import SubscribeModal from './SubsribeModal'
import Logo from "../assets/img/logohimsi.png";

import { useState } from 'react'

import '../styles/components/Navbar.css'

export default function Navbar() {

    const [showSubscribeModal, setSubscribeModal] = useState(false)

    return (
        <nav>
            <div>
                <Link to="/">
                    <img
                        alt="logo"
                        src={Logo}
                        className="nav-logo " />
                </Link>


                <span class="d-inline-block">
                    <h1 className='nav-HIMSI'>HIMSI</h1>
                    <p className='nav-univ'>UIN Syarif Hidayatulah Jakarta</p>
                </span>
            </div>

            <ul className="navbar-items">
                <Link to="/">Home</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/event">Event</Link>
                <Link to="/article">Article</Link>
                <Link to="/layanan-mahasiswa">Layanan Mahasiswa</Link>
                <Link to="/layanan-mahasiswa">
                    <Button type="button" >Contact us</Button>
                </Link>
            </ul>

            <SubscribeModal showSubscribeModal={showSubscribeModal} setSubscribeModal={setSubscribeModal} />
        </nav >
    )
}