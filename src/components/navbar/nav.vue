<template>
  <div>
    <nav id="nav_color">
      <div
        class="d-flex container align-items-center"
        style="justify-content: space-between"
      >
        <div class="py-2">
          <!-- <h3 id="brand_name"> -->
          <a href="">
            <img
              src="@/assets/img/FrontPage/torres-logo-blue.png"
              alt=""
              height="50px"
            />
          </a>
          <!-- </h3> -->
        </div>
        <div class="d-flex">
          <el-dropdown>
            <a class="nav-link"
              >Learn More
              <span class="el-dropdown-link" id="navbarIcon">
                <i class="el-icon-caret-bottom"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <a
                  ><el-dropdown-item
                    class="dropdown_hover"
                    icon="el-icon-s-custom"
                    >Teachers</el-dropdown-item
                  ></a
                >
                <a
                  ><el-dropdown-item
                    class="dropdown_hover"
                    icon="el-icon-user-solid"
                    >Students</el-dropdown-item
                  ></a
                >
              </el-dropdown-menu>
            </a>
          </el-dropdown>
          &nbsp;
          <a class="nav-link" href="#" @click="AboutUs()">About Us</a>&nbsp;
          <a class="nav-link" href="http://">Our Services</a>
        </div>
        <div>
          <el-button plain class="btnlogin">Sign In</el-button>&nbsp;
          <el-button class="btnsignup">Sign Up</el-button>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped src="@/assets/styles/FrontPage/nav.css"></style>

<script>
export default {
  methods: {
    AboutUs() {
      this.$router.push("/AboutUs");
    },
  },
};
</script>