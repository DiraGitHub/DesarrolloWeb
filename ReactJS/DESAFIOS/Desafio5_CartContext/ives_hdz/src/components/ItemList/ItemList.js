import './ItemList.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import BuyButton from '../BuyButton/BuyButton';


const ItemList = ({ productsList }) => {

    const [show, setShow] = useState(false);

    return (
        <div className='cardsContainer'>
            {productsList.map(product => {
                return (
                    <div key={product.idProduct} className='myCard adminView'>
                        <Link to={`/detail/${product.idProduct}`}>
                            <div className='infoCard'>
                                <img src={`../imgs/${product.image}`} className='imgCard' alt={product.name}></img>
                                <div className='textCard'>
                                    <h3>{product.name}</h3>
                                    <p>{product.description}</p>
                                </div>

                            </div>
                        </Link>
                        <BuyButton />
                    </div>
                );
            })}
        </div>
    );
}

export default ItemList;