<template>
    <div>
        <div class="container" style="min-width:300px;">
            <div class="row mb-2">
                <div class="col-md-12 d-flex">
                    <el-input v-model="search" type="text" placeholder="Validate API key" clearable></el-input>
                     <el-button type="primary" icon="el-icon-search" style="float: right;"></el-button>
                </div>
                <!-- <div class="col-md-1">
                     <el-button type="primary" icon="el-icon-search">Search</el-button>
                </div> -->
            </div>
            <div class="row">
                <div class="col-md-12 d-flex justify-content-center">
                    <h2>Please enter API Key to continue</h2>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        search : String,
    }
}
</script>