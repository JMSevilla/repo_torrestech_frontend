<template>
    <div>
        <div class="px-4 py-3 flex">
            <div class="row">
               <div class="col-md col-sm">
                  <div class="card">
                      <div class="card-body d-flex align-items-center">
                        <div>
                            <i class="fas fa-users fa-lg text-white p-3" style="background: #0f5298; border-radius: 5px;"></i>
                        </div>
                        <div class="mx-3" style="color: #2d4059; font-weight: bold">
                            <h5 style="padding: 0; margin: 0">Students</h5>
                            <p style="padding: 0; margin: 0;">10</p>
                        </div>
                      </div>
                  </div>
               </div>
               <div class="col-md  col-sm">
                  <div class="card">
                      <div class="card-body d-flex align-items-center">
                        <div>
                            <i class="fas fa-book fa-lg text-white p-3" style="background: #0f5298; border-radius: 5px;"></i>
                        </div>
                        <div class="mx-3" style="color: #2d4059; font-weight: bold">
                            <h5 style="padding: 0; margin: 0;">Trainings</h5>
                            <p style="padding: 0; margin: 0;">10</p>
                        </div>
                      </div>
                  </div>
               </div>
               <div class="col-md  col-sm">
                  <div class="card">
                      <div class="card-body d-flex align-items-center">
                        <div>
                            <i class="fas fa-users fa-lg text-white p-3" style="background: #0f5298; border-radius: 5px;"></i>
                        </div>
                        <div class="mx-3" style="color: #2d4059; font-weight: bold">
                            <h5 style="padding: 0; margin: 0;">Homework</h5>
                            <p style="padding: 0; margin: 0;">10</p>
                        </div>
                      </div>
                  </div>
               </div>
               <div class="col-md  col-sm column4">
                  <div class="card">
                      <div class="card-body d-flex align-items-center">
                        <div>
                            <i class="fas fa-users fa-lg text-white p-3" style="background: #0f5298; border-radius: 5px;"></i>
                        </div>
                        <div class="mx-3" style="color: #2d4059; font-weight: bold">
                            <h5 style="padding: 0; margin: 0">Classes</h5>
                            <p style="padding: 0; margin: 0">10</p>
                        </div>
                      </div>
                  </div>
               </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
    svg {
        fill: white;
    }

    @media screen and (max-width:1025px) {
    
    .column4{
        max-width:33%;
    }
    }

    @media screen and (max-width:769px) {
    
    .column4{
        max-width:100%;
    }
    }
</style>