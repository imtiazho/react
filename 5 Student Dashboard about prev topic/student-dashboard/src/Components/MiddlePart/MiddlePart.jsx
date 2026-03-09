import React from 'react';
import Performance from '../Performance/Performance';

const MiddlePart = ({eachData}) => {
    return (
        <div className='grid grid-cols-5 mt-6 gap-6'>
            <div className='col-span-3'>
                <Performance performanceData={eachData.performance_tracking}></Performance>
            </div>
            <div className='border col-span-2 p-2'>Right</div>
        </div>
    );
};

export default MiddlePart;