import React from 'react';
import { CardItem } from '../main';
import {useDispatch, useSelector} from 'react-redux';
import { setActiveItem } from '../../redux/actions';
import { CartItem } from '../cart';

export default function ListCardItem({cards}) {

    const dispatch = useDispatch();
    const { activeItemIndex, activeItemName, isLoading } = useSelector(({activeItem, cards}) => {
        return {
            activeItemName: activeItem.name,
            activeItemIndex: activeItem.index,
            isLoading: cards.isLoading
        }
    });
    const cats = ["Привелегии", "Кейсы", "Вещи", "Валюта"]

    console.log(`Это айтемы - ${cards}`);
    return (
        <div>
            <div className="category">
                {cats && cats.map((name, index) => (
                    <div 
                    className={activeItemIndex === index ? 'category__item-use' : 'category__item'}
                    onClick={() => dispatch(setActiveItem(index, name))}
                    >
                        <span>{name}</span>
                    </div>
                ))}
            </div>

            <div className="cards">
            {isLoading ? cards.map(card => (
                    <CardItem citem={card} type={activeItemName} />
                )) : ''}
            </div>
        </div>
    )
};
