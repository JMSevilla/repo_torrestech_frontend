<template>
    <div>
        <div class="wrapper">
            <div style="padding: 50px; background-color:#f5f7f8 ">
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
                                        <input type="password" v-model="login.password" class="form-control" id="password" aria-describedby="emailHelp" placeholder="Enter your password">
                                    </div>
                                </div>
                                <div id="rememberMe">
                                    <div>
                                        <el-checkbox v-model="checked">Remember me </el-checkbox>    
                                    </div>
                                    <div>
                                        <a href="#" id="forget">Forgot Password?</a>
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
<style scoped>

.logbtn{
    background: #0f5298;
    border-radius: 7px;
    color: #ffffff;
    
}
.sign{
    text-align: center;
    color: #2d4059;
    font-weight: 700;
    margin-bottom:40px;
}
input.form-control{
    background-color: #d7e2ed;
}
::placeholder{
    color: #7f7f7f;
    border-color:#7f7f7f ;
    
}
#forget{
    text-decoration: none;
    color: #7f7f7f;
}
#forget:hover{
    text-decoration: underline;
}
#create{
    display:flex;
    justify-content: center;
    color: #7f7f7f;
    margin-bottom: 10px;
}
#create a{
    text-decoration: none;
    color: #7f7f7f;
}
#create a:hover{
    text-decoration: underline;
}
.textInput{
    color: #7f7f7f;
    margin-top: 20px;
    
}
.textInput p{
    font-weight:500;
    border-color:#7f7f7f;
    margin-bottom: 10px;
}
#rememberMe{
    display: flex;
    align-items: center;
    justify-content: space-between;
    color:#7f7f7f ;
    margin-top: 15px;
    
   
}
.form-control{
    border: 2px solid #7f7f7f;
    box-shadow: none;
}

</style>
<script>
export default {
   props:{
       login:Object,
       signIn:Function

   }
}
</script>