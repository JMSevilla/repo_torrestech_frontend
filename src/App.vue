<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    data() {
        return { 
            
        }
    },
    computed: {
        ...mapGetters({
            claims_get_admin: 'claims_get_admin',
            identifyscanned: 'claims_scan_token'
        })
    },
    created() {
        this.loadCheck()
        this.checkLoaderToken()
    },
    methods: {
      checkLoaderToken() { 
        this.$store.dispatch(`actions_scan_token`, { 
          token: localStorage.getItem('state'),
          email : localStorage.getItem('ems')
        }).then(() => {
          if(this.identifyscanned === "home direct") { 
            this.$router.push({name : 'Home'}).catch(() => {})
          } else if(this.identifyscanned === "admin direct") {
            this.$router.push({name : 'AddNewTraining'}).catch(() => {})
          } else{
            //student dashboard direct
          }
        })
      },
        loadCheck() {
            this.$store.dispatch(`actions_admin_checker`).then(() => {
                if(this.claims_get_admin === "not exist"){
                  this.$router.push({name : 'admin'}).catch(() => {})
                }
                else{
                    
                }
            })
        },
         handleClose(done) {
        this.$confirm('Are you sure to close this dialog?')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
}

</script>