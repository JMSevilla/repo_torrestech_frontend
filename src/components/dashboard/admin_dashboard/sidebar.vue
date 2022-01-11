<template>
    <div id="showSidebar">
        <el-menu
        :collapse="isCollapse"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose">
        <div style="border-bottom: 2px #e6e6e6 solid;">
            <img src="@/assets/img/torres-logo-sidebar.png" id="showLogo" alt="" srcset="" class="py-2" width="200px" height="auto" style="margin-left: 13px">
            <i class="fas fa-times toggle-close" id="closeIcon" @click="icon_close()"></i>
        </div>
        <el-submenu index="1" @click.native="ondashboardMenu()" :class="{ active: activeMenu === 'dash' }">
            <template slot="title">
                <i class="fas fa-home"></i>
                <span style="margin-left: 10px">DASHBOARD</span>
            </template>
        </el-submenu>
        <el-submenu index="2" class="hoverBG" @click.native="activeMenu = 'trainings'" :class="{ active: activeMenu === 'trainings' }">
            <template slot="title">
            <i class="fas fa-book"></i>
            <span style="margin-left: 10px">TRAININGS</span>
            </template>
            <el-menu-item index="2-1" @click="onaddnewtraining()" :class="{ active_1: activeItem === 'addnewtraining' }">Add New Training</el-menu-item>
            <el-menu-item index="2-2">All Trainings</el-menu-item>
            <el-menu-item index="2-3" @click="ontrainingcategories()" :class="{ active_1: activeItem === 'trainingcateg' }">Manage Categories</el-menu-item>
        </el-submenu>
        <el-submenu index="3" @click.native="activeMenu = 'students'" :class="{ active: activeMenu === 'students' }">
            <template slot="title">
            <i class="fas fa-users"></i>
            <span style="margin-left: 10px">STUDENTS</span>
            </template>
            <el-menu-item index="3-2" @click="onallstudents()" :class="{ active_1: activeItem === 'allstudents' }">All Students</el-menu-item>
            <el-menu-item index="3-2" @click="onMessage()" :class="{ active_1: activeItem === 'message' }">Message</el-menu-item>
            <el-menu-item index="3-2" @click="onclasscode()" :class="{ active_1: activeItem === 'classcode' }">Class Code</el-menu-item>
        </el-submenu>
        <el-submenu index="4" @click.native="activeMenu = 'employees'" :class="{ active: activeMenu === 'employees' }">
            <template slot="title">
            <i class="fas fa-users"></i>
            <span style="margin-left: 10px">EMPLOYEES</span>
            </template>
            <el-menu-item index="4-1" @click="onaddnewemployee()" :class="{ active_1: activeItem === 'addnewemployee' }">Add New Employee</el-menu-item>
            <el-menu-item index="4-2" @click="onallemployee()" :class="{ active_1: activeItem === 'allemployee' }">All Employee</el-menu-item>
        </el-submenu>
        <el-submenu index="6" @click.native="activeMenu = 'videolibrary'" :class="{ active: activeMenu === 'videolibrary' }">
            <template slot="title">
            <i class="fas fa-video"></i>
            <span style="margin-left: 10px">VIDEO LIBRARY</span>
            </template>
            <el-menu-item-group title="Group One">
            <el-menu-item index="6-1">item one</el-menu-item>
            <el-menu-item index="6-2">item one</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
            <el-menu-item index="6-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="6-4">
            <template slot="title">item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-submenu>
        </el-submenu>
        <el-submenu index="9" @click.native="activeMenu = 'reports'" :class="{ active: activeMenu === 'reports' }">
            <template slot="title">
            <i class="fas fa-chart-pie"></i>
            <span style="margin-left: 10px">REPORTS</span>
            </template>
            <el-menu-item-group title="Group One">
            <el-menu-item index="9-1">item one</el-menu-item>
            <el-menu-item index="9-2">item one</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
            <el-menu-item index="9-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="9-4">
            <template slot="title">item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-submenu>
        </el-submenu>
        <el-submenu index="10" @click.native="activeMenu = 'settings'" :class="{ active: activeMenu === 'settings' }">
            <template slot="title">
            <i class="fas fa-cog"></i>
            <span style="margin-left: 10px">SETTINGS</span>
            </template>
            <el-menu-item-group title="Platform Settings">
            <el-menu-item index="10-1" @click="onaddapikeys">Add API Keys</el-menu-item>
              <el-menu-item index="10-2" @click="onaddplatform">Add Platform</el-menu-item>
              <el-menu-item index="10-3" @click="oncontentadding">Content Management</el-menu-item>
            </el-menu-item-group>
         </el-submenu>
        </el-menu>
    </div>
</template>


<style scoped>
 .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
  }

  #closeIcon{
      display: none;
  }

  @media screen and (max-width: 415px){
    #showSidebar{
    display: none;
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.6);
    overflow-x: hidden;
    transition: 0.5s;
    }

    .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 80%;
    height: 100%;
    background: #fff;
    }

    #closeIcon{
        float: right;
        display: block;
        padding: 20px; 
        color: #2D4059
    }
}
</style>

<script>

export default {
    props:{
        isCollapse: Boolean,
        showSidebar: Boolean
    },
    data() {
        return {
            activeItem: '',
            activeMenu: 'dash'
        }
    },
    //AdminDashboard
    methods:{
        oncontentadding: function() {
        this.$router.push({name : 'content_ourservices'}).catch(() => {})
          this.$store.state.routeSettings.primaryroutingName = "Dashboard"
          this.$store.state.routeSettings.secondaryroutingName = "Content Management"
          this.$store.state.routeSettings.routePathPrimary = "AdminDashboard"
          this.$store.state.routeSettings.routePathSecondary = "content_ourservices"
        },
        onaddplatform: function(){
          this.$router.push({name : 'addplatform'}).catch(() => {})
          this.$store.state.routeSettings.primaryroutingName = "Dashboard"
          this.$store.state.routeSettings.secondaryroutingName = "Adding Platforms"
          this.$store.state.routeSettings.routePathPrimary = "AdminDashboard"
          this.$store.state.routeSettings.routePathSecondary = "addplatform"
        },
        onaddapikeys : function(){
          this.$router.push({name : 'PlatformSettings'}).catch(() => {})
          this.$store.state.routeSettings.primaryroutingName = "Dashboard"
          this.$store.state.routeSettings.secondaryroutingName = "Adding API Key"
          this.$store.state.routeSettings.routePathPrimary = "AdminDashboard"
          this.$store.state.routeSettings.routePathSecondary = "PlatformSettings"
        },
        ondashboardMenu() {
            this.$router.push({ name: 'AdminDashboardTab' }).catch(() => {})
            this.activeMenu != 'dash' ? this.activeMenu = 'dash' : ''
        },
        ontrainingcategories(){
            this.activeItem = 'trainingcateg'
            // this.$router.push({name: "TrainingsCategories"}).catch(()=>{})
        },
        onaddnewtraining(){
            this.activeItem = 'addnewtraining'
            this.$router.push({name: "AddNewTraining"}).catch(()=>{})
        },
        onaddnewemployee(){
            this.activeItem = 'addnewemployee'
            this.$router.push({name: "AddNewEmployee"}).catch(()=>{})
        },
        onallemployee(){
            this.activeItem = 'allemployee'
            this.$router.push({name: "AllEmployee"}).catch(()=>{})
        },
        onallstudents(){
            this.activeItem = 'allstudents'
            this.$router.push({ name: 'AllStudents' }).catch(()=>{});
        },
        onMessage(){
            this.activeItem = 'message'
            this.$router.push({ name: 'Message' }).catch(()=>{})
        },
        onclasscode(){
            this.activeItem = 'classcode'
            this.$router.push({ name: 'ClassCode' }).catch(()=>{})
        },
        icon_close(){
            document.getElementById('showSidebar').style.display = 'none'
        }
    },
}
</script>

