import React from 'react'
import { Container, Row } from 'react-bootstrap'
import '../styles/pages/LayananMahasiswa.css'

const LayananMhs = () => {

    const layananMhs = [
        {
            judul: 'SOP E-layanan Mahasiswa',
            url: '/#'
        },
        {
            judul: 'Layanan Tanda Tangan',
            url: '/#'
        },
        {
            judul: 'Pendaftaran Proposal',
            url: '/#'
        },
        {
            judul: 'Pendaftaran Seminar Hasil',
            url: '/#'
        },
        {
            judul: 'Pendaftaran Sidang',
            url: '/#'
        },
        {
            judul: 'Form Distribusi',
            url: '/#'
        },
    ]
    return (
        <div className="layanan-mahasiswa">
            <Container>
                <Row className='blank-space'></Row>
                <section className="content-section mb-5">
                    <div className="section-header-container">
                        <h4 className="section-header">E-Layanan Mahasiswa</h4>
                    </div>
                    <div className="section-body">
                        <table>
                            <tbody>

                                {layananMhs.map((layanan, index) => {
                                    return (
                                        <tr key={index}>
                                            <td><span className='dot'></span></td>
                                            <td><a href={layanan.url}>{layanan.judul}</a></td>
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

export default LayananMhs