<template>
    <div>
        <div>
            <!-- <HeaderStudents /> -->
        </div>
        <div class="p-4">
            <AllStudents :btnArchive="btnArchive" :tableData="tableData" :viewStudent="viewStudent" :search="search"/>
        </div>
    </div>
</template>

<script>
import HeaderStudents from "@/components/dashboard/admin_dashboard/students_tab/headerstudents"
import AllStudents from "@/components/dashboard/admin_dashboard/students_tab/allstudents"
export default {
    components: {
        HeaderStudents, AllStudents
    },
    data() {
      return {
        success: 'success',
        tableData: [{
          profile: 'Tom',
          firstname: 'Ma. Julina',
          lastname: 'Barrameda',
          age: '23',
          status: 'active'
        }, {
          profile: 'Tom',
          firstname: 'Emman',
          lastname: 'Borrico',
          age: '24',
          status: 'active'
        },
        {
          profile: 'Tom',
          firstname: 'Jomar',
          lastname: 'Tecling',
          age: '27',
          status: 'active'
        },],
        search: '',
      }
    },
    methods: {
        viewStudent() {
            this.$router.push({ name: 'StudentInfo' }).catch(()=>{});
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
        },
    }
}
</script>