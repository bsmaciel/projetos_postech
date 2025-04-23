import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export async function getServerSideProps() {
    try {
        const response = await fetch('http://localhost:3333/api/users/id?id=${1}', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 200) {
            const listaUsuarios = await response.json();
            return { props: { userSender } };
        } else {
            return { props: { listaUsuarios: [] } };
        } 
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
        return { props: { userSender: null } };
    }

}

export default function ChatPage({userSender}) {
    const router = useRouter();
    const { recipientId } = router.query;
    const [userName, setUserName] = useState('');
    const [id, setId] = useState('');

    useEffect(() => {
        const getCookieValue = (name:any) => (
            document.cookie.split('; ').find(row => row.startsWith('${name}='))?.split('=')[1]
        );

        setUserName(getCookieValue('username')?? '');
        setId(getCookieValue('id')?? '');
    }, []);

    return (
        <div>
            <p>Tela do chat</p>
            <p>Nome de Usuário: {userName}</p>
            <p>Nome de Usuário Rementente: {userSender?.name}</p>
            <p>ID: {id}</p>
            <p>ID Remetente: {userSender?.id}</p>
        </div>
    )
}