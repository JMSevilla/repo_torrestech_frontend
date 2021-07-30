<template>
    <div>
        <navigation />
        <div>
            <productpage />
        </div>

    </div>
</template>

<script>
import navigation from "@/components/nav"
import productpage from "@/components/product-template"
import productpage2 from "@/components/product-template2"
export default {
    components: {
        navigation, productpage, productpage2

    }
}
</script>