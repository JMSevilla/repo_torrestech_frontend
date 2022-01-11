<template>
    <div>
        <div class="wrapper">
            <div  class="p-4" style="background-color:#f5f7f8 ">
                <div class="row justify-content-center">
                    <div class="col-md-4">
                        <el-card style="padding:30px" shadow="always">
                                <h3 class="forget">Forgot Password</h3>
                                <div class="remind">
                                     <h6>Please enter your registered email to get the code </h6>
                                </div>
                                <el-form :model="forgetPassword"  ref="formName" label-width="120px" :labelPosition="labelPosition" :rules="rules">
                                    <el-form-item label="Email" prop="email" >
                                        <TextField type="email" v-model="forgetPassword.email" placeholder = "Enter your email" ></TextField>
                                    </el-form-item>
                                    <el-form-item>
                                        <el-button style="margin:20px 0; width:45%" class="cBtn" id="cancel">Cancel</el-button>
                                        <el-button style="margin:20px 0; width:45%" @click="send('formName')" class="sBtn" id="send">Save</el-button>
                                    </el-form-item>
                                </el-form>                        
                        </el-card>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped src="@/assets/styles/login/forgot.css"></style>
<script>
import TextField from "@/components/TextField/TextField"
export default {
    props:{
        forgetPassword:Object,
        labelPosition:String,
        rules:Object
    },
    components: {
       TextField
   },
   methods:{
        send(formName){
            this.$refs[formName].validate((valid) => { 
               if (valid) { 
                   alert('submit!');
                   this.$router.push({name:"resetByCode"}).catch(()=> {}); 
               } else { 
                   console.log('error submit!!'); return false;
                } });
               
        }

    }
}
</script>

