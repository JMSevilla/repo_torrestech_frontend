<template>
    <div>
        <div style="background: #fff">
            <Subheader />
        </div>
        <div class="p-4">
            <AllClass />
        </div>
    </div>
</template>

<script>
import Subheader from "@/components/dashboard/employee_dashboard/classes/subheader"
import AllClass from "@/components/dashboard/employee_dashboard/classes/allclass"
export default {
    components: {
        Subheader, AllClass
    }
    
}
</script>