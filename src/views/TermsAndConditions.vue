<template>
  <div>
    <navbar />
    <TermsAndConditions />
    <Footer />
  </div>
</template>

<script>
import navbar from "@/components/navbar/nav";
import Footer from "@/components/footer";
import TermsAndConditions from "@/components/TermsAndConditions";
export default {
  components: {
    navbar,
    TermsAndConditions,
    Footer,
  },
};
</script>