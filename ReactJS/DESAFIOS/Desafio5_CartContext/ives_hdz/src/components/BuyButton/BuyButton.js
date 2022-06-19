import './BuyButton.css'
import Counter from '../Counter/Counter';
import { useState, useEffect } from 'react'

const BuyButton = ({onAddCart, onDelCart,onEmptyCart}) => {

    const [show, setShow] = useState(false);   

    return (
        <div className='buyButton'>
            {!show && <button className='button' onClick={() => setShow(!show)}>COMPRAR</button>}
            {show && <Counter initial={1} stock={10} min={1} onAdd={onAddCart} onDel={onDelCart} onEmpty={onEmptyCart} setShow={setShow}/>}
           
        </div>
    );
};

export default BuyButton;