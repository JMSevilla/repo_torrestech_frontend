<template>
    <div>
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header" style="background: #fff">
                        <h3 style="color: #2d4059; font-weight: bold; margin: 0; padding: 0">Add Employee</h3>
                    </div>
                    <div style="padding: 60px 0 0 0">
                        <!-- <div class="row"> -->
                                <!-- <div class="col-md-8"> -->
                                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" labelPosition="top" label-width="140px" class="demo-ruleForm">
                                    <div style="margin: 0 50px;">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <el-form-item label="First Name" prop="firstname">
                                                    <el-input v-model="ruleForm.firstname" placeholder="Enter first name"></el-input>
                                                </el-form-item>
                                            </div>
                                            <div class="col-md-6">
                                                <el-form-item label="Last Name" prop="lastname">
                                                    <el-input v-model="ruleForm.lastname" placeholder="Enter last name"></el-input>
                                                </el-form-item>
                                            </div>
                                            <div class="col-md-6">
                                                <el-form-item label="Choose Platform" prop="platform">
                                                    <el-select v-model="ruleForm.platform" placeholder="Choose platform" style="width: 100%">
                                                        <el-option label="Torres Technology UAM" value="Torres Technology UAM"></el-option>
                                                        <el-option label="Torress Technology Employee" value="Torress Technology Employee"></el-option>
                                                        <el-option label="Both" value="Both"></el-option>
                                                    </el-select>
                                                </el-form-item>
                                            </div>
                                            <div class="col-md-6">
                                                <el-form-item label="Email Address" prop="email">
                                                    <el-input v-model="ruleForm.email" placeholder="Enter email address"></el-input>
                                                </el-form-item>
                                            </div>
                                            <div class="col-md-6">
                                                <el-form-item label="Password" prop="password">
                                                    <el-input v-model="ruleForm.password" placeholder="Enter password" show-password></el-input>
                                                </el-form-item>
                                            </div>
                                            <div class="col-md-6">
                                                <el-form-item label="Confirm Password" prop="confirmpass">
                                                    <el-input v-model="ruleForm.confirmpass" placeholder="Confirm password" show-password></el-input>
                                                </el-form-item>
                                            </div>
                                            <div class="col-md-6">
                                                
                                            </div>
                                            <div class="col-md-6">
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-footer p-0 mt-5">
                                        <el-form-item style="float: right; margin-top: 30px; margin-right: 50px;">
                                        <el-button class="btnreset" @click="resetForm('ruleForm')">RESET</el-button>
                                        <el-button class="btninsert" @click="Save('ruleForm')">SAVE</el-button>
                                      </el-form-item>
                                    </div>
                                </el-form>
                            <!-- </div>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex"
  export default {
    data() {
          var validatePass = (rule, value, callback) => {
            if (value === '') {
            callback(new Error('Please input the password'));
            } else {
              callback();
            }
        }
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
            callback(new Error('Please input the password again'));
            } else if (value !== this.ruleForm.password) {
            callback(new Error('Mismatch Password'));
            } else {
            callback();
            }
        }
      return {
        dialogVisible: false,
        ruleForm: {
          firstname: '',
          lastname: '',
          email: '',
          password: '',
          confirmpass: '',
          platform: '',
          apikey: '',
          apiaccess: '1'
        },
        rules: {
            firstname: [
                { required: true, message: 'Please enter first name', trigger: 'blur' }
            ],
            lastname: [
                { required: true, message: 'Please enter last name', trigger: 'blur' }
            ],
            email: [
                { required: true, message: 'Please enter email address', trigger: 'blur' }
            ],
            password : [
                { required: true, validator: validatePass, trigger: 'blur' },
                { min: 8, max: 100, message: 'Password must be at least 8 characters ', }
            ],
            confirmpass : [
                { required: true, validator: validatePass2, trigger: ['blur', 'change']  }
            ],
            platform: [
                { required: true, message: 'Please select platform', trigger: 'change' }
            ],
            apikey: [
                { required: true, message: 'Please generate api key', trigger: 'blur' }
            ],
        }
      };
    },
    computed: {
        ...mapGetters({
            insertEmpReg: 'claims_add_employee_response'
        })
    },
    methods: {
        genapikey() {
            var d = new Date().getTime();
            
            if( window.performance && typeof window.performance.now === "function" )
            {
                d += performance.now();
            }
            
            var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c)
            {
                var r = (d + Math.random()*16)%16 | 0;
                d = Math.floor(d/16);
                return (c=='x' ? r : (r&0x3|0x8)).toString(16);
            });
            return this.ruleForm.apikey = uuid
        },
      Save(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
              this.Done();
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      Done() {
        this.$confirm('Are you sure you want to exit?', 'Warning', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
            const loading = this.$loading({
                lock: true,
                text: 'Loading',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            });
            setTimeout(() => {
                this.$store.dispatch(`actions_insert_employee_setup`, {object: this.signup}).then(() => {
                    if(this.insertEmpReg === 'success') {
                        this.$notify.success({
                            title: 'Success',
                            message: 'Success'
                        })
                        loading.close();
                        this.dialogVisible = false
                    }
                    else {
                        this.$notify.error({
                            title: 'Error',
                            message: 'Error'
                        })
                    }
                })
            }, 3000);
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
        handleClose(done) {
           thi.dialogVisible = true
      }
    }
  }
</script>

<style scoped src="@/assets/styles/Administrator/students/studemployee.css"></style>