<template>
    <div class="main_div">
      <div class="container_div">
          <div>
            <div class="fstbox">
              <div class="row">
                <div class="col-md-9">
                  <div class="main_text">
                    <h3 class="h3_content1">"We Develop</h3>
                    <h3 class="h3_content1">Young Professionals"</h3>      
                    <p class="p_text">Different fields of expertise we offer various tracks.</p>
                    <el-button @click="watwedo_link()" class="btnwatwedo" size="medium">WHAT WE DO</el-button>
                  </div>
                </div>
                <div class="col-md-3">
                  
                </div>
              </div>
            </div>     
            <div class="sndbox">
              <div class="card" style="background: #f5f7f8;">
                <div class="card-body">
                  <img src="@/assets/img/FrontPage/hero-video-v1.gif" style="border-radius: 5px;" alt="" srcset="" class="img_herovid">
                </div>
              </div>
            </div>
          </div>      
      </div>
    </div>
</template>

<style scoped src="@/assets/styles/FrontPage/content1_style.css"></style>

<script>
export default {
  methods: {
    watwedo_link() {
      this.$router.push({ name: 'AboutUs' }).catch(() => {});
    }
  }
}
</script>