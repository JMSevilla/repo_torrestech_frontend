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
        <div class="card" >
            <div class="card-body" style="background: #f5f7f8">
                <Content4 />
            </div>
        </div>
         <div class="card">
            <Content5 />
        </div>
        <Footer />
    </div>
</template>

<script>
import Nav from "../navbar/nav";
import Content1 from "./content_1";
import Content2 from "./content_2";
import Content3 from "./content_3";
import Content4 from "./content_4"
import Content5 from "./content_5"
import Footer from "../footer";
export default {
    components: {
        Nav, Content1, Content2, Content3, Content4, Content5, Footer
    }
}
</script>