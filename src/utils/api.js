import axios from 'axios'

const api = (() => {
    const BaseUrl = "https://himsi-website-be.vercel.app"

    async function getArticle() {
        const url = BaseUrl + '/berita'

        const response = await axios.get(url)

        return response.data.data
    }

    async function getDetailArticle(id) {
        const url = BaseUrl + '/berita/' + id

        const response = await axios.get(url)

        return response.data.data
    }

    return {
        getArticle,
        getDetailArticle
    }
})()

export default api