import { Container } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../utils/api'

import EventSlider from '../components/EventSlider'
import bgProker from '../assets/img/bg-proker.png'
import GambarLink from "../assets/img/ArticlePage/ref-icon.png"
import AttachFile from "../assets/img/ArticlePage/attach.png"

import '../styles/pages/DetailArtikel.css'

const DetailArtikel = () => {
    const { id } = useParams()
    const [detail, setDetail] = useState(null)

    async function getDetailArticle(id) {
        const data = await api.getDetailArticle(id)
        setDetail(data)
    }

    useEffect(() => {
        getDetailArticle(id)
    }, [id])

    return (

        <div className='detail-artikel'>
            <div className='blank-space'></div>
            {/* -------------------------- Bagian Img Header ------------------------- */}
            <div className='img-header'>
                <img src={detail?.header_berita.url} alt="header" />
            </div>
                    <div className="bg-1">
                        <img src={bgProker} alt="hiasan" />
                    </div>
                    <div className="bg-2">
                        <img src={bgProker} alt="hiasan" />
                    </div>
                <div className='background'>
                </div>
            <Container>
                {/* -------------------------- Content ------------------------- */}
                <div className='content'>
                    <div className='header'>
                        <h4 className='judul'>{detail?.judul_berita}</h4>
                        <div className='sub-judul'>
                            <div>
                                <p className='penulis'>{detail?.penulis_berita}</p>
                                <p className='tanggal'>{detail?.tanggal_berita.toString().substring(0, 10)}</p>
                            </div>
                            <button className='adkesmagazine'>{detail?.kategori_berita[0]}</button>
                        </div>
                    </div>
                    <div className='deskripsi'>
                        <img className='desc-img' src={detail?.gambar_berita.url} alt="gambar berita" />
                        <p dangerouslySetInnerHTML={{ __html: `${detail?.isi_berita}` }}></p>
                    </div>
                    <div className='links'>
                        <img className='menu-icon' src={GambarLink} alt="gambar" />
                        <a href={detail?.link_pdf}>{detail?.link_pdf}</a>
                    </div>
                    <button className='attached-file'>
                        <img src={AttachFile} alt="PDF" />
                        <p>PDF</p>
                    </button>
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

export default DetailArtikel