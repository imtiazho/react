import React, { Suspense, use } from 'react';
import Shoe from '../Shoe/Shoe';
import '../Shoe/Shoe.css';


const Shoes = ({shoesPromise, handleCart}) => {
    const data = use(shoesPromise);

    return (
        <div className='card-group'>   
            {
                data.map(eachShoe => <Shoe handleCart={handleCart} eachShoe={eachShoe}></Shoe>)
            }    
        </div>
    );
};

export default Shoes;