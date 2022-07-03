import './Cart.css'
import CartList from '../CartList/CartList';
import { useContext } from 'react';
import {CartContext} from '../../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () =>{

    const {cart} = useContext(CartContext); 

    return (
        <section className='cartProducts'>
            <h1 className='cartTitle'>CART VIEW</h1>
            {cart.length > 0 ? 
                <CartList productsList={cart}  />
                : <div>
                    <h2 className='cartTitle'>El carrito esta vacio.</h2>
                    <Link to='/' className='goToBuy'>
                        SEGUIR COMPRANDO
                    </Link>
                </div>
            }
        </section>
    );
}

export default Cart;