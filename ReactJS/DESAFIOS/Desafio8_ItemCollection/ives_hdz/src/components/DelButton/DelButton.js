import { useContext } from 'react';
import {CartContext} from '../../context/CartContext';

const DelButton = ({id}) => {

    const {removeProd} = useContext(CartContext);

    return (
        <div className='delButton'>
             <button className='button remove' onClick={() => removeProd(id)}>Eliminar</button>
        </div>
    );
};

export default DelButton;