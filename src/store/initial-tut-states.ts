import { TutorialObjects } from "@/types/tutorial-types";
import initialPrimeState from "./initial-states/initial-prime-state";
import PrimeTutTests from "./tut-tests/prime-tut-tests";
import initialFizzState from "./initial-states/initial-fizz-state";
import FizzTutTests from "./tut-tests/fizz-tut-tests";
import initialMorseCodeState from "./initial-states/initial-morse-code-state";
import MorseCodeTests from "./tut-tests/morse-code-tests";
import initialGameState from "./initial-states/initial-game-state";
import GameTests from "./tut-tests/game-tut-tests";

const Tutorials : TutorialObjects = {
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
        nextAvailableId: 6,
        description: "Convert English text into Morse code (and vice versa).",
    },

    "/tutGame" : {
        name:"Game",
        difficulty: 3,
        url: "/tutGame",
        initialState: initialGameState,
        tests: GameTests,
        nextAvailableId: 9,
        description: "Create a text-based Adventure game!",
    },
};

export default Tutorials;