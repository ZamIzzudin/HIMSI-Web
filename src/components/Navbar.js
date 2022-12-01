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
                {/* Tambahin di bawah */}

            </ul>
        </nav >
    )
}