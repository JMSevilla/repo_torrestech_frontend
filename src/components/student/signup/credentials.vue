<template>
    <div>
        <div class="row justify-content-center mt-5">
            <div class="col-md-9 paragtext">
                <h6>Please enter your credentials.</h6>
                <el-form status-icon :model="signup" :rules="rules" ref="ruleForm" :labelPosition="labelPosition" label-width="140px">
                    <el-form-item prop="email" label="Email" class="el-form-item--label-top">
                        <TextField
                            type="email"
                            placeholder="Enter your Email Address"
                            v-model="signup.email"
                            >
                        </TextField>
                    </el-form-item>
                    <el-form-item prop="password" label="Password" class="el-form-item--label-top">
                        <TextField 
                            placeholder="Enter your password" 
                            v-model="signup.password" 
                            >
                        </TextField>
                    </el-form-item>
                    <el-form-item prop="confirmpwd" label=" Confirm Password" class="el-form-item--label-top">
                        <TextField 
                            placeholder="Confirm password" 
                            v-model="signup.confirmpwd" 
                            >
                        </TextField>
                    </el-form-item>
                    <el-form-item class="mt-4">
                        <el-button class="previousbtn credentialsbtn" @click="onprevious()">PREVIOUS</el-button> 
                        <el-button class="nextbtn credentialsbtn" @click="onsubmit('ruleForm')">NEXT</el-button> 
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<style scoped src="@/assets/styles/Student/signup_page.css"> </style>

<script>
import TextField from "@/components/TextField/TextField"
import { mapGetters } from "vuex";
export default {
    props:{
        onprevious: Function,
        onnext: Function,
        signup: Object,
        rules: Object,
        labelPosition: String
    },
    components: {
        TextField
    },
    computed: {
        ...mapGetters({
            getStudentReg: 'claims_get_student_signup_response'
        })
    },
    methods:{
        onsubmit(ruleForm){
            this.$refs[ruleForm].validate((valid) => {
                if (valid) {
                    this.$store.dispatch(`actions_student_signup_setup`, {object: this.signup}).then(() => {
                        if(this.getStudentReg === 'success') {
                            this.$notify.success({
                                title: 'Success',
                                message: 'Success'
                            })
                        }
                        else {
                            this.$notify.error({
                                title: 'Error',
                                message: 'Error'
                            })
                        }
                    })
                } else {
                    return false;
                }
            });
        },
    }
}
</script>