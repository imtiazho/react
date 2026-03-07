import React from 'react';
import Profile from '../Profile/Profile';
import TodayClass from '../TodayClass/TodayClass';
import Attendance from '../Attendance/Attendance';

const UpperPart = ({eachData}) => {
    
    return (
        <div className='grid grid-cols-3 gap-6'>
            <div className='col-span-2'>
                <div className='grid grid-cols-2 gap-6'>
                    <div className='flex flex-col gap-6'>
                        <div>
                            <Profile eachData={eachData}></Profile>
                        </div>
                        <div>
                            <TodayClass eachData={eachData}></TodayClass>
                        </div>
                    </div>
                    <div>
                        <Attendance eachData={eachData}></Attendance>
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