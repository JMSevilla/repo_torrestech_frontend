<template>
    <div style="background: #f5f7f8; width: 100%; height: 100vh">
      <el-row class="tac">
        <el-col :span="4">
            <SideDash />
        </el-col>
        <el-col :span="20">
            <HeaderDash />
        </el-col>
      </el-row>
      <el-row class="tac">
        <el-col :span="24">
            <FooterDash />
        </el-col>
      </el-row>
    </div>
</template>

<script>
import HeaderDash from "@/components/dashboard/admin_dashboard/header"
import SideDash from "@/components/dashboard/admin_dashboard/sidebar"
import FooterDash from "@/components/dashboard/subfooter"
export default {
    components: {
        HeaderDash, SideDash, FooterDash
    }
}
</script>