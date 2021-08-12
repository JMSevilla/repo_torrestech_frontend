<template>
    <div>
        <div class="wrapper">
            <div  class="p-4" style="background-color:#f5f7f8 ">
                <div class="row justify-content-center">
                    <div class="col-md-4">
                        <div class="card" style="box-shadow:rgba(0, 0, 0, 0.16)0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;">
                            <div class="card-body" style="padding:30px;">
                                <h3 class="forget">Forgot Password</h3>
                                        <div class="remind">
                                            <span>Please enter your registered email to get the code</span>
                                        </div>
                                    <div class="textInput">
                                        <p>Email</p>
                                            <div class="form-group">
                                                <input type="email" v-model="forgetPassword.email"  class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter your email" >
                                            </div>
                                    </div>
                                            
                                    <b-button id="cancel" class="cBtn" style="margin-top:30px;" variant="primary">Cancel</b-button>
                                    <b-button id="send" @click="send()" class="sBtn" style="margin-top:30px;"  variant="primary">Send</b-button>          
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped src="@/assets/styles/login/forgot.css"></style>
<script>
export default {
    props:{
        forgetPassword:Object,
        send:Function
    },methods:{
        send(){
            this.$router.push({name:"resetByCode"}).catch(()=> {});
        }
    }
}
</script>

