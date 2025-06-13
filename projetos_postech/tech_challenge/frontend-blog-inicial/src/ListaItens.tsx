import React, { useState } from 'react';

function ListaItens() {
    const [itens, setItens] = useState([]);
    const [novoItem, setNovoItem] = useState('');

    const adicionarItem = () => {
        if (!novoItem) return;
        setItens([...itens, novoItem]);
        setNovoItem('');
    };

    const removerItem = (indice) => {
        setItens(itens.filter((_, index) => index !== indice));
    };

    return (
        <div>
            <h2>Lista de Itens</h2>
            <input
                type="text"
                value={novoItem}
                onChange={(e) => setNovoItem(e.target.value)}
            />
            <button onClick={adicionarItem}>Adicionar Item</button>
            <ul>
                {itens.map((item, index) => (
                    <li key={index}>
                        {item} <button onClick={() => removerItem(index)}>Remover</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaItens;