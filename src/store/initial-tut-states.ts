import { TutorialObjects } from "@/types/tutorial-types";
import initialTut1State from "./initial-states/initial-tut-1";
import Tut1Tests from "./tut-tests/tut-1-tests";
import initialTut2State from "./initial-states/initial-tut-2";
import Tut2Tests from "./tut-tests/tut-2-tests";

const Tutorials : TutorialObjects = {
    "/tut1" : {
        name: "simple",
        difficulty: 1,
        url: "/tut1",
        initialState: initialTut1State,
        tests: Tut1Tests,
        nextAvailableId: 3,
    },

    "/tut2" : {
        name: "second",
        difficulty: 1,
        url: "/tut2",
        initialState: initialTut2State,
        tests: Tut2Tests,
        nextAvailableId: 3,
    },
};

export default Tutorials;