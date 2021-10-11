<template>
    <div class="con-width">
        <b-navbar>
            <nav class="container-fluid">
                <div>
                    <i class="el-icon-s-unfold text-white show-sidebar1" style="padding: 0px; cursor: pointer" @click="showNav()"></i>
                    <i class="el-icon-s-unfold text-white show-sidebar2" style="padding: 0px; cursor: pointer" @click="toggleSidebar()"></i>
                </div>
                <div style="flex">
                    <el-dropdown>
                        <span class="el-dropdown-link">
                            <i class="fas fa-user-alt text-white" style="padding: 15px 0; margin-right: 3px"></i><i class="el-icon-caret-bottom"></i>
                            <span style="margin-right: 15px ">Hi, Teacher!</span>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item divided @click.native="employeeProfile()">Profile</el-dropdown-item>
                            <el-dropdown-item divided>Logout</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </nav>
        </b-navbar>
    </div>
</template>

<script>
export default {
    methods:{
        employeeProfile(){
            this.$router.push({name: "EmployeeProfile"}).catch(()=>{})
        }
    },
    props:{
        showNav: Function,
        toggleSidebar: Function
     },
    
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
    color: white;
    
  }
  .el-icon-caret-bottom {
    font-size: 12px;
    margin-right: 10px;
  
  }

.show-sidebar2{
    display: none;
}


@media screen and (max-width: 415px){
.show-sidebar1{
    display: none;
}
.show-sidebar2{
    display: flex;
}
}
 

</style>