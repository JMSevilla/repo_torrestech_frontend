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
import {mapGetters} from 'vuex'
export default {
    props:{
        trainingtask: Object,
        onback: Function,
        onnext: Function,
        rules: Object
    },
    computed: {
        ...mapGetters({
            TResponse : 'claims_get_training_response'
         })
    },
    methods:{
        onsubmit(ruleForm){
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
                            if(valid){
                               try {
                                    this.$store.dispatch(`actions_training_add`, {
                                    object: this.trainingtask
                                }).then(() => {
                                    console.log(this.TResponse)
                                    if(this.TResponse === "SUCCESS CREATE TRAINING"){
                                        loading.close()
                                        this.$notify.success({
                                        title: 'Yey',
                                        message: 'Successfully created',
                                        offset: 100
                                        }); 
                                        
                                    }
                                }).catch((e) => {
                                    if(this.TResponse == null || undefined){
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
            
        }
    }
}
</script>