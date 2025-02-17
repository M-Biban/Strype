<template>
    <div>
      <h1>Tutorial Page</h1>
      <p>This is the tutorial page.</p>
    </div>
</template>
  
<script lang="ts">
import { useStore } from "@/store/store";
import { onMounted } from "@vue/composition-api";

export default {
    name: "TutorialPage",

    setup(): void {
        const store = useStore();
        
        onMounted(() => {
            store.initialiseTutorialState();
        });
    },
};
</script>
  
  <style scoped>
  /* Add styles if needed */
  </style>
  