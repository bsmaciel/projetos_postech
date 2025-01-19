import { MessageSquareMore } from 'lucide-react';

export const UserCard = ({ data }: { data: any }) => {
    data.nome = 'teste'
    return(
        <div>
            <span>{data.nome}</span>
            <MessageSquareMore className= 'h-4 w-4 text-fontColor-900'/>
        </div>
    )
}
