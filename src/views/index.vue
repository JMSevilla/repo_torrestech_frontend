<template>
    <div>
        <navigation />
    </div>
</template>

<script>
import navigation from "@/components/nav"
import store from "@/store/index"
export default {
    components: {
        navigation
    },
    data(){
        return{
            list: []
        }
    },
   created(){
       this.$store.dispatch('ACTIONS_GET_USERS', {self: this})
   },
    methods:{
        getallusers(){
            console.log(store.state.responseDataAPI)
        }
    }
}
</script>