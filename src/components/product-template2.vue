<template>
    <div>
        <div class="banner_container">
            <b-row align-h="end">
                <b-col cols="6">

                    <b-row no-gutters><!--first row logo branding and logo product-->
                        <b-col>
                            <img src="@/assets/torres-logo-v3.3.png" alt="branding logo" width="100%" height="100px">
                        </b-col>
                        <b-col>
                            <img src="@/assets/revitcertification.png" alt="product logo" width="30%" height="auto">
                        </b-col>
                    </b-row>

                    <b-row id="banner_section2">
                        <h1 class="title">Product Title Here</h1>
                        <p class="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div>
                            <b-col class="pb-2">
                                <b-button variant="danger" size="lg">Contact Us</b-button>
                            </b-col>
                        </div>
                    </b-row>

                </b-col>
            </b-row>
        </div>
    </div>
</template>

<style scoped>
    .banner_container{
        margin: 2% 0;
        /* background-image: url('@/assets/autodesk-revit-certUser-bg.jpg') */
    }

    .title{
        font-size: 35px;
    }
    .body{
        font-size: 18px;
    }
    #banner_section2{
        margin: 5% 0;
    }


</style>