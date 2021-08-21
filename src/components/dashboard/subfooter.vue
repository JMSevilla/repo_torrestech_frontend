<template>
    <div>
        <div class="container-fluid" id="container2">
            <span>Copyright &copy; Torres Technology Center Corporation {{new Date().getFullYear()}}. </span>
            <span> All rights reserved.</span> 
            <small class="textdivider"> | </small> 
            <span @click="PrivacyPolicy()" id="privacyPolicy">  Privacy Policy  </span> 
            <small class="textdivider"> | </small> 
            <span id="TermsAndConditions" @click="TermsAndConditions()">Terms and Conditions</span>
        </div>
    </div>
</template>

<style scoped src="@/assets/styles/footer.css"></style>