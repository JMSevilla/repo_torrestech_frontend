<template>
  <div class="nav-fixed">
    <nav id="nav_color">
      <div
        class="d-flex container align-items-center"
        style="justify-content: space-between"
      >
        <div class="py-2">
            <a href="">
              <img src="@/assets/img/FrontPage/torres-logo-blue.png" alt="" class="logo-size">
            </a>
           <i class="fas fa-times" id="btnclose" @click="btn_close()"></i>
        </div>
        <div class="displaynone">
          <a class="nav-link" @click="onhome()">Home</a>
          <a class="nav-link" @click="AboutUs()">About Us</a>
          <a class="nav-link">Our Services</a>
        </div>
        <div class="btnflex">
          <div style="margin-right: 5px;">
            <el-button plain class="btnlogin" @click="btnlogin()">Login</el-button>
          </div>
          <div class="pad-top">
            <el-button class="btnsignup" @click="onsignup()">Sign Up</el-button>
          </div>
        </div>
        <div id="d-bars">
          <i class="fas fa-bars" @click="btnbars()"></i>   
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
   AboutUs() {
      this.$router.push({ name: "AboutUs" }).catch(() => {});
    },
     btnlogin(){
      this.$router.push({name:"Login"}).catch(()=>{});
    },
    btnbars() {
      if(window.innerWidth > 360){
        document.querySelector(".d-flex").style.flexDirection = "column";
        document.querySelector(".displaynone").style.display = "flex";
        document.querySelector(".displaynone").style.flexDirection = "column";
        document.querySelector(".btnflex").style.display = "flex";

        document.querySelector(".d-flex").style.width = "100%";
        document.querySelector(".d-flex").style.height = "100%";
        document.querySelector(".d-flex").style.backgroundColor = "#fff";
        document.querySelector(".d-flex").style.zIndex = 5;
        document.querySelector(".main_div").style.marginBottom = "159px";
        document.querySelector(".btnlogin").style.backgroundColor = "#fff";
        document.querySelector(".d-flex").style.transition = "ease-out 0.9s";

        document.querySelector(".btnflex").style.flexDirection = "column";
        document.querySelector(".pad-top").style.margin = "11px 0 ";
        document.querySelector(".logo-size").style.marginRight = "190px";
        document.querySelector("#d-bars").style.display = "none";
        document.querySelector(".fstbox").style.top = "74px";
        // document.querySelector(".sndbox").style.top = "10px";
        document.querySelector("#btnclose").style.display = "block";
        document.querySelector("#btnclose").style.position = "absolute";
        document.querySelector("#btnclose").style.top = "20px";
        document.querySelector("#btnclose").style.right = "11px";
      }
      else {
        document.querySelector(".d-flex").style.width = "100%";
        document.querySelector(".d-flex").style.height = "100%";
        document.querySelector(".d-flex").style.backgroundColor = "#fff";
        document.querySelector(".d-flex").style.zIndex = 5;
        document.querySelector(".main_div").style.marginBottom = "159px";
        document.querySelector(".fstbox").style.top = "74px";
        document.querySelector(".btnlogin").style.backgroundColor = "#fff";

        document.querySelector(".d-flex").style.transition = "ease-out 0.9s";

        document.querySelector(".d-flex").style.flexDirection = "column";
        document.querySelector(".displaynone").style.display = "flex";
        document.querySelector(".displaynone").style.flexDirection = "column";
        document.querySelector(".btnflex").style.display = "flex";
        document.querySelector(".btnflex").style.flexDirection = "column";
        document.querySelector(".pad-top").style.margin = "11px 0 ";
        document.querySelector(".logo-size").style.marginRight = "160px";
        document.querySelector("#d-bars").style.display = "none";
        // document.querySelector(".sndbox").style.top = "433px";
        document.querySelector("#btnclose").style.display = "block";
        document.querySelector("#btnclose").style.position = "absolute";
        document.querySelector("#btnclose").style.top = "20px";
        document.querySelector("#btnclose").style.right = "11px";
      }
    },
    btn_close() {
      // document.querySelector(".d-flex").style.width = "100%";
      // document.querySelector(".d-flex").style.height = "100%";
      document.querySelector(".d-flex").style.backgroundColor = "#fff";
      // document.querySelector(".d-flex").style.zIndex = 5;
      document.querySelector(".main_div").style.marginBottom = "355px";
      document.querySelector(".d-flex").style.transition = "ease-in 0.9s";
      // document.querySelector(".fstbox").style.top = "74px";

      document.querySelector(".d-flex").style.display = "none";
      document.querySelector(".displaynone").style.display = "none";
      document.querySelector(".btnflex").style.display = "none";
      // document.querySelector(".sndbox").style.top = "237px";
      document.querySelector(".pad-top").style.margin = "0";
      document.querySelector("#btnclose").style.display = "none";
      document.querySelector("#d-bars").style.display = "block";
      document.querySelector("#d-bars").style.display = "block";
      document.querySelector("#d-bars").style.position = "absolute";
      document.querySelector("#d-bars").style.top = "20px";
      document.querySelector("#d-bars").style.right = "11px";
    },
    // hannah 8/4/21
    onsignup(){
      this.$router.push({name: "signup"}).catch(() =>{});
    },
    onhome(){
      this.$router.push({name: "Home"}).catch(() =>{});
    }
  }
}
</script>

<style scoped src="@/assets/styles/FrontPage/frontpage_style.css"></style>
