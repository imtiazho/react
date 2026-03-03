import React, { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const Special = ({special}) => {
    const newSpecial = useContext(AssetContext);
    return (
        <div>
            Special
            <p>{special}</p>
            <p>{newSpecial}</p>
        </div>
    );
};

export default Special;