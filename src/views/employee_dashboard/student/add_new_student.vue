<template>
    <div>
        <div style="background: #fff">
            <Subheader />
        </div>
        <div class="p-4">
            <AddNewStudent />
        </div>
    </div>
</template>

<script>
import Subheader from "@/components/dashboard/employee_dashboard/student/student_subheader"
import AddNewStudent from "@/components/dashboard/employee_dashboard/student/add_new_student"

export default {
    components: {
        Subheader
        ,AddNewStudent
    },
}
</script>
