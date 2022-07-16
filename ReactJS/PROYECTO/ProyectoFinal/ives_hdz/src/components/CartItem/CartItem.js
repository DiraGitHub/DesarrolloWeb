
import DelButton from '../DelButton/DelButton';

const CartItem = ({ id, name, image, precio, quantity, totAmount }) => {

    return (
        <div id={id} className='cartItem'>
            <div className='infoCart'>
                <img src={`../imgs/${image}`} className='imgCart' alt={name}></img>
                <span><h3>{name}</h3></span>
                <span>{quantity}</span>
                <span>${precio}.00</span>
                <span>${totAmount}.00</span>
            </div>
            <DelButton id={id} />
        </div>
    );

}

export default CartItem;