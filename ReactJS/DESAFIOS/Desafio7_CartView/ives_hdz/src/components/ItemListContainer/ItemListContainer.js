
import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts, getProductsCategory } from '../../productsInfo.js'

import ItemList from '../ItemList/ItemList.js'

import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false)
    const { categoryName } = useParams();

    useEffect(() => {
        if (!categoryName) {
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

    let title = !categoryName ?  "LISTA DE PRODUCTOS" : categoryName;
    switch (title.toUpperCase()) {
        case 'SUPLEMENTOS':
            title = "SUPLEMENTOS";
            break;
        case 'VITAMINAS':
            title = "VITAMINAS";
            break;
        case 'INTESTINO':
            title = "SALUD INTESTINAL";
            break;
        case 'CABELLO':
            title = "CUIDADO DEL CABELLO";
            break;
        case 'PIEL':
            title = "CUIDADO DE LA PIEL";
            break;
    }


    if(!loading){
        <section className='centralProducts'>
            <h1>{title}</h1>
            <h2>Cargando...</h2>
        </section>
    }

    return (
        <section className='centralProducts'>
            <h1>{title}</h1>
            {products.length > 0 ? 
                <ItemList productsList={products}  />
                : <h2>No hay productos</h2>
            }
        </section>
    );
};

export default ItemListContainer;
