
import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts } from '../../productsInfo.js'

import ItemList from '../ItemList/ItemList.js'


const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(res => {
            setProducts(res);
        })
    }, []);

    console.log(products);

    return (
        <section className='centralProducts'>
            <h1>{props.title}</h1>
            <ItemList productsList={products} /> 

            </section>
    );
};

export default ItemListContainer;
