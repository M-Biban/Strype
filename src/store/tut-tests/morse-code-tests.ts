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

    2: {
        name: "English to Morse Test",
        description: "Check if text is converted correctly to Morse code.",
        hint: "Use a loop to replace each letter with its Morse code equivalent.",
        expectedOutput: [".--. -.-- - .... --- -.", ".--. .- .-. - -.-- / .---- ..--- ...--"],
        test: ["text_to_morse(\"Python\")", "text_to_morse(\"party 123\")"],
        complete: false,
    },

    3: {
        name: "Morse to English Test",
        description: "Check if Morse code is converted back to text",
        hint: "Use a reversed dictionary for easy lookup.",
        expectedOutput: ["HELLO", "WORLD"],
        test: ["morse_to_text(\".... . .-.. .-.. ---\")", "morse_to_text(\".-- --- .-. .-.. -..\")"],
        complete: false,
    },
};


export default MorseCodeTests;