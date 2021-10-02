<template>
    <div>
        <!-- <el-row class="tac">
            <el-col :span="4"> -->
                <el-menu
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose">
                <div style="border-bottom: 2px #e6e6e6 solid; text-align: center">
                    <img src="@/assets/img/FrontPage/torres-logo-blue.png" alt="" srcset="" class="py-2" width="150px" height="auto">
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
                    <el-menu-item-group title="Group One">
                    <el-menu-item index="10-1">item one</el-menu-item>
                    <el-menu-item index="10-2">item one</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="Group Two">
                    <el-menu-item index="10-3">item three</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="10-4">
                    <template slot="title">item four</template>
                    <el-menu-item index="1-4-1">item one</el-menu-item>
                    </el-submenu>
                </el-submenu>
                </el-menu>
            <!-- </el-col>
        </el-row> -->
    </div>
</template>


<script>
export default {
    data() {
        return {
            activeItem: '',
            activeMenu: 'dash'
        }
    },
    methods:{
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
        }
    },
}
</script>

