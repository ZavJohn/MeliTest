import React from 'react';
import { getProduct } from '../api/getProduct';
import { Result } from '../interfaces/product';

export const ProductList = async() => {

  const searchText:string | null = localStorage.getItem('searchText');
  
  const products[]:Result = await getProduct(searchText)

  console.log('Entro aqui', products);
      
  return (
    <>
        {
          products.map( ( item:Result ) => (
            <li key={ item.id }>
                <img src={ item.pictures[0].url } alt={ item.pictures[0].id } />
                <h3>{ item.title }</h3>
                <p>{ item.price }</p>
            </li>
            ))
        }
      </>
  )
}
