<template>
    <form @submit.prevent="handleSubmit" >
     <input type="email" placeholder="Please Enter your Email" required v-model="email">
     <input type="password" placeholder="Please Enter your Password" required v-model="password">
     <div class="error">
        {{error}}
     </div>
     <button>Sign In</button>
    </form>  
 </template>
 
 <script>
 import { ref } from '@vue/reactivity'
 import useSignin from '@/composable/useSignin'
 export default {
 
     setup(props, context){
        const {error, signin} = useSignin()
         const email = ref('')
         const password = ref('')
 
         const handleSubmit = async()=>{
             await signin(email.value,password.value)
             if(!error.value){
                context.emit('login')
             }
         }
         return {email,password,handleSubmit,error}
     }
 }
 </script>
 
 <style>
 
 </style>