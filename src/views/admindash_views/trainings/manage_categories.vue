<template>
    <div>
        <div style="background: #fff">
            <Subheader />
        </div>
        <div style="margin:10px">
            <Categories />
        </div>
    </div>
</template>

<script>
import Subheader from "@/components/dashboard/admin_dashboard/trainings/manage_categories/subheader"
import Categories from "@/components/dashboard/admin_dashboard/trainings/manage_categories/manage_categories"
export default {
    components:{
        Subheader,
        Categories

    }
    
}
</script>