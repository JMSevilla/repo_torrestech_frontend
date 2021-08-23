<template>
    <div>
        <div class="justify-content-center mt-5 mb-1 paragtext">
            <h6>Fill each section and click 'Next' to continue.</h6>
            <div>
                <el-form status-icon :model="trainingtask" :rules="rules" ref="ruleForm" label-position="top">
                    <div  style="margin: 0 50px">
                        <el-form-item label="Training Name" prop="trainingName">
                           <el-input v-model="trainingtask.trainingName" placeholder="Enter training name" ></el-input>
                        </el-form-item>
                        <el-form-item label="Short Description" prop="shortDescription">
                            <el-input
                                type="textarea"
                                :rows="3"
                                placeholder="Enter short description"
                                v-model="trainingtask.shortDescription">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="Training Full Description" prop="fullDescription">
                            <el-input
                                type="textarea"
                                :rows="3"
                                placeholder="Enter full description"
                                v-model="trainingtask.fullDescription">
                            </el-input>
                        </el-form-item>
                        <div  class="d-flex">
                            <el-form-item label="Upload Small Photo (300 x 193)">
                                <el-upload
                                    class="upload-demo"
                                    action="https://jsonplaceholder.typicode.com/posts/"
                                    :on-preview="handlePreview"
                                    :on-remove="handleRemove"
                                    :file-list="fileList"
                                    list-type="picture">
                                    <el-button size="small" class="browse-btn">Browse</el-button>
                                </el-upload>
                            </el-form-item>
                            <el-form-item label="Upload Large Photo (764 x 382)" style="margin-left: 200px">
                                <el-upload
                                    class="upload-demo"
                                    action="https://jsonplaceholder.typicode.com/posts/"
                                    :on-preview="handlePreview"
                                    :on-remove="handleRemove"
                                    :file-list="fileList"
                                    list-type="picture">
                                    <el-button size="small" class="browse-btn">Browse</el-button>
                                </el-upload>
                            </el-form-item>
                        </div>
                    </div>
                    <div class="card-footer"  style="background: #FFF">
                        <el-form-item>
                            <el-button class="next-button" @click="onsubmit('ruleForm')">NEXT</el-button>
                            <el-button class="next-button" @click="onback()">BACK</el-button>
                        </el-form-item>
                    </div>
                </el-form>
            </div>
        </div>
    </div>
</template>

<style scoped src="@/assets/styles/Administrator/Training/addNewTrainings.css"></style>

<script>
export default {
    props:{
        trainingtask: Object,
        onback: Function,
        onnext: Function,
        rules: Object

    },
    methods:{
         onsubmit(ruleForm){
            this.$refs[ruleForm].validate((valid) => {
            if (valid) {
                this.onnext();
            } else {
                return false;
            }
            });
        },
    }
}
</script>