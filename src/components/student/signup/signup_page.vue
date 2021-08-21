<template>
    <div>
        <div class="row justify-content-center">
            <div class="col-md-7 stepper-column">
                <el-card shadow="always" style="border-radius: 10px" class="stepper-card">
                    <div v-if="active < 5">
                        <h3>Student's Account Creation</h3>
                        <el-steps :active="active" finish-status="success" align-center>
                            <el-step title="Class Code"></el-step>
                            <el-step title="Personal Info"></el-step>
                            <el-step title="Address"></el-step>
                            <el-step title="Credentials"></el-step>
                            <el-step title="Verification"></el-step>              
                        </el-steps>
                        <div v-if="active == 0">
                            <Classcode :onnext="onnext" :oncancel="oncancel" :signup="signup" :rules="rules"/>
                        </div>
                        <div v-else-if="active == 1" >
                            <PersonalInfo :onprevious="onprevious" :onnext="onnext" :signup="signup" :rules="rules" :labelPosition="labelPosition" />
                        </div>
                        <div v-else-if="active == 2" >
                            <Address :onprevious="onprevious" :onnext="onnext" :signup="signup" :rules="rules" :labelPosition="labelPosition" />
                        </div>
                        <div v-else-if="active == 3" >
                            <Credentials :onprevious="onprevious" :onnext="onnext" :signup="signup" :rules="rules" :labelPosition="labelPosition"/>
                        </div>
                        <div v-else-if="active == 4" >
                            <Verification :onprevious="onprevious" :onnext="onnext" :signup="signup" :rules="rules" :labelPosition="labelPosition"/>
                        </div>
                        <div v-else-if="active == 5" >
                            <Verification :onprevious="onprevious" :onnext="onnext" :signup="signup" :rules="rules" :labelPosition="labelPosition" />
                        </div>
                    </div>
                    <div v-else>
                        <Finish :onlogin="onlogin" />
                    </div>
                </el-card>
            </div>
        </div>
    </div>
</template>

<script>
import Classcode from "./classcode"
import PersonalInfo from "./personal_info"
import Address from "./address"
import Credentials from "./credentials"
import Verification from "./verification"
import Finish from "./finish"
export default {
    components:{
        Classcode,
        PersonalInfo, 
        Address,
        Credentials,
        Verification,
        Finish
    },
    data() {
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
            } else if (value !== this.signup.password) {
            callback(new Error('Mismatch Password'));
            } else {
            callback();
            }
        }
        return{
            active:0,
            labelPosition: 'left',
            signup:{
                ccode:'',
                firstname:'',
                lastname:'',
                bdate:'',
                age:'',
                gender:'',
                mobile:'',
                house:'',
                street:'',
                listprovince:[{
                        label: 'cavite',
                        value: 'cavite'
                    },{
                        label: 'batangas',
                        value: 'batangas'
                    },{
                        label: 'laguna',
                        value: 'laguna'}
                ],
                province: '',
                listmunicipality:[{
                        label: 'Bacoor',
                        value: 'Bacoor'
                    },{
                        label: 'Lemery',
                        value: 'Lemery'
                    },{
                        label: 'Sta. Rosa',
                        value: 'Sta. Rosa'}
                ],
                municipality: '',
                zipcode:'',
                email:'',
                password:'',
                confirmpwd:'',
                verificationcode:'',
                imageurl: ''
                
            }, 
            rules: {
                ccode: [
                    { required: true, message: 'Please input class code', trigger: 'blur' }
                ],
                 firstname: [
                    { required: true, message: 'Please input firstname'}
                ],
                lastname: [
                    { required: true, message: 'Please input lastname'}
                ],
                bdate: [
                    { required: true, message: 'Please select birthdate'}
                ],
                age: [
                    { required: true, message: 'Please input age'}
                ],
                gender: [
                    { required: true, message: 'Please select gender'}
                ],
                mobile: [
                    { required: true, message: 'Please input mobile number'},
                    { min: 11, max: 11, message: 'Mobile number must be 11 digits', }
                ],
                house: [
                    {required: true, message: 'Please input House / Bldg no.'}
                ],
                street: [
                    {required: true, message: 'Please input street'}
                ],
                province: [
                    {required: true, message: 'Please select province'}
                ],
                municipality: [
                    {required: true, message: 'Please select province'}
                ],
                zipcode: [
                    {required: true, message: 'Please input zipcode'}
                ],
                email: [
                    { required: true, message: 'Please input email address' },
                    { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
                ],
                password : [
                     { required: true, validator: validatePass, trigger: 'blur' },
                     { min: 8, max: 100, message: 'Password must be at least 8 characters ', }
                ],
                confirmpwd : [
                     { required: true, validator: validatePass2, trigger: ['blur', 'change']  }
                ],
                verificationcode : [
                     { required: true, message: 'Please input verification code' }
                ],
            }
        }
    },
    methods:{
        onnext(){
            this.active++
        },  
        onprevious(){
            this.active--
        }, 
        onlogin(){
            this.$router.push({name: "Login"}).catch(()=>{})
        },
        oncancel(){
            this.$router.push({name: "Home"}).catch(()=>{})
        }
    }
}
</script>

<style scoped src="@/assets/styles/Student/signup_page.css"> </style>