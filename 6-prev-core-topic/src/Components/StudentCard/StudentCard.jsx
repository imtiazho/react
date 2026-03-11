import React from 'react';
import { Link } from 'react-router';

const StudentCard = ({eachData}) => {
    const {id, name} = eachData;
    return (
        <Link to={`${id}`} className='border border-white p-12'>
            Student Name : {name}
        </Link>
    );
};

export default StudentCard;