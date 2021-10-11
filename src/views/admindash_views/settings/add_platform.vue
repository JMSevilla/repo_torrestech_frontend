<template>
  <div>
    <div style="margin-top: 100px" class="container-fluid">
      <div class="row">
        <div class="col-sm">
          <el-card shadow="always">
            <h3>Add Platform</h3>
            <center>
              <el-avatar shape="square" :size="100" :src="platformTask.platformImage" fit="fill" style="margin-bottom: 3px;" ></el-avatar>
              <p style="color: gray;">Preview of image will appear after the uploading.</p>
              <input type="file" class="btn btn-outline-primary" style="margin-bottom: 6px;" @change="previewImage" accept="image/*" />
              <el-progress :text-inside="true" style="margin-bottom: 10px;" :stroke-width="26" :percentage="uploadpercent"></el-progress>
              <el-button type="primary" style=" margin-bottom: 10px;" plain @click="onupload()">Upload now</el-button>
            </center>
            <div class="row">
              <div class="col-sm">
                <el-input
                type="text"
                placeholder="Enter title"
                clearable
                v-model="platformTask.platformTitle"
                style="margin-top: 10px; margin-bottom: 10px;"
                ></el-input>
              </div>
              <div class="col-sm">
                <el-input
                    type="text"
                    placeholder="Enter Alias"
                    clearable
                    v-model="platformTask.platformAlias"
                    style="margin-top: 10px; margin-bottom: 10px;"
                ></el-input>
              </div>

            </div>
            <div class="row" style="margin-top: 10px;">
              <div class="col-sm">
                <el-select style="width: 100%;" multiple v-model="platformTask.platformAllKeys" placeholder="Select API keys">
                  <el-option
                      v-for="item in keyLists"
                      :key="item.apiKey"
                      :label="item.apiKey"
                      :value="item.apiKey">
                    <span style="float: left">{{ item.apiKey }}</span>
                    <span style="float: right; color: #8492a6; font-size: 13px">
                      <div v-if="item.isused == 1">
                        <el-tag type="danger" size="mini">Closed</el-tag>
                      </div>
                      <div v-else>
                        <el-tag type="success" size="mini">Open</el-tag>
                      </div>
                    </span>
                  </el-option>
                </el-select>
              </div>
              <div class="col-sm">
                <el-select style="width: 100%;" v-model="platformTask.platformAccess" placeholder="Select Access">
                  <el-option
                      v-for="item in access"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
            <el-button
            type="primary"
            plain
            style="float: right; margin-top: 10px; margin-bottom: 10px"
             @click="onaddplatform"
            >Save</el-button>
          </el-card>
        </div>
        <div class="col-sm">
          <el-card shadow="always">
            <h3>Fetch Platform</h3>
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase  from "firebase"
import client from "@/store/auth"
export default
{
  data(){
    return{
      keyLists: [],
      access: [{
        label : 'Administrator',
        value: '1'
      },
      {
        label: 'Employee',
        value: '0'
      },{
        label : 'Both',
        value: '2'
      }],
      value: '',
      platformTask: {
        platformImage: null,
        platformTitle: null,
        platformAlias: null,
        platformAccess : null,
        platformAllKeys: []
      },
      img1: null,
      uploadpercent: 0,
      imageData: null
    }
  },
  created() {
    this.getAllAvailableKeys()
  },
  methods: {
    onaddplatform: function(){
      if(!this.platformTask.platformTitle || !this.platformTask.platformAlias
      || !this.platformTask.platformImage || !this.platformTask.platformAllKeys
      || !this.platformTask.platformAccess){
        this.$notify({
          title: 'Oops',
          message: 'Please input fields',
          type: 'error'
        });
        return false
      }else{
            const loading = this.$loading({
            lock: true,
            text: 'please wait...',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
          });
          setTimeout(() => {
            const data = new FormData()
            data.append("title", this.platformTask.platformTitle)
            data.append("alias", this.platformTask.platformAlias)
            data.append("access", this.platformTask.platformAccess)
            data.append("apikey", JSON.stringify(this.platformTask.platformAllKeys))
            data.append("imageurl", this.platformTask.platformImage)
            const reqpost = client.post(`/api/settings/add-platform`, data)
            return reqpost.then(({ data }) => {
              if(data == "empty"){
                loading.close()
                this.$notify({
                      title: 'Oops',
                      message: 'Data was empty please try again..',
                      type: 'error'
                    });
                    return false
              }
              else{ 
                loading.close()
                this.$notify({
                      title: 'Success',
                      message: 'Successfully Created',
                      type: 'success'
                    });
              }
            })
          }, 2000)
      }
    },
    getAllAvailableKeys: function(){
      const req = client.get(`/api/settings/fetch-key-list-platform`)
      return req.then(({ data }) => {
        this.keyLists = data
      })
    },
    previewImage: function(event){
      this.img1 = event.target.files[0]
      this.uploadpercent = 0
      this.imageData = event.target.files[0]
    },
    onupload: function(){
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
            const ref = firebase.storage().ref(`platforms/${this.imageData.name}`);
            ref.put(this.imageData.name).then(() => {
              ref.getDownloadURL().then((url) => {
                loading.close()
                this.$notify.success({
                  title: 'Yey',
                  message: 'Successfully Uploaded',
                  offset: 100
                });
                this.platformTask.platformImage = url;
                this.img1 = url
              })
            })
          }).catch((err) => {
            const storageRef = firebase.storage().ref(`platforms/${this.imageData.name}`).put(this.imageData);
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
                    this.platformTask.platformImage = url;
                    this.img1 = url
                  })
                })
          })
    }
  }
}
</script>