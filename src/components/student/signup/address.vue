<template>
    <div>
        <div class="row justify-content-center mt-5">
            <div class="col-md-9 paragtext">
                <h6>Please enter your complete address.</h6>
                <el-form status-icon :model="signup" :rules="rules" ref="ruleForm" :labelPosition="labelPosition" label-width="125px">
                    <el-form-item label="House / Bldg No." prop="house">
                        <el-input
                            placeholder="Enter House No. / Bldg No."
                            v-model="signup.house"
                            clearable>
                        </el-input>
                    </el-form-item>
                    <el-form-item label="Street" prop="street">
                        <el-input
                            placeholder="Enter Street" 
                            v-model="signup.street"
                            clearable>
                        </el-input>
                    </el-form-item>
                    <el-form-item label="Province" prop="province">
                        <el-select style="width: 100%" v-model="signup.province" filterable placeholder="Select province">
                            <el-option
                                v-for="item in signup.listprovince"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="Municipality" prop="municipality">
                        <el-select style="width: 100%" v-model="signup.municipality" filterable placeholder="Select your municipality">
                            <el-option
                                v-for="item in signup.listmunicipality"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="Zip code" prop="zipcode">
                        <el-input
                            placeholder="Enter Zip code"
                            v-model="signup.zipcode"
                            clearable
                            type="number">
                        </el-input>
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
export default {
    props:{
        onprevious: Function,
        onnext: Function,
        signup: Object,
        rules: Object,
        labelPosition: String
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