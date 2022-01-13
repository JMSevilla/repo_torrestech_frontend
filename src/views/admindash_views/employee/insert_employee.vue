<template>
    <div>
        <div>
            <!-- <HeaderEmployee /> -->
        </div>
        <div class="p-4">
            <AddNewEmployee />
        </div>
    </div>
</template>
<script>
import HeaderEmployee from "@/components/dashboard/admin_dashboard/employees_tab/headeremployee"
import AddNewEmployee from "@/components/dashboard/admin_dashboard/employees_tab/addnewemployee"
export default {
    components: {
        HeaderEmployee, AddNewEmployee
    }
}
</script>