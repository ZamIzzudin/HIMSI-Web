import React from 'react'
import { Container } from 'react-bootstrap'
import '../styles/pages/LayananMahasiswa.css'

const DatabaseMateri = () => {
    const databases = [
        {
            judul: 'Kurikulum 2020',
            url: '/#'
        },
        {
            judul: 'Kurikulum 2015',
            url: '/#'
        },
        {
            judul: 'Laporan PKL & KKN',
            url: '/#'
        },
        {
            judul: 'Skripsi',
            url: '/#'
        },
        {
            judul: 'E-letter FST',
            url: '/#'
        }
    ]
    return (
        <div className="layanan-mahasiswa">
            <Container>
                <section className="content-section mb-5">
                    <div className="section-header-container">
                        <h4 className="section-header">Database Materi</h4>
                    </div>
                    <div className="section-body">
                        <table>
                            <tbody>
                                {databases.map((database, index) => {
                                    return (
                                        <tr key={index}>
                                            <td><span className='dot'></span></td>
                                            <td><a href={database.url}>{database.judul}</a></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </section >
            </Container>
        </div >
    )
}

export default DatabaseMateri