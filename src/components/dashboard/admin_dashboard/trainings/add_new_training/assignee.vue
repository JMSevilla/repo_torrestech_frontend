<template>
    <div>
         <div class="justify-content-center mt-5 paragtext">
            <h6>Fill each section and click 'Next' to continue.</h6>
            <div>
                <el-form status-icon :model="trainingtask" :rules="rules" ref="ruleForm" label-position="top">
                    <div style="margin: 0 50px">
                        <el-form-item label="Assigned Employee" prop="assignee">
                           <el-select style="width: 45%" v-model="trainingtask.assignee">
                                <el-option
                                    v-for="item in trainingtask.listassignee"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                    <div class="card-footer p-0"  style="background: #FFF">
                        <el-form-item style="margin-right: 30px">
                            <el-button class="next-button" @click="onsubmit('ruleForm')">SAVE</el-button>
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
            this.$refs[ruleForm].validate((valid) =>{
                if(valid){
                    alert("Successfully Saved")
                }
                else{
                    return false;
                }
            })
        }
    }
}
</script>