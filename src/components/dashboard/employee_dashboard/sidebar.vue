<template>
    <div id="showSidebar">
        <el-menu
        :collapse="isCollapse"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
         >
        <div style="border-bottom: 2px #e6e6e6 solid;" >
            <img src="@/assets/img/torres-logo-sidebar.png" id="showLogo"  alt="" srcset="" class="py-2" width="200px" height="auto" style="margin-left: 13px" > 
            <i class="fas fa-times toggle-close" id="closeIcon" @click="icon_close()"></i>
        </div>
        <el-submenu index="1" @click.native="activeMenu = 'dash'" :class="{ active: activeMenu === 'dash' }">
            <template slot="title">
                <i class="fas fa-home"></i>
                <span style="margin-left: 10px">DASHBOARD</span>
            </template>
        </el-submenu>
        <el-submenu index="2" @click.native="activeMenu = 'classcode'" :class="{ active: activeMenu === 'classcode' } ">
            <template slot="title">
                <i class="fas fa-book-reader"></i>
                <span style="margin-left: 10px">CLASSES</span>
            </template>
            <el-menu-item index="2-1" @click="onaddclass()" :class="{ active_1: activeItem === 'addclasscode' }">Add New Class</el-menu-item>
            <el-menu-item index="2-2" @click="onmanageclass()" :class="{ active_1: activeItem === 'manageclasscode' }">All Class</el-menu-item>
        </el-submenu>
        <el-submenu index="3" @click.native="activeMenu = 'calendar'" :class="{ active: activeMenu === 'calendar' }">
            <template slot="title">
                <i class="fas fa-calendar-alt"></i>
                <span style="margin-left: 10px">CALENDAR</span>
            </template>
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

  #showSidebar{
    /* position: sticky;
    z-index: 1;
    overflow-x: hidden; */
  }

  @media screen and (max-width: 415px){

    #showSidebar{
    display: none;
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 9;
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
            activeMenu: '',
            showLogo: false
        }
    },
    methods:{
        onaddclass(){
            this.activeItem = 'addclasscode'
            this.$router.push({name: "AddClass"}).catch(()=>{})
        },
        onmanageclass(){
            this.activeItem = 'manageclasscode'
            this.$router.push({name: "AllClass"}).catch(()=>{})
        },
        onaddquiz() {
            this.activeItem = 'addquiz'
            this.$router.push({name: "AddQuiz"}).catch(()=>{})
        },
        onaddnewstudent() {
            this.activeItem= 'addnewstudent'
            this.$router.push({name: "AddNewStudent"}).catch(()=>{})
        },
        icon_close(){
            document.getElementById('showSidebar').style.display = 'none'
        }
    },
}
</script>



