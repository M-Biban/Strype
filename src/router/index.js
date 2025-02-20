import Vue from "vue";
import Router from "vue-router";
import TutorialPage from "@/views/TutorialsPage.vue";
import TutPage1 from "@/views/TutPage1.vue";
import Tutorials from "@/store/initial-tut-states";

const tutorialRoutes = Object.values(Tutorials).map((tutorial) => ({
    path: tutorial.url,
    name: tutorial.name,
    component: TutPage1,
}));

console.log(tutorialRoutes);

Vue.use(Router);

export default new Router({
    routes: [
        ...tutorialRoutes,
        {
            path: "/tutorials",
            name: "TutorialPage",
            component: TutorialPage, // This will point to the component you want to show for this route
        },
    ],
});