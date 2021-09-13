<template>
    <div>
        <div style="background: #fff">
            <Subheader />
        </div>
        <div class="p-4">
            <ActvityLogs />
        </div>
    </div>
</template>

<script>
import Subheader from "@/components/dashboard/admin_dashboard/header/activity_logs/subheader"
import ActvityLogs from "@/components/dashboard/admin_dashboard/header/activity_logs/activity_logs"
export default {
    components:{
        Subheader,
        ActvityLogs

    }
    
}
</script>