import axios from 'axios';
import { Product } from '../interfaces';

export const getProduct = async( searchText: string  ) => {

  const resp = await axios.get<Product>(`https://api.mercadolibre.com/sites/MLA/search?q=:${ 'ipod' }`);
  const { data } = await resp;

  if ( data.paging.total!==0 ) {
      localStorage.removeItem('searchText');
      return data.results;
      
  } else {
      throw new Error('Error');
    
  }
}
