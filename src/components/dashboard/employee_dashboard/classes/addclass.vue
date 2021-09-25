<template>
    <div>
        <div class="card" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2)">
          <div class="card-header" style="background: #FFF">
              <h3 class="classcode-headline">Add New Class</h3>
          </div>
          <div style="margin: 10px 0px">
                <el-form status-icon :model="classcode" :rules="rules" ref="ruleForm" label-position="top">
                    <div style="margin: 0 50px">
                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="Class Name" prop="classname">
                                    <el-input style="width: 90%" v-model="classcode.classname" placeholder="Enter class name" ></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="Training Under" prop="training">
                                    <el-select style="width: 90%" v-model="classcode.training" placeholder="Select training">
                                        <el-option
                                            v-for="item in classcode.listtraining"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="24">
                                <el-form-item label="Status" prop="status">
                                    <el-select style="width: 95%" v-model="classcode.status" placeholder="Select status">
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
                                        style="width: 95%"
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
                        <el-form-item style="margin-right: 30px">
                            <el-button class="save-button" @click="onsave('ruleForm')">SAVE</el-button>
                        </el-form-item>
                    </div>
                </el-form>
          </div>
        </div>
    </div>
</template>

<style scoped src="@/assets/styles/Employee_Dashboard/Classes/classes.css"></style>

<script>
import {mapGetters} from 'vuex';
export default {
    props:{
        classcode: Object,
        rules: Object
    },
    computed:{
        ...mapGetters({
            CResponse : 'claims_get_classes_response'
        })
    },
    methods:{
         onsave(ruleForm){
             this.$confirm('Are you sure you want to add this training?', 'Warning', {
                cancelButtonText: 'Cancel',
                confirmButtonText: 'Yes',
                type: 'warning'
                })
                .then(() => {
                    const loading = this.$loading({
                    lock: true,
                    text: 'please wait...',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                    });
                    setTimeout(() => {
                        this.$refs[ruleForm].validate((valid) =>{
                            this.generateClasscode(6)
                            if(valid){
                               try {
                                    this.$store.dispatch(`actions_classes_add`, {
                                    object: this.classcode
                                }).then(() => {
                                    console.log(this.CResponse)
                                    if(this.CResponse === "SUCCESS CREATE CLASSES"){
                                        loading.close()
                                        this.$notify.success({
                                        title: 'Yey',
                                        message: 'Successfully created',
                                        offset: 100
                                        }); 
                                        
                                    }
                                }).catch((e) => {
                                    if(this.CResponse == null || undefined){
                                        loading.close()
                                        console.log("FAIL" , e)
                                    }
                                })
                               } catch (error){
                                   loading.close()
                                   console.log(error)
                               }
                            }
                            else{
                                return false;
                            }
                        })
                    }, 3000)
                })
        },
        generateClasscode(length){
            var result           = [];
            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for ( var i = 0; i < length; i++ ) {
                result.push(characters.charAt(Math.floor(Math.random() *
            charactersLength)));
            }
            // console.log(result.join(""));
            return this.classcode.generatedClasscode = result.join("");
        }
    }
}
</script>