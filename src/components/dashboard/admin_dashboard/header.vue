<template>
    <div class="con-width">
        <nav class="con-tainer d-flex" style="justify-content: space-between; ">
            <div>
                <i class="el-icon-s-unfold text-white bar" style="padding: 19px 0"></i>
                <!-- <i class="fas fa-times text-white close_x" style="padding: 19px 0"></i> -->
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
    .con-tainer{
        width:96%;
        margin: auto;
    }
    .bar{
        display: flex;
    }
    .two{
        display: none;
    }
    @media screen and (max-width: 768px) {
        .bar{
            display: none;
        }
        .close_x{
            display: flex;
        }
    }
</style>

<script>
import Dropdown from "../../dropdown/dropdown.vue";

export default {
    props: {
        clickpo: Function
    },
    components: {
        Dropdown
    },

}
</script>
