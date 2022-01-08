<template>
    <div>
        <div class="wrapper">
            <div  class="p-4" style="background-color:#f5f7f8 ">
                <div class="row justify-content-center ">
                    <div class="col-md-4">
                        <el-card  style="padding: 30px" shadow="always" >
                                <h3 class="sign">Login</h3>
                                
                                <el-form ref="formName" :model="login" label-width="120px" :labelPosition="labelPosition" :rules="rules">
                                    <el-form-item label="Email or Username" prop="email">
                                          <TextField  type="email" placeholder="Enter email or username" v-model="login.email" ></TextField>
                                    </el-form-item>
                                    <el-form-item label="Password" prop="password">
                                        <TextField  :type="ispassword" placeholder="Enter password" v-model="login.password" ></TextField>
                                        <div v-if="booleanIsPassword">
                                            <el-link style="float: right; margin-top: 5px; margin-bottom: 5px;" type="primary" @click="onshowHide">Show Password</el-link>
                                        </div>
                                        <div v-else>
                                            <el-link style="float: right; margin-top: 5px; margin-bottom: 5px;" type="primary" @click="onHide">Hide Password</el-link>
                                        </div>
                                    </el-form-item> 
                                    <el-form-item>
                                        <el-checkbox v-model="checked">Remember me </el-checkbox>
                                         <el-link @click="forgetPass()" id="forget">Forgot Password</el-link> 
                                    </el-form-item>
                                    <el-form-item>
                                        <el-button v-loading.fullscreen.lock="fullscreenLoading" style="margin:20px 0; width:100%" @click="signIn()" class="logbtn" >SIGN IN</el-button>
                                    </el-form-item>
                                    </el-form>
                        </el-card>
                    </div>   
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped src="@/assets/styles/login/login.css">
</style>
<script>
import {mapGetters} from 'vuex'
import TextField from "@/components/TextField/TextField"
export default {
   props:{
       login:Object,
       labelPosition:String,
       rules:Object
   },
   components: {
       TextField
   },
   data() {
       return { 
           tokenGetter: '', fullscreenLoading: false,
           ispassword: 'password',  booleanIsPassword : true
       }
   },
   computed: {
       ...mapGetters({
           getresponsesignin : 'claims_get_response_signin_single',
           tokenResponse : 'claims_get_response_token_update'
         })
   },
   methods:{
       
       forgetPass(){
           this.$router.push({name:"forgetPassword"}).catch(()=> {});
       },
       randomizeToken(length) {
            var result           = [];
                var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                var charactersLength = characters.length;
                for ( var i = 0; i < length; i++ ) {
                result.push(characters.charAt(Math.floor(Math.random() *
            charactersLength)));
            }
            return this.tokenGetter = result.join('');
       },
       onshowHide: function() {
           this.ispassword = "text"
           this.booleanIsPassword = false
       },
       onHide: function() {
           this.ispassword = "password"
           this.booleanIsPassword = true
       },
       signIn(){
           const loading = this.$loading({
                lock: true,
                text: 'Loading',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
                });
                    try {
                        setTimeout(() => {
                             this.$store.dispatch(`actions_user_signin`, {
                      object: this.login
                  }).then(() => {
                      console.log(this.getresponsesignin)
                      if(this.getresponsesignin.status === "wrong password") {
                          this.$notify.error({
                            title: 'Oops!',
                            message: 'Sorry but the password is wrong',
                            offset: 100
                            });
                            loading.close();
                            return false
                      } else if(this.getresponsesignin.status === "SUCCESS ADMIN") { 
                          this.$notify.success({
                            title: 'Nice!',
                            message: 'Successfully login',
                            offset: 100
                            });
                            //set session
                            this.$store.dispatch(`actions_session_setup`, {
                                    email : this.login.email
                                })
                            //set session end
                            this.$store.state.signinArray = this.getresponsesignin.databulk
                            this.randomizeToken(10)
                            this.$store.dispatch(`actions_token_update`, {
                                email : this.login.email,
                                token : this.tokenGetter,
                                decision: true
                            }).then(() => {
                               this.$store.state.tokenArray = this.tokenResponse.databulk
                               localStorage.setItem("state", this.tokenGetter)
                               localStorage.setItem("ems", this.login.email)
                               loading.close();
                               this.$router.push({name : 'AddNewTraining'}).catch(() => {})
                            })
                      } else if(this.getresponsesignin === "no user") { 
                         this.$notify.error({
                            title: 'Oops!',
                            message: 'no user',
                            offset: 100
                            });
                            loading.close();
                            return false
                      } else if(this.getresponsesignin === "account disabled") { 
                         this.$notify.error({
                            title: 'Oops!',
                            message: 'Account disabled',
                            offset: 100
                            });
                            loading.close();
                            return false
                      }
                  })
                        }, 3000)
                    } catch (error) {
                        loading.close();
                    } finally {
                        loading.close();
                    }
       }
   }

}
</script>




    


