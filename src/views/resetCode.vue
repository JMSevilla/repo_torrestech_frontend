<template>
    <div>
        <div>
            <Nav />
        </div>
        <resetByCode :resetByCode="resetByCode" :send="reset" />
        <div>
             <Footer />
        </div>
       </div>
</template>
<script>
import Nav from "@/components/navbar/nav"
import resetByCode from "@/components/resetCode"
import Footer from "@/components/footer"
export default {
    components:{
        resetByCode, Nav, Footer
    },
    data(){
        return{
            resetByCode:{
               code: ''
            }
        }
    },
    methods:{
        reset(){
            console.log(this.resetByCode)
        }
    }
}
</script>