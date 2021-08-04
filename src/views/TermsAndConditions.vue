<template>
  <div>
    <navbar />
    <TermsAndConditions />
    <footer />
  </div>
</template>

<script>
import navbar from "@/components/navbar/nav";
import footer from "@/components/footer";
import TermsAndConditions from "@/components/TermsAndConditions";
export default {
  components: {
    navbar,
    TermsAndConditions,
    footer,
  },
};
</script>