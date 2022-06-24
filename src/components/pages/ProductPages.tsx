import React from 'react'
import { useLocation } from 'react-router-dom'

export const ProductPages = () => {
  
  const location = useLocation();

  console.log('usando hook location',location.state);
  
    return (
    <div>
      HOla
    </div>
  )
}

