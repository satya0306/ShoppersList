import React from 'react';
import './CartPage.css';
import Item from './Item';

const CartPage = ({ items }) =>  {
    return(
        <ul className='ItemPage-items'>
            {items.map(item=>
            <li key={item.id} className='ItemPage-item'>
                <Item item={item} />
            </li>    
            )}
        </ul>    
    );
}

export default CartPage;