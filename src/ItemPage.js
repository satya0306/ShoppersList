import React from 'react';
import './ItemPage.css';
import Item from './Item';

const ItemPage = ({ items, onAddToCart }) =>  {
    return(
        <ul className='ItemPage-items'>
            {items.map(item=>
            <li key={item.id} className='ItemPage-item'>
                <Item item={item} onAddToCart={() => onAddToCart(item)} />
            </li>    
            )}
        </ul>    
    );
}

export default ItemPage;