import React from 'react';

export default function Welcome() {
    return (
        <div>
            <div className="welcome">
                <div className="welcome__text">
                    <div className="welcome__title">SHOP</div>
                    <div className="welcome__desc">Покупай и становись лучше и привелекательней!</div>
                </div>
                <img src="http://localhost:9999/assets/shop.svg" alt=""/>
            </div>

            <div className="bottom">
                <img src="http://localhost:9999/assets/bottom.svg" alt=""/>
            </div>
        </div>
    )
};
