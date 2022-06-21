import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from './hooks/useForm';


export const Navbar = () => {

    const navigate = useNavigate();
    
    const { searchText, onInputChange } = useForm({
        searchText: ''
    })

    const onSearchSubmit = (event) => {
        
        event.preventDefault();
        localStorage.setItem('searchText', searchText);
        navigate(`/search/`);  
    }

    
    useEffect( () => {
       
    },[searchText]);
    
    
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
                        value={ searchText } 
                        onChange={ (event) => onInputChange(event) }
                    />
                    
                    <button 
                        type="submit"
                        className="submit" 
                        onClick={ onSearchSubmit }
                    >
                        <img src="/src/assets/images/ic_Search.png" alt="ic_Search" />
                    </button>
                </form>
            </div>
    
       </nav>
    )
}