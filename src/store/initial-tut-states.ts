import { TutorialObjects } from "@/types/tutorial-types";
import initialTut1State from "./initial-states/initial-tut-1";
import Tut1Tests from "./tut-tests/tut-1-tests";

const Tutorials : TutorialObjects = {
    "simpleTutorial" : {
        name: "simple",
        difficulty: 1,
        url: "/tut1",
        initialState: initialTut1State,
        tests: Tut1Tests,
    },
};

export default Tutorials;