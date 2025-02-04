import React, { useState } from 'react';
import styled from 'styled-components';

interface AddUserProps {
    onAddUser: (userName: string) => void;
}

const AddUser: React.FC<AddUserProps> = ({ onAddUser }) => {
    const [userName, setUserName] = useState('');
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onAddUser(userName);
        setUserName(''); // Limpa o campo após adicionar
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Adicione um novo usuário"
            />
            <button type="submit">Adicionar</button>
        </form>
    );
}

export default AddUser;