import React, { useContext } from 'react';
import { MoneyContext } from '../Fam';

const Me = () => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div className='card'>
            Me : {money}
            <button onClick={() => setMoney(money + 10)}>Add 10 taka</button>
        </div>
    );
};

export default Me;