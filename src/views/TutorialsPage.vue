<template>
    <div>
        <h1>Tutorials</h1>
        <h3>Mini projects you can complete to help on your programming journey!</h3>
    <div class="row">
        <div v-for="tutorial in Tutorials" :key="tutorial" class="col-sm-3">
            <router-link :to="{ name: tutorial.name }" :title="$i18n.t('appMenu.tutorial')">
                <b-card>
                    <b-card-body>
                        <b-card-title>{{ tutorial.name }}</b-card-title>
                        <b-card-text>{{  tutorial.description }}</b-card-text>
                    </b-card-body>

                    <b-list-group flush>
                        <b-list-group-item>Difficulty: {{ tutorial.difficulty }}</b-list-group-item>
                    </b-list-group>
                </b-card>
            </router-link>
        </div>
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
  