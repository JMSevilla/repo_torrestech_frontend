<template>
    <div>
        <div>
            <!-- <HeaderStudents /> -->
        </div>
        <div class="p-4">
            <ClassCode :tableData="tableData" :btnArchive="btnArchive" />
        </div>
    </div>
</template>

<script>
import HeaderStudents from "@/components/dashboard/admin_dashboard/students_tab/headerstudents"
import ClassCode from "@/components/dashboard/admin_dashboard/students_tab/classcode"
export default {
    components: {
        HeaderStudents, ClassCode
    },
    data() {
      return {
        success: 'success',
        tableData: [{
          code: '2016-05-03',
          training: 'assigned sample',
          owner: 'emman'
        }, {
          code: '2016-05-03',
          training: 'assigned sample',
          owner: 'mj'
        },
        {
          code: '2016-05-03',
          training: 'assigned sample',
          owner: 'jomar'
        },],
        search: '',
      }
    },
    methods: {
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