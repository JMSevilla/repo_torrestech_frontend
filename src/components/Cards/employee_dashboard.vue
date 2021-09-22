<template>
    <div class="container" style="padding:70px; ">
        <div @click="onChoose()">
            <el-card shadow="hover" id="edCard">
                <center>
                    <img src="@/assets/img/employee.png" alt="No Image" style="width:50%; margin-bottom:11px;" class="img-fluid">

                    <!-- <el-button type="primary" plain style="margin-top: 12px; margin-bottom: 12px;">
                    Select</el-button> -->
                </center> 
                <h5 class="text-center mt-2">Employee Dashboard</h5>
                <h6 class="text-center mb-2" style="font-weight:bold;">EM</h6>
            </el-card>
        </div>
    </div>
</template>

<style scoped>
    #edCard {
        cursor: pointer;
        height:230px;
        min-height:230px;
        min-width: 250px;
        margin-left: -30px;
    }
</style>
<script>
export default {
    methods: {
        onChoose(){
            alert("hello world")
        }
    }
}
</script>