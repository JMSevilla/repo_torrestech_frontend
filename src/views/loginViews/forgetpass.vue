<template>
<div>
        <div>
           <Nav />
        </div>
        <div>
            <forgetPassword :rules="rules" :forgetPassword="forgetPasswordData" :labelPosition="labelPosition" />
        </div>
        <div>
             <Footer />
        </div>
</div>
</template>
<script>
import Nav from "@/components/navbar/nav"
import forgetPassword from "@/components/forgetpass"
import Footer from "@/components/footer"
export default {
    components:{
        forgetPassword, Nav, Footer
        
    },
    data(){
        return{
            labelPosition:'top',
            forgetPasswordData:{
                email:''
            },
            rules:{
                email:[
                    {required:true,message:'Please input email address'},
                    {type: 'email',message:'Please input correct email address',trigger:['blur','change'] }
                ]
            }
        }
    }
    
}
</script>