<template>
    <div>
        <div class="container-fluid sub-footer">
            <div class="container">
                <div class="row flex-direc">
                    <div class="col-md-9 sub-footer-link-column1">
                        <span class="text-align">Copyright &copy; Torres Technology Center Corporation {{new Date().getFullYear()}}. </span>
                        <span class="text-align"> All rights reserved.</span> 
                        <small class="textdivider"> | </small> 
                        <span @click="PrivacyPolicy()" class="sub-footer-link">  Privacy Policy  </span> 
                        <small> | </small> 
                        <span @click="TermsAndConditions()" class="sub-footer-link">Terms and Conditions</span> 
                    </div>
                    <div class="col-md-3 sub-footer-link-column2">
                         <span @click="ReportABug()" class="sub-footer-link" >Having issue with the site? Report a bug now.</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped src="@/assets/styles/footer.css"></style>

<script>
export default {
    methods: {
        TermsAndConditions(){
            this.$router.push({name: 'TermsAndConditions'}).catch(()=>{});
        },
        PrivacyPolicy(){
            this.$router.push({name: 'PrivacyPolicy'}).catch(()=>{});
        },
        ReportABug(){
            this.$router.push({name: 'ReportABug'}).catch(()=>{});
        }
    }
}
</script>
