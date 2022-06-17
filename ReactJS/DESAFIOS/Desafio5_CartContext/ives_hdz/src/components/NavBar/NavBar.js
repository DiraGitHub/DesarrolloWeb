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
                    <Link to='/category/suplementos' className='navLink'>
                        Suplementos
                    </Link>
                    <Link to='/category/vitaminas' className='navLink'>
                        Vitáminas
                    </Link>
                    <Link to='/category/intestino' className='navLink'>
                         Salud Intestinal
                    </Link>
                    <Link to='/category/cabello' className='navLink'>
                        Cuidado del Cabello
                    </Link>
                    <Link to='/category/piel' className='navLink'>
                        Cuidado de la Piel
                    </Link>
                </div>
                <CartWidget />
            </div>
        
        </nav>
    )
}

export default NavBar;