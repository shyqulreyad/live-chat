<template>
<nav v-if="user">
    <div>
        <p>Hi there {{user.displayName}} </p>
        <p class="email">You are logged in with {{user.email}} </p>
    </div>
    <button @click="handleLogout">Logout</button>
</nav>  
</template>

<script>
import useLogout from '@/composable/useLogout'
import getUser from '@/composable/getUser'
import { useRouter } from 'vue-router'
export default {
    setup(){
        const {error,logout} = useLogout()
        const router = useRouter()
        const {user} = getUser()

        const handleLogout =  async () =>{
            await logout()
            if(!error.value){
                router.push({name:'Welcome'})
            }else{
                console.log(error)
            }
        }
        return {handleLogout, user}
    }
}
</script>

<style>

</style>