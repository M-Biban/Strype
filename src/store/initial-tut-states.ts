import { TutorialObjects } from "@/types/tutorial-types";
import initialTut1State from "./initial-states/initial-tut-1";
import Tut1Tests from "./tut-tests/tut-1-tests";
import initialTut2State from "./initial-states/initial-tut-2";
import Tut2Tests from "./tut-tests/tut-2-tests";
import initialPrimeState from "./initial-states/initial-prime-state";
import PrimeTutTests from "./tut-tests/prime-tut-tests";
import initialFizzState from "./initial-states/initial-fizz-state";
import FizzTutTests from "./tut-tests/fizz-tut-tests";
import initialMorseCodeState from "./initial-states/initial-morse-code-state";
import MorseCodeTests from "./tut-tests/morse-code-tests";

const Tutorials : TutorialObjects = {
    "/tut1" : {
        name: "simple",
        difficulty: 1,
        url: "/tut1",
        initialState: initialTut1State,
        tests: Tut1Tests,
        nextAvailableId: 3,
        description: "A simple first tutorial.",
    },

    "/tut2" : {
        name: "second",
        difficulty: 1,
        url: "/tut2",
        initialState: initialTut2State,
        tests: Tut2Tests,
        nextAvailableId: 3,
        description: "A second tutorial to get to grips with Strype.",
    },

    "/tutPrimes" : {
        name: "Prime numbers",
        difficulty: 1,
        url: "/tutPrimes",
        initialState: initialPrimeState,
        tests: PrimeTutTests,
        nextAvailableId: 3,
        description: "Learn how to use for loops to create a function that finds out if your number is prime or not.",
    },

    "/tutFizz" : {
        name: "FizzBuzz",
        difficulty: 1,
        url: "/tutFizz",
        initialState: initialFizzState,
        tests: FizzTutTests,
        nextAvailableId: 6,
        description: "Print numbers and but replace multiples of 3, 5 or both with Fizz, Buzz and FizzBuzz respectively.",
    },

    "/tutMorseCode" : {
        name:"MorseCode",
        difficulty: 2,
        url: "/tutMorseCode",
        initialState: initialMorseCodeState,
        tests: MorseCodeTests,
        nextAvailableId: 5,
        description: "Create a 2 player Tic-Tac-Toe game with win detection",
    },
};

export default Tutorials;