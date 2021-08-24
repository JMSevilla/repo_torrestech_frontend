<template>
    <div>
        <div>
             <Nav />
        </div>
        <div>
             <Login :login="loginData" :labelPosition="labelPosition" :rules="rules" :signIn="sign" />
        </div>
        <div>
            <Footer />
        </div>
    </div>
</template>
<script>
import Footer from "@/components/footer"
import Nav from "@/components/navbar/nav"
import Login from "@/components/login"
export default {
    components:{
        Login, Nav, Footer
    },
     data(){
        return{
            labelPosition: 'top',
            loginData:{
                email:'',
                password:''
            },
            rules:{
                email: [
                    { required: true, message: 'Please input email address' },
                    { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
                ],
                password:[
                    {required:true,message:'Please input your Password'}
                ]
            }
            
        }
    }

    }
</script>