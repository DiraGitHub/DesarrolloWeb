import CartItem from "../CartItem/CartItem";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartList = ({ productsList, goOrder }) => {

    const { totalAmount, totalProds, emptyCart } = useContext(CartContext);

    return (
        <>
            <div>
                <button className="button emptyCart" onClick={() => emptyCart()}>VACIAR CARRITO</button>
            </div>
            <div className="cartContainer">
                <div className="cartListContainer">
                    <div className="cartColums">
                        <span><h2>PRODUCTO</h2></span>
                        <span><h2>CANTIDAD</h2></span>
                        <span><h2>COSTO </h2></span>
                        <span><h2>SUBTOTAL</h2></span>
                    </div>

                    {productsList.map(product => {
                        return (
                            <CartItem key={product.id}  {...product} />
                        );
                    })}
                </div>
                <div className="resumeCartContainer">
                    <p>Numero productos: {totalProds}</p>
                    <p>Monto total: ${totalAmount}.00</p>
                    <button className="button goToPay" onClick={goOrder}>GENERAR ORDEN</button>
                </div>
            </div>
        </>
    );
}

export default CartList;