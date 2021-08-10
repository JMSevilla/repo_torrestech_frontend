<template>
    <div>
        <FrontPage />
        
    </div>
</template>

<script>
import FrontPage from "../components/landingpage/frontpage"
import {mapGetters} from 'vuex'
export default {
    components: {
        FrontPage
    },
    data() {
        return { 
            
        }
    },
    computed: {
        ...mapGetters({
            claims_get_admin: 'claims_get_admin'
        })
    },
    created() {
        this.loadCheck()
    },
    methods: {
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