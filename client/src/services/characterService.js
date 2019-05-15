import axios from 'axios'

export default {
    getAll() {
        return axios.get('/api/characters/').then( response => {
            return response.data
        })
    }
}