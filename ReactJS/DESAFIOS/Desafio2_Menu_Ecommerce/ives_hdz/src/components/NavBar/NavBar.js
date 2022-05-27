import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav className='navBar'>
            <div>
                <a href='#'>
                    <img src='./imgs/logo.jpeg' alt='IVES PHF' className='logo'></img>
                </a>
            </div>
            <div className='navOptions'>
                <div>
                    <a href='#' className='navLink'>Productos</a>
                    <a href='#' className='navLink'>Servicios</a>
                    <a href='#' className='navLink'>Nosotros</a>
                    <a href='#' className='navLink'>Registro</a>
                </div>
                <CartWidget />
            </div>
        
        </nav>
    )
}

export default NavBar;