<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-7 pt-1">
                    <h3>Add Online Training</h3>
                </div>
                <div class="col-md-5 pt-3">
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item :to="{ path: '' }">Dashboard</el-breadcrumb-item>
                        <el-breadcrumb-item :to="{ path: 'add-new-training' }">Add New Training</el-breadcrumb-item>
                        <el-breadcrumb-item :to="{ path: 'add-new-training' }">Online</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped src="@/assets/styles/Administrator/Training/addNewTrainings.css"></style>