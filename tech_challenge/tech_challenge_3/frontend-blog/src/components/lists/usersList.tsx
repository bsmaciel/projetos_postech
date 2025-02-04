import React from 'react';
import styled from 'styled-components';

interface UserListProps {
    users: { id: number; name: string }[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
    return (
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
}

export default UserList;