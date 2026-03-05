import React, { use } from 'react';

const Bottle = ({bottlePromise}) => {
    const data = use(bottlePromise);
    console.log(data);
    return (
        <div>
            Bottle
        </div>
    );
};

export default Bottle;