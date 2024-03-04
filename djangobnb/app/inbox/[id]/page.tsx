
import Image from 'next/image'
import ConversationDetail from '@/app/components/inbox/ConversationDetail';
const ConversationPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6 ">
      <div className= 'space-y-4 mt-4'>
      <ConversationDetail/> 
      </div>
    </main>
  )
}

export default ConversationPage; 