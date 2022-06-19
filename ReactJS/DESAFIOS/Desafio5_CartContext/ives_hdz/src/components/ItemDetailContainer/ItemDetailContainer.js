
import { useState, useEffect } from 'react'
import { getProductById } from '../../productsInfo';

import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';


import './ItemDetailContainer.css'

const ItemDetailContainer = () =>{
    const [product,setProduct] = useState();

    const params = useParams();

    useEffect (()=>{
        getProductById(params.productID)
        .then(resp =>{
            // console.log(resp);
            setProduct(resp);
        });
    },[]);

    return (
        <>
            <h1>Detalle del producto</h1>
            <ItemDetail {...product} />
        </>
    );
}


export default ItemDetailContainer;