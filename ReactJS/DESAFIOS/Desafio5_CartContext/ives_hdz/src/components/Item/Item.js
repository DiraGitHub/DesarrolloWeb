import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import BuyButton from '../BuyButton/BuyButton';
import { CartContext } from '../../context/CartContext';


const Item = ({ idProduct, name, image, precio, description }) => {

    const { isInCart, addProd } = useContext(CartContext);
    // const [isAdded, setIsAdded] = useState(0);


    const handleAdd = (quantity) => {
        // console.log(`Se agregaron ${quantity} ${name}`)
        addProd([{ idProduct, name, image, precio, quantity }]);
        // setIsAdded(quantity);
    };

    const handleDel = (quantity) => {
        console.log(`Se quitaron ${quantity} ${name}`)
        // setCart([...cart,{idProduct,name,image,precio,quantity}]);
    };

    const handleEmpty = (quantity) => {
        console.log(`Se eliminaron todos los ${quantity}  ${name}`)
        // setCart([...cart,{idProduct,name,image,precio,quantity}]);
    };

    const isAdded = isInCart(idProduct);

    return (
        <div id={idProduct} className='myCard adminView'>
            <Link to={`/detail/${idProduct}`}>
                <div className='infoCard'>
                    <img src={`../imgs/${image}`} className='imgCard' alt={name}></img>
                    <div className='textCard'>
                        <h3>{name}</h3>
                        <p>{description}</p>
                    </div>

                </div>
            </Link>
            {!isAdded ? <BuyButton onAddCart={handleAdd} onDelCart={handleDel} onEmptyCart={handleEmpty} /> : <Link to='/cart'><p className='finshBuy'>Terminar compra</p></Link>}
        </div>
    );

}

export default Item;