import { TestObjects } from "@/types/tutorial-types";

const PrimeTutTests: TestObjects = {
    1 : {
        name: "Test 1",
        description: "Create a check for negative numbers",
        expectedOutput: ["True", "False"],
        test: ["isPrime(2)", "isPrime(3)"],
        complete: false,
    },
};

export default PrimeTutTests;