<template>
    <div style="background: #F5F7F8">
      <div class="d-flex">
        <div class="sidebar-dash">
          <SideDash />
        </div>
        <div style="width: 100%;">
          <HeaderDash  />
          <div style="background: #fff">
            <Header :routename="claims_routename_dynamic"
                    :secondaryRoute="claims_secondaryroutename_dynamic"
                    :primaryPath="claims_primaryroutepath_dynamic"
                    :secondaryPath="claims_secondaryroutepath_dynamic"
            />
          </div>
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
import Header from "@/components/dashboard/admin_dashboard/subheader"
import Dashboard from "@/components/dashboard/admin_dashboard/dashboard";
import HeaderDash from "@/components/dashboard/admin_dashboard/header"
import SideDash from "@/components/dashboard/admin_dashboard/sidebar"
import FooterDash from "@/components/subfooter"
import {mapGetters} from "vuex";
export default {
    components: {
        HeaderDash, SideDash, FooterDash, Dashboard, Header
    },
  computed:{
      ...mapGetters({
        claims_routename_dynamic: 'claims_routename_dynamic',
        claims_secondaryroutename_dynamic: 'claims_secondaryroutename_dynamic',
        claims_primaryroutepath_dynamic: 'claims_primaryroutepath_dynamic',
        claims_secondaryroutepath_dynamic: 'claims_secondaryroutepath_dynamic'
      })
  }
}
</script>

<style scoped>
  .sidebar-dash {
    background: #fff; 
    width: 18%; min-height: 100vh; 
    border-right: 3px #e6e6e6 solid;
  }
</style>