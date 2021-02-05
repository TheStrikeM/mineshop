import React from 'react';
import {Title} from '../utils';

export default function Help() {
    return (
        <div>
            <Title bg="Как купить" fg="Как купить" />
            <div className="help">
                <div className="help__desc">
                    <div className="help__desc__name">1. <span>Выбор товара</span></div>
                    <div className="help__desc__desc">Выберите подходящий товар и нажмите на Выбрать, можно выбирать несколько, все эти товары будут добавлены в корзину.</div>
                </div>

                <div className="help__desc">
                    <div className="help__desc__name">2. <span>Заполнение свойств</span></div>
                    <div className="help__desc__desc">Заполните нужные вкладки, введите промокод, который вы можете получить в видео наших ютуберов и нажмите Добавить, элемент будет добавлен в корзнину.</div>
                </div>

                <div className="help__desc">
                    <div className="help__desc__name">3. <span>Корзина</span></div>
                    <div className="help__desc__desc">Теперь, после того, как вы все выбрали переходите в корзину, правом верхнем углу и далее на интуитивно понятном интерфейсе оплатите товары и наслаждайтесь!</div>
                </div>
            </div>
        </div>
    )
}
