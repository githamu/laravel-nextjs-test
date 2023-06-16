import Axios from 'axios'

const axios = Axios.create({
    baseURL: `${import.meta.env.NEXT_PUBLIC_BACKEND_URL}/api`,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
})

export default axios
