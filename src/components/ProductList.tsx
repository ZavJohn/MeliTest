import React from 'react';
import { getProduct } from '../api/getProduct';

export const ProductList = () => {

  const searchText:string = localStorage.getItem('searchText');
  
  const { data, isLoading, hasError } =  getProduct('ipod');
  
  console.log(data);
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
                        <li key={item.id} className="div-result-list">
                          <img src={item.thumbnail} alt={item.thumbnail_id} className="img-search-result" />
                          <a className="result-list-style currSign">{ item.price }</a>
                          <p className="description-search">{ item.title }</p>
                          <a className="description-search-city">{ item.address.city_name }</a>

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
