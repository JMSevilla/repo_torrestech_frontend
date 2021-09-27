<template>
    <div>
        <div @click="onChoose()" >
            <el-card shadow="hover" id="edCard">
                <center>
                    <img src="@/assets/img/employee.png" alt="No Image" class="image">
                </center> 
                <h6 class="text-center mt-2">Employee Dashboard</h6>
                <h6 class="text-center mb-2" style="font-weight:bold;">EM</h6>
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