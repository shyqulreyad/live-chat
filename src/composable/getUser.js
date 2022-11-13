import {ref} from "vue"
import { projectAuth } from "@/firebase/config"

const user = ref(projectAuth.currentUser)

projectAuth.onAuthStateChanged(logged_user =>{
    user.value = logged_user
})
    
const getUser = () =>{
    return {user}
}

export default getUser