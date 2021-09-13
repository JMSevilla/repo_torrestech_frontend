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
                                        <el-input  type="email" v-model="login.email"  placeholder="Enter your email" clearable></el-input>
                                    </el-form-item>
                                    <el-form-item label="Password" prop="password">
                                        <el-input type="password" v-model="login.password" clearable show-password placeholder="Enter your password"></el-input>
                                    </el-form-item> 
                                    <el-form-item>
                                        <el-checkbox v-model="checked">Remember me </el-checkbox>
                                         <el-link @click="forgetPass()" id="forget">Forgot Password</el-link> 
                                    </el-form-item>
                                    <el-form-item>
                                        <el-button style="margin:20px 0; width:100%" @click="signIn('formName')" class="logbtn" >SIGN IN</el-button>
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
export default {
   props:{
       login:Object,
       labelPosition:String,
       rules:Object
   },
   data() {
       return { 
           tokenGetter: ''
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
       signIn(formName){
           this.$refs[formName].validate((valid) => { 
               if (valid) { alert('submit!'); 
               } else { 
                  this.$store.dispatch(`actions_user_signin`, {
                      object: this.login
                  }).then(() => {
                      console.log(this.getresponsesignin)
                      if(this.getresponsesignin === "wrong password") {
                          this.$notify.error({
                            title: 'Oops!',
                            message: 'Sorry but the password is wrong',
                            offset: 100
                            });
                            return false
                      } else if(this.getresponsesignin.status === "SUCCESS ADMIN") { 
                          this.$notify.success({
                            title: 'Nice!',
                            message: 'Successfully login',
                            offset: 100
                            });
                            this.$store.state.signinArray = this.getresponsesignin.databulk
                            this.randomizeToken(10)
                            this.$store.dispatch(`actions_token_update`, {
                                email : this.login.email,
                                token : this.tokenGetter
                            }).then(() => {
                               this.$store.state.tokenArray = this.tokenResponse.databulk
                               localStorage.setItem("state", this.tokenGetter)
                               localStorage.setItem("ems", this.login.email)
                               this.$router.push({name : 'AddNewTraining'}).catch(() => {})
                            })
                            console.log(this.getresponsesignin)
                      } else if(this.getresponsesignin === "no user") { 
                         this.$notify.error({
                            title: 'Oops!',
                            message: 'no user',
                            offset: 100
                            });
                            return false
                      } else if(this.getresponsesignin === "account disabled") { 
                         this.$notify.error({
                            title: 'Oops!',
                            message: 'Account disabled',
                            offset: 100
                            });
                            return false
                      }
                  })
                } });
       }
   }

}
</script>




    


