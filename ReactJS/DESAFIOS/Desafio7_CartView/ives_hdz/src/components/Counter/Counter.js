import './Counter.css'
import { useState,useEffect } from 'react'

const Counter = ({ initial, stock, min , onAdd,onDel,onEmpty,setShow}) => {
    const [count, setCount] = useState(initial);

    // useEffect(()=>{
    //     onAdd(initial);
    // },[]);

    const decrement = () => {
        
       if (count > min ) {
            // onDel(-1);
            setCount(count - 1);
        }
    };

    const increment = () => {
        
        if (count < stock )  {
            // onAdd(1);
            setCount(count + 1);
        }
        
    };

    // const empty = ()=>{
    //     onEmpty(count);
    //     setShow(false);
    // }

    return (
        <div>
            <button className='counterButton' onClick={decrement}>-</button>
            <span>{count}</span>
            <button className='counterButton' onClick={increment}>+</button>
            {/* <p className='counterDel' onClick={empty} >Eliminar</p> */}
            <div>
            <button className='button' onClick={()=>{onAdd(count)}}>Agregar al Carrito</button>
            </div>
        </div>
    );
};

export default Counter;