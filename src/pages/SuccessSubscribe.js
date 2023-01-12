import { Link } from 'react-router-dom'
import Ilustration from '../assets/img/success-ilustration.webp'

import '../styles/pages/SuccessPage.css'

export default function SuccessSubsribe() {
    return (
        <main className="success-page">
            <img src={Ilustration} alt="Success Vector Illustration" width="30%" />
            <h3 className="success-heading">Subscribe Success</h3>
            <Link to='/'>
                <button className="success-btn">Back To Home</button>
            </Link>
        </main>
    )
}