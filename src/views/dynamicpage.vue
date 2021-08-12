<script>

export default {
    data(){
        return{
            arrayable: []
        }
    },
    created(){
        this.checkdata()
    },
    methods: {
        checkdata(){
           
        }
    }
}
</script>
<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <img :src="arrayable.imageurl"
                    style="width: 50%; height: auto;" class="img-fluid" alt="">
                </div>
                <div class="col-md-6">
                    <h1>{{arrayable.title}}</h1>
                    <p>{{arrayable.description}}</p>
                </div>
            </div>
        </div>
    </div>
</template>