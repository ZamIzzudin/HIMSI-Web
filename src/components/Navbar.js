import { Link } from 'react-router-dom'

import '../styles/components/Navbar.css'

export default function Navbar() {
    return (
        <nav>
            <div>
                <h1>HIMSI</h1>
            </div>
            <ul className="navbar-items">
                <Link to="/">Home</Link>
                <Link to="/Profile">Profile</Link>
                {/* Tambahin di bawah */}
                <Link to="/event">Event</Link>
                <Link to="/article">Article</Link>
            </ul>
        </nav >
    )
}