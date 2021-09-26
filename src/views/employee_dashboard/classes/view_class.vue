<template>
    <div>
        <div style="background: #fff">
            <Subheader />
        </div>
        <div class="p-4">
            <ViewClass />
        </div>
    </div>
</template>

<script>
import Subheader from "@/components/dashboard/employee_dashboard/classes/subheader"
import ViewClass from "@/components/dashboard/employee_dashboard/classes/viewclass"
export default {
    components:{
        Subheader, ViewClass
    }
}
</script>
