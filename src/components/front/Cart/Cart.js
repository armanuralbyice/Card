import React from 'react';
import './Cart.css'
import {Link} from "react-router-dom";
const Cart = ({cart,handelAddProduct,handelRemoveProduct}) => {
    const total = cart.reduce((price,items)=>price + items.quantity * items.price, 0);
    const alert = () => {
        if(cart.length===0){
            window.alert('NO PRODUCT HERE!!!');
        }
    }
    return (
        <div className='cart'>
            <div className='cart-item-header'>Cart Items</div>
            {
                cart.length===0 &&(
                    <div className='empty-cart'>No Item Are Added</div>
                )
            }
            <div>
                {
                    cart.map((items)=>(
                        <div className='cart-item-list'>
                            <img className='cart-item-image' src={items.image} alt=""/>
                            <div className='cart-item-name'>{items.name}</div>
                            <div className='cart-item-function'>
                                <button className='cart-item-add' onClick={()=>handelAddProduct(items)}>+</button>
                                <button className='cart-item-remove'  onClick={()=>handelRemoveProduct(items)}>-</button>
                            </div>
                            <div className='cart-item-price'>
                                {items.quantity} * ${items.price}
                            </div>
                        </div>
                    ))
                }
                <div className='total-price'>Total Price: ${total}</div>
                <div>
                    <Link style={{textDecoration: 'none'}} to = '/signup'><button onClick={alert} className='order-button'>Place Order</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;