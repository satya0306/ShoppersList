import React from 'react';
import './ItemPage.css';
import Item from './Item';

const ItemPage = ({ items, onAddToCart }) =>  {
    return(
        <ul className='ItemPage-items'>
            {items.map(item=>
            <li key={item.id} className='ItemPage-item'>
                <Item item={item}>
                    <button
                        className="Item-addToCart"
                        onClick={() => onAddToCart(item)} >
                        Add to Cart
                    </button>
                </Item>    
            </li>    
            )}
        </ul>    
    );
}

export default ItemPage;