import React from 'react';
import { Title } from '../utils';
import Buyer from './Buyer';

export default function ListBuyers({ buyers }) {
    return (
        <div>
            <Title bg="Покупки" fg="Покупки" />

            <div className="buys">
                {buyers.map((name, index) => <Buyer key={index} buyer={name} />)}
            </div>            
        </div>
    )
};
