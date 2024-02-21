
import Image from 'next/image'
import PropertyList from '@/app/components/proporties/PropertyList';
import Conversation from '../components/inbox/Conversation';
const InboxPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6 ">
      <div className='space-y-4 mt-4'>
        <Conversation />
        <Conversation />
        <Conversation />
      </div>

    </main>
  )
}
export default InboxPage; 
