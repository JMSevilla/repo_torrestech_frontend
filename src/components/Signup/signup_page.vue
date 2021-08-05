<template>
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-md-4">
                <el-card shadow="always" class="py-3"> 
                    <h3>Sign Up</h3>
                    <div>
                        <el-button-group>
                            <el-button
                            id="teachbtn">
                                CREATE TEACHER'S ACCOUNT
                            </el-button>
                            
                            <el-button
                            id="studbtn" >
                                CREATE STUDENT'S ACCOUNT
                            </el-button>
                        </el-button-group>
                        
                        <span id="textbottom">
                            Already have an account? 
                            <a href="" >
                                Sign In
                            </a>
                        </span>
                        
                    </div>                   
                </el-card>
            </div>
        </div>
    </div>
</template>

<style scoped src="@/assets/styles/Signup/signup_page.css"></style>
