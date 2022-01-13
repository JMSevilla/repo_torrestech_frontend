<template>
    <div>
        <div style="background: #fff">
            <!-- <Header /> -->
        </div>
        <div class="p-4">
           <Stepper />
        </div>
        
    </div>
</template>

<script>
import Header from "@/components/dashboard/admin_dashboard/trainings/add_new_training/header"
import Stepper from "@/components/dashboard/admin_dashboard/trainings/add_new_training/stepper"
export default {
    components:{
        Header, Stepper
    },
    created() {
        this.checkLoaderToken()
    },
    methods : {
        checkLoaderToken() { 
        this.$store.dispatch(`actions_scan_token`, { 
          token: localStorage.getItem('state'),
          email : localStorage.getItem('ems')
        }).then(() => {
          if(this.identifyscanned === "home direct") { 
            this.$router.push({name : 'Home'}).catch(() => {})
          } else if(this.identifyscanned === "admin direct") {
          } else{
            //student dashboard direct
          }
        })
      },
    }
}
</script>

