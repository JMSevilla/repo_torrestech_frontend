<template>
    <div>
        <div class="wrapper">
           <div  class="p-4" style="background-color:#f5f7f8 ">
                <div class="row justify-content-center">
                    <div class="col-md-4">
                        <el-card style="padding:30px;" shadow="always">
                                <h3 class="forget">Forgot Password</h3>
                                 <div class="remind">
                                     <h6>We have sent you the code to your registered email </h6>
                                </div>
                                <el-form :model="resetByCode"  ref="formName" label-width="120px" :labelPosition="labelPosition" :rules="rules">
                                    <el-form-item label="Enter Code" prop="code" >
                                        <TextField type="text" v-model="resetByCode.code" ></TextField>
                                    </el-form-item>
                                    <el-form-item>
                                        <el-button style="margin:20px 0; width:45%" class="cBtn" id="cancel">Cancel</el-button>
                                        <el-button style="margin:20px 0; width:45%" @click="send('formName')" class="sBtn" id="send">Send</el-button>
                                    </el-form-item>
                                </el-form>         
                        </el-card>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped src="@/assets/styles/login/resetCode.css">
</style>
<script>
import TextField from "@/components/TextField/TextField"
export default {
    props:{
       resetByCode:Object,
       labelPosition:String,
       rules:Object

    },
    components:{
        TextField
    },
    methods:{
        send(formName){
            this.$refs[formName].validate((valid) => { 
               if (valid) { 
                   alert('submit!');
                   this.$router.push({name:"resetPassword"}).catch(()=> {}); 
               } else { 
                   console.log('error submit!!'); return false;
                } });
    }
}
}
</script>

