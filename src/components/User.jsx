import axios from 'axios';
import React, { useEffect, useState } from 'react';

const User = () => {

    // 1. Crear estado
    // 2. useEffect
    // 3. axios.get
    // 4. console.log

    const [user, setUser] = useState({});

    useEffect(() => {
        axios.get('https://randomuser.me/api/')
            .then(res => setUser(res.data));
    }, [])

    console.log(user);

    const changeUser = () => {
        axios.get('https://randomuser.me/api/')
            .then(res => setUser(res.data));
    }

    return (
        <div className="general">

        <div className='card'>
            <h1> {user.results?.[0].name.title} {user.results?.[0].name.first} {user.results?.[0].name.last} </h1>
            <img src={user.results?.[0].picture.large}/>
            <br />
            <b>Country: </b>{user.results?.[0].location.country}
            <br />
            <b>Email: </b>{user.results?.[0].email}
            <br />
            <button onClick={changeUser}>Get another User</button>
        </div>
        </div>
    );
};

export default User;