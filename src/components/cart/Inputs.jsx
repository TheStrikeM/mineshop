import React from 'react'

export default function Inputs() {
    return (
        <div className="items__inputs">
            <div className="items__input">
                <img src="http://localhost:9999/assets/noob.svg" alt="" />
                <input type="text" placeholder="Введите ваш никнейм" />
            </div>
            <div className="items__input">
                <img src="http://localhost:9999/assets/youtube.svg" alt="" />
                <input type="text" placeholder="Введите промокод" />
            </div>
        </div>
    )
}
