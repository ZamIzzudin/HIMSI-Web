import axios from 'axios'

const api = (() => {
    const BaseUrl = process.env.REACT_APP_API_ENDPOINT

    async function getArticle(page) {
        const url = BaseUrl + '/berita?limit=4&skip=4&page=' + page

        const response = await axios.get(url)

        const template = {
            total: 0,
            page: 0,
            berita: []
        }

        if (response.data.data.length === 0) {
            return template
        }

        return response.data.data[0]
    }

    async function getArticleByParams(page, params) {
        const url = BaseUrl + '/berita' + params + 'limit=4&skip=4&page=' + page

        const response = await axios.get(url)

        const template = {
            total: 0,
            page: 0,
            berita: []
        }

        if (response.data.data.length === 0) {
            return template
        }

        return response.data.data[0]
    }

    async function getDetailArticle(id) {
        const url = BaseUrl + '/berita/' + id

        const response = await axios.get(url)

        return response.data.data
    }

    async function getRecommendArticle(params) {
        const url = BaseUrl + '/berita' + params + 'limit=6&skip=6'

        const response = await axios.get(url)

        return response.data.data[0].berita
    }

    async function getEvent(page) {
        const url = BaseUrl + '/event?limit=4&skip=4&page=' + page

        const response = await axios.get(url)

        const template = {
            total: 0,
            page: 0,
            event: []
        }

        if (response.data.data.length === 0) {
            return template
        }

        return response.data.data[0]
    }

    async function getEventByParams(page, params) {
        const url = BaseUrl + '/event' + params + 'limit=4&skip=4&page=' + page

        const response = await axios.get(url)

        const template = {
            total: 0,
            page: 0,
            event: []
        }

        if (response.data.data.length === 0) {
            return template
        }

        return response.data.data[0]
    }

    async function getDetailEvent(id) {
        const url = BaseUrl + '/event/' + id

        const response = await axios.get(url)

        return response.data.data
    }

    async function getRecommendEvent(params) {
        const url = BaseUrl + '/event' + params + 'limit=6&skip=6'

        const response = await axios.get(url)

        return response.data.data[0].event
    }

    async function getPartner() {
        const url = BaseUrl + '/partner'

        const response = await axios.get(url)

        return response.data.data
    }

    async function getLatestEvent() {
        const url = BaseUrl + '/event?limit=3'

        const response = await axios.get(url)

        return response.data.data[0].event
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

    async function getContact() {
        const url = BaseUrl + '/link?kategori=contact'

        const response = await axios.get(url)

        return response.data.data
    }

    async function getSlider() {
        const url = BaseUrl + '/slider'

        const response = await axios.get(url)

        return response.data.data
    }

    async function getUpComing() {
        const url = BaseUrl + '/event?status=upcoming&limit=4'

        const response = await axios.get(url)

        return response.data.data[0].event
    }

    async function subscribe(email) {
        const url = BaseUrl + '/member'

        const data = {
            "email": email
        }

        const response = await axios.post(url, data)

        return response.data.data
    }

    async function getTautan() {
        const url = BaseUrl + '/link?kategori=tautan'

        const response = await axios.get(url)

        return response.data.data
    }

    async function getListKategori() {
        const url = BaseUrl + '/kategori_berita'

        const response = await axios.get(url)

        return response.data.data
    }

    async function getBidang() {
        const url = BaseUrl + '/bidang_dashboard'

        const response = await axios.get(url)

        return response.data.data
    }

    return {
        getArticle,
        getArticleByParams,
        getDetailArticle,
        getRecommendArticle,
        getEvent,
        getEventByParams,
        getDetailEvent,
        getRecommendEvent,
        getPartner,
        getHimpunan,
        getVisiMisi,
        getStruktur,
        getELayanan,
        getDBMateri,
        getFAQ,
        getFooter,
        getSocmed,
        getContact,
        getSlider,
        getLatestEvent,
        getUpComing,
        subscribe,
        getTautan,
        getListKategori,
        getBidang
    }
})()

export default api