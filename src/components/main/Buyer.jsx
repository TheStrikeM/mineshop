import React from 'react';

export default function Buyer({ buyer }) {
    return (
        <div className="buy">
            <img src={buyer.ava} alt="" />
            <div className="buy__nickname">{buyer.nickname}</div>
            <div className="buy__desc"><span>Товар:</span> {buyer.type} - {buyer.item}</div>
            <div className="buy__sell">{buyer.sell} ₽</div>
        </div>
    )
};
