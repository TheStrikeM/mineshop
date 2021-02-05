import React from 'react';
import { Header, Footer, Modal } from '../components/utils';
import { Welcome, ListBuyers, ListCardItems, Help  } from '../components/main';
import { showModalWindow, hideModalWindow } from '../redux/actions/modal';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';

export default function Main() {

    const { showModal, settings, cards } = useSelector(({modal, cards}) => {
        return {
            showModal: modal.showModal,
            settings: modal.settings,
            cards: cards.items
        }
    });
    const dispatch = useDispatch();

    const citems = [
        {ava: "", type: "Привелегии", name: "Archer", desc: "Это самая лучшая привелегия", sell: "200"},
        {ava: "", type: "Привелегии", name: "Platinum", desc: "Это самая лучшая привелегия", sell: "200"},
        {ava: "", type: "Кейсы", name: "Archer", desc: "Это самая лучшая привелегия", sell: "200"},
        {ava: "", type: "Привелегии", name: "Ultra", desc: "Это самая лучшая привелегия", sell: "200"},
        {ava: "", type: "Привелегии", name: "Archer", desc: "Это самая лучшая привелегия", sell: "200"},
        {ava: "", type: "Привелегии", name: "Premium", desc: "Это самая лучшая привелегия", sell: "200"},
        {ava: "", type: "Привелегии", name: "Archer", desc: "Это самая лучшая привелегия", sell: "200"}
    ]

    const buyers = [
        {ava: "http://localhost:9999/assets/buys.svg", nickname: "TheStrikeM", type: "Привелегия", item: "Archer", sell: "200"},
        {ava: "http://localhost:9999/assets/buys.svg", nickname: "TheStrikeM", type: "Привелегия", item: "Archer", sell: "200"},
        {ava: "http://localhost:9999/assets/buys.svg", nickname: "TheStrikeM", type: "Привелегия", item: "Archer", sell: "200"},
        {ava: "http://localhost:9999/assets/buys.svg", nickname: "TheStrikeM", type: "Привелегия", item: "Archer", sell: "200"},
    ]

    return (
        <div>
            <Header type={false} />

            {showModal ? <Modal item={settings} input={false} plmin={false} /> : ''}

            <div className="wrapper">
                <Welcome />
                <ListCardItems cards={cards} />
                <Help />
                <ListBuyers buyers={buyers} />
                <Footer />
            </div>
        </div>
    )
};
