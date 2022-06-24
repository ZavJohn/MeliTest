import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProduct } from '../api/getProduct';

export const ProductList = () => {

  const params = useParams();

  const searchText = params.searchText;
  
  const { data, isLoading, hasError } =  getProduct(searchText);
  
  if ( hasError ){
    return ( 
      <div className="search-result-container ">
        <div className="alert alert-dark" role="alert">
            No hay publicaciones que coincidan con tu búsqueda.
        </div>
      </div>
    )
  } else {
    return (
      <>
          
          {
            isLoading 
                ?(
                    <div className="">
                        Loading...
                    </div>
                  )
                :(                

                  <div className="search-result-container ">
                      <ul className="">
                      {
                         data.map ( item => (
                          <li key={item.id}>
                            <Link 
                              to={`/items/${item.id}`}
                              state={ {item} }
                            >
                              <div className="card mb-3">
                                <div className="row g-0">
                                  <div className="col-md-4">
                                    <img src={item.thumbnail} className="img-fluid rounded-start" alt={item.thumbnail_id} />
                                  </div>
                                  <div className="col-md-8">
                                    <div className="card-body">
                                      <h5 className="card-title currSign">{ item.price }</h5>
                                      <p className="card-text">{ item.title }</p>
                                      <p className="card-text"><small className="text-muted">{ item.address.city_name }</small></p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </li>
                        ))
                      }
                      </ul>
                  </div>
                  )
          } 
        </>
    )
  }
}
