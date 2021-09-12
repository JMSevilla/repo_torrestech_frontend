<template>
    <div> 
        <el-card>
            <el-tabs>
                <el-tab-pane label="Logged History"> <LoggedHistory /> </el-tab-pane>
                <el-tab-pane label="Archive"> <Archive /> </el-tab-pane>
            </el-tabs>
        </el-card>
    </div>
</template>

<script>
import LoggedHistory from "./logged_history"
import Archive from './archive'
export default {
    components:{
        LoggedHistory, 
        Archive
    }
}
</script>
