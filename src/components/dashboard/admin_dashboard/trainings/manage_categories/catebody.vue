<template>
    <div>
        <div class="row p-3">
            <div class="col-md">
                <div class="card" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2)">
                    <div class="d-flex card-header align-items-center" style="background: #ff ; justify-content:space-between">
                        <div class="d-flex align-items-center">
                                <!-- <h3>Categories</h3>
                                <el-autocomplete
                                    class="search-bar"
                                    v-model="state"
                                    :fetch-suggestions="querySearchAsync"
                                    placeholder="Search for.."
                                    @select="handleSelect"
                               ></el-autocomplete>
                                    <el-button class="search-button" type="primary">Search</el-button>  -->
                        </div>  
                            <div>
                                    <el-button class="add-button" type="primary">+ Add Category</el-button> 
                            </div>                  
                    </div>
                    <categorytable />
                </div>
            </div>  
        </div>
    </div>
</template>

<style scoped src = "@/assets/styles/Administrator/Training/catebody.css">

</style>
<script>
import categorytable from "./category_table"
export default {
    components:{
        categorytable
        
    }
    
}
</script>