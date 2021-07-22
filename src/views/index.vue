<template>
    <div>
        <div style="margin-top: 100px;" class="container">
            <el-card shadow="always">
               <div class="row">
                   <div class="col-md-6">
                        <h3>Enter firstname</h3>
                <el-input
                placeholder="enter firstname"
                style="margin-bottom: 20px;"
                clearable
                v-model="task.firstname"
                ></el-input>
                   </div>
                   <div class="col-md-6">
                       <h3>Enter firstname</h3>
                <el-input
                placeholder="enter lastname"
                style="margin-bottom: 20px;"
                clearable
                v-model="task.lastname"
                ></el-input>
                   </div>
               </div>
                <el-button @click="onsave()" type="primary"
                style="float: right; margin-bottom: 20px;" plain size="small">Save</el-button>
            </el-card>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    data(){
        return{
            list: [],
            task: {
                firstname: '', lastname: ''
            },
        }
    },
    methods: {
        getalldata(){
           this.$store.dispatch(`ACTIONS_FETCH_USERS_DATA`, {obj: this.task}).then(() => {
               if(this.get_final_users_data === "success"){
                   alert("successfully added")
               }
           }).catch((e) => {
               alert(e)
           })
        },
        onsave(){
            this.getalldata()
        }
    },
    computed: {
        ...mapGetters({
            get_final_users_data: 'get_final_users_data'
        })
    },
}
</script>