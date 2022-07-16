import { useContext } from 'react';
import {CartContext} from '../../context/CartContext';

const DelButton = ({idProduct}) => {

    const {removeProd} = useContext(CartContext);

    return (
        <div className='delButton'>
             <button className='button remove' onClick={() => removeProd(idProduct)}>Eliminar</button>
        </div>
    );
};

export default DelButton;