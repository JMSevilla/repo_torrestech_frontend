<template>
    <div>
        <div>
            <HeaderStudents />
        </div>
        <div class="p-4">
            <AllStudents />
        </div>
    </div>
</template>

<script>
import HeaderStudents from "@/components/dashboard/admin_dashboard/students_tab/headerstudents"
import AllStudents from "@/components/dashboard/admin_dashboard/students_tab/allstudents"
export default {
    components: {
        HeaderStudents, AllStudents
    }
}
</script>