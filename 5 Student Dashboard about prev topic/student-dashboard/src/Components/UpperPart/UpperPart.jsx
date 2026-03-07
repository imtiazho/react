import React from 'react';
import Profile from '../Profile/Profile';
import TodayClass from '../TodayClass/TodayClass';

const UpperPart = ({eachData}) => {
    // 
    
    return (
        <div className='grid grid-cols-3 gap-6'>
            <div className='col-span-2'>
                <div className='grid grid-cols-2 gap-6'>
                    <div className='flex flex-col gap-6'>
                        <div>
                            <Profile eachData={eachData}></Profile>
                        </div>
                        <div>
                            <TodayClass></TodayClass>
                        </div>
                    </div>
                    <div className='border p-2'>Second
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                    </div>
                </div>
                <div className='mt-6 grid grid-cols-4 gap-6'>
                    <div className='border p-2'>One</div>
                    <div className='border p-2'>Two</div>
                    <div className='border p-2'>Three</div>
                    <div className='border p-2'>Four</div>
                </div>
            </div>
            <div className='border p-2'>Third</div>
        </div>
    );
};

export default UpperPart;