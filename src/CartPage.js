import React from 'react';
import './CartPage.css';
import Item from './Item';

const CartPage = ({ items,onAddOne, onRemoveOne }) =>  {
    return(
        <ul className='ItemPage-items'>
            {items.map(item=>
            <li key={item.id} className='ItemPage-item'>
                <Item item={item}>
                    <div className="CartItem-controls" >
                        <button
                        className="CartItem-removeOne"
                        onClick={() => onRemoveOne(item)} > &ndash; </button>
                        <span className="CartItem-count" > {item.count} </span>
                        <button
                        className="CartItem-addOne"
                        onClick={() => onAddOne(item)} > + </button>
                    </div>
                </Item>
                <div className="cart-total">Total: ${item.price*item.count}</div>   
            </li>    
            )}
        </ul>    
    );
}

export default CartPage;