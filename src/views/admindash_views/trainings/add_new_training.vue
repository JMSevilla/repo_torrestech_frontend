<template>
    <div>
        <div style="background: #fff">
            <Header />
        </div>
        <div class="container">
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
    }
}
</script>

