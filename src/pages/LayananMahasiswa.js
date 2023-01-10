import { useState, useEffect } from 'react'
import api from '../utils/api'

import DatabaseMateri from '../components/DatabaseMateri'
import Faq from '../components/Faq'
import LayananMhs from '../components/LayananMhs'
import ContactUs from '../components/ContactUs'

import '../styles/pages/LayananMahasiswa.css'

const LayananMahasiswa = () => {
    const [eLayanan, setELayanan] = useState([])
    const [dbMateri, setDBMateri] = useState([])
    const [contact, setContact] = useState([])
    const [faq, setFAQ] = useState([])

    async function getLayananMahasiswa() {
        const data = await api.getELayanan()
        const data2 = await api.getDBMateri()
        const data3 = await api.getFAQ()
        const data4 = await api.getContact()

        setELayanan(data)
        setDBMateri(data2)
        setFAQ(data3)
        setContact(data4)
    }

    useEffect(() => {
        getLayananMahasiswa()
    }, [])

    // Scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <LayananMhs data={eLayanan} />
            <DatabaseMateri data={dbMateri} />
            <ContactUs data={contact} />
            <Faq data={faq} />
        </div>
    )
}

export default LayananMahasiswa