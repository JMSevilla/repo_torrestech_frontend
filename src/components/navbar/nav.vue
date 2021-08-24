<template>
    <div class="nav_color">
        <nav class="container space_between">
            <div class="py-2">
                <img src="@/assets/img/FrontPage/torres-logo-blue.png" alt="" class="logo" @click="homelink()">
            </div>
            <i class="fas fa-bars toggle-bars" @click="btnbars()"></i> 
            <i class="fas fa-times toggle-close" id="btnclose" @click="btn_close()"></i>
            <ul class="navlinks">
                <li>
                    <a @click="homelink()" class="nav-link">Home</a>
                </li>
                 <li>
                    <a @click="AboutUs()" class="nav-link">About Us</a>
                </li>
                 <li>
                    <a class="nav-link">Our Services</a>
                </li>
            </ul>
            <div class="btn_nav">
                <div>
                <el-button @click="btnlogin()" plain class="btnlogin">Login</el-button>
                </div>
                <div>
                <el-button @click="onsignup()" class="btnsignup">Sign Up</el-button>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    methods: {
        btnlogin(){
            this.$router.push({name:"Login"}).catch(()=>{});
        },
        btnbars() {
            document.querySelector('.navlinks').style.display = 'flex'
            // document.querySelector('.navlinks').style.zIndex = 5
            // document.querySelector('.navlinks').style.position = 'fixed'
            document.querySelector('.btn_nav').style.display = 'flex'
            document.querySelector('.toggle-bars').style.display = 'none'
            document.querySelector('.toggle-close').style.display = 'flex'
            document.querySelector(".main_div").style.marginBottom = '128px'
        },
        btn_close() {
            document.querySelector('.navlinks').style.display = 'none'
            document.querySelector('.btn_nav').style.display = 'none'
            document.querySelector('.toggle-close').style.display = 'none'
            document.querySelector('.toggle-bars').style.display = 'flex'
            document.querySelector(".main_div").style.marginBottom = '355px'
        },
        onsignup() {
            this.$router.push({name: 'signup'}).catch(() => {})
        },
        homelink() {
            this.$router.push({name: 'Home'}).catch(() => {})
        },
        AboutUs(){
            this.$router.push({name: "AboutUs"}).catch(() =>{});
        },
    }
}
</script>

<style scoped src="@/assets/styles/FrontPage/navbarstyle.css"></style>