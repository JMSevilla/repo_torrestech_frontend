<template>
    <div>
        <HeaderEmployee />
        <div class="p-4">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header" style="background: #fff">
                        <h3 style="color: #2d4059; font-weight: bold; margin: 0; padding: 0">Employee Information</h3>
                    </div>
                    <div style="padding: 60px 0 0 0">
                        <!-- <div class="row"> -->
                                <!-- <div class="col-md-8"> -->
                                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" labelPosition="top" label-width="140px" class="demo-ruleForm">
                                    <div style="margin: 0 50px;">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <el-form-item label="Full Name" prop="fullname">
                                                    <el-input v-model="ruleForm.fullname" placeholder="Enter full name"></el-input>
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
                                                <el-form-item label="API Key" prop="apikey">
                                                    <el-input v-model="ruleForm.apikey" readonly></el-input>
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
                                        </div>
                                    </div>
                                    <div class="card-footer p-0 mt-5">
                                        <el-form-item style="float: right; margin-top: 30px; margin-right: 50px;">
                                        <el-button class="btnreset" @click="back()">BACK</el-button>
                                        <el-button class="btninsert" @click="Save('ruleForm')">SAVE CHANGES</el-button>
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
    </div>
</template>

<script>
import HeaderEmployee from "@/components/dashboard/admin_dashboard/employees_tab/headeremployee"
  export default {
    components: {
        HeaderEmployee
    },
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
        success: 'success',
        ruleForm: {
          fullname: '',
          email: '',
          password: '',
          confirmpass: '',
          platform: '',
          apikey: ''
        },
        rules: {
            fullname: [
                { required: true, message: 'Please enter full name', trigger: 'blur' }
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
      Save(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
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
                if(this.success === 'success') {
                    this.$notify.success({
                        title: 'Success',
                        message: 'Success'
                    })
                    loading.close();
                }
                else {
                    this.$notify.error({
                        title: 'Error',
                        message: 'Error'
                    })
                }
                }, 3000);
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      back() {
        this.$router.push({ name: 'AllEmployee' }).catch(()=>{});
      },
    }
  }
</script>

<style scoped src="@/assets/styles/Administrator/students/studemployee.css"></style>