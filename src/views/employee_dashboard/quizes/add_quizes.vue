<template>
    <div>
        <Subheader/>
    <div class="p-4">
            <AddQuizes :addquiz="addquiz" :rules="rules"/>
            
    </div>
    </div>
</template>

<script>
import Subheader from '@/components/dashboard/employee_dashboard/quizes/subheader'
import AddQuizes from "@/components/dashboard/employee_dashboard/quizes/add_quizes"
export default {
    components: {
        Subheader, AddQuizes
    },
    data() {
      return {
        addquiz: {
          quiztitle: '',
          passingmark: ''
        },
        rules: {
            quiztitle: [
                {required: true, message: 'Please enter quiz title'}
            ], 
            passingmark: [
                {required: true, message: 'Please enter passing mark'}
            ],
            status: [
                {required: true, message: 'Please select the status'}
            ]
        }
      }
    }
}
</script>