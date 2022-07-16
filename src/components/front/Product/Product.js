import React from 'react';
import './Product.css'
const Product = ({productItems, handelAddProduct}) => {
    return (
        <div className='products'>
            {
                productItems.map((productItems) => (
                    <div className='card'>
                    <div>
                        <img className='product-img' src={productItems.image} alt=""/>
                    </div>
                        <div>
                            <h3 className='product-name'>{productItems.name}</h3>
                        </div>
                        <div>
                            <h3>${productItems.price}</h3>
                        </div>
                        <div>
                            <button onClick={()=>handelAddProduct(productItems)} className='Add-button'>Add to cart</button>
                        </div>
                    </div>

                ))}
        </div>
    );
};

export default Product;