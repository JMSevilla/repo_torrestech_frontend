<template>
    <div>
      <div style ="background: #fff">
          <ClassSubheader />
      </div>
      <div class="p-4">
           <ViewClass />
      </div>   
    </div>
</template>
<script>
import ClassSubheader from '@/components/dashboard/employee_dashboard/view_class/classSubheader'
import ViewClass from '@/components/dashboard/employee_dashboard/view_class/viewClass'
export default {
    components:{
        ClassSubheader,ViewClass
    }
}
</script>