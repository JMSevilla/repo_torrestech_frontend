<template>
    <div>
        <div>
            <Nav />
        </div>
        <resetPassword :resetPassword="resetPassword" :labelPosition="labelPosition" :rules="rules"/>
        <div>
            <Footer />
        </div>
    </div>
</template>
<script>
import Nav from "@/components/navbar/nav"
import resetPassword from"@/components/resetPass"
import Footer from "@/components/footer"
export default {
    components:{
        resetPassword, Nav, Footer
    },
    data(){
        var validatePass = (rule, value, callback) => {
            if (value === '') {
            callback(new Error('Please input the password'));
            } else {
              callback();
            }
        }
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
            callback(new Error('Please input the password again'));
            } else if (value !== this.resetPassword.password) {
            callback(new Error('Mismatch Password'));
            } else {
            callback();
            }
        }
        return{
            labelPosition:'top',
            resetPassword:{
                password: '',
                cpassword: ''
            },
            rules:{
                password : [
                     { required: true, validator: validatePass, trigger: 'blur' },
                     { min: 8, max: 100, message: 'Please input your new password', }
                ],
                cpassword : [
                     { required: true, validator: validatePass2, trigger: ['blur', 'change']  }
                ]
            }  
        }
        
    }
}
</script>