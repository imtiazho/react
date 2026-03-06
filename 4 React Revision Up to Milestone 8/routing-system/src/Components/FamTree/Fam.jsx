import React, { createContext, useState } from 'react';
import Dad from './Dad/Dad';

export const MoneyContext = createContext(0);

const Fam = () => {
    const [money, setMoney] = useState(0)
    return (
        <div className='card'>
            Family : {money}
            <MoneyContext.Provider value={[money, setMoney]}>
                <Dad></Dad>
            </MoneyContext.Provider>
        </div>
    );
};

export default Fam;