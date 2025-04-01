<template>
    <div>
        <div class="header text-left text-large" style="max-width: 60%;">
            <h1 class="bold-header display-2">Tutorials</h1>
            <i>Mini projects you can complete to help on your programming journey!</i>
            <div class="button-row">
                <div>
                    <i>Want to import a tutorial?</i>
                </div>
                <div class="upload-row row">
                    <button @click="showModal = true" class="new-tutorial-button"><i class="bi bi-upload"></i></button>
                    <button @click="infoModal = true" class="new-tutorial-button"><i class="bi bi-question"></i></button>
                </div>
            </div>
            
        </div>
        <div class="row align-items-center justify-content-center" style="max-height: 80vh; overflow-y: auto;">
        <div class="d-block align-items-center p-2" style="max-width:50%;">
            <div v-for="(tutorial, index) in Tutorials" :key="index" class="col-12 mb-3">
                <b-card class="d-flex flex-row align-items-center text-dark card-style" @click="handleTutorialClick(tutorial)">
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
            </div>
        </div>  
        <b-modal v-model="showModal" title="Upload Tutorial" @ok="submitForm" content-class="my-modal-class" header-class="modal-header" hide-footer>
            <div class="modal-body">
            <p class="modal-title">Load the link below</p>
            <b-form @submit.prevent="submitForm">
                <b-form-group label="Tutorial Link" label-for="tutorial-link">
                    <b-form-input id="tutorial-link" v-model="link" required placeholder="Enter the link"></b-form-input>
                </b-form-group>
            </b-form>
            <div class="upload-row row">
                    <b-button class="continue-button" variant="secondary" @click="showModal = false">Cancel</b-button>
                    <b-button class="continue-button" variant="primary" @click="submitForm">Proceed</b-button>
            </div>
            </div>
        </b-modal>

        <b-modal v-model="infoModal" title="Info" content-class="my-modal-class" header-class="modal-header" hide-footer>
            <div class="modal-body">
            <p class="modal-title">Template for custom tutorials</p>
            <pre class="code-block">name={Name of your tutorial}
difficulty={tutorial difficulty}
description={tutorial description}
testsStart

name="{test name}"
description="{test description}"
hint="{test hint}"
expectedOutput=["{output of test 1}", "{output of test 2}"]
test=["{test1}", "{test2}"]

// Feel free to add more tests below in the same structure. Delete this line once ready to upload

initialStateStart
{python code}
            </pre>
            </div>
        </b-modal>
    </div>
</div>
</template>
  
<script lang="ts">
import Tutorials from "@/store/initial-tut-states";
import { TutorialObject } from "@/types/tutorial-types";


import Vue from "vue";

export default Vue.extend({
    name: "TutorialPage",

    data(): { Tutorials: typeof Tutorials; showModal: boolean; infoModal: boolean; link: string}{
        return {
            Tutorials,
            showModal: false,
            infoModal: false,
            link: "",
        };
    },

    methods: {
        submitForm(): void {
            console.log("submit");
            this.$router.push({
                name: "URLTutorialPage",
                query: {file: this.link},
            });
        },
        isRouteAvailable(tutorial: TutorialObject) {
            return this.$router.getRoutes().some((route) => route.name === tutorial.name);
        },

        handleTutorialClick(tutorial: TutorialObject): void {
            if(this.isRouteAvailable(tutorial)){
                this.$router.push({name: tutorial.name});
            }
            else{
                this.$router.push({
                    path:"/tut",
                    query: {file: tutorial.url},
                });
            }
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
    justify-content: space-between;
    align-items: center;
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

    .upload-row {
        gap: 0.5em;
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

    .code-block {
    background-color: #f5f5f5; 
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1em;
    font-family: monospace;
    white-space: pre-wrap;
    word-break: break-word;
    text-align: left;
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
  