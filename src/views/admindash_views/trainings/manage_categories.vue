<template>
    <div>
        <div style="background: #fff">
        <Header />
        </div>
        <div class="container">
            <CateBody />
        </div>
    </div>
</template>
<script>
import Header from "@/components/dashboard/admin_dashboard/trainings/manage_categories/subheader"
import CateBody from "@/components/dashboard/admin_dashboard/trainings/manage_categories/catebody"
export default {
    components:{
        Header , CateBody
    }
}
</script>