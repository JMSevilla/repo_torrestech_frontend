<template>
    <div>
        <div>
            <HeaderEmployee />
        </div>
        <div class="p-4">
            <EmployeeList />
        </div>
    </div>
</template>

<script>
import EmployeeList from "@/components/dashboard/admin_dashboard/employees_tab/employeetable"
import HeaderEmployee from "@/components/dashboard/admin_dashboard/employees_tab/headeremployee"
export default {
    components: {
        HeaderEmployee, EmployeeList
    }
}
</script>