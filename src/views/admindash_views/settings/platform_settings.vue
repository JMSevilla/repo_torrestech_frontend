<template>
  <div>

    <div style="margin-top: 100px" class="container-fluid">
      <div class="row">
        <div class="col-sm">
          <el-card shadow="always">
            <h3>Add API Key Form</h3>
            <div style="display: inline;">
              <span>API Key</span>
                <el-input
                type="text"
                clearable
                disabled
                placeholder="Generated API Key"
                v-model="apiFrm.keyInput"
                style="margin-top: 10px; margin-bottom: 10px;"
                ></el-input>
              <el-button @click="ongenerateapi" style="width: 100%;" type="warning" plain size="medium">Generate</el-button>
              <el-button @click="onsaveapi" style="float: right; margin-top: 10px; margin-bottom: 10px;" type="primary" plain size="medium">Save</el-button>
            </div>
          </el-card>
        </div>
        <div class="col-sm">
          <el-card shadow="always">
            <h3>Key Lists</h3>
          <Apilist :propLazyLoad="Lazyload" :propPageSize="PageSize" :propListArray="propArray" :page="page" />
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import client from "@/store/auth"
import Apilist from "@/components/dashboard/admin_dashboard/apikeyList/keylist"
export default{
  components: {
    Apilist
  },
  data(){
    return{
        apiFrm: {
          keyInput: ''
        },
      Lazyload: true,
      PageSize: 5,
      propArray: [],
      page: 1
    }
  },
  created() {
    this.getAllAPI()
  },
  methods: {
    getAllAPI: function(){
      client.get(`/api/settings/fetch-all-apilist`)
      .then(({data}) => {
        this.propArray = data
        this.Lazyload = false
      })
    },
    ongenerateapi: function(){
      this.genK()
    },
    genK: function(){
      var d = new Date().getTime();

      if (window.performance && typeof window.performance.now === "function") {
        d += performance.now();
      }

      var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
          /[xy]/g,
          function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
          }
      );

      return this.apiFrm.keyInput = uuid;
    },
    onsaveapi: function(){
      if(!this.apiFrm.keyInput){
        this.$notify({
          title: 'Oops',
          message: 'Please generate key',
          type: 'error'
        });
        return false
      }else{
        this.$confirm('This will save the api key. Continue?', 'Warning', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          const loading = this.$loading({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
          });
          setTimeout(() => {
            client
                .post(`/api/settings/add-api-key/${this.apiFrm.keyInput}/key`)
                .then(({ data }) => {
                  if(data == "success apikey"){
                    loading.close()
                    this.$notify({
                      title: 'Success',
                      message: 'Successfully Created',
                      type: 'success'
                    });
                    this.getAllAPI()
                    this.apiFrm.keyInput = null
                  }
                })
          }, 3000)
        })
      }
    },
  }
}
</script>