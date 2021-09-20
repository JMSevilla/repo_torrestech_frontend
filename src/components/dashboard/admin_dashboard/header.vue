<template>
    <div class="con-width">
        <nav class="container d-flex" style="justify-content: space-between; ">
            <div>
                <i class="el-icon-s-unfold text-white" style="padding: 19px 0"></i>
            </div>
            <div style="display: flex">
                <Dropdown />
            </div>
        </nav>
    </div>
</template>

<style scoped>
    .con-width{
        width: 100%;
        margin: auto;
        background: #2d4059;
    }
</style>

<script>
import Dropdown from "../../dropdown/dropdown.vue";

export default {
    components: {
        Dropdown
    },
}
</script>
