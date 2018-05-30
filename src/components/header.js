import React from 'react';

const user = {
    name: 'Dan',
    lastname: 'Norman',
    age: '21'
}

const Header = () => {
    return (
        <div>
            <div>{user.name}</div>
            <div>{user.lastname}</div>
            <div>{user.age}</div>
        </div>
    )
}

export default Header