<template>
    <div>
        <div class="header text-left text-large" style="max-width: 60%;">
            <h1 class="bold-header display-2">Tutorials</h1>
            <i>Mini projects you can complete to help on your programming journey!</i>
            <div class="button-row">
                <i>Want to import a tutorial?</i>
                <div class="row">
                    <button @click="showModal = true" class="new-tutorial-button"><i class="bi bi-upload"></i></button>
                    <button class="new-tutorial-button"><i class="bi bi-question"></i></button>
                </div>
            </div>
            
        </div>
        <div class="row align-items-center justify-content-center" style="max-height: 80vh; overflow-y: auto;">
        <div class="d-block align-items-center p-2" style="max-width:50%;">
            <div v-for="tutorial in Tutorials" :key="tutorial" class="col-12 mb-3">
                <router-link :to="{ name: tutorial.name }" :title="$i18n.t('appMenu.tutorial')" class="text-decoration-none">
                <b-card class="d-flex flex-row align-items-center text-dark card-style">
                    <b-card-body class="flex-grow-1 d-flex justify-content-between align-items-center">
                        <div style="max-width: 80%;">
                            <b-card-title class="serif-header text-capitalize"><i class="bi bi-pencil-square"></i>  {{ tutorial.name }}</b-card-title>
                            <b-card-text >{{ tutorial.description }}</b-card-text>
                            <b-list-group flush>
                            <b-list-group-item>Difficulty level <b style="font-size: x-large; margin-left: 0.5em;"> {{ tutorial.difficulty }}</b></b-list-group-item>
                            </b-list-group>
                        </div>
                        <i class="display-4 bi bi-chevron-compact-right"></i>
                    </b-card-body>
                </b-card>
                </router-link>
            </div>
        </div>  
        <b-modal v-model="showModal" title="External" @ok="submitForm" content-class="my-modal-class" header-class="modal-header" hide-footer>
            <div class="modal-body">
            <p class="modal-title">Load the link below</p>
            <b-form @submit.prevent="submitForm">
                <b-form-group label="Tutorial Link" label-for="tutorial-link">
                    <b-form-input id="tutorial-link" v-model="link" required placeholder="Enter the link"></b-form-input>
                </b-form-group>
            </b-form>
            <div class="row">
                    <b-button class="continue-button" variant="secondary" @click="showModal = false">Cancel</b-button>
                    <router-link :to="{ name: 'URLTutorialPage' }">
                        <b-button class="continue-button" variant="primary">Proceed</b-button>
                    </router-link>
            </div>
            </div>
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
<style>
  .scrollable {
    overflow-y: scroll
  }
  .header {
    display: flex;
    flex-direction: column;
    margin: auto;
    padding: 2em;
  }
  .card-style {
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
  .button-row{
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    justify-content: space-evenly;
  }

  .new-tutorial-button {
        width: 2em;
        height: 2em;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(107, 134, 120);
        border-radius: 50%;
        cursor: pointer;
        transition-duration: .3s;
        border: none;
        opacity: 70%;
        z-index: 10;
    }

    .new-tutorial-button:hover {
        opacity: 100%;
    }

    .continue-button {
        width: 5em;
        height: 2em;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(107, 134, 120);
        border-radius: 5%;
        cursor: pointer;
        transition-duration: .3s;
        border: none;
        opacity: 70%;
        z-index: 10;
    }

    .continue-button:hover {
        opacity: 100%;
    }


</style>

<style lang="css" scoped>

/deep/ .my-modal-class{
        background-color: #ffffff;
        border: none;
        border-radius: 20px;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        padding: 24px;
        overflow: hidden;
    }

    .modal-body {
        text-align: center;
    }
    
    .modal-title {
        color: #708371;
        margin-bottom: 12px;
        font-weight: bold;
    }

    /deep/ .modal-header {
        background-color: #708371;
        color: #ffffff;
        text-align: center;
        font-weight: bold;
        font-size: 1.5rem;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        padding: 16px;
    }

    /deep/ .modal-footer {
        background-color: #f0f4f8;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        display: flex;
        justify-content: space-between;
        padding: 12px 24px;
    }
</style>
  