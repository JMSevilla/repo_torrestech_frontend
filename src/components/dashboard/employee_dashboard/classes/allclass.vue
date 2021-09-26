<template>
    <div>
        <div class="card" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2)">
            <div class="card-header" style="background: #FFF">                
                <el-row>
                    <el-col :span="3">
                        <h3 class="classcode-headline">All Classes</h3>
                    </el-col>
                    <el-col :span="7">
                        <div class="input-form ml-3">
                            <el-input placeholder="Search for ..." v-model="classSearch"></el-input>    
                        </div>
                    </el-col>
                    <el-col :span="2">
                        <div>
                            <el-dropdown>
                            <el-button class="filter-btn" style="primary">FILTER <i class="fas fa-caret-down"></i>
                            </el-button>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>Class Name</el-dropdown-item>
                                <el-dropdown-item>Training Under</el-dropdown-item>
                                <el-dropdown-item>Status</el-dropdown-item>
                            </el-dropdown-menu>
                            </el-dropdown>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <el-button class="add-btn" @click="onaddnewclass()"><i class="fas fa-plus"></i> ADD NEW</el-button>
                    </el-col>
                </el-row>
            </div>
            <div class="py-2">
                <AllClassContent :goToEditPage="goToEditPage" :onviewclasses="onviewclasses"/>
            </div>
            <div class="card-footer p-3"  style="background: #FFF;">
                <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="1000" class="pagination">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<style scoped src="@/assets/styles/Employee_Dashboard/Classes/classes.css"></style>

<script>
import AllClassContent from "./allclass_content"
export default {
    components:{
        AllClassContent
    },
    data(){
        return{
            classSearch:''
        }
    },
    methods: {
        goToEditPage(){
            this.$router.push({name: 'EditClass'}).catch(() => {})
        },
        onviewclasses(){
            this.$router.push({name: 'ViewClass'}).catch(() => {})
        },
        onaddnewclass(){
            this.$router.push({name: 'AddClass'}).catch(() =>{})
        }
    }
}
</script>