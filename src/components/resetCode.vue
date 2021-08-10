<template>
    <div>
        <div class="wrapper">
            <div style="padding:50px; background-color:#f5f7f8">
                <div class="row justify-content-center">
                    <div class="col-md-4">
                        <div class="card" style="box-shadow:rgba(0, 0, 0, 0.16)0px 10px 36px 0px,rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;">
                            <div class="card-body" style="padding:30px;">
                                <h3 class="forget">Forgot Password</h3>
                                        <div class="remind">
                                            <span>We have sent you the code to your registered email</span>
                                        </div>
                                    <div class="textInput">
                                        <p>Enter Code</p>
                                            <div class="form-group">
                                                <input type="password" v-model="resetByCode.code" class="form-control" id="email"  placeholder="Enter your code" >
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
<style scoped>
.forget{
    text-align: center;
    color:#2d4059 ;
    font-weight: bold;
    margin-bottom: 14px;
}
.textInput{
    color: #7f7f7f ;
    margin-top: 14px;
    font-size: 14px;
}
::placeholder{
    color: #7f7f7f;
    border-color:#7f7f7f ;
     font-size: 14px;
}
.cBtn{
    background:#0f5298 ;
    color: #ffffff ;
    width: 40%;
    font-size: 14px;
    font-weight: bold;
}
.sBtn{
    background:#0f5298 ;
    color: #ffffff ;
    width: 40%;
    float: right;
    margin-bottom: 40px;
    font-size: 14px;
    font-weight: bold;
}
.form-control{
    border: 2px solid #7f7f7f ;
    box-shadow: none;
}
input.form-control{
    background-color:#d7e2ed ;
}
.remind{
    text-align: center;
    color: #7f7f7f;
}
.textInput p{
    margin-bottom: 5px;
}
</style>
<script>
export default {
    props:{
       resetByCode:Object,
        send:Function
    },methods:{
        send(){
            this.$router.push({name:"resetPassword"}).catch(()=>{});
        }
    }
}
</script>

