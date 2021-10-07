<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-7">
          <h3>{{secondaryRoute}}</h3>
        </div>
        <div class="col-md-5 p-3">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{name: `${primaryPath}`}">{{routename}}</el-breadcrumb-item>
            <el-breadcrumb-item :to="{name: `${secondaryPath}`}">{{ secondaryRoute }}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  props: {
    routename : String,
    secondaryRoute: String,
    primaryPath: String,
    secondaryPath: String
  },
}
</script>