<template>
    <div class="container">
        <el-card shadow="always" style="margin-top: 50px;">
            <el-tabs v-for="item in tabsArray" :key="item.title" type="card" @tab-click="handleClick">
            <el-tab-pane :label="item.name">
                 <center>
                    <el-avatar shape="square" :size="100" :src="AboutObject.aboutimage" fit="fill" style="margin-bottom: 3px;" ></el-avatar>
                    <p style="color: gray;">Preview of image will appear after the uploading.</p>
                    <input type="file" class="btn btn-outline-primary" style="margin-bottom: 6px;" @change="previewImage" accept="image/*" />
                    <el-progress :text-inside="true" style="margin-bottom: 10px;" :stroke-width="26" :percentage="uploadpercent"></el-progress>
                    <el-button type="primary" style=" margin-bottom: 10px;" plain @click="onupload()">Upload now</el-button>
                </center>
                <div style="margin-top : 10px;" class="row">
                    <div class="col-sm">
                        <label>Enter about us title</label>
                        <TextField type="text" placeholder="About Us Title" trigger="1" v-model="AboutObject.title" style="margin-top: 5px; margin-bottom: 5px;" />
                    </div>
                    <div class="col-sm">
                        <label>Enter about us description</label>
                        <TextField type="text" placeholder="About Us Description" trigger="2" v-model="AboutObject.description" style="margin-top: 5px; margin-bottom: 5px;" />
                    </div>
                </div>
                <el-button
                type="primary"
                plain
                size="medium"
                style="float: right; margin-top: 10px; margin-bottom : 10px;"
                @click="handleSave"
                >Save</el-button>
            </el-tab-pane>
            <el-tab-pane label="Config">Config</el-tab-pane>
            <el-tab-pane label="Role">Role</el-tab-pane>
            <el-tab-pane label="Task">Task</el-tab-pane>
        </el-tabs>
        </el-card>
    </div>
</template>

<script>
import TextField from "@/components/TextField/TextField"
export default {
    props : {
        tabsArray : Array, 
        AboutObject : String, previewImage : Function, uploadpercent : Number, onupload: Function,
        handleClick: Function, handleSave : Function
    },
    components: {
        TextField
    }
}
</script>