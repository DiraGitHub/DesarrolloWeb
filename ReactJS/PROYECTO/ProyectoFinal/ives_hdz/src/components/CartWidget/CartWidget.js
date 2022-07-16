import './CartWidget.css'
import { useContext } from 'react';
import {CartContext} from '../../context/CartContext';

const CartWidget = () =>{

    const {totalProds} = useContext(CartContext); 

    return(
        <div className='cartWidget'>
            <img src='./imgs/emptyCart.png' alt='CARRITO' className='cart'/>
            <span>{totalProds}</span>
        </div>
    );
}

export default CartWidget;