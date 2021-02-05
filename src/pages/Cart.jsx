import React from 'react';
import { BuyCalcer, CartItem, NotFoundCartItems, ListCartItems, Inputs } from '../components/cart';
import { Header } from '../components/utils';
import {useSelector} from 'react-redux';

export default function Cart() {

    const totalCount = useSelector(({cart}) => cart.totalCount);

    return (
        <div>
            
            <Header type={true} />


            {totalCount ? <div className="items">
                <Inputs />
                <ListCartItems />
                <BuyCalcer />
            </div> : <NotFoundCartItems />}
            

        </div>
    )
};
