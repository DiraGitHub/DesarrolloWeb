
//import React from 'react'  6.9k(gzipped: 2.7k)
import React, {useState} from 'react'

//import {useStage, useEffect} from 'react' 4.2k (gzipped: 1.8k)
import {useStage, useEffect} from 'react'
import Button from '../Button/Button'


const Counter = ({initial, stock, title}) => {
    const [count,setCount] = useStage(initial);
    const [result,setResult] = useStage(0);
    
    useEffect(()=>{
        console.log(`El componente fue montado`);
        return()=>{
            console.log(`El componente va a desmontarse`);
        }
    },[]);

    useEffect(()=>{
        console.log(`Se ejeuta cada render y cuando `);
    },[count]);

    useEffect(()=>{
        setResult(count*2);
    },[count]);

    const decrement = () =>{
        setCount(prev => prev - 1);
    }

    const increment = () =>{
        setCount(prev => prev + 1);
    }

    const reset = () =>{
        setCount(initial);
    }
    
    console.log(`Antes del montaje y en cada render (actualizacion)`);
    return(
        <div>
            <h2>{result}</h2>
            <button onClick={decrement}>-</button>
            <h2>{count}</h2>
            <button onClick={increment}>+</button>
            <Button handleClick={reset}>Reset</Button>

        </div>
    );

}

export default Counter;