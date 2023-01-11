import { Button, Container } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import api from '../utils/api'

import EventSlider from '../components/EventSlider'
import bgProker from '../assets/img/bg-proker.png'
import ImageSlider from '../components/ProgramKerja/ImageSlider'

import '../styles/pages/DetailProker.css'

const DetailProker = () => {

    const { id } = useParams()
    const [detail, setDetail] = useState(null)

    async function getDetailEvent(id) {
        const data = await api.getDetailEvent(id)
        setDetail(data)
    }

    useEffect(() => {
        getDetailEvent(id)
    }, [id])

    // Scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // innner HTML (p)

    return (
        <div className='detail-proker'>
            <div className='blank-space'></div>
            {/* -------------------------- Bagian Img Header ------------------------- */}
            <div className='img-header'>
                <img src={detail?.header_event.url} alt="header" />
            </div>
            <Container>
                <div className='background'>
                    <div className="bg-1">
                        <img src={bgProker} alt="h" />
                    </div>
                    <div className="bg-2">
                        <img src={bgProker} alt="h" />
                    </div>
                </div>
                {/* -------------------------- Content ------------------------- */}
                <div className='content'>
                    <div className='header'>
                        <h4 className='judul'>{detail?.judul_event}</h4>
                        <div className='sub-judul'>
                            <div>
                                <p className='penulis'>{detail?.penulis_event}</p>
                                <p className='tanggal'>{detail?.tanggal_mulai_event.toString().substring(0, 10)}</p>
                            </div>
                            <Button className={`BPH`}>{detail?.bidang}</Button>
                        </div>
                    </div>
                    <div className='deskripsi'>
                        <div className="image-content">
                            <img src={detail?.gambar_event.url} alt="preview" />
                        </div>
                        <p dangerouslySetInnerHTML={{ __html: `${detail?.isi_event}` }}></p>
                    </div>

                    {detail?.dokumentasi_event.length > 0 && (
                        <ImageSlider />
                    )}

                </div>
                {/*--------------------- header-event -----------------------*/}
                <div className="header-event">
                    <h3 className='title' >Event Lainnya</h3>
                </div>
                <EventSlider />
            </Container>
            {/* -------------------------- Artikel Lainnya ------------------------- */}
        </div >

    )
}

export default DetailProker