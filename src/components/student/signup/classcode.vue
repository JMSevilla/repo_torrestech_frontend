<template>
    <div>
        <div class="row justify-content-center mt-5 mb-5 sub-container">
            <div class="col-md-7 paragtext">
                <h6>Please enter your class code provided by the company.</h6>
                <div class="mb-4">
                    <el-form status-icon :model="signup" :rules="rules" ref="ruleForm" label-position="top">
                        <el-form-item label="Enter Class Code" prop="ccode">
                            <el-input v-model="signup.ccode" placeholder="Enter your Class Code" clearable></el-input>
                        </el-form-item>
                        <el-form-item class="mt-4">
                            <el-button id="CCcancelbtn" @click="oncancel()">CANCEL</el-button> 
                            <el-button id="CCnextbtn" @click="onsubmit('ruleForm')">VERIFY</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped src="@/assets/styles/Student/signup_page.css"> </style>

<script>
import { mapGetters } from "vuex"
export default {
    props:{
        onnext: Function,
        oncancel: Function,
        signup: Object,
        rules: Object
    },
    computed: {
        ...mapGetters({
            getcheckCode: 'claims_get_classcodecheck_response'
        })
    },
    methods:{
        onsubmit(ruleForm){
            this.$refs[ruleForm].validate((valid) => {
            if (valid) {
                this.$store.dispatch(`actions_classcode_checker_setup`, {object: this.signup}).then(() => {
                    if(this.getcheckCode === 'success') {
                        this.onnext();
                    }
                    else {
                        this.$notify.error({
                            title: 'Error',
                            message: this.getcheckCode
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