<template>
    <div>
        <!-- <el-row class="tac">
            <el-col :span="4"> -->
                <el-menu style="min-height: 100vh; border-right: 2px #e6e6e6 solid"
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                active-text-color="red">
                <div style="border-bottom: 2px #e6e6e6 solid; text-align: center">
                    <img src="@/assets/img/FrontPage/torres-logo-blue.png" alt="" srcset="" class="py-2" width="150px" height="auto">
                </div>
                <el-submenu index="1">
                    <template slot="title">
                    <i class="fas fa-home"></i>
                    <span style="margin-left: 10px">DASHBOARD</span>
                    </template>
                    <el-menu-item-group title="Group One">
                    <el-menu-item index="1-1">item one</el-menu-item>
                    <el-menu-item index="1-2">item one</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="Group Two">
                    <el-menu-item index="1-3">item three</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                    <template slot="title">item four</template>
                    <el-menu-item index="1-4-1">item one</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-submenu index="2" class="hoverBG">
                    <template slot="title">
                    <i class="fas fa-book"></i>
                    <span style="margin-left: 10px">TRAININGS</span>
                    </template>
                    <el-menu-item-group title="Group One">
                    <el-menu-item index="2-1">item one</el-menu-item>
                    <el-menu-item index="2-2">item one</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="Group Two">
                    <el-menu-item index="2-3">item three</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="2-4">
                    <template slot="title">item four</template>
                    <el-menu-item index="1-4-1">item one</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-submenu index="3">
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
                <el-submenu index="4">
                    <template slot="title">
                    <i class="fas fa-users"></i>
                    <span style="margin-left: 10px">EMPLOYEES</span>
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
                <el-submenu index="5">
                    <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>CLASSES</span>
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
                <el-submenu index="6">
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
                <el-submenu index="7">
                    <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>ATTENDANCE</span>
                    </template>
                    <el-menu-item-group title="Group One">
                    <el-menu-item index="7-1">item one</el-menu-item>
                    <el-menu-item index="7-2">item one</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="Group Two">
                    <el-menu-item index="7-3">item three</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="7-4">
                    <template slot="title">item four</template>
                    <el-menu-item index="1-4-1">item one</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-submenu index="8">
                    <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>TESTS</span>
                    </template>
                    <el-menu-item-group title="Group One">
                    <el-menu-item index="8-1">item one</el-menu-item>
                    <el-menu-item index="8-2">item one</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="Group Two">
                    <el-menu-item index="8-3">item three</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="8-4">
                    <template slot="title">item four</template>
                    <el-menu-item index="1-4-1">item one</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-submenu index="9">
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
                <el-submenu index="10">
                    <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>HOMEWORK</span>
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
                <el-submenu index="10">
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


