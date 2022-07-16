import CartItem from "../CartItem/CartItem";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartList = ({ productsList }) => {

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
                        <span><h2>TOTAL</h2></span>
                    </div>

                    {productsList.map(product => {
                        return (
                            <CartItem key={product.idProduct}  {...product} />
                        );
                    })}
                </div>
                <div className="resumeCartContainer">
                    <p>Numero productos: {totalProds}</p>
                    <p>Monto total: ${totalAmount}.00</p>
                    <button className="button goToPay">PAGAR</button>
                </div>
            </div>
        </>
    );
}

export default CartList;