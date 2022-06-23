import axios from 'Axios';
import { useEffect, useState } from 'react';
import { Product } from '../interfaces';

export const getProduct = ( searchText: string  ) => {

  const url:string = `https://api.mercadolibre.com/sites/MLA/search?q=:${ searchText }`;
  
  const [state, setState] = useState({
      data : null,
      isLoading : true,
      hasError: false,
  })
  
  const getFetch = async() => {
    
    setState({
      ...state,
      isLoading: true,
    })
    
    const resp = await axios.get( url );
    const product: Product = resp.data;

    if ( product.paging.total === 0 ){
      setState({ 
        data: null,
        isLoading: false,
        hasError: true,
       }); 

    } else {
      
      setState({ 
        data: product.results,
        isLoading: false,
        hasError: false,
       });
    
    }    
  }

  useEffect(() => {

      getFetch();
      localStorage.removeItem('searchText');

  }, [url]);

  return {
            data:       state.data,
            isLoading:  state.isLoading,
            hasError:   state.hasError,
          };
}
