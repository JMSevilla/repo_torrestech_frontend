<template>
    <div>
        <div>
            <Nav />
        </div>
        <div>
             <Login :login="loginData" :signIn="sign" />
        </div>
        <div>
            <Footer />
        </div>
    </div>
</template>
<script>
import Nav from "@/components/navbar/nav"
import Footer from "@/components/footer"
import Login from "@/components/login"
export default {
    components:{
        Login, Nav, Footer
    },
     data(){
        return{
            loginData:{
                email:'',
                password:'.......'
            }
        }
    },
    methods:{
        sign(){
            console.log(this.loginData)
        }
    }
}
</script>