<template>
    <div>
        <div>
            <Nav />
        </div>
        <resetPassword :resetPassword="resetPassword" :send="resetPass" />
        <div>
            <Footer />
        </div>
    </div>
</template>
<script>
import Nav from "@/components/navbar/nav"
import resetPassword from"@/components/resetPass"
import Footer from "@/components/footer"
export default {
    components:{
        resetPassword, Nav, Footer
    },
    data(){
        return{
            resetPassword:{
                password: '.......',
                cPassword:'.......'
            }
        }
    },methods:{
        resetPass(){
            console.log(this.resetPassword)
        }
    }
}
</script>