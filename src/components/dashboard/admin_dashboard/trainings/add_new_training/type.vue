<template>
    <div>
        <div class="justify-content-center mt-5 mb-1 paragtext">
            <h6>Choose the type of training.</h6>
            <div>
                <el-form status-icon :model="trainingtask" :rules="rules" ref="ruleForm" > 
                    <div  style="margin-left: 50px">
                        <el-form-item prop="types">
                            <el-radio-group v-model="trainingtask.types">
                                <el-radio style="display: block; margin-bottom: 10px" label="Online"></el-radio>
                                <el-radio label="In-person"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </div>
                    <div class="card-footer"  style="background: #FFF">
                        <el-form-item>
                            <el-button class="next-button"  @click="onsubmit('ruleForm')">NEXT</el-button>
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