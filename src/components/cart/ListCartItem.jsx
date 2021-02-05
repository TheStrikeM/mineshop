import React from 'react';
import CartItem from './CartItem';
import {useSelector} from 'react-redux';

export default function ListCartItem() {

    const {items} = useSelector(({cart}) => {
        return {
            items: cart.items
        }
    });

    return (
        <div className="items__body">
            {items.map(item => <CartItem item={item} input={false} plmin={false}/>)}
        </div>
    )
};
