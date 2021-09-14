<template>
    <div>
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header" style="background: #fff">
                        <h3 style="color: #2d4059; font-weight: bold; margin: 0; padding: 0">Add Employee</h3>
                    </div>
                    <div class="card-body" style="padding: 60px 0">
                        <div class="row">
                                <div class="col-md-8">
                                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" labelPosition="left" label-width="140px" class="demo-ruleForm">
                                    <div style="margin: 0 50px;">
                                      <el-form-item label="First Name" prop="firstname">
                                          <el-input v-model="ruleForm.firstname" placeholder="Enter first name"></el-input>
                                      </el-form-item>
                                      <el-form-item label="Last Name" prop="lastname">
                                          <el-input v-model="ruleForm.lastname" placeholder="Enter last name"></el-input>
                                      </el-form-item>
                                      <el-form-item label="Email Address" prop="email">
                                          <el-input v-model="ruleForm.email" placeholder="Enter email address"></el-input>
                                      </el-form-item>
                                      <el-form-item label="Password" prop="password">
                                          <el-input v-model="ruleForm.password" placeholder="Enter password"></el-input>
                                      </el-form-item>
                                      <el-form-item label="Confirm Password" prop="confirmpass">
                                          <el-input v-model="ruleForm.confirmpass" placeholder="Confirm password"></el-input>
                                      </el-form-item>
                                      <el-form-item label="Choose Platform" prop="platform">
                                          <el-select v-model="ruleForm.platform" placeholder="Choose platform" style="width: 100%">
                                          <el-option label="Torres Technology UAM" value="Torres Technology UAM"></el-option>
                                          <el-option label="Torress Technology Employee" value="Torress Technology Employee"></el-option>
                                          <el-option label="Both" value="Both"></el-option>
                                          </el-select>
                                      </el-form-item>
                                      <el-form-item style="float: right">
                                          <el-button class="btnreset" @click="resetForm('ruleForm')">Reset</el-button>
                                          <el-button class="btninsert" @click="submitForm('ruleForm')">Save</el-button>
                                      </el-form-item>
                                    </div>
                                </el-form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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
        ruleForm: {
          firstname: '',
          lastname: '',
          email: '',
          password: '',
          confirmpass: '',
          platform: ''
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
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>
    .btninsert{
        background: #0f5298;
        color: #fff;
        font-size: 14px;
        font-weight: bold;
        /* float: right; */
    }
    .btnreset{
        color: #0f5298;
        background: #fff;
        border-color: #0f5298;
        font-size: 14px;
        font-weight: bold;
        /* float: right; */
    }
    .btnreset:hover{
        background: #0f5298;
        color: #fff;
        border-color: #0f5298;
        font-size: 14px;
        font-weight: bold;
        /* float: right; */
    }
</style>