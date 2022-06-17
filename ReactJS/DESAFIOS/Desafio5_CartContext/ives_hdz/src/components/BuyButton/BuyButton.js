import './BuyButton.css'
import Counter from '../Counter/Counter';
import { useState, useEffect } from 'react'

const BuyButton = (onAddCart) => {

    const [show, setShow] = useState(false);

    console.log(onAddCart);

    // const handleAdd = (quantity) => {
    //     console.log(quantity);
    // };

    return (
        <div className='buyButton'>
            {!show && <button className='button' onClick={() => setShow(!show)}>Agregar al carro </button>}
            {show && <Counter initial={1} stock={20} min={1} onAdd={onAddCart}/>}
            {show && <p className='counterDel' onClick={() => setShow(!show)} >Eliminar</p>}
        </div>
    );
};

export default BuyButton;