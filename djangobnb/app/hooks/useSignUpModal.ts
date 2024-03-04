import { create } from "zustand";
import SignUpModal from "../components/models/SignUpModal";


interface SignUpModalStore{
  isOpen: boolean ; 
  open : ()=> void ; 
  close: ()=> void ;
}

const useSignUpModal = create<SignUpModalStore>((set)=>({
  isOpen:false , 
  open: ()=> set({isOpen: true }),
  close: ()=> set({isOpen:false})
}));


export default useSignUpModal; 
