import React from 'react'
import DatabaseMateri from '../components/DatabaseMateri'
import Faq from '../components/Faq'
import LayananMhs from '../components/LayananMhs'

import '../styles/pages/LayananMahasiswa.css'

const LayananMahasiswa = () => {
    return (
        <div>
            <LayananMhs />
            <DatabaseMateri />
            <Faq />
        </div>
    )
}

export default LayananMahasiswa