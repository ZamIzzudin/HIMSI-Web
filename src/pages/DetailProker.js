/* eslint-disable react-hooks/exhaustive-deps */
import { Container } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../utils/api'
import ImageSlider from '../components/ProgramKerja/ImageSlider'
import RecommendSlider from '../components/RecommendSlider'
import bgProker from '../assets/img/bg-proker.png'
import GambarLink from "../assets/img/ArticlePage/ref-icon.png"

import '../styles/pages/DetailArtikel.css'

const DetailProker = () => {
    const [tags, setTags] = useState('')
    const { id } = useParams()
    const [detail, setDetail] = useState(null)
    const [recommend, setRecommend] = useState([])
    const [params, setParams] = useState('?')

    function setupParams(data) {
        let url = `?bidang=${data.bidang}`
        setParams(url)
    }

    async function getDetailEvent(id) {
        const data = await api.getDetailEvent(id)
        setupParams(data)
        setDetail(data)
    }

    async function getRecommend(params) {
        const data = await api.getRecommendEvent(params)
        setRecommend(data)
    }

    useEffect(() => {
        getDetailEvent(id)
    }, [id])

    useEffect(() => {
        if (params !== '?') {
            getRecommend(params)
        }
    }, [params])

    // Scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [detail]);

    useEffect(() => {

        function handleTags() {

            switch (detail?.bidang) {
                case "BPH":
                    return "kategori-tag BPH-TAG"

                case "PSDM":
                    return "kategori-tag PSDM-TAG"

                case "DIKTI":
                    return "kategori-tag DIKTI-TAG"

                case "MEDKOM":
                    return "kategori-tag MEDKOM-TAG"

                case "PERHUB":
                    return "kategori-tag PERHUB-TAG"

                case "ADKESMA":
                    return "kategori-tag ADKESMA-TAG"

                case "URT":
                    return "kategori-tag URT-TAG"

                default:
                    return "kategori-tag"
            }

        }

        setTags(handleTags())
    }, [detail])

    return (

        <div className='detail-artikel'>
            <div className='blank-space'></div>
            {/* -------------------------- Bagian Img Header ------------------------- */}
            <div className='img-header'>
                <img src={detail?.header_event.url} alt="header" />
            </div>
            <div className="bg-1">
                <img src={bgProker} alt="hiasan" />
            </div>
            <div className="bg-2">
                <img src={bgProker} alt="hiasan" />
            </div>
            <div className='background'>
            </div>
            <Container className='container artikel-container'>
                {/* -------------------------- Content ------------------------- */}
                <div className='content'>
                    <div className='header'>
                        <h4 className='judul'>{detail?.judul_event}</h4>
                        <div className='sub-judul'>
                            <div>
                                <p className='penulis'>{detail?.penulis_event}</p>
                                <p className='tanggal'>{detail?.tanggal_mulai_event.toString().substring(0, 10)}</p>
                            </div>
                            <div className="d-flex gap-2">
                                <button className={`${tags} text-center basic-des`}>{detail?.bidang}</button>
                            </div>
                        </div>
                    </div>
                    <div className='deskripsi'>
                        <img className='image-content' src={detail?.gambar_event.url} alt="gambar berita" />
                        <p dangerouslySetInnerHTML={{ __html: `${detail?.isi_event}` }}></p>
                    </div>
                    <div className='links'>
                        <img className='menu-icon' src={GambarLink} alt="gambar-pendaftaran" />
                        <a href={detail?.link_pendaftaran}>{detail?.link_pendaftaran} (Link Pendaftaran)</a>
                    </div>
                    <div className='links'>
                        <img className='menu-icon' src={GambarLink} alt="gambar-booklet" />
                        <a href={detail?.link_pdf}>{detail?.link_pdf} (Link Booklet)</a>
                    </div>

                    {detail?.dokumentasi_event.length > 0 && (
                        <ImageSlider data={detail?.dokumentasi_event} />
                    )}

                </div>
                {/*--------------------- header-event -----------------------*/}
                <div className="header-event">
                    <h3 className='title' >Event Lainnya</h3>
                </div>
                {recommend.length > 0 && (
                    <RecommendSlider data={recommend} event />
                )}
            </Container>
            {/* -------------------------- Artikel Lainnya ------------------------- */}
        </div >

    )
}

export default DetailProker
