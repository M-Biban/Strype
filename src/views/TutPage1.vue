<template>
    <div>
    </div>
</template>
  
<script lang="ts">
import { useStore } from "@/store/store";
import Vue from "vue";

export default Vue.extend({
    name: "TutorialPage1",

    mounted() {
        useStore().initialiseTutorialState(this.$route.path);
    },
});
</script>
  
  <style scoped>
  /* Add styles if needed */
  </style>
  