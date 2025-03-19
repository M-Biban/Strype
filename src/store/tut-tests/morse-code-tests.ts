import { TestObjects } from "@/types/tutorial-types";

const MorseCodeTests: TestObjects = {
    1: {
        name: "Dictionary Test",
        description: "Check if letters map correctly to Morse code",
        hint: "Create a dictionary with letters as keys and Morse code as values.",
        expectedOutput: [".-", "--..", ".--."],
        test: ["morseCodeDict['A']", "morseCodeDict['Z']", "morseCodeDict['P']"],
        complete: false,
    },
};


export default MorseCodeTests;