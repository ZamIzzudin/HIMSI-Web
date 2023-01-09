import axios from 'axios'

const api = (() => {
    const BaseUrl = "https://himsi-website-be.vercel.app"

    async function getArticle() {
        const url = BaseUrl + '/berita'

        const response = await axios.get(url)

        return response.data.data[0].berita
    }

    async function getDetailArticle(id) {
        const url = BaseUrl + '/berita/' + id

        const response = await axios.get(url)

        return response.data.data
    }

    async function getEvent() {
        const url = BaseUrl + '/event'

        const response = await axios.get(url)

        return response.data.data[0].event
    }

    async function getDetailEvent(id) {
        const url = BaseUrl + '/event/' + id

        const response = await axios.get(url)

        return response.data.data
    }

    async function getPartner() {
        const url = BaseUrl + '/partner'

        const response = await axios.get(url)

        return response.data.data
    }

    async function getLatestEvent() {
        const url = BaseUrl + '/event'

        const response = await axios.get(url)

        const get3 = response.data.data[0].event.filter((item, index) => index <= 2)

        return get3
    }

    async function getHimpunan() {
        const url = BaseUrl + '/himpunan'

        const response = await axios.get(url)

        return response.data.data
    }

    async function getVisiMisi() {
        const url = BaseUrl + '/visi'

        const response = await axios.get(url)

        return response.data.data
    }

    async function getStruktur() {
        const url = BaseUrl + '/pengurus_dashboard'

        const response = await axios.get(url)

        return response.data.data
    }

    async function getELayanan() {
        const url = BaseUrl + '/link?kategori=e-layanan'

        const response = await axios.get(url)

        return response.data.data
    }

    async function getDBMateri() {
        const url = BaseUrl + '/link?kategori=database-materi'

        const response = await axios.get(url)

        return response.data.data
    }

    async function getFAQ() {
        const url = BaseUrl + '/faq'

        const response = await axios.get(url)

        return response.data.data
    }

    async function getFooter() {
        const url = BaseUrl + '/footer'

        const response = await axios.get(url)

        return response.data.data[0]
    }

    async function getSocmed() {
        const url = BaseUrl + '/link?kategori=sosmed'

        const response = await axios.get(url)

        const toObj = {}
        response.data.data.forEach(item => {
            toObj[item.nama_link] = item.url
        })

        return toObj
    }

    async function getSlider() {
        const url = BaseUrl + '/slider'

        const response = await axios.get(url)

        return response.data.data
    }

    async function getUpComing() {
        const url = BaseUrl + '/event?status=up coming'

        const response = await axios.get(url)

        const get4 = response.data.data[0].event.filter((item, index) => index <= 3)

        return get4
    }

    // Sisa

    // Event (tinggal make)
    // Detail Event (tinggl make)
    // Filtering Event and Article
    // Rekomendasi Event dan Artikel (opsional)
    // Contact Us
    // Subscribe

    return {
        getArticle,
        getDetailArticle,
        getEvent,
        getDetailEvent,
        getPartner,
        getHimpunan,
        getVisiMisi,
        getStruktur,
        getELayanan,
        getDBMateri,
        getFAQ,
        getFooter,
        getSocmed,
        getSlider,
        getLatestEvent,
        getUpComing
    }
})()

export default api