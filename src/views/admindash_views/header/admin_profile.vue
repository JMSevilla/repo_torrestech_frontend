<template>
    <div>
        <div style="background: #fff">
            <Subheader />
        </div>
        <div class="p-5">
            <Profile />
        </div>
    </div>
</template>

<script>
import Subheader from "@/components/dashboard/admin_dashboard/header/admin_profile/subheader"
import Profile from "@/components/dashboard/admin_dashboard/header/admin_profile/profile"
export default {
    components:{
        Subheader,
        Profile

    }
    
}
</script>