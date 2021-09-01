<template>
    <div>
         <div class="justify-content-center mt-5 paragtext">
            <h6>Fill each section and click 'Next' to continue.</h6>
            <div>
                <el-form status-icon :model="trainingtask" :rules="rules" ref="ruleForm" label-position="top">
                    <div style="margin: 0 50px">
                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="Training Start Date" prop="startdate">
                                    <el-date-picker 
                                        type="date" 
                                        placeholder="Pick a date" 
                                        v-model="trainingtask.startdate" 
                                        format="yyyy/MM/dd" 
                                        value-format="yyyy/MM/dd" 
                                        style="width: 90%;">
                                    </el-date-picker>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="Training End Date" prop="enddate">
                                    <el-date-picker 
                                        type="date" 
                                        placeholder="Pick a date" 
                                        v-model="trainingtask.enddate" 
                                        format="yyyy/MM/dd" 
                                        value-format="yyyy/MM/dd" 
                                        style="width: 90%;">
                                    </el-date-picker>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </div>
                    <div class="card-footer p-0"  style="background: #FFF">
                        <el-form-item style="margin-right: 30px">
                            <el-button class="next-button" @click="onsubmit('ruleForm')">NEXT</el-button>
                            <el-button class="next-button" @click="onback()">BACK</el-button>
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
            this.$refs[ruleForm].validate((valid)=>{
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