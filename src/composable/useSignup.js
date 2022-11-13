import {ref} from "vue"
import { projectAuth } from "@/firebase/config"
const error = ref(null)
const Signup = async (email,password,displayName)=>{
   error.value = null
   
   try{
    const res = await projectAuth.createUserWithEmailAndPassword(email,password)
    if(!res){
        throw new Error('could not complete the sign up')
    }
    await res.user.updateProfile({displayName})
    error.value = null
    return res
   }catch(err){
        console.log(err.message)
        error.value = err.message
   }
}

const useSignup = () =>{
    return {error,Signup}
}


export default useSignup