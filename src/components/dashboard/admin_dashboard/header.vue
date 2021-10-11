<template>
    <div class="con-width">
        <b-navbar>
            <nav class="container-fluid con-tainer">
                <div>
                    <i class="el-icon-s-unfold text-white bar" style="padding: 0px; cursor: pointer"  @click="showNav()"></i>
                    <i class="el-icon-s-unfold text-white show-sidebar2" style="padding: 0px; cursor: pointer" @click="toggleSidebar()"></i>
                </div>
                <div>
                    <Dropdown />
                </div>
            </nav>
        </b-navbar>
    </div>
</template>

<style scoped>
    .con-width{
        width: 100%;
        margin: auto;
        background: #2d4059;
    }
    .con-tainer{
        margin-right: 1%;
        
    }
    .bar{
        display: flex;
    }
    .two{
        display: none;
    }
    .show-sidebar2{
    display: none;
    }

    @media screen and (max-width: 768px) {
        .close_x{
            display: flex;
        }
    }
    @media screen and (max-width: 415px){
    .bar{
        display: none;
    }
    .show-sidebar2{
        display: flex;
    }
    }
</style>

<script>
import Dropdown from "../../dropdown/dropdown.vue";

export default {
    props: {
        clickpo: Function,
        showNav: Function,
        toggleSidebar: Function
    },
    components: {
        Dropdown
    },

}
</script>
