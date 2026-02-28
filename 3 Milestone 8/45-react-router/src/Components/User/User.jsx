import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {
    const {name, email, phone, id} = user;

    const userStyle = {
        border: "2px solid red",
        margin: "1rem"
    }

    return (
        <div style={userStyle}>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/users/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;