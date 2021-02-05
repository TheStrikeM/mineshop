import React from 'react';
import Plmin from './Plmin';
import {useDispatch} from 'react-redux';
import { addItem } from '../../redux/actions/cart';

export default function Modal({ item, input, plmin}) {

    const [value, setValue] = React.useState('');
    const sortRef = React.useRef();

    const dispatch = useDispatch();

    React.useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);

        return function cleanup() {
            document.body.removeEventListener('click', handleOutsideClick);
        }
    }, []);

    const handleOutsideClick = (event) => {
        const path = event.path || (event.composedPath && event.composedPath());
        if (!path.includes(sortRef.current)) {
          dispatch({ type: "HIDE_MODAL" });
          document.body.style.overflow = "auto";

          const wrapper = document.querySelector('.wrapper');
          wrapper.style.filter = "blur(0)";

          console.log("Модальное окно закрыто.");
        }
      };

    const onAddItem = (obj) => {
        dispatch(addItem(obj, obj.sell));
        console.log("Данные:", obj, obj.sell, "успешно отправлены");
        dispatch({ type: "HIDE_MODAL" })
    };

    return (
        <div className="modal" ref={sortRef}>
            <div className="modal__body">
                <div className="modal__background">
                    <img src="" alt="" />
                </div>

                <div className="modal__info">
                    <div className="info">

                        <div className="info__title">{item.name} <span>{item.sell} ₽</span></div>
                        <div className="info__subtitle">Добавление в корзину</div>
                        <div className="info__type"><span>Тип:</span> {item.type}</div>
                        <div className="info__desc">
                            <span>Описание:</span>
                            <p>{item.desc}</p>
                        </div>

                        {input ? <input type="text" className="info__count" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Введите кол-во" /> : <span></span>}
                        {plmin ? <div className="info__mp"><Plmin /></div> : <span></span>}

                        <div className="info__button" onClick={() => onAddItem(item)}>
                            <span>Добавить</span> <img src="http://localhost:9999/assets/cartbutton.svg" alt="" />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
