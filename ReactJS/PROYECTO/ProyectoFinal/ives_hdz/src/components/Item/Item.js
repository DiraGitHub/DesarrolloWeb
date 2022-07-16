import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import BuyButton from '../BuyButton/BuyButton';
import { CartContext } from '../../context/CartContext';


const Item = ({ id, name, image, precio, description }) => {
    

    const { isInCart, addProd } = useContext(CartContext);
    // const [isAdded, setIsAdded] = useState(0);
    

    const handleAdd = (quantity) => {
        let totAmount = 0.00;
        // console.log(`Se agregaron ${quantity} ${name}`)
        // console.log('precio = ',parseFloat(precio));
        // console.log('quantity = ',parseFloat(quantity));
        totAmount = parseFloat(precio) * parseFloat(quantity);
        // console.log('totAmount = ',totAmount.toFixed(2));
        addProd([{ id, name, image, precio, quantity,totAmount }]);
        // setIsAdded(quantity);
    };

    const handleDel = (quantity) => {
        // console.log(`Se quitaron ${quantity} ${name}`)
        // setCart([...cart,{id,name,image,precio,quantity}]);
    };

    const handleEmpty = (quantity) => {
        // console.log(`Se eliminaron todos los ${quantity}  ${name}`)
        // setCart([...cart,{id,name,image,precio,quantity}]);
    };

    const isAdded = isInCart(id);

    return (
        <div id={id} className='myCard adminView'>
            <Link to={`/detail/${id}`}>
                <div className='infoCard'>
                    <img src={`../imgs/${image}`} className='imgCard' alt={name}></img>
                    <div className='textCard'>
                        <h3>{name}</h3>
                        <p>{description}</p>
                        <p>${precio}.00</p>
                    </div>

                </div>
            </Link>
            {!isAdded ? <BuyButton onAddCart={handleAdd} onDelCart={handleDel} onEmptyCart={handleEmpty} /> : <Link to='/cart'><p className='finshBuy'>Terminar compra</p></Link>}
        </div>
    );

}

export default Item;