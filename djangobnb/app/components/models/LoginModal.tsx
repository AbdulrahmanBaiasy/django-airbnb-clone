'use client'; 

import Modal from "./Modal";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useLoginModal from "@/app/hooks/useLoginModal";
import CustomButton from "../forms/CustomButton";
import apiService from "@/app/services/apiService";
import { handleLogin } from "@/app/lib/actions";

const LoginModal =()=>{
  const router = useRouter()
  const LoginModal = useLoginModal()
  const [email , setEmail] = useState(''); 
  const [password , setPassword] = useState(''); 
  const [errors, setErrors] = useState<string[]>([]);
  const submitLogin = async () => {
    const formData= {
      email: email, 
      password : password, 
    }
    const response = await apiService.post('/api/auth/login/',JSON.stringify(formData));
    if (response.access) {
      handleLogin(response.user.pk, response.access, response.refresh);

      LoginModal.close();

      router.push('/')
    }else { 
      setErrors(response.non_field_error);
    }
  
  }
  
  const content=
  (
    <div>

    <h2 className= 'mb-6 text-2xl '>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, modi impedit dolor quibusdam, minus id quas ipsa minima, exercitationem vel illum voluptates. Quisquam repellendus expedita quod illum ullam. Aliquam, harum!
    </h2>
    <form action={submitLogin} className= 'space-y-4'>
      <input type="email" onChange={(e) => setEmail(e.target.value)} className= 'w-full h-[54px] px-4 border border-gray-100 rounded-xl ' placeholder="Enter Email" />
      <input  onChange={(e) => setPassword(e.target.value)} type="password" className= 'w-full h-[54px] px-4 border border-gray-100 rounded-xl ' placeholder="Enter Password" />

      {errors.map((error, index) => {
                    return (
                        <div 
                            key={`error_${index}`}
                            className="p-5 bg-airbnb text-white rounded-xl opacity-80"
                        >
                            {error}
                        </div>
                    )
                })}
      <CustomButton
      label='submit'
      onClick={submitLogin}
      />
    </form>
    </div>

  ) 
  return (
    <Modal
    isOpen={LoginModal.isOpen}
    close = {LoginModal.close}
    label= 'LogIn'
    content={content}
    />
  )
}

export default LoginModal;