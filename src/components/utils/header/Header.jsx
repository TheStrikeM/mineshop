import React from 'react';
import {NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux';

let MainHeader = () => {

    const totalPrice = useSelector(({cart}) => cart.totalPrice)
    
    return (
        <NavLink to="/cart" className="nav__btn">
            <span>{totalPrice} ₽</span>
            <img src="http://localhost:9999/assets/palka.svg" alt="" />
            <img src="http://localhost:9999/assets/cart.svg" alt="" />
        </NavLink>
    )
};

let CartHeader = () => {
    return (
        <NavLink to="/" className="nav__btn"><span>В магазин</span></NavLink>
    )
};

export default function Header({ type }) {
    return (
        <header>
            <div className="nav">
                <div className="nav__body">
                    <NavLink to="/" className="nav__item-logo">
                        <img src="http://localhost:9999/assets/logo.svg" alt="" className="nav__img" />
                        <span>MineStand</span>
                    </NavLink>
                    <div className="nav__item-btn">
                        { type ? <CartHeader /> : <MainHeader />}
                    </div>
                </div>
            </div>
        </header>
    )
};
