import { TestObjects } from "@/types/tutorial-types";

const Tut2Tests: TestObjects = {
    1 : {
        name: "test 2.1",
        description: "Description for test 2.1",
        expectedOutput: ["test 2.1"],
        test: ["print(\"test 2.1\")"],
        complete: false,
        hint: "hint",
    },

    2 : {
        name: "test 2.2",
        description: "Description for test 2.2",
        expectedOutput: ["Extra info for test 2.2"],
        test: ["print(\"test 2.2\")"],
        complete: false,
        hint: "hint",
    },
};

export default Tut2Tests;