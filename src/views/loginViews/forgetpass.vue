<template>
<div>
        <div>
           <Nav />
        </div>
        <div>
            <forgetPassword :forgetPassword="forgetPasswordData" :send="resend" />
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
            forgetPasswordData:{
                email:''
            }
        }
    },
    methods:{
      resend(){
          console.log(this.forgetPasswordData)
      }  
    }
}
</script>