<template>
    <div class="con-width">
        <nav class="container d-flex" style="justify-content: space-between; ">
            <div>
                <i class="el-icon-s-unfold text-white" style="padding: 19px 0"></i>
            </div>
            <div style="flex">
                <el-dropdown>
                    <span class="el-dropdown-link">
                        <i class="fas fa-user-alt text-white" style="padding: 19px 0;"></i><i class="el-icon-caret-bottom el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item divided @click.native="employeeProfile()">Profile</el-dropdown-item>
                        <el-dropdown-item divided>Logout</el-dropdown-item>
                        <!-- <el-dropdown-item disabled>Action 4</el-dropdown-item>
                        <el-dropdown-item divided>Action 5</el-dropdown-item> -->
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    methods:{
        employeeProfile(){
            this.$router.push({name: "EmployeeProfile"}).catch(()=>{})
        }
    }
    
}
</script>

<style scoped>
    .con-width{
        width: 100%;
        margin: auto;
        background: #2d4059;
    }
  .el-dropdown-link {
    cursor: pointer;
    /* color: #7e858d; */
    color: white;
    
  }
  .el-icon-caret-bottom {
    font-size: 12px;
    margin-right: 50px;
    margin-left: 5px;
  
  }
 

</style>