import { MessageSquareMore } from 'lucide-react';
import { useRouter } from 'next/router';

export const UserCard = ({ data }: { data: any }) => {
    // data.nome = 'Card do usuário' 
    
    const router = useRouter()

    const handleClick = () => {
        router.push({
            pathname: `/chat/${data.name}`,
            query: { recipientId: data.id },
        });
    };

  return(
    <div className='flex flex-1 flex-row font-sans justify-around items-center bg-background-800 w-3/4 max-h-10 mt-2 mb-2 rounded-xl hover:opacity-80 cursor-pointer' 
    onClick={handleClick}>
      <span className='flex flex-1 ml-10 w-2/4'>{data.name}</span>
      <div className="flex flex-1 justify-center  w-2/4">        
        <MessageSquareMore className='h-8 w-8 text-fontColor-900'/>
      </div>
    </div>
  )
}
