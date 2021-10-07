<template>
  <div>
    <el-input clearable type="text" placeholder="Search" style="margin-top: 10px; margin-bottom: 10px;" v-model="searchable"></el-input>
    <el-table
        :key="0"
        v-loading="propLazyLoad"
        :data="pagedTableData"
        border
        fit
        highlight-current-row
        style="width: 100%;"

    >
      <el-table-column label="Indicator" prop="id" sortable="custom" align="center"  >
        <template slot-scope="{row}">
          <span>{{ row.apiIndicator }}</span>
        </template>
      </el-table-column>

      <el-table-column label="API" align="center">
        <template slot-scope="{row}">
          <!-- <img :src="row.orderImage" style="width: 100%; height: auto;" class="img-fluid" alt="No image"> -->
          <!-- <el-tag>{{ row.type | typeFilter }}</el-tag> -->
          <span>{{ row.apiKey }}</span>
        </template>
      </el-table-column>

      <el-table-column label="Status" align="center">
        <template slot-scope="{row}">
<!--          <span class="link-type" >&#8369;{{ row.prodPrice }}</span>-->
          <div v-if="row.isused == '1'">
            <el-tag type="danger">Closed</el-tag>
          </div>
          <div v-else>
            <el-tag type="success">Open</el-tag>
          </div>
        </template>
      </el-table-column>

      <el-table-column label="Created"  align="center">
        <template slot-scope="{row}">
          <span>{{ row.createdAt }}</span>
        </template>
      </el-table-column>

      <el-table-column label="More Actions"  align="center">
        <template slot-scope="{row}">
          <el-button type="danger">Delete Key</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination layout="prev, pager, next" :page-size="propPageSize" :total="this.propListArray.length" @current-change="setPage">
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    propSearch: String,
    propLazyLoad: Boolean,
    propPageSize: Number,
    propListArray: Array,
    page: Number
  },
  data(){
    return{
    searchable : ''
    }
  },
  computed: {
    pagedTableData(){
      if(this.searchable){
        return this.propListArray.filter((item)=>{
          return this.searchable.toLowerCase().split(' ').every(v => item.apiIndicator.toString().toLowerCase().includes(v))
        })
      }else{
        return this.propListArray.slice(this.propPageSize * this.page - this.propPageSize, this.propPageSize * this.page)
      }
    }
  },
  methods: {
    setPage(val){
      this.page = val
    }
  }
}
</script>