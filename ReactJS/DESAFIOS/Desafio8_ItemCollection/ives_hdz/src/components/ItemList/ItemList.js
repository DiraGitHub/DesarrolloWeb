import './ItemList.css'
import Item from '../Item/Item';


const ItemList = ({ productsList }) => {

    return (
        <div className='cardsContainer'>
            {productsList.map(product => {
                
                return (    
                    <Item key={product.id}  {...product} />
                );
            })}
        </div>
    );
}

export default ItemList;