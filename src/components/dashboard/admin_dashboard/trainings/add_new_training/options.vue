<template>
    <div>
         <div class="justify-content-center mt-5 paragtext">
            <h6>Fill each section and click 'Next' to continue.</h6>
            <div>
                <el-form status-icon :model="trainingtask" :rules="rules" ref="ruleForm" label-position="top">
                    <div style="margin: 0 50px">
                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="Status" prop="status">
                                    <el-select style="width: 90%" v-model="trainingtask.status">
                                        <el-option
                                            v-for="item in trainingtask.liststatus"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="Forum" prop="forum">
                                    <el-select style="width: 90%" v-model="trainingtask.forum">
                                        <el-option
                                            v-for="item in trainingtask.listforum"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="Live Chat" prop="livechat">
                                    <el-select style="width: 90%" v-model="trainingtask.livechat">
                                        <el-option
                                            v-for="item in trainingtask.listlivechat"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="Capacity" prop="capacity">
                                    <el-input type="number" style="width: 90%" v-model="trainingtask.capacity" placeholder="Please enter number only" ></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="Payment Required" prop="payment">
                                    <el-select style="width: 90%" v-model="trainingtask.payment">
                                        <el-option
                                            v-for="item in trainingtask.listpayment"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="Course Fee">
                                    <el-input type="number" style="width: 90%" v-model="trainingtask.coursefee" placeholder="Please enter number only" ></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="Effort" prop="effort">
                                    <el-input  style="width: 90%" v-model="trainingtask.effort" placeholder="i.e 12 hours per week" ></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="Length" prop="length">
                                    <el-input style="width: 90%" v-model="trainingtask.length" placeholder="i.e. 6 weeks" ></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-form-item label="Categories" prop="categories">
                           <el-select style="width: 45%" v-model="trainingtask.categories">
                                <el-option
                                    v-for="item in trainingtask.listcategories"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                    <div class="card-footer p-0"  style="background: #FFF">
                        <el-form-item style="margin-right: 30px">
                            <el-button class="next-button" @click="onsubmit('ruleForm')">NEXT</el-button>
                            <el-button class="back-button" @click="onback()">BACK</el-button>
                        </el-form-item>
                    </div>
                </el-form>
            </div>
        </div>
    </div>
</template>

<style scoped src="@/assets/styles/Administrator/Training/addNewTrainings.css"></style>

<script>
export default {
    props:{
        trainingtask: Object,
        onback: Function,
        onnext: Function,
        rules: Object
    },
    methods:{
        onsubmit(ruleForm){
           this.$refs[ruleForm].validate((valid) =>{
               if(valid){
                   this.onnext();
               }
               else{
                   return false;
               }
           })
        }
    }
}
</script>