import './ItemDetail.css'
import { useState, useEffect } from 'react'
import BuyButton from '../BuyButton/BuyButton';

const ItemDetail = ({ idProd, name, image, precio, description }) => {
    const handleAdd = (quantity) =>{
        console.log(`Se agregaron ${quantity} ${name}`)
    };

    return (
        <div className='centralInfo'>
            <div className='title'>
                <h1>{name}</h1>
            </div>

            <div className='infoDetail'>
                <img src={`../imgs/${image}`} className='imgCard' alt={name}></img>
                <div className='textCard'>
                    <p>{description}</p>
                    <p className='bold'>{precio}</p>
                    <BuyButton onAddCart={handleAdd}/> 
                </div>

            </div>
        </div>
    );
}


export default ItemDetail;