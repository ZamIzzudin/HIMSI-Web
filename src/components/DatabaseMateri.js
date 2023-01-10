import React from 'react'
import { Container } from 'react-bootstrap'
import '../styles/pages/LayananMahasiswa.css'

const DatabaseMateri = ({ data }) => {
    return (
        <div className="layanan-mahasiswa">
            <Container>
                <section className="content-section">
                    <div className="section-header-container">
                        <h4 className="section-header">Database Materi</h4>
                    </div>
                    <div className="section-body">
                        <table>
                            <tbody>
                                {data.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td><span className='dot'></span></td>
                                            <td><a href={item.url}>{item.nama_link}</a></td>
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