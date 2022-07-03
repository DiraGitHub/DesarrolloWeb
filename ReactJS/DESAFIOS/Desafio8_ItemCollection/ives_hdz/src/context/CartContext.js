import { useState, useEffect, createContext } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [totalProds, setTotalProds] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0.00);
    // const [totalItems, setTotalItems] = useState(0);

    useEffect(()=>{
        let totalProds = 0;
        let totalAmount = 0.00;

        cart.forEach(prod => {
            totalProds += prod.quantity;
            totalAmount += prod.totAmount;
        });

        setTotalProds(totalProds);
        setTotalAmount(totalAmount);
    },[cart]);

    const addProd = (newProduct) => {
        if (!isInCart(newProduct[0].id)) {
            console.log(`Se agregaron ${newProduct[0].quantity} ${newProduct[0].name}`)
            setCart([...cart, newProduct[0]]);
        }
    }

    const removeProd = (id) => {
        const newCart = cart.filter(prod => prod.id !== id);

        setCart(newCart);
    }

    const emptyCart = () => {    
        setCart([]);
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id);
    }

    console.log(cart);

    return (
        <CartContext.Provider value={{ 
            cart,
            totalProds,
            totalAmount,
            addProd,
            removeProd,
            isInCart,
            emptyCart
        }}>
            {children}

        </CartContext.Provider>
    );
}

export default CartProvider;