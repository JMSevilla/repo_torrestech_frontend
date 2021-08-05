<template>
  <div>
    <navbar />
    <privacypolicy />
    <footerTorres />
  </div>
</template>

<script>
import navbar from "@/components/navbar/nav";
import footerTorres from "@/components/footer";
import privacypolicy from "@/components/PrivacyPolicy";
export default {
  components: {
    navbar,
    privacypolicy,
    footerTorres,
  },
};
</script>