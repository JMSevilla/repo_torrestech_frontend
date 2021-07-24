<template>
    <div>
        <navigation />
       <div>
             <front_end_educators />
       </div>
           
       
    </div>
</template>

<script>
import navigation from "@/components/nav"
import front_end_educators from "@/components/content/front_end_educators"
export default {
    components: {
        navigation , front_end_educators
    }
}
</script>