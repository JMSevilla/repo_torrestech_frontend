<template>
    <div>
        <FrontPage />
    </div>
</template>

<script>
import FrontPage from "../components/landingpage/frontpage"
import {mapGetters} from 'vuex'
export default {
    components: {
        FrontPage
    },
    data() {
        return { 

        }
    },
    computed: {
        ...mapGetters({
            claims_get_admin: 'claims_get_admin'
        })
    },
    created() {
        this.loadCheck()
    },
    methods: {
        loadCheck() {
            this.$store.dispatch(`actions_admin_checker`).then(res => {
                console.log(this.claims_get_admin)
            })
           
        }
    }
}

</script>