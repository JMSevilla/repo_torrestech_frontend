
<script>
export default {
    data(){
        return { 
            objAdmin : {
                firstname : '',
                lastname : '',
                username: '',
                password: '',
                confirmpass: ''
            },
            active: 1,
            fullscreenLoading: false,
            objNotificationAlert: {
                title: '',
                type: '',
                description: '',
                isshow: false
            },
            colsdynamic: {
                col1: 'col-sm',
                col2: 'col-sm',
                col3: 'col-sm'
            },
            istermmode: false
        }
    },
    methods: {
        onnext() {
            if(!this.objAdmin.firstname || !this.objAdmin.lastname) {
                this.objNotificationAlert.isshow = true
                this.objNotificationAlert.title = "Something is empty";
                this.objNotificationAlert.type = "warning"
                this.objNotificationAlert.description = "Please provide firstname and lastname"
                return false
            }else{ 
                this.objNotificationAlert.isshow = false
                this.fullscreenLoading = true
                setTimeout(() => {
                    this.active = 2 ;
                    this.fullscreenLoading = false
                }, 2000)
            }
        },
        onfinish() {
            if(!this.objAdmin.username || !this.objAdmin.password || !this.objAdmin.confirmpass) {
                this.objNotificationAlert.isshow = true
                this.objNotificationAlert.title = "Something is empty";
                this.objNotificationAlert.type = "warning"
                this.objNotificationAlert.description = "Please provide credentials"
                return false
            }else{ 
                this.objNotificationAlert.isshow = false
                this.fullscreenLoading = true
                setTimeout(() => {
                    this.active = 3 ;
                    this.istermmode = true
                    this.colsdynamic.col1 = 'col-md-3'
                    this.colsdynamic.col2 = 'col-md-6'
                    this.colsdynamic.col3 = 'col-md-3'
                    this.fullscreenLoading = false
                }, 2000)
            }
        },
        onprevious: function(){
            this.active = 2 ;
        }
    }
}
</script>

<template>
    <div>
        <div style="margin-top: 100px; margin-bottom: 30px;" class="container">
            <div class="row">
                <div :class="colsdynamic.col1"></div>
                <div :class="colsdynamic.col2">
                    <div v-if="istermmode == false">
                        <img src="@/assets/img/FrontPage/torres-logo-blue.png"
                     alt="No image" style="width: 100%; height: auto; margin-top: 10px; margin-bottom: 10px;">
                    </div>
                    <div v-else>
                        <div class="row">
                            <div class="col-sm">
                                <img src="@/assets/img/modernResolve/modern.png"
                     alt="No image" style="width: 100%; height: auto; margin-top: 10px; margin-bottom: 10px;">
                            </div>
                            <div class="col-sm">
                                <img src="@/assets/img/FrontPage/torres-logo-blue.png"
                     alt="No image" style="width: 100%; height: auto; margin-top: 50px; margin-bottom: 10px;">
                            </div>
                        </div>
                    </div>
                     <el-alert
                     style="margin-bottom: 20px;"
                            :title="objNotificationAlert.title"
                            :type="objNotificationAlert.type"
                            v-show="objNotificationAlert.isshow"
                            :closable="false"
                            :description="objNotificationAlert.description"
                            effect="dark"
                            show-icon>
                        </el-alert>
                    <div v-if="active == 1">
                        <el-card shadow="always" style="margin-top: 20px;">
                        <center>
                            <h3 style="margin-bottom: 30px;">Administrator Registration</h3>
                            <p>The system detected that there is no user admin. Please register as admin to continue</p>
                        </center>
                            <span>Firstname</span>
                            <el-input type="text" v-model="objAdmin.firstname" clearable placeholder="Enter firstname" style="margin-top: 10px; margin-bottom: 10px;"></el-input>

                            <span>Lastname</span>
                            <el-input type="text" v-model="objAdmin.lastname" clearable placeholder="Enter lastname" style="margin-top: 10px; margin-bottom: 10px;"></el-input>

                        <el-button @click="onnext()" v-loading.fullscreen.lock="fullscreenLoading" style="width: 100%; padding: 15px;" type="primary">Next</el-button>

                    </el-card>
                    </div>
                    <div v-else-if="active == 2">
                        <el-card shadow="always">
                            <center><h3>Credentials</h3></center>
                            <span>Username</span>
                            <el-input type="text" v-model="objAdmin.username" clearable placeholder="Enter username" style="margin-top: 10px; margin-bottom: 10px;"></el-input>

                            <span>Password</span>
                            <el-input type="password" show-password v-model="objAdmin.password" clearable placeholder="Enter lastname" style="margin-top: 10px; margin-bottom: 10px;"></el-input>

                            <span>Confirm Password</span>
                            <el-input type="text" show-password v-model="objAdmin.confirmpass" clearable placeholder="Enter lastname" style="margin-top: 10px; margin-bottom: 10px;"></el-input>

                            <div style="display: inline;">
                                <el-button @click="onfinish()" v-loading.fullscreen.lock="fullscreenLoading" style="float: right; margin-bottom: 10px; padding: 15px;" type="primary">Finish</el-button>

                                     <el-button @click="onprevious()" v-loading.fullscreen.lock="fullscreenLoading" style="float: right; margin-right: 10px; margin-bottom: 10px; padding: 15px;" type="warning">Previous</el-button>
                            </div>

                        </el-card>
                    </div>
                    <div v-else-if="active == 3">
                        <el-card shadow="always">
                            <center>
                                <h4>Modern Resolve Developers | Terms and Condition | Privacy and Policy</h4>
                                <hr>
                            </center>
                            <ol>
                                <li style="margin-bottom: 10px;"><strong>Security Account Creation.</strong> For security purposes before we grant you the access of the admin account on the system, the system provider and the company must agreed on the said account. We the developers must confirmed if the account creator is legitimate</li>
                                <li style="margin-bottom: 10px;"><strong>Account Disabling.</strong> We may disable the admin account if the company requested and reported you on us for unnecessary behaviour that may take effect and damage on the company system.</li>
                                <li style="margin-bottom: 10px;">
                                    <strong>Internal Data Damages.</strong> We will never be responsible for any internal data damages as long as this is not companies conflict of interest.
                                </li>
                                <li style="margin-bottom: 10px;"><strong>Connected Data.</strong> We the developers have 2% of shared data connected on our website that we must monitor such as : 
                                    <ul>
                                        <li><strong>1st administrator account approval - Security Purposes</strong></li>
                                        <li><strong>Report a bug</strong></li>
                                        <li><strong>Requests changes</strong></li>
                                        <li><strong>Administrator Account Disabling</strong></li>
                                    </ul>
                                </li>
                                <li style="margin-bottom: 10px;">
                                    <strong>Services.</strong> Our team will provide services and system revisions regarding on this system for <strong>1 year</strong>. The company has the authority to disregard the said contract and this may take effect if the both parties agreed.
                                </li>
                                <li style="margin-bottom: 10px;">
                                    <strong>Billable.</strong> This may take effect if the said contract is already ended. All the services and system revisions must be billable.
                                </li>
                                <li style="margin-bottom: 10px;">
                                    <strong>Development Workflow and SDC.</strong> We the developers will not share any informations , strategies on your IT Developers regarding on our Development workflow and SDC.
                                </li>
                                 <li style="margin-bottom: 10px;">
                                    <strong>System Turn Over.</strong> We will turn over the following : 
                                    <ul>
                                        <li><strong>Source Code</strong></li>
                                    </ul>
                                </li>
                                <li style="margin-bottom: 10px;">
                                    <strong>Production Mode.</strong> The company must agreed of the following :  
                                    <ul>
                                        <li><strong>Azure Cloud Platform -</strong> They must use their own account for cloud platform and rest api hosting</li>
                                        <li><strong>Firebase Account -</strong> They must use their own account for firebase storage and frontend hosting</li>
                                        <li><strong>Database With Cloud -</strong> They must use their own credentials for sql authentication</li>
                                    </ul>
                                </li>
                            </ol>
                        </el-card>
                    </div>
                </div>
                <div :class="colsdynamic.col3"></div>
            </div>
        </div>
    </div>
</template>