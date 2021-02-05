import React from 'react';
import {Plmin} from '../utils';
import {useDispatch} from 'react-redux';
import { removeItem } from '../../redux/actions/cart';

export default function CartItem({ item, input, plmin }) {

    const [value, setValue] = React.useState('1');

    const dispatch = useDispatch();

    const onRemove = (id, sell) => {
        dispatch(removeItem(id, sell));
        console.log("Удален айтем:", id, sell);
    };

    return (
        <div className="item">
            <div className="item__info">
                <div className="item__ava">
                    <img src="" alt="" />
                </div>

                <div className="item__text">
                    <div className="item__name">
                        <span className="item__title">{item.name}</span>
                        <span className="item__type">{item.type}</span>
                    </div>
                    <div className="item__sell">{item.sell} ₽</div>
                </div>
            </div>

            <div className="item__options">
                <img onClick={() => onRemove(item.id, item.sell)} src="http://localhost:9999/assets/delete.svg" alt="" className="item__delete" />
                {input ? <input type="text" value={value} onChange={(e) => setValue(e.target.value)} /> : <span></span>}
                {plmin ? <Plmin /> : <span></span>}
            </div>
        </div>
    )
}
