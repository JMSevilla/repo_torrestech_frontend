<template>
    <div>
        <div class="card" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2)">
          <div class="card-header" style="background: #FFF">
              <h3 class="classcode-headline">Edit Class</h3>
          </div>
          <div style="margin: 10px 0px">
                <el-form status-icon :model="classcode" :rules="rules" ref="ruleForm" label-position="top">
                    <div style="margin: 0 50px">
                        <div class="row">
                            <div class="col-md">
                                <el-form-item label="Class Name" prop="classname">
                                    <el-input style="width: 95%;" v-model="classcode.classname" placeholder="Enter class name" ></el-input>
                                </el-form-item>
                            </div>
                            <div class="col-md">
                                <el-form-item label="Training Under" prop="training">
                                    <el-select style="width: 95%; " v-model="classcode.training" placeholder="Select training">
                                        <el-option
                                            v-for="item in classcode.listtraining"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                        </div>
                        <el-row>
                            <el-col :span="24">
                                <el-form-item label="Status" prop="status">
                                    <el-select style="width: 98%" v-model="classcode.status" placeholder="Select status">
                                        <el-option
                                            v-for="item in classcode.liststatus"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col>
                                <el-form-item label="Description" prop="description">
                                    <el-input
                                        style="width: 98%"
                                        type="textarea"
                                        :rows="4"
                                        placeholder="Type your description here"
                                        v-model="classcode.description">
                                    </el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
        
                    </div>
                    <div class="card-footer p-0"  style="background: #FFF">
                        <el-form-item style="margin-right: 50px">
                            <el-button class="save-button" @click="onsave('ruleForm')">SAVE</el-button>
                            <el-button class="back-button" @click="onback()">BACK</el-button>
                        </el-form-item>
                    </div>
                </el-form>
          </div>
        </div>
    </div>
</template>

<style scoped src="@/assets/styles/Employee_Dashboard/Classes/classes.css"></style>

<script>
export default {
    props:{
        classcode: Object,
        rules: Object
    },
    methods:{
         onsave(ruleForm){
            this.$refs[ruleForm].validate((valid) => {
            if(valid){
                    alert("Successfully Saved")
                }
                else{
                    return false;
                }
            });
        },
        onback(){
            this.$router.push({name: 'AllClass'}).catch(() => {})
        }
    }
}
</script>