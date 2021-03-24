//import axios from 'axios'

/*async function getListProduct(object)  {
    const service = await axios.get(`https://api.mercadolibre.com/sites/MCO/search?q=${object}`)
    return service.data.results
}*/

/*const getListProduct = () => {

}

export default {getListProduct};*/

const getNameSeller = async (id) => {
    const url = `https://api.mercadolibre.com/users/${id}`
    const res = await fetch(url)
    const {nickname} = await res.json()

    return nickname
}

/*const getBigImage = async (id) => {
    const url = `https://api.mercadolibre.com/users/${id}`
    const res = await fetch(url)
    const {nickname} = await res.json()

    return nickname
}*/

export const getListProduct = async (object) => {
    const url = `https://api.mercadolibre.com/sites/MCO/search?q=${object}`
    const res = await fetch(url)
    const {results} = await res.json()

    const listProduct = results.map(data => {
        return {
            id: data.id,
            nombre: data.title,
            imagenPequeña: data.thumbnail,
            precio: data.price,
            imagenGrande: data.thumbnail_id,
            vendedor: getNameSeller(data.seller.id).then(data => data)
        }
    })

    return listProduct
} 
