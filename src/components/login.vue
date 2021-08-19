<template>
    <div>
        <div class="wrapper">
            <div  class="p-4" style="background-color:#f5f7f8 ">
                <div class="row justify-content-center ">
                    <div class="col-md-4">
                        <div class="card" style="box-shadow:rgba(0, 0, 0, 0.16)0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;">
                            <div class="card-body" style="padding: 30px">
                                <h3 class="sign">Login</h3>
                                <div class="textInput" >
                                    <p>Email or Username</p>
                                    <div class="form-group">
                                        <input  type="email" v-model="login.email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter your email">
                                    </div>
                                </div>
                                <div class="textInput" >
                                    <p>Password</p>
                                    <div class="form-group" >
                                        <input type="password" v-model="login.password" class="form-control" id="password" aria-describedby="emailHelp" >
                                    </div>
                                </div>
                                <div id="rememberMe">
                                    <div>
                                        <el-checkbox v-model="checked">Remember me </el-checkbox>    
                                    </div>
                                    <div>
                                        <el-link @click="forgetPass()" id="forget">Forgot Password</el-link>
                                    </div> 
                                </div>  
                                <el-button style="margin:20px 0; width:100%" @click="signIn()" class="logbtn" >SIGN IN</el-button>
                                 <div id="create">
                                     <span style="margin-right: 5px;">Don't have an account?</span> 
                                     <a href="#" >Sign Up</a> 
                                 </div>
                            </div>
                                                             
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped src="@/assets/styles/login/login.css">
</style>
<script>
export default {
   props:{
       login:Object,
       signIn:Function

   },methods:{
       forgetPass(){
           this.$router.push({name:"forgetPassword"}).catch(()=> {});
       }
   }

}
</script>




    


