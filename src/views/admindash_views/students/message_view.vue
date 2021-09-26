<template>
    <div>
        <div>
            <HeaderStudents />
        </div>
        <div class="p-4">
            <Message />
        </div>
    </div>
</template>

<script>
import HeaderStudents from "@/components/dashboard/admin_dashboard/students_tab/headerstudents"
import Message from "@/components/dashboard/admin_dashboard/students_tab/message"
export default {
    components: {
        HeaderStudents, Message
    },
}
</script>