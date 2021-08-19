<template>
    <div>
        <div class="wrapper">
            <div  class="p-4" style="background-color:#f5f7f8 ">
                <div class="row justify-content-center">
                    <div class="col-md-4">
                        <div class="card" style="box-shadow:rgba(0, 0, 0, 0.16)0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;">
                            <div class="card-body" style="padding:30px;">
                                <h3 class="forget">Reset Password</h3>
                                    <div class="textInput">
                                        <p>Enter New Password</p>
                                            <div class="form-group">
                                                <input type="password" v-model="resetPassword.password" class="form-control" id="email" >
                                            </div>
                                    </div>
                                    <div class="textInput">
                                        <p>Confirm New Password</p>
                                            <div class="form-group">
                                                <input type="password" v-model="resetPassword.cPassword" class="form-control" id="email">
                                            </div>
                                    </div>
                                            
                                    <b-button id="cancel" class="cBtn" style="margin-top:30px;" variant="primary">Cancel</b-button>
                                    <b-button id="send" @click="send()" class="sBtn" style="margin-top:30px;"  variant="primary">Save</b-button>          
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped src="@/assets/styles/login/resetPass.css">
</style>
<script>
export default {
    props:{
       resetPassword:Object,
        send:Function
    }
}
</script>