import './ItemList.css'


const ItemList = (productsList) => {
    return (
        <section className='centralProducts'>
            {productsList.map(product => {
                return (
                    <div key={product.idProduct} className='myCard adminView'>
                        <img src='./imgs/' className='imgCard'></img>
                        <div className='infoCard'>
                            <div className='textCard'>
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                            </div>

                            <div className='buttonCard'>
                                <button className='button'>`COMPRAR $ {product.precio}`</button>

                            </div>
                        </div>
                    </div>
                );
            })}
        </section>
    );
}

export default ItemList;