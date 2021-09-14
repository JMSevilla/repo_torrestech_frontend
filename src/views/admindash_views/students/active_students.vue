<template>
    <div>
        <div>
            <HeaderStudents />
        </div>
        <div class="p-4">
            <ActiveStudents />
        </div>
    </div>
</template>

<script>
import HeaderStudents from "@/components/dashboard/admin_dashboard/students_tab/headerstudents"
import ActiveStudents from "@/components/dashboard/admin_dashboard/students_tab/activestudents"
export default {
    components: {
        HeaderStudents, ActiveStudents
    }
}
</script>