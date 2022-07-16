
import DelButton from '../DelButton/DelButton';

const CartItem = ({ idProduct, name, image, precio, quantity, totAmount }) => {

    return (
        <div id={idProduct} className='cartItem'>
            <div className='infoCart'>
                <img src={`../imgs/${image}`} className='imgCart' alt={name}></img>
                <span><h3>{name}</h3></span>
                <span>{quantity}</span>
                <span>${precio}</span>
                <span>${totAmount}.00</span>
            </div>
            <DelButton idProduct={idProduct} />
        </div>
    );

}

export default CartItem;