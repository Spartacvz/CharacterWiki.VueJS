import axios from 'axios'

export default {
    getOne(charName) {
        return axios.get('/api/characters/' + charName).then( response => {
            return response.data
        })
    },
    getAll() {
        return axios.get('/api/characters/').then( response => {
            return response.data
        })
    }
}