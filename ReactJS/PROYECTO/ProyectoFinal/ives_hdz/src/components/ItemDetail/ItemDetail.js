import './ItemDetail.css'
import { useContext } from 'react';
import { useState, useEffect } from 'react'
import BuyButton from '../BuyButton/BuyButton';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';


const ItemDetail = ({ id, name, image, precio, description }) => {

    // const [isAdded,setIsAdded] = useState(0);
    const {isInCart, addProd} = useContext(CartContext);


    const handleAdd = (quantity) =>{
        let totAmount = 0.00;
        totAmount = parseFloat(precio) * parseFloat(quantity);
        // console.log(`Se agregaron ${quantity} ${name}`);
        addProd([{ id, name, image, precio, quantity,totAmount }]);
        // setIsAdded(quantity);
    };

    const handleDel = (quantity) =>{
        console.log(`Se quitaron ${quantity} ${name}`)
        // delProd([{id,name,image,precio,quantity}]);
    };

    const handleEmpty = (quantity) => {
        console.log(`Se eliminaron todos los ${quantity} ${name}`)
        // emptyCart([{id,name,image,precio,quantity}]);
    };

    const isAdded = isInCart(id);

    return (
        <div className='centralInfo'>
            <div className='title'>
                <h1>{name}</h1>
            </div>

            <div className='infoDetail'>
                <img src={`../imgs/${image}`} className='imgCard' alt={name}></img>
                <div className='textCard'>
                    <p>{description}</p>
                    <p className='bold'>${precio}.00</p>
                    {!isAdded ? <BuyButton onAddCart={handleAdd} onDelCart={handleDel} onEmptyCart={handleEmpty}/> :        <Link to='/cart'>
                        <p className='finshBuy'>Terminar compra</p>
                    </Link> }
                </div>

            </div>
        </div>
    );
}


export default ItemDetail;