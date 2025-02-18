<template>
    <div>
    </div>
</template>
  
<script lang="ts">
import { useStore } from "@/store/store";
import { onMounted } from "@vue/composition-api";

export default {
    name: "TutorialPage1",

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
  