import axios from 'axios'

const api = (() => {
    const BaseUrl = "URL DARI API"

    async function getData() {
        const url = BaseUrl + '/endpoint'

        const response = await axios.get(url)

        return response
    }

    return {
        getData
    }
})()

export default api