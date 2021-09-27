<template>
  <div>
    <div class="card container" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2)">
      <div class="card-body py-4 m-0 ">
        <h3>Add New Student</h3>
        <hr>
      </div>
      <div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" labelPosition="left" label-width="140px" class="demo-ruleForm">
          <div>
            <el-row style="width:700px; margin:auto">
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
                  <el-input type="password" v-model="ruleForm.password" placeholder="Enter password"></el-input>
                </el-form-item>
                <el-form-item label="Confirm Password" prop="confirmpass">
                  <el-input type="password" v-model="ruleForm.confirmpass" placeholder="Confirm password"></el-input>
                </el-form-item>
                <div>
                  <el-form-item style="float: right" >
                    <el-button class="btnreset" @click="resetForm('ruleForm')">Reset</el-button>
                    <el-button class="btninsert" @click="submitForm('ruleForm')">Save</el-button>
                  </el-form-item>
                </div>
            </el-row>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<style scoped src="@/assets/styles/Administrator/Training/addNewTrainings.css"></style>

<script>
  export default {
    data() {
        var validatePass = (rule, value, callback) => {
            if (value === '') {
            callback(new Error('Please enter your password'));
            } 
            else {
              callback();
            }
        }
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
            callback(new Error('Please confirm your password'));
            } 
            else if (value !== this.ruleForm.password) {
            callback(new Error('Your password do not match'));
            } 
            else {
            callback();
            }
        }
      return {
        ruleForm: {
          firstname: '',
          lastname: '',
          email: '',
          password: '',
          confirmpass: ''
        },
        rules: {
            firstname: [
                {required: true, message: 'Please enter your first name', trigger: 'blur'}
            ],
            lastname: [
                {required: true, message: 'Please enter your last name', trigger: 'blur'}
            ],
            email: [
                {required: true, message: 'Please enter your email address', trigger: 'blur'},
                {type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change']} 
            ],
            password : [
                {required: true, validator: validatePass, trigger: 'blur' },
                {min: 8, max: 100, message: 'Password must be at least 8 characters'}
            ],
            confirmpass : [
                {required: true, validator: validatePass2, trigger: ['blur', 'change']}
            ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('New student successfully added');
          } else {
            console.log('Sorry, there was a problem. Please try again.');
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