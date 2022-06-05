
import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts } from '../../productsInfo.js'

import ItemList from '../ItemList/ItemList.js'


const ItemListContainer = (props) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
    //    console.log(getProducts());
        getProducts().then(res => {
            setProducts(res);
            // console.log(res)
        })
    }, [])

    console.log(products)

    return (
        <div>
            <h1>{props.title}</h1>
            {/* <ItemList products={products} />  */}
        </div>
    )
}

export default ItemListContainer
