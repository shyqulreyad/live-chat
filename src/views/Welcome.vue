<template>
<div class="welcome container">
    <div v-if="showSignIn">
            <h2>Sign In</h2>
        <SigninForm @login="enterChat"/>
        <p>No account Yet? <span @click="showSignUp">Sign Up</span></p>
    </div>
    <div v-else>
            <h2>Sign Up</h2>
        <SignupForm @signup="enterChat"/>
        <p>Already have an account? <span @click="showSignUp">Sign In</span></p>
    </div>
</div>  
</template>

<script>
import SignupForm from '@/components/SignupForm.vue';
import SigninForm from '@/components/SigninForm.vue';
import { ref } from '@vue/reactivity';
import { useRouter } from 'vue-router';
export default {
    components: { SignupForm, SigninForm },

    setup() {
        const showSignIn = ref(true)
        const router = useRouter()

        const showSignUp = () =>{
            showSignIn.value = !showSignIn.value
        }

        const enterChat = ()=>{
            router.push({name:'Chatroom'})
        }

        return {showSignIn, showSignUp,enterChat}
    }
}
</script>

<style>
.welcome {
    text-align: center;
    padding: 20px 0;
}

.welcome form{
    width: 300px;
    margin:20px auto;
}
.welcome label {
    display: block;
    margin: 20px 0 10px;
}
.welcome input{
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
}
.welcome span{
    font-weight: bold;
    cursor: pointer;
}
.welcome button {
    margin: 20px auto;
}
</style>