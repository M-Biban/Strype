import { TestObjects } from "@/types/tutorial-types";

const Tut1Tests: TestObjects = {
    1 : {
        name: "test 1.1",
        description: "Description for test 1.1",
        expectedOutput: ["test 1.1", "test 1.12"],
        test: ["\"test 1.1\"", "\"test 1.12\""],
        complete: false,
    },

    2 : {
        name: "test 1.2",
        description: "Description for test 1.2",
        expectedOutput: ["test 1.2", "test 1.21"],
        test: ["\"test 1.2\"", "\"test 1.21\""],
        complete: false,
    },
};

export default Tut1Tests;