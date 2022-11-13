import {ref} from "vue"
import { projectAuth } from "@/firebase/config"
const error = ref(null)

const signin = async(email,password)=>{
    error.value = null
    try{
        const res = await projectAuth.signInWithEmailAndPassword(email,password)
        error.value = null
    }catch(err){
        error.value = err.message
        console.log(err.message)
    }
}

const useSignin =() =>{
    return {error, signin}
}

export default useSignin