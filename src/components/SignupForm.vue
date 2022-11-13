<template>
   <form @submit.prevent="handleSubmit" >
    <input type="text" placeholder="Please Enter your Display name" required v-model="display_name">
    <input type="email" placeholder="Please Enter your Email" required v-model="email">
    <input type="password" placeholder="Please Enter your Password" required v-model="password">
    <div class="error">
        {{error}}
    </div>
    <button>Sign Up</button>
   </form>  
</template>

<script>
import useSignup from '@/composable/useSignup'
import { ref } from '@vue/reactivity'
export default {

    setup(props,context){
        const {error, Signup } = useSignup()

        const display_name = ref('')
        const email = ref('')
        const password = ref('')


        const handleSubmit = async ()=>{
            await Signup(email.value,password.value,display_name.value)
            if(!error.value){
                context.emit('signup')
             }
        }
        return {display_name,email,password,handleSubmit, error}
    }
}
</script>

<style>

</style>