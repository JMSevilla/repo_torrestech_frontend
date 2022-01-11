<template>
    <div>
        <div class="row justify-content-center mt-5">
            <div class="col-md-9 paragtext">
                <h6>Please complete the following details below.</h6>
                <el-form status-icon :model="signup" :rules="rules" ref="ruleForm" label-width="120px" :labelPosition="labelPosition">
                    <el-form-item label="Firstname" prop="firstname"  class="el-form-item--label-top">
                        <TextField
                            placeholder="Enter your First Name" 
                            v-model="signup.firstname"
                            >
                        </TextField>
                    </el-form-item>
                    <el-form-item label="Last Name" prop="lastname" class="el-form-item--label-top">
                        <TextField
                            placeholder="Enter your Last Name" 
                            v-model="signup.lastname"
                            >
                        </TextField>
                    </el-form-item>
                     <el-form-item label="Birthdate" prop="bdate" class="el-form-item--label-top">
                        <el-date-picker type="date" placeholder="Pick a date" v-model="signup.bdate" 
                         format="yyyy/MM/dd" value-format="yyyy/MM/dd" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="Age" prop="age" class="el-form-item--label-top">
                        <TextField
                            placeholder="Enter your Age" 
                            style="width: 60%"
                            type="number" 
                            v-model="signup.age">
                        </TextField>
                    </el-form-item>
                    <el-form-item label="Gender" prop="gender">
                        <el-radio v-model="signup.gender" label="1">Female</el-radio>
                        <el-radio v-model="signup.gender" label="2">Male</el-radio>
                    </el-form-item>
                    <el-form-item label="Mobile Number" prop="mobile" class="el-form-item--label-top">
                        <TextField
                            style="width: 60%"
                            type="number"
                            v-model="signup.mobile"
                            id="contact"
                            oninput="if(value.length > 11) value=value.slice(0, 11)"
                            
                            placeholder="Enter your mobile number"
                            >
                        </TextField>
                    </el-form-item>
                    <el-form-item class="mt-4">
                        <el-button class="previousbtn" @click="onprevious()">PREVIOUS</el-button> 
                        <el-button class="nextbtn" @click="onsubmit('ruleForm')">NEXT</el-button> 
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
    components:{
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

