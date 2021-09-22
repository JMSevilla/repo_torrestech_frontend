<template>
    <div>
        <div class="card" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2)">
          <div class="card-header">
              <h3 class="classcode-headline">Add New Class</h3>
          </div>
          <div class="input-form">
            <el-form label-position="top" :model="addquiz" :rules="rules" ref="ruleForm">
                <el-form-item label="Quiz Title" prop="quiztitle">
                  <el-input placeholder="Enter quiz title" v-model="addquiz.quiztitle"></el-input>
                </el-form-item>
                <el-form-item label="Passing Mark (%)" prop="passingmark">
                  <el-input placeholder="Enter number only" v-model="addquiz.passingmark"></el-input>
                </el-form-item>
                <el-form-item label="Status" prop="status">
                  <el-select v-model="addquiz.status" placeholder="Select Status" style="width: 100%">
                    <el-option label="Enable" value="1"></el-option>
                    <el-option label="Disable" value="0"></el-option>
                  </el-select>                    
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" style="float: right" @click="onsave('ruleForm')">SAVE</el-button>
                </el-form-item>
            </el-form>    
          </div>
        </div>
    </div>
</template>

<style scoped src="@/assets/styles/Employee_Dashboard/Quizes/quizes.css"></style>

<script>
export default {
  props:{
    addquiz: Object,
    rules: Object
  },
  methods:{
    onsave(ruleForm){
      this.$refs[ruleForm].validate((valid) => {
        if(valid){
          alert("Successfully Saved")
        }
        else{
          return false;
        }
      });
    }
  }
}
</script>
