<template>
    <div>
        <navigation />
    </div>
</template>

<script>
import navigation from "@/components/nav"
import {mapGetters} from 'vuex';
export default {
    components: {
        navigation
    },
    computed:{
        ...mapGetters({
            getusersdata: 'getusersdata'
        })
    },
    data(){
        return{
            list: []
        }
    },
   created(){
       this.getallusers()
   },
    methods:{
        getallusers(){
            this.$store.dispatch(`ACTIONS_GET_USERS`).then(() => {
                console.log(this.getusersdata)
            })
        }
    }
}
</script>