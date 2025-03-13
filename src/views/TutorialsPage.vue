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
        <button @click="showModal = true">
            External tutorial
        </button>
        <b-modal v-model="showModal" title="External" @ok="submitForm">
            <p>Load the link below</p>
            <b-form @submit.prevent="submitForm">
                <b-form-group label="Tutorial Link" label-for="tutorial-link">
                    <b-form-input id="tutorial-link" v-model="link" required placeholder="Enter the link"></b-form-input>
                </b-form-group>
            </b-form>
            <template #footer>
                <b-button variant="secondary" @click="showModal = false">Cancel</b-button>
                <router-link :to="{ name: 'URLTutorialPage' }">
                    <b-button variant="primary">Proceed</b-button>
                </router-link>
            </template>
        </b-modal>
    </div>
</div>
</template>
  
<script lang="ts">
import Tutorials from "@/store/initial-tut-states";


import Vue from "vue";

export default Vue.extend({
    name: "TutorialPage",

    data(): { Tutorials: typeof Tutorials; showModal: boolean; link: string}{
        return {
            Tutorials,
            showModal: false,
            link: "",
        };
    },

    methods: {
        submitForm(): void {
            this.$router.push({
                name: "URLTutorialPage",
                query: {file: this.link},
            });
        },
    },
});
</script>
  
  <style scoped>
  /* Add styles if needed */
  </style>
  