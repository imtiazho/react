import React, { use } from 'react';
import { MoneyContext } from './FamilyTree';

const Sister = () => {
    const [money, setMoney] = use(MoneyContext);
    return (
        <div onClick={() => setMoney(money + 100)}>
            Sister
        </div>
    );
};

export default Sister;