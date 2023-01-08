import { useState, useEffect } from 'react'
import api from '../utils/api'

import DatabaseMateri from '../components/DatabaseMateri'
import Faq from '../components/Faq'
import LayananMhs from '../components/LayananMhs'

import '../styles/pages/LayananMahasiswa.css'

const LayananMahasiswa = () => {
    const [eLayanan, setELayanan] = useState([])
    const [dbMateri, setDBMateri] = useState([])
    const [faq, setFAQ] = useState([])

    async function getLayananMahasiswa() {
        const data = await api.getELayanan()
        const data2 = await api.getDBMateri()
        const data3 = await api.getFAQ()

        setELayanan(data)
        setDBMateri(data2)
        setFAQ(data3)
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
            <Faq data={faq} />
        </div>
    )
}

export default LayananMahasiswa