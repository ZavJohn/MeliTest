import React from 'react'
import { useLocation } from 'react-router-dom';


export const ProductPages = () => {
  
  const { state } = useLocation();
  const item = state.item;
  

  console.log ( item )
  
  
    return (
    <div className="search-result-container">
        <div className="card mb-3 cont-boost" >
        <div className="row g-0">
          <div className="col-md-4">
            <img src={item.thumbnail} className="img-fluid rounded-start" alt={item.thumbnail_id} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title ">{ item.title }</h5>
              <p className="card-text currSign">{ item.price }</p>
              
              <a href={ item.permalink } >
                  <button className="btn btn-primary btn-block" >
                    Comprar
                  </button>
              </a>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

