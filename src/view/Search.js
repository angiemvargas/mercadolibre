import './Search.css'
import React from 'react'
import ProductContext from '../context/Product'

const Search = () =>{

    const productContext = React.useContext(ProductContext)
    const [objeto, setObjeto] = React.useState('');

    const handleObjetoChange = event =>{
        setObjeto(event.target.value)
        productContext.actions.changeObjeto(event.target.value)
    }

    const searchProduct = () => {
      productContext.actions.callService(objeto)

    }

    return (
        <div className="container is-fluid buscador">
          <div className="field has-addons">
  
            <div className="control">
              <input
                className="input input__buscador"
                type="text"
                value={objeto}
                placeholder="Buscar.."
                onChange={handleObjetoChange}
              />
            </div>
          </div>
  
              <button
                type="submit"
                className="button is-info"
                onClick={searchProduct}
              >
                Consultar
              </button>
          
      </div>
    );
  }
  
  export default Search;