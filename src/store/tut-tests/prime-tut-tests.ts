import { TestObjects } from "@/types/tutorial-types";

const PrimeTutTests: TestObjects = {
    1 : {
        name: "Test 1",
        description: "Create a check for negative numbers",
        hint: "Use an if statement to check if the number is negative. \nIf it is return True, if not return False.",
        expectedOutput: ["False", "True"],
        test: ["isPrime(-1)", "isPrime(3)"],
        complete: false,
    },
};

export default PrimeTutTests;