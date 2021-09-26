<template>
    <div>
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header" style="background: #fff">
                        <h3 style="color: #2d4059; font-weight: bold; margin: 0; padding: 0">Message</h3>
                    </div>
                    <div style="padding: 60px 0 0 0">
                        <!-- <div class="row"> -->
                                <!-- <div class="col-md-8"> -->
                                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" labelPosition="top" label-width="140px" class="demo-ruleForm">
                                    <div style="margin: 0 50px;">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <el-form-item label="Training" prop="training">
                                                    <el-select v-model="ruleForm.training" placeholder="Choose Trainings" style="width: 100%">
                                                        <el-option
                                                            v-for="item in ruleForm.listTrainings"
                                                            :key="item.training"
                                                            :label="item.training"
                                                            :value="item.training">    
                                                        </el-option>
                                                    </el-select>
                                                </el-form-item>
                                            </div>
                                            <div class="col-md-12">
                                                <el-form-item label="Student" prop="studentsname">
                                                    <el-select v-model="ruleForm.studentsname" multiple filterable placeholder="Select Student Name" style="width: 100%">
                                                        <el-option
                                                        v-for="item in ruleForm.studentslist"
                                                        :key="item.studentsname"
                                                        :label="item.studentsname"
                                                        :value="item.studentsname">
                                                        </el-option>
                                                    </el-select>
                                                </el-form-item>
                                            </div>
                                            <div class="col-md-12">
                                                <el-form-item label="Subject" prop="subject">
                                                    <el-input v-model="ruleForm.subject" placeholder="Enter message subject"></el-input>
                                                </el-form-item>
                                            </div>
                                            <div class="col-md-12">
                                                <el-form-item label="Message" prop="body">
                                                    <el-input type="textarea" v-model="ruleForm.body" placeholder="Enter message body"></el-input>
                                                </el-form-item>
                                            </div>
                                            <div class="col-md-12">
                                                <el-upload
                                                    class="upload-demo"
                                                    drag
                                                    action="https://jsonplaceholder.typicode.com/posts/"
                                                    :on-preview="handlePreview"
                                                    :on-remove="handleRemove"
                                                    :file-list="fileList"
                                                    multiple>
                                                    <i class="el-icon-upload"></i>
                                                    <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
                                                    <div class="el-upload__tip" slot="tip">jpg/png files with a size less than 500kb</div>
                                                </el-upload>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-footer p-0 mt-5">
                                        <el-form-item style="float: right; margin-top: 30px; margin-right: 50px;">
                                        <el-button class="btnreset" @click="resetForm('ruleForm')">Reset</el-button>
                                        <el-button class="btninsert" @click="Send('ruleForm')">Send</el-button>
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
  export default {
    data() {
      return {
        success: 'success',
        ruleForm: {
          training: '',
          listTrainings: [
            {
                training: 'training1',
            },
            {
                training: 'training2',
            },
            {
                training: 'training3',
            }
          ],
          studentsname: '',
          studentslist: [
            {
                studentsname: 'stud1',
            },
            {
                studentsname: 'stud2',
            },
            {
                studentsname: 'stud3',
            }
          ],
          subject: '',
          body: '',
          files: ''
        },
        rules: {
            training: [
                { required: true, message: 'Please select training', trigger: 'blur' }
            ],
            studentsname: [
                { required: true, message: 'Please select name of student', trigger: 'blur' }
            ],
            subject: [
                { required: true, message: 'Please enter subject', trigger: 'blur' }
            ],
            body : [
                { required: true, message: 'Please enter message', trigger: 'blur' },
            ],
        }
      };
    },
    methods: {
      Send(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert('submit!');
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
                if(this.success === 'success') {
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
            }, 3000);
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
        handleClose(done) {
           this.dialogVisible = true
      }
    }
  }
</script>

<style scoped src="@/assets/styles/Administrator/students/studemployee.css"></style>