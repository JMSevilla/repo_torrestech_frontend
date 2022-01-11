<template>
    <div>
    <div style="background: #fff">
        </div>
        <div class="p-4">
           <ContentOurServices 
           :AboutObject="aboutusTask"
            :tabsArray="itemTabsArray"
            :previewImage="previewImage"
            :uploadpercent="uploadpercent"
            :onupload="onupload"
            :handleSave="handleSave" />
        </div>
    </div>
</template>

<script>
import ContentOurServices from "@/components/dashboard/admin_dashboard/content_dashboard/content_dashboard_ourservices"
import firebase from "firebase"
import {mapGetters} from "vuex"
export default {
    components : { ContentOurServices
    },
    data() {
        return {
            itemTabsArray : [
                {
                    name : "About Us", title : "About Us"
                }
            ],
            img1 : null, uploadpercent : 0, imageData : null,
            aboutusTask : {
                aboutimage : null, title : null, description : null
            }
        }
    },
    computed : {
        ...mapGetters({
            getAboutResponse : 'claims_about_post'
        })
    },
    methods : {
        previewImage : function() {
            this.img1 = event.target.files[0]
      this.uploadpercent = 0
      this.imageData = event.target.files[0]
        },
        handleSave: function() {
            if(!this.aboutusTask.aboutimage || !this.aboutusTask.title || !this.aboutusTask.description) {
                 this.$notify.error({
                title: 'Oops',
                message: 'Please input required fields',
                offset: 100
                });
                return false
            }else{
                this.$confirm('Are you sure you want to save this settings. Continue?', 'Warning', {
                confirmButtonText: 'OK',
                cancelButtonText: 'Cancel',
                type: 'warning'
                }).then(() => {
                    const loading = this.$loading({
                    lock: true,
                    text: 'data being saved, please wait...',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                    setTimeout(() => {
                        this.$store.dispatch(`action_post_about_us`, {
                            object : this.aboutusTask
                        }).then(() => {
                            if(this.getAboutResponse === "success about us"){
                                loading.close();
                                this.$notify.success({
                                title: 'Success',
                                message: 'Successfully Saved',
                                offset: 100
                                });
                            }
                        })
                    }, 3000)
                })
            }
        },
        onupload : function() {
            if(!this.imageData){
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
                this.img1 = null;

            const checkstorage = firebase.storage().ref(`${this.imageData.name}`)
          .getDownloadURL()
          .then((resolve) => {
            const ref = firebase.storage().ref(`contentManagement/about_us/${this.imageData.name}`);
            ref.put(this.imageData.name).then(() => {
              ref.getDownloadURL().then((url) => {
                loading.close()
                this.$notify.success({
                  title: 'Yey',
                  message: 'Successfully Uploaded',
                  offset: 100
                });
                this.aboutusTask.aboutimage = url;
                this.img1 = url
              })
            })
          }).catch((err) => {
            const storageRef = firebase.storage().ref(`contentManagement/about_us/${this.imageData.name}`).put(this.imageData);
            storageRef.on(`state_changed`, snapshot => {
                  this.uploadpercent = (snapshot.bytesTransferred/snapshot.totalBytes) * 100;

                }, error => {console.log(error.message)},
                () => {
                  this.uploadpercent = 100;
                  storageRef.snapshot.ref.getDownloadURL().then((url) => {
                    loading.close()
                    this.$notify.success({
                      title: 'Yey',
                      message: 'Successfully Uploaded',
                      offset: 100
                    });
                    this.aboutusTask.aboutimage = url;
                    this.img1 = url
                  })
                })
          })
        }
    }
}
</script>