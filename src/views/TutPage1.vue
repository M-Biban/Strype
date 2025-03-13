<template>
    <div>
    </div>
</template>
  
<script lang="ts">
import { useStore } from "@/store/store";
import Vue from "vue";

export default Vue.extend({
    name: "TutorialPage1",

    computed:{
        isSharedTutorial(): boolean {
            if(this.$route.fullPath.includes("?file")){
                return true;
            }
            return false;
        },
    },

    mounted() {
        useStore().initialiseTutorialState(this.$route.path, this.isSharedTutorial);
    },
});
</script>
  
  <style scoped>
  /* Add styles if needed */
  </style>
  