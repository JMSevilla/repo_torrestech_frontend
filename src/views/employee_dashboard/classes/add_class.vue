<template>
    <div>
        <div style="background: #fff">
            <Subheader />
        </div>
        <div class="p-4">
            <AddClass :classcode="classcode" :rules="rules" />
        </div>
    </div>
</template>

<script>
import Subheader from "@/components/dashboard/employee_dashboard/classes/subheader"
import AddClass from "@/components/dashboard/employee_dashboard/classes/addclass"
export default {
    components: {
        Subheader, AddClass
    },
    data(){
        return{
            classcode:{
                classname:'',
                training:'',
                listtraining:[{
                        label: 'Data Analytics',
                        value: 'Data Analytics'
                    },
                    {
                        label: 'HR',
                        value: 'HR'
                    },
                     {
                        label: 'Python',
                        value: 'Python'
                    }
                ],
                classtype:'',
                listclasstype:[{
                        label: 'Online',
                        value: '1'
                    },
                    {
                        label: 'In-person',
                        value: '0'
                    }
                ],
                status:'',
                liststatus:[{
                        label: 'Enable',
                        value: '1'
                    },
                    {
                        label: 'Disable',
                        value: '0'
                    }
                ],
                description:''
            },
            rules:{
                classname:[
                    {required: true, message:'Please input class name'}
                ],
                training:[
                    {required: true, message: 'Please select training'}
                ],
                classtype:[
                    {required: true, message: 'Please select class type'}
                ],
                status:[
                    {required: true, message: 'Please select status'}
                ],
                description:[
                    {required: true, message: 'Please input description'}
                ]
            }
        }
    }
    
}
</script>