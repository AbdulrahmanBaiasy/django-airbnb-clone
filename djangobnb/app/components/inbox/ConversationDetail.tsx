'use client';


import CustomButton from "../forms/CustomButton";

const ConversationDetail =()=>{
return (
  <div className ='max-h-[480px] overflow-auto flex flex-col space-y-4 '>
    <div className = 'w-[80%] py-4 px-6 rounded-xl bg-gray-200'>
      <p className= 'font-bold text-gray-500'>John Doe</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam temporibus voluptas, commodi eaque consequuntur necessitatibus quaerat aperiam iusto debitis cupiditate, earum vel. Voluptatem totam sequi delectus voluptas neque iusto quaerat.</p>
    </div>
    <div className = 'w-[80%] ml-[20%] py-4 px-6 rounded-xl bg-blue-200'>
      <p className= 'font-bold text-gray-500'>You</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam temporibus voluptas, commodi eaque consequuntur necessitatibus quaerat aperiam iusto debitis cupiditate, earum vel. Voluptatem totam sequi delectus voluptas neque iusto quaerat.</p>
    </div>


    <div className= 'mt-4 py-4 px-6 flex border border-gray-300 rounded-xl space-x-4 '>
      <input type="text" className = 'w-full p-2 bg-gray-200 rounded-xl text-center  ' placeholder="Type your message "/>
      <CustomButton
      label= 'Send'
      onClick={()=>console.log('sadsdad')}
      className='w-[100px]'
      />
    </div>
  </div>
)

}


export default ConversationDetail;