<template>
    <div>
        <div class="row justify-content-center mb-5">
            <div class="col-md-12 paragtext">
                <h3>Account Creation Successful!</h3>
                <h6>Congratulations, your account has been successfully created!</h6>
                <div class="d-flex justify-content-center">
                   <i class="fas fa-check-circle d-flex justify-content-center" id="checkimg"></i>
                </div>
                <div class="d-flex justify-content-center">
                    <el-button class="finishbtn mt-4" @click="onlogin()">
                        GO TO LOGIN PAGE
                    </el-button>    
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped src="@/assets/styles/Student/signup_page.css"> </style>

<script>
export default {
    props:{
        onnext: Function,
        onprevious: Function,
        onlogin: Function
    }
}
</script>