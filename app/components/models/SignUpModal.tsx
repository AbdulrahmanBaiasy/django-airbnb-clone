'use client'; 

import Modal from "./Modal";
import { useState } from "react";
import useSignUpModal from "@/app/hooks/useSignUpModal";
import CustomButton from "../forms/CustomButton";

const SignUpModal =()=>{
  const SignUpModal = useSignUpModal()
  const content=
  (
    <div>

    <h2 className= 'mb-6 text-2xl '>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, modi impedit dolor quibusdam, minus id quas ipsa minima, exercitationem vel illum voluptates. Quisquam repellendus expedita quod illum ullam. Aliquam, harum!
    </h2>
    <form action="POST" className= 'space-y-4'>
      <input type="email" className= 'w-full h-[54px] px-4 border border-gray-100 rounded-xl ' placeholder="Enter Email" />
      <input type="password" className= 'w-full h-[54px] px-4 border border-gray-100 rounded-xl ' placeholder="Enter Password" />
      <input type="password" className= 'w-full h-[54px] px-4 border border-gray-100 rounded-xl ' placeholder="Repeat Password" />

      <div className= 'p-5 bg-airbnb text-white rounded-xl opacity-80 '>
      The Error Message
      </div>
      <CustomButton
      label='submit'
      onClick={()=> console.log('test')}
      />
    </form>
    </div>

  ) 
  return (
    <Modal
    isOpen={SignUpModal.isOpen}
    close = {SignUpModal.close}
    label= 'SignUp'
    content={content}
    />
  )
}

export default SignUpModal;