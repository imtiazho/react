import React from 'react';
import { useLoaderData } from 'react-router';
import User from '../User/User';

const Users = () => {
    const users = useLoaderData();
    
    return (
        <div>
            {
                users.map(user => <User user={user}></User>)
            }
        </div>
    );
};

export default Users;