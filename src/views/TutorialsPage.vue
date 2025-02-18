<template>
    <div>
        <router-link :to="{ name: 'Tut1' }" :title="$i18n.t('appMenu.tutorial')">
            <img class="top-left-strype-logo" :src="require('@/assets/images/Strype-logo-128-2x.png')" />
        </router-link>
    </div>
</template>
  
<script lang="ts">

export default {
    name: "TutorialPage",
};
</script>
  
  <style scoped>
  /* Add styles if needed */
  </style>
  