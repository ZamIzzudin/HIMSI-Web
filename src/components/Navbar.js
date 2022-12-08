import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import SubscribeModal from './SubsribeModal'

import { useState } from 'react'

import '../styles/components/Navbar.css'

export default function Navbar() {

    const [showSubscribeModal, setSubscribeModal] = useState(false)

    return (
        <nav>
            <div>
                <h1>HIMSI</h1>
            </div>
            <ul className="navbar-items">
                <Link to="/">Home</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/program-kerja">Program Kerja</Link>
                <Link to="/event">Event</Link>
                <Link to="/article">Article</Link>
                <Button onClick={() => setSubscribeModal(!showSubscribeModal)}>Subscribe</Button>
            </ul>

            <SubscribeModal showSubscribeModal={showSubscribeModal} setSubscribeModal={setSubscribeModal} />
        </nav >
    )
}