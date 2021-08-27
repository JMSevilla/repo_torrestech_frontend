<template>
    <div>
         <div class="row p-5">
            <div class="col-md">
                <div class="card" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2)">
                    <div class="card-header" style="background: #FFF">
                        <h3 class="training-headline">Setup your training</h3>
                    </div>
                    <div class="mt-5">
                        <el-steps :active="active" finish-status="success" align-center>
                            <el-step title="Type"></el-step>
                            <el-step title="Info"></el-step>
                            <el-step title="Options"></el-step>
                            <el-step title="Scheduling"></el-step>
                            <el-step title="Assigned Employee"></el-step>              
                        </el-steps>
                        <div v-if="active == 0">
                            <Type :trainingtask="trainingtask" :onnext="onnext" :rules="rules" />
                        </div>
                        <div v-else-if="active == 1" >
                            <Info :trainingtask="trainingtask" :onnext="onnext" :onback="onback" :rules="rules"/>
                        </div>
                        <div v-else-if="active == 2" >
                            <Options :trainingtask="trainingtask" :onnext="onnext" :onback="onback" :rules="rules"/>
                        </div>
                        <div v-else-if="active == 3" >
                            <Scheduling :trainingtask="trainingtask" :onnext="onnext" :onback="onback" :rules="rules"/>
                        </div>
                        <div v-else-if="active == 4" >
                            <Assignee :trainingtask="trainingtask" :onnext="onnext" :onback="onback" :rules="rules"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped src="@/assets/styles/Administrator/Training/addNewTrainings.css"></style>

<script>
import Type from "./type"
import Info from "./info"
import Options from "./options"
import Scheduling from "./scheduling"
import Assignee from "./assignee"
export default {
    components:{
        Type, Info, Options, Scheduling, Assignee
    },
    data(){
        return{
            active: 0,
            trainingtask:{
                types:'',
                trainingName:'',
                shortDescription:'',
                fullDescription:'',
                liststatus:[{
                        label: 'Disabled',
                        value: 'Disabled'
                    },{
                        label: 'Enabled',
                        value: 'Enabled'
                    }
                ],
                status:'',
                listforum:[{
                        label: 'Disabled',
                        value: 'Disabled'
                    },{
                        label: 'Enabled',
                        value: 'Enabled'
                    }
                ],
                forum:'',
                listlivechat:[{
                        label: 'Disabled',
                        value: 'Disabled'
                    },{
                        label: 'Enabled',
                        value: 'Enabled'
                    }
                ],
                livechat:'',
                capacity:'',
                listpayment:[{
                        label: 'Yes',
                        value: 'Yes'
                    },{
                        label: 'No',
                        value: 'No'
                    }
                ],
                payment:'',
                coursefee:'',
                effort:'',
                length: '',
                listcategories:[{
                        label: 'Computer Programming',
                        value: 'Computer Programming'
                    },{
                        label: 'OSHA',
                        value: 'OSHA'
                    }
                ],
                categories:'',
                startdate:'',
                enddate:'',
                enrolmentcloses:'',
                listassignee:[{
                        label: 'John Doe',
                        value: 'John Doe'
                    },{
                        label: 'Juan dela Cruz',
                        value: 'Juan dela Cruz'
                    }
                ],
                assignee:'',
            },
            rules: {
                types: [
                    { required: true, message: 'Please select type of training'}
                ],
                trainingName: [
                    { required: true, message: 'Please enter training name' }
                ],
                shortDescription: [
                    { required: true, message: 'Please enter short description' }
                ],
                fullDescription: [
                    { required: true, message: 'Please enter full description' }
                ],
                status:  [
                    { required: true, message: 'Please select status' }
                ],
                forum: [
                    { required: true, message: 'Please select forum' }
                ],
                livechat: [
                    { required: true, message: 'Please select livechat' }
                ],
                capacity: [
                    { required: true, message: 'Please input capacity' }
                ],
                payment: [
                    { required: true, message: 'Please select payment' }
                ],
                coursefee: [
                    { required: true, message: 'Please input course fee' }
                ],
                effort: [
                    { required: true, message: 'Please input week required in the training' }
                ],
                length: [
                    { required: true, message: 'Please input lenght of the training' }
                ],
                categories: [
                    { required: true, message: 'Please select category' }
                ],
                startdate: [
                    { required: true, message: 'Please select training start date' }
                ],
                enddate: [
                    { required: true, message: 'Please select training end date' }
                ],
                enrolmentcloses: [
                    { required: true, message: 'Please select enrollment closes date' }
                ],
                assignee: [
                    { required: true, message: 'Please select assigned employee' }
                ]
            }
        }
    },
    methods:{
        onnext(){
            this.active++
        },
        onback(){
            this.active--
        }
        
    }
}
</script>