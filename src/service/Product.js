 const getNameSeller = async (id) => {
    const url = `https://api.mercadolibre.com/users/${id}`
    const res = await fetch(url)
    const {nickname} = await res.json()

    return nickname
}

 const getBigImage = async (id) => {
    const url = `https://api.mercadolibre.com/items/${id}`
    const res = await fetch(url)
    const {pictures} = await res.json()

    return pictures[0].url
}

 const getListProduct = async (object) => {
    const url = `https://api.mercadolibre.com/sites/MCO/search?q=${object}`
    const res = await fetch(url)
    const {results} = await res.json()

    return results
} 

export default { getBigImage, getListProduct, getNameSeller}
