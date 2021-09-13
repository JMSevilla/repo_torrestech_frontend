<template>
  <div>
    <el-dropdown @command="handleCommand">
  <span class="el-dropdown-link">
    <i class="fas fa-user-alt text-white" style="padding: 19px 0"></i>
    <i class="el-icon-caret-bottom" style="margin-left: 5px; margin-right: 50px"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item command="AdminProfile">Profile</el-dropdown-item>
    <el-dropdown-item command="ActivityLog">Activity Log</el-dropdown-item>
    <el-dropdown-item command="Login">Logout</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
  </div>
</template>

<style>
  .el-dropdown-link {
    cursor: pointer;
    color: white;
  }
  
  .el-dropdown-menu__item {
    color: #2d4059;
}

</style>

<script>
  export default {
    methods: {
      onOver() {
        this.$refs.dropdown.visible = true;
      },
      onLeave() {
        this.$refs.dropdown.visible = false;
      },
        handleCommand(command) {
        this.$router.push({name: ''+command}).catch(()=>{});
        if(command=="Login"){
          this.$message('Successfully logged-out!');
        }
      },

    }
  }
</script>
