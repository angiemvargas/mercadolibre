import axios from 'axios'

const getListProduct = object => {
    let list = []
    axios.get('https://api.mercadolibre.com/sites/MCO/search', {
        params:{
            q: object
        }
    })
    .then(response => list.push(response.data.results))

    return list
}

export default {getListProduct};