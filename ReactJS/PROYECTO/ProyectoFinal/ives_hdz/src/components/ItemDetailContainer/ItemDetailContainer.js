
import './ItemDetailContainer.css'

import { useState, useEffect } from 'react'

import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

import { getDoc, doc } from 'firebase/firestore'
import { dbIves } from '../../services/firebase'



const ItemDetailContainer = () =>{
    const [product,setProduct] = useState();
    const [loading, setLoading] = useState(true);

    const {productID} = useParams();

    useEffect (()=>{

        const docRef = doc (dbIves,'products',productID);

        getDoc(docRef)
            .then(res =>{
                const productFormat = {id:res.id,...res.data()};
                setProduct(productFormat);
            }).finally(()=>{
                setLoading(false);
            });
        // getProductById(params.productID)
        // .then(resp =>{
        //     // console.log(resp);
        //     setProduct(resp);
        // });
    },[]);


    if(loading){
        return (
        <section className='centralProducts'>
            <h1>Detalle del producto</h1>
            <h2>Cargando...</h2>
        </section>
        );
    }

    return (
        <>
            <h1>Detalle del producto</h1>
            <ItemDetail {...product} />
        </>
    );
}


export default ItemDetailContainer;