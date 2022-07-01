import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


export const Navbar = () => {

    const navigate = useNavigate();
    
    const [ inputValue, setInputValue ] = useState('');

    
    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    };

    const onSearchSubmit = (event) => {      
        event.preventDefault(); 
        navigate(`/items:${inputValue}`);
    } 
    
    return (
        
        <nav className="nav-header">
            
            <Link 
                className="img-header" 
                to="/"
            >
                <img src="/src/assets/images/Logo_ML.png" alt="Logo_ML" className="nav-logo" />
            </Link>

            <div>
                <form onSubmit={ onSearchSubmit }>
                    <input 
                        type="text" 
                        className="input-search" 
                        name="searchText" 
                        placeholder="Nunca dejes de buscar" 
                        autoCorrect="off" 
                        autoComplete="off" 
                        value={ inputValue } 
                        onChange={ (e) => onInputChange(e) }
                    />
                    
                    <button 
                        type="submit"
                        className="btn submit" 
                        onClick={ onSearchSubmit }
                    >
                        <img src="/src/assets/images/ic_Search.png" alt="ic_Search" />
                    </button>
                </form>
            </div>
    
       </nav>
    )
}