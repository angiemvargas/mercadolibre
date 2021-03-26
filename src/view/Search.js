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

    const searchProduct = e => {
      e.preventDefault()
      productContext.actions.callService(objeto)
    }

    return (
      <form onSubmit={searchProduct}>
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
              >
                Consultar
              </button>
          
      </div>
      </form>
    );
  }
  
  export default Search;