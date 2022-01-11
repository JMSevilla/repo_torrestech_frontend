<template>
    <div>
        <div class="wrapper">
            <div  class="p-4" style="background-color:#f5f7f8 ">
                <div class="row justify-content-center">
                    <div class="col-md-4">
                        <el-card style="padding:30px;">
                                <h3 class="forget">Reset Password</h3>
                                <el-form ref="formName" :model="resetPassword" label-width="120px" :labelPosition="labelPosition" :rules="rules">
                                    <el-form-item label="Enter New Password" prop="password">
                                        <TextField  type="password" placeholder="Enter password"  v-model="resetPassword.password" ></TextField>
                                    </el-form-item>
                                    <el-form-item label="Confirm Password" prop="cpassword">
                                        <TextField  type="password" placeholder="Confirm password"  v-model="resetPassword.cpassword"  ></TextField>
                                    </el-form-item> 
                                    <el-form-item>
                                        <el-button style="margin:20px 0; width:45%" class="cBtn" id="cancel">Cancel</el-button>
                                        <el-button style="margin:20px 0; width:45%" @click="send('formName')" class="sBtn" id="send">Send</el-button>
                                    </el-form-item>
                                    </el-form>
                                    <!-- <div class="textInput">
                                        <p>Enter New Password</p>
                                            <div class>
                                                <el-input type="password" v-model="resetPassword.password"  id="email" clearable ></el-input>
                                            </div>
                                    </div>
                                    <div class="textInput">
                                        <p>Confirm New Password</p>
                                            <div class>
                                                <el-input type="password" v-model="resetPassword.cPassword" id="email" clearable></el-input>
                                            </div>
                                    </div>
                                            
                                    <b-button id="cancel" class="cBtn" style="margin-top:30px;" variant="primary">Cancel</b-button>
                                    <b-button id="send" @click="send()" class="sBtn" style="margin-top:30px;"  variant="primary">Save</b-button>           -->
                        </el-card>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped src="@/assets/styles/login/resetPass.css">
</style>
<script>
import TextField from '@/components/TextField/TextField'
export default {
    props:{
       labelPosition:String,
       resetPassword:Object,
       send:Function,
       rules:Object
    },
    components:{
        TextField
    },
    methods:{
        send(formName){
            this.$refs[formName].validate((valid) =>{
               if (valid){
                   alert('submit');
                   this.$router.push({name:"Login"}).catch(()=> {});
               }else{
                 console.log('error submit!!'); return false;  
               }
            });
        }
    }
}
</script>