<template>
    <div>
        <HeaderStudent />
        <div class="p-4">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header" style="background: #fff">
                        <h3 style="color: #2d4059; font-weight: bold; margin: 0; padding: 0">Student Information</h3>
                    </div>
                    <div style="padding: 60px 0 0 0">
                        <!-- <div class="row"> -->
                                <!-- <div class="col-md-8"> -->
                                    <el-form :model="ruleForm" labelPosition="top" label-width="140px" class="demo-ruleForm">
                                    <div style="margin: 0 50px;">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <el-form-item label="Full Name">
                                                    <el-input v-model="ruleForm.fullname" readonly></el-input>
                                                </el-form-item>
                                            </div>
                                            <div class="col-md-6">
                                                <el-form-item label="Gender" prop="gender">
                                                    <el-radio v-model="ruleForm.gender" label="1">Male</el-radio>
                                                    <el-radio v-model="ruleForm.gender" label="2">Female</el-radio>
                                                </el-form-item>
                                            </div>
                                            <div class="col-md-6">
                                                <el-form-item label="Birth date">
                                                    <el-input v-model="ruleForm.bdate" readonly></el-input>
                                                </el-form-item>
                                            </div>
                                            <div class="col-md-6">
                                                <el-form-item label="Contact Number">
                                                    <el-input v-model="ruleForm.contactnum" readonly></el-input>
                                                </el-form-item>
                                            </div>
                                            <div class="col-md-6">
                                                <el-form-item label="Address">
                                                    <el-input type="textarea" v-model="ruleForm.address" readonly></el-input>
                                                </el-form-item>
                                            </div>
                                            <div class="col-md-6">
                                                <el-form-item label="Trainings">
                                                    <el-input type="textarea" v-model="ruleForm.trainings" readonly></el-input>
                                                </el-form-item>
                                            </div>
                                            <div class="col-md-6">
                                                <el-form-item label="Email Address">
                                                    <el-input v-model="ruleForm.email" readonly></el-input>
                                                </el-form-item>
                                            </div>
                                            <div class="col-md-6">
                                                <el-form-item label="Created At">
                                                    <el-input v-model="ruleForm.createdat" readonly></el-input>
                                                </el-form-item>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-footer p-0 mt-5">
                                        <el-form-item style="float: right; margin-top: 30px; margin-right: 50px;">
                                        <el-button class="btnreset" @click="back()">BACK</el-button>
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
import HeaderStudent from "@/components/dashboard/admin_dashboard/students_tab/headerstudents"
  export default {
    components: {
        HeaderStudent
    },
    data() {
      return {
        success: 'success',
        ruleForm: {
          fullname: '',
          bdate: '',
          gender: '2',
          contactnum: '',
          address: '',
          email: '',
          trainings: '',
          createdat: ''
        }
      }
    },
    methods: {
      back() {
        this.$router.push({ name: 'AllStudents' }).catch(()=>{});
      },
    }
  }
</script>

<style scoped src="@/assets/styles/Administrator/students/studemployee.css"></style>