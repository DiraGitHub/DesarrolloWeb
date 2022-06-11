import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget";
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className='navBar'>
            <div>
                <Link to='/'>
                    <img src='./imgs/logo.jpeg' alt='IVES PHF' className='logo' />
                </Link>
            </div>
            <div className='navOptions'>
                <div>
                    <Link to='/category/suplementos'>
                        <span className='navLink'>Suplementos</span>
                    </Link>
                    <Link to='/category/vitaminas'>
                        <span className='navLink'>Vitáminas</span>
                    </Link>
                    <Link to='/category/intestino'>
                        <span className='navLink'>Salud Intestinal</span>
                    </Link>
                    <Link to='/category/cabello'>
                        <span className='navLink'>Cuidado del Cabello</span>
                    </Link>
                    <Link to='/category/piel'>
                        <span className='navLink'>Cuidado de la Piel</span>
                    </Link>
                </div>
                <CartWidget />
            </div>
        
        </nav>
    )
}

export default NavBar;