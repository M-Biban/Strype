import Vue from "vue";
import Router from "vue-router";
import TutorialPage from "@/views/TutorialPage.vue"; // Update path as per your structure

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/tutorial",
            name: "TutorialPage",
            component: TutorialPage, // This will point to the component you want to show for this route
        },
    ],
});
