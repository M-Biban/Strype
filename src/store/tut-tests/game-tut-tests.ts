import { TestObjects } from "@/types/tutorial-types";

const GameTests: TestObjects = {
    1: {
        name: "Movement System Test",
        description: "Check if the movement is handled correctly",
        hint: "Use a dictionary lookup to display room details.",
        expectedOutput: ["You are in a dark room.", "You can't go that way!"],
        test: ["enter_room(\"start\")", "enter_room(\"outside\")"],
        complete: false,
    },

    2: {
        name: "Item Pickup Test",
        description: "Check if the player can pick up items.",
        hint: "Add an 'item' key in rooms where objects can be found.",
        expectedOutput: ["You picked up a key!"],
        test: ["pick_up_item(\"kitchen\")"],
        complete: false,
    },

    3: {
        name: "Unlocking the Room Test",
        description: "Check if the locked room opens when you have the key.",
        hint: "Add a condition to check if 'key' is in the inventory.",
        expectedOutput: ["You unlocked the door and entered the room.", "Inside you find a treasure chest! 🎯 YOU WIN!"],
        test: ["enter_locked_room()"],
        complete: false,
    },
    
    
};

export default GameTests;