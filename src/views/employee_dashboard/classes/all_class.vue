<template>
    <div>
        <div style="background: #fff">
            <Subheader />
        </div>
        <div class="p-4">
            <AllClass :GotoEditPage="goToEditPage"/>
        </div>
    </div>
</template>

<script>
import Subheader from "@/components/dashboard/employee_dashboard/classes/subheader"
import AllClass from "@/components/dashboard/employee_dashboard/classes/allclass"
export default {
    components: {
        Subheader, AllClass
    },
    methods:{
        goToEditPage: function(){
            
        }
    }
    
}
</script>