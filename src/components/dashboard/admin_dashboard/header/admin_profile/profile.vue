<template>
    <div>
        <div class="card" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2)">
            <div class="mt-5" style="margin:100px">
              <div class="row">
                <div class="col-sm-4">
                  <el-row>
                      <el-card :body-style="{ padding: '0px' }">
                        <img src="@/assets/img/adminavatar/avatar.jpg" class="image">
                        <div style="margin-left:20px; margin-right:20px">
                          <el-upload
                            class="upload-demo"
                            ref="upload"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :auto-upload="false">
                             <el-button class="fileselect" slot="trigger">SELECT FILE</el-button>
                             <el-button class="upload" @click="submitUpload">UPLOAD</el-button>
                            <div class="el-upload__tip" slot="tip">accepts only jpg/png files</div>
                          </el-upload>
                        </div>
                      </el-card>
                  </el-row>
                </div>
                <div class="col-sm-8">
                  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="130px" label-position="left" class="demo-ruleForm">
                    <el-form-item label="First Name" prop="firstname">
                      <el-input v-model="ruleForm.firstname"></el-input>
                    </el-form-item>
                    <el-form-item label="Last Name" prop="lastname">
                      <el-input v-model="ruleForm.lastname"></el-input>
                    </el-form-item>
                    <el-form-item label="Email" prop="email">
                      <el-input v-model="ruleForm.email"></el-input>
                    </el-form-item>
                    <el-form-item label="Password" prop="password">
                      <el-input v-model="ruleForm.password" autocomplete="off" type="password"></el-input>
                    </el-form-item>
                    <el-form-item label="Confirm Password" prop="confirmpass">
                      <el-input v-model="ruleForm.confirmpass" autocomplete="off" type="password"></el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-button class="submitbtn" @click="submitForm('ruleForm')">SUBMIT</el-button>
                      <el-button class="cancelbtn" @click="resetForm('ruleForm')">CANCEL</el-button>
                    </el-form-item>
                  </el-form>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>

<style scoped src="@/assets/styles/Administrator/profile.css"></style>

<style>
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>

<script>
  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password'));
        } else {
          if (this.ruleForm.confirmpass !== '') {
            this.$refs.ruleForm.validateField('confirmpass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password again'));
        } else if (value !== this.ruleForm.password) {
          callback(new Error('Two inputs don\'t match!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          firstname: 'Juan',
          lastname: 'Dela Cruz',
          email: 'jdelacruz@gmail.com',
          password: 'admin',
          confirmpass: 'admin'
        },
        rules: {
          firstname: [
            { required: true, message: 'This field must not be empty', trigger: 'blur' }
          ],
          lastname: [
            { required: true, message: 'This field must not be empty', trigger: 'blur' }
          ],
           email: [
           { required: true, message: 'Please input email address', trigger: 'blur' },
           { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
          ],
          password: [
            { required: true, validator: validatePass, trigger: 'blur' }
          ],
          confirmpass: [
            { required: true, validator: validatePass2, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$message('Profile Updated!');
            this.$router.push({name: 'AdminDashboard'}).catch(()=>{});
          } else {
            this.$message('Update Error');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
        this.$router.push({name: 'AdminDashboard'}).catch(()=>{});
      },
      submitUpload() {
        this.$refs.upload.submit();
      }
    }
  }
</script>