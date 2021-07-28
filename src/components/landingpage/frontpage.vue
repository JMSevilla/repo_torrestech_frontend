<template>
    <div>
        <Nav />
        <div class="card">
            <div class="card-body p-3">
                <Content1 />
            </div>
        </div>
        <div class="card">
            <div class="card-body p-5" style="background: #f5f7f8">
                <Content2 />
            </div>
        </div>
        <div class="card">
            <div class="card-body p-5">
                <Content3 />
            </div>
        </div>
    </div>
</template>

<script>
import Nav from "../navbar/nav";
import Content1 from "./content_1.vue";
import Content2 from "./content_2.vue";
import Content3 from "./content_3.vue";
import Content4 from "./content_4.vue";
export default {
    components: {
        Nav, Content1, Content2, Content3, Content4
    }
}
</script>