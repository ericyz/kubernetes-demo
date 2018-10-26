const axios = require('axios')

export function get(url){
    return axios.get(`/api/home/`).then(res=>res.data)
}