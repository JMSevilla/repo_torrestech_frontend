<template>
    <div>
        <div>
            <HeaderStudents />
        </div>
        <div class="p-4">
            <ClassCode />
        </div>
    </div>
</template>

<script>
import HeaderStudents from "@/components/dashboard/admin_dashboard/students_tab/headerstudents"
import ClassCode from "@/components/dashboard/admin_dashboard/students_tab/classcode"
export default {
    components: {
        HeaderStudents, ClassCode
    }
}
</script>