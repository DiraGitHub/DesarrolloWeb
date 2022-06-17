import './Counter.css'
import { useState,useEffect } from 'react'

const Counter = ({ initial, stock, min , onAdd}) => {
    const [count, setCount] = useState(initial);

    console.log(onAdd);

    useEffect(()=>{
        onAdd(initial);
    },[]);

    const decrement = () => {
        onAdd(count-1);
        (count > min && true) && setCount(count - 1);
        
    };

    const increment = () => {
        onAdd(count+1);
        (count < stock && true) && setCount(count + 1);
        
    };

    return (
        <div>
            <button className='counterButton' onClick={decrement}>-</button>
            <span>{count}</span>
            <button className='counterButton' onClick={increment}>+</button>
        </div>
    );
};

export default Counter;