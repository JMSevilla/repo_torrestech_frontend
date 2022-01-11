<script>
export default {
  data(){
    return {
      title: 'Software Development',
      hardwaretitle: 'Hardware Maintenance'
    }
  },
  methods: {
    ontitle(){
      this.$router.push({name :'Dynamic', query: {title: this.title}})
    },
    onhardware(){
        this.$router.push({name :'Dynamic', query: {title: this.hardwaretitle}})
    }
  }
}
</script>
<template>
  <div>
    <div id="wrapper1" class="wrapper">
      <div id="row1" class="row">
        <div
          class="col-lg-6"
          id="r1c1"
        >
          <img
            src="../../assets/img/AboutUs/section-company-profile-v1.png"
            alt=""
            id="imgCompany"
          />
        </div>
        <div id="r1c2" class="col-lg-6">
          <h3>Company Profile</h3>
          <p id="p1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
            ipsum doloremque vitae fugiat dolor, maiores mollitia voluptatum
            harum voluptates itaque ducimus ullam est distinctio atque
            doloribus? Voluptatum soluta tempore odit. Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Odio repudiandae itaque
            reprehenderit esse possimus omnis, blanditiis, nisi amet quasi
            voluptatem voluptatum! Nisi quasi eveniet optio nihil voluptatibus
            vitae, deserunt quibusdam? Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Possimus officia reprehenderit unde beatae illo at
            et nulla corrupti.<br /><br />
            Voluptas saepe maxime ratione ex rem sapiente excepturi. Reiciendis
            quis quas voluptas! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Veniam magni provident ullam in ipsam
            necessitatibus iure distinctio, minus deleniti, eligendi enim
            exercitationem eum non labore saepe corporis modi cupiditate
            
            
          </p>
        </div>
      </div>
    </div>
    <div  id="wrapper2" class="wrapper">
      <div
        class="row"
        id="r1c1"
      >
        <div class="col-lg-6">
          <img
            id="imgWWCD"
            src="../../assets/img/AboutUs/section-what-we-do-v1.png"
            alt=""
            
          />
        </div>
        <div id="r2c2" class="col-lg-6 order-lg-12">
          <h3>What We Do</h3>
          <p>
            We partner with our clients to solve their toughest business
            challenges by providing them ,<br />
            solutions focused on the following competencies <br> <br>
            <el-link  class="WWCDTitles" @click="ontitle">{{title}}</el-link> <br>
            <el-link class="WWCDTitles"  @click="onhardware">{{hardwaretitle}}</el-link> <br />
            <el-link class="WWCDTitles">Network and Database Administration</el-link> <br />
            <el-link class="WWCDTitles">Computer System/Software Subscription</el-link> <br />
            <el-link class="WWCDTitles">Wiring Harness Manufacturing</el-link><br />
            <el-link class="WWCDTitles">Tool and Die</el-link> <br />
            <el-link class="WWCDTitles">Wiring Harness Assembly Training</el-link><br />
            <el-link class="WWCDTitles">Automotive Core Tools Training</el-link><br />
            <el-link class="WWCDTitles">Six Sigma Training</el-link><br />
            <el-link class="WWCDTitles">Warehousing and Inventory Management</el-link><br />
            <el-link class="WWCDTitles">ISO Management System Consulting</el-link><br />
            <el-link class="WWCDTitles">5S Training, Auditing and Consulting</el-link><br />
            <el-link class="WWCDTitles">Equipment and Facilities Management</el-link><br />
            <el-link class="WWCDTitles">Truckin/Hauling Services</el-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped src="@/assets/styles/AboutUs/styles.css"></style>