<template>
    <div>
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <img src="@/assets/student-section-v2.png" alt="" srcset="" width="100%" height="100%">
                    </div>
                    <div class="col-md-6">
                        <div>
                            <h3 class="h3_text">Are You A Student?</h3>
                            <p class="p_text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis eaque fuga eveniet possimus aperiam! Quaerat rem explicabo ipsam assumenda natus quasi ex reiciendis eum molestiae! Debitis explicabo architecto dolorum quas.</p>
                            <el-button class="btncreatestudent" size="medium">CREATE AN ACCOUNT</el-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .h3_text{
        color: #2d4059; 
        font-size: 25px; 
        font-weight: 600;
        /* line-height: 1.6rem; */
    }
    .p_text{
        /* line-height: 1.6rem; */
        color: #2d4059; 
        font-size: 15px
    }
    .btncreatestudent{
        color: #fff;
        background: #0F5298;
        border-color: #0F5298;
        border-radius: 7px;
    }
    .btncreatestudent:hover{
        background-color: #0d55a1;
    }
</style>