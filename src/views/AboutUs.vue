<template>
  <div>
    <navigation />
    <aboutus />
    <footerTorres />
  </div>
</template>

<script>
import navigation from "@/components/navbar/nav";
import aboutus from "@/components/AboutUs/AboutUs.vue";
import footerTorres from "@/components/footer";
export default {
  components: {
    navigation,
    aboutus,
    footerTorres,
  },
};
</script>