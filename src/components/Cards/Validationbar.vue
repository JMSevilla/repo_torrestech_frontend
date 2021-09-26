<template>
    <div>
        <div class="d-flex">
                <el-input prefix-icon="el-icon-key"
                v-model="apiKey" type="text" placeholder="Please enter API Key to continue" clearable></el-input>
                <el-button type="primary" style="float: right; background: #0f5298;"><i class="fas fa-key"></i></el-button>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        apiKey : String,
    }
}
</script>