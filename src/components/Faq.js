import React from 'react'
import { Container, Accordion } from 'react-bootstrap'
import '../styles/pages/LayananMahasiswa.css'

const Faq = ({ data }) => {
    return (
        <div className="layanan-mahasiswa">
            <Container>
                <section className="content-section mb-5">
                    <div className="section-header-container">
                        <h4 className="section-header">FAQ</h4>
                    </div>
                    {/* <div className="section-body"> */}
                    <Accordion>
                        {data.map((FAQ, index) => (
                            <Accordion.Item eventKey={index}>
                                <Accordion.Header>{FAQ.pertanyaan}</Accordion.Header>
                                <Accordion.Body>
                                    {FAQ.jawaban}
                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                    {/* </div> */}
                </section >
            </Container>
        </div >
    )
}

export default Faq