<template>
    <div>
        <el-menu
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose">
        <div style="border-bottom: 2px #e6e6e6 solid; text-align: center">
            <img src="@/assets/img/FrontPage/torres-logo-blue.png" alt="" srcset="" class="py-2" width="150px" height="auto">
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
        <el-submenu index="3" @click.native="activeMenu = 'students'" :class="{ active: activeMenu === 'students' }">
            <template slot="title">
            <i class="fas fa-users"></i>
            <span style="margin-left: 10px">STUDENTS</span>
            </template>
            <el-menu-item-group title="Group One">
            <el-menu-item index="3-1">item one</el-menu-item>
            <el-menu-item index="3-2">item one</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
            <el-menu-item index="3-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="3-4">
            <template slot="title">item four</template>
            <el-menu-item index="3-4-1">item one</el-menu-item>
            </el-submenu>
        </el-submenu>
        <el-submenu index="4" @click.native="activeMenu = 'quiz'" :class="{ active: activeMenu === 'quiz' }">
            <template slot="title">
            <i class="fas fa-file-contract"></i>
            <span style="margin-left: 10px">QUIZ</span>
            </template>
            <el-menu-item-group title="Group One">
            <el-menu-item index="4-1">item one</el-menu-item>
            <el-menu-item index="4-2">item one</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
            <el-menu-item index="4-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="4-4">
            <template slot="title">item four</template>
            <el-menu-item index="4-4-1">item one</el-menu-item>
            </el-submenu>
        </el-submenu>
        <el-submenu index="5" @click.native="activeMenu = 'assignments'" :class="{ active: activeMenu === 'assignments' }">
            <template slot="title">
            <i class="fas fa-file"> </i>
            <span style="margin-left: 10px">ASSIGNMENT</span>
            </template>
            <el-menu-item-group title="Group One">
            <el-menu-item index="5-1">item one</el-menu-item>
            <el-menu-item index="5-2">item one</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
            <el-menu-item index="5-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="5-4">
            <template slot="title">item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-submenu>
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
        </el-menu>
    </div>
</template>


<script>
export default {
    data() {
        return {
            activeItem: '',
            activeMenu: ''
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
        }
    },
}
</script>



