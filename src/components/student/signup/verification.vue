<template>
    <div>
        <div class="row justify-content-center mt-5 mb-5">
            <div class="col-md-7 paragtext">
                <h6>Please enter the code we have sent to your email.</h6>
                <el-form status-icon :model="signup" :rules="rules" ref="ruleForm" :labelPosition="labelPosition" label-width="90px">
                    <el-form-item prop="verificationcode" label="Code" >
                        <TextField
                            placeholder="Enter your code" 
                            v-model="signup.verificationcode"
                            >
                        </TextField>
                    </el-form-item>
                   <el-form-item class="mt-4">
                        <el-button class="previousbtn verificationbtn" @click="onprevious()">PREVIOUS</el-button> 
                        <el-button class="nextbtn verificationbtn" @click="onsubmit('ruleForm')">NEXT</el-button> 
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<style scoped src="@/assets/styles/Student/signup_page.css"> </style>

<script>
import TextField from "@/components/TextField/TextField"
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
    methods:{
        onsubmit(ruleForm){
            this.$refs[ruleForm].validate((valid) => {
            if (valid) {
                this.onnext();
            } else {
                return false;
            }
            });
        },
    }
}
</script>