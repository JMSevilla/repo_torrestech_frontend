<template>
    <div style="background: #F5F7F8">
        <div class="d-flex">
        <div class="sidebar-dash">
          <SideDash />
        </div>
        <div style="width: 100%;">
          <HeaderDash />
          <router-view>
          </router-view>
        </div>
        </div>
        <div style="width: 100%;">
            <FooterDash />
        </div>
    </div>
</template>

<script>
import HeaderDash from "@/components/dashboard/employee_dashboard/header"
import SideDash from "@/components/dashboard/employee_dashboard/sidebar"
import FooterDash from "@/components/subfooter"
export default {
    components: {
        HeaderDash, SideDash, FooterDash
    }
    
}
</script>

<style scoped>
  .sidebar-dash {
    background: #fff; 
    width: 18%; min-height: 100vh; 
    border-right: 3px #e6e6e6 solid
  }
</style>