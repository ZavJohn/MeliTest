import React from 'react';
import { getProduct } from '../api/getProduct';

export const ProductList = () => {

  const searchText:string = localStorage.getItem('searchText');
  
  const { data, isLoading, hasError } =  getProduct('ipod');
  
  
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
                <ul>
                {
                  data.map ( item => (
                    <li key={item.id}>
                      { item.name }

                    </li>  
                  ))
                }
                </ul>
                )
        } 
      </>
  )
}
