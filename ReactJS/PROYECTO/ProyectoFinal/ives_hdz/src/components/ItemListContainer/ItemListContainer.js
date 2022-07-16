
import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList.js'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { dbIves } from '../../services/firebase'

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryName } = useParams();

    useEffect(() => {

        const collectionRef = categoryName ? query(collection(dbIves,'products'),where('categoria','==',categoryName)) : (collection(dbIves,'products'));

        getDocs(collectionRef)
            .then( res => {
                
                const productsFormat = res.docs.map(doc =>{
                    return {id:doc.id, ...doc.data()}
                });
                setProducts(productsFormat);
            }).catch(error => {
                console.log(error);
            }).finally(()=>{
                setLoading(false);
            });
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


    if(loading){
        return (
        <section className='centralProducts'>
            <h1>{title}</h1>
            <h2>Cargando...</h2>
        </section>
        );
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
