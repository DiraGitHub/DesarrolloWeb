import './Cart.css'
import CartList from '../CartList/CartList';
import { useContext, useState } from 'react';
import {CartContext} from '../../context/CartContext';
import { Link } from 'react-router-dom';

import {addDoc, collection} from 'firebase/firestore'

import {db} from '../../services/firebase/index'

const Cart = () =>{

    const {cart, totalAmount} = useContext(CartContext); 
    const [loading,setLoading] = useState(false);

    const handleCreateOrder = () => {
        setLoading(true);
        console.log('crear orden');
        const objOrder = {
            buyer:{
                name:'Dira',
                email:'user@gmail.com',
                phone: '5512345678',
                addr: 'Holooo 555'
            },
            items: cart,
            tottal: totalAmount
        };

        console.log(objOrder);

        const collectionRef = collection(db,'orders');

        addDoc(collectionRef, objOrder)
        .then(({id})=>{
            console.log(id);   
        });
    };


    if(loading){
        <section className='cartProducts'>
            <h1 className='cartTitle'>Generando la orden</h1>
        </section>
    }

    return (
        <section className='cartProducts'>
            <h1 className='cartTitle'>CART VIEW</h1>
            {cart.length > 0 ? 
                <CartList productsList={cart} goOrder={handleCreateOrder} />
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