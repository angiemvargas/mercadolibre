import './Search.css'
import React from 'react'

const Search = () =>{

    const [objeto, setObjeto] = React.useState('');

    const handleObjetoChange = event =>{
        setObjeto(event.target.value)
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
  
          <div className="control button__buscador">
              <button
                className="button is-info"
              >
                Consultar
              </button>
          </div>
      </div>
    );
  }
  
  export default Search;