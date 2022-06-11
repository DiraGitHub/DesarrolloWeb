import './ItemDetail.css'
import { useState, useEffect } from 'react'

const ItemDetail = ({idProd, name,image, precio,description}) =>{
    

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
                    <div className='buttonCard'>
                    <button className='button'>COMPRAR</button>
                </div>
                </div>
                
            </div>
        </div>
    );
}


export default ItemDetail;