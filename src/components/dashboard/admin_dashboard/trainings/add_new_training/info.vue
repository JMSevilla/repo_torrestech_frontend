<template>
    <div>
        <div class="justify-content-center mt-5 paragtext">
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
                        <el-form-item label="What you'll learn" prop="whatyoulearn">
                            <el-input
                                type="textarea"
                                :rows="3"
                                placeholder="Enter details"
                                v-model="trainingtask.whatyoulearn">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="Upload Photo">
                            <el-avatar shape="square" :size="100" :src="trainingtask.imageurl" fit="fill" style="margin-bottom: 3px;" ></el-avatar>
                                                 <p style="color: gray;">Preview of image will appear after the uploading.</p>
                                        <input type="file" class="btn btn-outline-primary" style="margin-bottom: 6px;" @change="previewImage" accept="image/*" />
                                        <el-progress :text-inside="true" style="margin-bottom: 10px;" :stroke-width="26" :percentage="trainingtask.uploadpercent"></el-progress>
                                        <el-button type="primary" style=" margin-bottom: 10px;" plain @click="onupload()">Upload now</el-button>
                        </el-form-item>
                    </div>
                    <div class="card-footer p-0"  style="background: #FFF">
                        <el-form-item style="margin-right: 30px">
                            <el-button class="next-button" @click="onsubmit('ruleForm')">NEXT</el-button>
                            <el-button class="back-button" @click="onback()">BACK</el-button>
                        </el-form-item>
                    </div>
                </el-form>
            </div>
        </div>
    </div>
</template>

<style scoped src="@/assets/styles/Administrator/Training/addNewTrainings.css"></style>

<script>
import firebase from 'firebase'
export default {
    props:{
        trainingtask: Object,
        onnext: Function,
        onback: Function,
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
        previewImage(e){
            this.trainingtask.img1 = e.target.files[0]
            this.trainingtask.uploadpercent = 0
            this.trainingtask.imageData = e.target.files[0]
        },
        onupload: function(){
            if(!this.trainingtask.imageData){
                this.$notify.error({
                                title: 'Oops',
                                message: 'Please choose image',
                                offset: 100
                                });
                                return false
            }
            const loading = this.$loading({
                    lock: true,
                    text: 'Uploading Image, please wait...',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
            this.trainingtask.img1 = null;
            const checkstorage = firebase.storage().ref(`${this.trainingtask.imageData.name}`)
            .getDownloadURL()
            .then((resolve) => {
               const ref = firebase.storage().ref(`trainings/${this.trainingtask.imageData.name}`);
               ref.put(this.trainingtask.imageData.name).then(() => {
                   ref.getDownloadURL().then((url) => {
                       loading.close()
                       this.$notify.success({
                                title: 'Yey',
                                message: 'Successfully Uploaded',
                                offset: 100
                                });
                       this.trainingtask.imageurl = url;
                       this.trainingtask.img1 = url
                   })
               })
            }).catch((err) => {
                const storageRef = firebase.storage().ref(`trainings/${this.trainingtask.imageData.name}`).put(this.trainingtask.imageData);
                 storageRef.on(`state_changed`, snapshot => {
                this.trainingtask.uploadpercent = (snapshot.bytesTransferred/snapshot.totalBytes) * 100;

            }, error => {console.log(error.message)},
            () => {
                this.trainingtask.uploadpercent = 100;
                storageRef.snapshot.ref.getDownloadURL().then((url) => {
                    loading.close()
                    this.$notify.success({
                                title: 'Yey',
                                message: 'Successfully Uploaded',
                                offset: 100
                                });
                    this.trainingtask.imageurl = url;
                    this.trainingtask.img1 = url
                })
            })
            })
        }
    }
}
</script>