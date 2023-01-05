import React from 'react'
import { Container, Accordion } from 'react-bootstrap'
import '../styles/pages/LayananMahasiswa.css'

const Faq = () => {
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
                        <h4 className="section-header">FaQ</h4>
                    </div>
                    {/* <div className="section-body"> */}
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Bagaimana cara menjalin kerja sama dengan HIMSI?</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Accordion Item #2</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Accordion Item #2</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    {/* </div> */}
                </section >
            </Container>
        </div >
    )
}

export default Faq