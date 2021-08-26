<template>
    <div>
        <div>
            <Nav />
        </div>
        <resetByCode :resetByCode="resetByCode" :rules="rules" :labelPosition="labelPosition"/>
        <div>
             <Footer />
        </div>
       </div>
</template>
<script>
import Nav from "@/components/navbar/nav"
import resetByCode from "@/components/resetCode"
import Footer from "@/components/footer"
export default {
    components:{
        resetByCode, Nav, Footer
    },
    data(){
        return{
            labelPosition: 'top',
            resetByCode:{
               code: ''
            },rules:{
                code:[
                  {required:true,message:'Please input your verification code'} 
                ]
            }
        }
    }
   
}
</script>