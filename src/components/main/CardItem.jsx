import React from 'react';
import { Modal } from '../utils';
import {useDispatch, useSelector} from 'react-redux';
import { showModalWindow} from '../../redux/actions/modal';

export default function CardItem({citem, type}) {

    const dispatch = useDispatch();

    const { activeItemIndex, activeItemName } = useSelector(({activeItem}) => {
        return {
            activeItemName: activeItem.name,
            activeItemIndex: activeItem.index,
        }
    });

    const onShowModal = () => {
        dispatch(showModalWindow(citem));

        document.body.style.overflow = "hidden";
        const wrapper = document.querySelector('.wrapper');

        wrapper.style.filter = "blur(10px)";

        console.log("Модальное окно открыто вновь");
    };

    return (
        <> 
            {
            type == citem.type ? 
            <div className="card">
                <div className="card__see">
                    <img src={citem.ava} alt="" />
                </div>
                <div className="card__name">{citem.name}</div>
                <div className="card__desc">{citem.desc}</div>

                <div className="card__final">
                    <div className="card__final__sell">{citem.sell} ₽</div>
                    <div className="card__final__button" onClick={onShowModal}><span>Выбрать</span></div>
                </div>
            </div>
            :
            ''
            }   
        </>
    )
};
