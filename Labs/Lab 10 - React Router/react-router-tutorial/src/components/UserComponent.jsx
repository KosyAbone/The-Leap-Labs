import React from 'react';

function UserComponent({ match }) {
    const userId = match.params.id;

    return (
        <div>
            <h1>User Profile</h1>
            <p>User ID: {userId}</p>
        </div>
    )
}

export default UserComponent