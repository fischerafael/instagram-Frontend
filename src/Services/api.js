import axios from 'axios'

const api = axios.create({
    baseURL: 'https://instagram-clone-design-fischer.herokuapp.com'
})

export default api