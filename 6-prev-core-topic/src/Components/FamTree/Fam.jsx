
import { createContext, useState } from 'react';
import Dad from './Dad/Dad';

export const MoneyContext = createContext(0);

const Fam = () => {
    const [taka, setTaka] = useState(0);
    return (
        <div className='card'>
            Fam taka: {taka}
            <MoneyContext.Provider value={[taka, setTaka]}>
                <Dad></Dad>
            </MoneyContext.Provider>
        </div>
    );
};

export default Fam;