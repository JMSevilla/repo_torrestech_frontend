<template>

<div class="card">
    
    <div class="card-body container" >
        <div class="row align-items-center ">
            <div class="col-md-6">
                    <div class="container">
                        <h3 class="card-title1">FOR EDUCATORS</h3>
                    <h4 class="card-title2">Tools that teachers need</h4>
                    <p class="card-text1" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut ducimus ipsum ea hic aspernatur in libero vitae, eum repellat? Laborum, corrupti cumque? Blanditiis autem rem neque earum debitis illo. Officia!</p>
                    <a href="#" class="btn btn-primary" id="createbtn"  >Create Account</a>
                    </div>  
            </div>
            <div class="col-md-6">
                <div class="container">
                    <img src="@/assets/educators.png" id="educpics"  alt="Card image cap">
                </div>
                    
            </div>
        </div>           
    </div>       
 
</div>

</template>
<style scoped>
    #createbtn {
        background-color: #0F5298;
    }   
    #educpics{
        width: 100%;

    }
    .card-title1{
        font-size: 1em;
        color: #C2BEBD;
    }
    .card-title2{
        font-size: 2em;
        color: #292C61;
        font-family:  Arial, Helvetica, sans-serif;
    }
    .card-text1{
        font-size: 1.2em;
        font-family: Arial, Helvetica, sans-serif ;
    }

</style>