import './CartWidget.css'

const CartWidget = () =>{
    return(
        <div className='cartWidget'>
            <img src='./imgs/emptyCart.png' alt='CARRITO' className='cart'/>
            <span>0</span>
        </div>
    );
}

export default CartWidget;