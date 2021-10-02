<template>
    <div>
        <div>
            <HeaderEmployee />
        </div>
        <div class="p-4">
            <EmployeeList 
                :tableData="tableData" :search="search" :routeto_adding="routeto_adding"
                :viewinfo="viewinfo" :btnArchive="btnArchive" />
        </div>
    </div>
</template>

<script>
import EmployeeList from "@/components/dashboard/admin_dashboard/employees_tab/employeetable"
import HeaderEmployee from "@/components/dashboard/admin_dashboard/employees_tab/headeremployee"
export default {
    components: {
        HeaderEmployee, EmployeeList
    },
    data() {
      return {
        success: 'success',
        tableData: [{
          id: 1,
          code: '2016-05-03',
          profile: 'Tom',
          firstname: 'Ma. Julina',
          lastname: 'Barrameda',
          platform: 'assigned sample',
          email: 'mj@yahoo.com',
          password: '',
          confirmpass: ''
        }, {
          id: 2,
          code: '2016-05-03',
          profile: 'Tom',
          firstname: 'Emman',
          lastname: 'Borrico',
          platform: 'assigned sample',
          email: 'mj@yahoo.com',
          password: '',
          confirmpass: ''
        },
        {
          id: 3,
          code: '2016-05-03',
          profile: 'Tom',
          firstname: 'Jomar',
          lastname: 'Tecling',
          platform: 'assigned sample',
          email: 'mj@yahoo.com',
          password: '',
          confirmpass: ''
        },],
        search: '',
      }
    },
    methods: {
        routeto_adding() {
            this.$router.push({ name: 'AddNewEmployee' }).catch(()=>{});
        },
        viewinfo() {
            this.$router.push({ name: 'EmployeeInfo' }).catch(()=>{});
      },
      btnArchive(id) {
        this.$confirm('Are you sure you want to delete this data?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
        }).then(() => {
            const loading = this.$loading({
                lock: true,
                text: 'Loading',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            });
            setTimeout(() => {
            if(this.success === 'success') {
                this.$notify.success({
                    title: 'Success',
                    message: 'Success'
                })
                loading.close();
            }
            else {
                this.$notify.error({
                    title: 'Error',
                    message: 'Error'
                })
            }
            }, 3000);
        })

      }
    }
}
</script>