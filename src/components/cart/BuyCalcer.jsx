import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { clearItems } from '../../redux/actions/cart';

export default function BuyCalcer() {

    const {totalPrice} = useSelector(({cart}) => {
        return {
            totalPrice: cart.totalPrice
        }
    });
    
    const dispatch = useDispatch();

    return (
        <div className="items__result">
                
            <div className="items__res-clear">
                <div onClick={() => dispatch(clearItems())} className="items__button">Очистить корзину</div>
            </div>

            <div className="items__res-summary">
                <span>{totalPrice} ₽</span>
                <div className="items__button">Начать оплату</div>
            </div>
     
        </div>
    )
};
