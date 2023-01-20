import React from 'react'
import { Container, Row } from 'react-bootstrap'
import '../styles/pages/LayananMahasiswa.css'

const LayananMhs = ({ data }) => {
    return (
        <div className="layanan-mahasiswa">
            <Container>
                <Row className='blank-space'></Row>
                <section className="content-section">
                    <div className="section-header-container">
                        <h4 className="section-header">E-Layanan Mahasiswa</h4>
                    </div>
                    <div className="section-body">
                        <table>
                            <tbody>
                                {data.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td><span className='dot'></span></td>
                                            <td><a target="_blank" rel="noreferrer" href={item.url}>{item.nama_link}</a></td>
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