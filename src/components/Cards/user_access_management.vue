<template>
    <div class="container" style="padding:70px;">
        <div @click="onChoose()">
            <el-card shadow="hover" id="uamCard">
                <center>
                    <img src="@/assets/img/admin.png" alt="No Image" style="width:50%; "
                        class="img-fluid">

                    <!-- <el-button type="primary" plain style="margin-top: 12px; margin-bottom: 12px;">
                    Select</el-button> -->
                </center> 
                <h5 class="text-center mt-2">User Access Management</h5>
                <h6 class="text-center mb-2" style="font-weight:bold;">UAM</h6>   
            </el-card>
        </div>
    </div>
</template>

<style scoped>
    #uamCard {
        cursor: pointer;
        height:230px;
        min-height:230px;
        min-width: 300px;
        margin-right: -50px;
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
