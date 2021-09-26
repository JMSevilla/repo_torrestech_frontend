<template>
    <div>
        <div @click="onChoose()" >
            <el-card shadow="hover" id="uamCard">
                <center>
                    <img src="@/assets/img/admin.png" alt="No Image" class="image">
                </center> 
                <h6 class="text-center mt-2">User Access Management</h6>
                <h6 class="text-center mb-2" style="font-weight:bold;">UAM</h6>   
            </el-card>
        </div>
    </div>
</template>
<style scoped src="@/assets/styles/choose_platform.css" ></style>
<script>
export default {
    methods: {
        onChoose(){
            alert("hello world")
        }
    }
}
</script>
