<template>
  <div>
    <el-dropdown @command="handleCommand">
  <span class="el-dropdown-link">
    <i class="fas fa-user-alt text-white" style="padding: 15px 0;"></i>
    <i class="el-icon-caret-bottom" style="margin-right: 6px;"></i>
    <span>Hi, Admin!</span>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item command="AdminProfile">Profile</el-dropdown-item>
    <el-dropdown-item @click.native="onactivitylog()">Activity Log</el-dropdown-item>
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
import {mapGetters} from 'vuex'
  export default {
    computed: {
      ...mapGetters({
        destroyedToken : 'claims_get_response_token_update'
      })
    },
    methods: {
      onOver() {
        this.$refs.dropdown.visible = true;
      },
      onLeave() {
        this.$refs.dropdown.visible = false;
      },
        handleCommand(command) {
            
        if(command=="Login"){
          const loading = this.$loading({
                    lock: true,
                    text: 'please wait...',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                    });
          setTimeout(() => {
            this.$store.dispatch(`actions_token_update`, {
                                email : localStorage.getItem('ems'),
                                token : "",
                                decision: false
                            }).then(() => {
                              const response = this.destroyedToken
                              if(response.status === "update token admin logout"){
                                loading.close()
                              localStorage.setItem("state", "")
                               localStorage.setItem("ems", "")
                               this.$router.push({name : 'Login'}).catch(() => {})
                              }
                            })
          }, 2000)
        }
      },
      onactivitylog(){
        this.$router.push({name: 'ActivityLog'}).catch(() => {})
      }

    }
  }
</script>
