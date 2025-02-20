<template>
    <div>
        <div v-for="tutorial in Tutorials" :key="tutorial">
            <router-link :to="{ name: tutorial.name }" :title="$i18n.t('appMenu.tutorial')">
            <img class="top-left-strype-logo" :src="require('@/assets/images/Strype-logo-128-2x.png')" />
            </router-link>
            <p>{{ tutorial.name }}</p>
        </div>
    </div>
</template>
  
<script lang="ts">
import Tutorials from "@/store/initial-tut-states";


export default {
    name: "TutorialPage",

    data(): { Tutorials: typeof Tutorials } {
        return {
            Tutorials,
        };
    },
};
</script>
  
  <style scoped>
  /* Add styles if needed */
  </style>
  