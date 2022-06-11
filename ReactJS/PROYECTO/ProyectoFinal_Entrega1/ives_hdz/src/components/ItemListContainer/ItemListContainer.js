
import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts,getProductsCategory } from '../../productsInfo.js'

import ItemList from '../ItemList/ItemList.js'

import {useParams} from 'react-router-dom'

const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])

    const {categoryName} = useParams();
    

    useEffect(() => {
        if(!categoryName){
            getProducts().then(res => {
                setProducts(res);
            });
        }
        else {
            getProductsCategory(categoryName).then(res => {
                setProducts(res);
            });
        }
    }, [categoryName]);

    console.log(products);

    return (
        <section className='centralProducts'>
            <h1>{props.title}</h1>
            <ItemList productsList={products} /> 
        </section>
    );
};

export default ItemListContainer;
