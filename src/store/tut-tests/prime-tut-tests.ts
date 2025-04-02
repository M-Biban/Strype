import { TestObjects } from "@/types/tutorial-types";

const PrimeTutTests: TestObjects = {
    1 : {
        name: "Test 1",
        description: "Create a check for negative numbers and edge cases",
        hint: "Use an if statement to check if the number is negative. \nIf it is return True, if not return False. Remember! 0 and 1 are not prime so filter them out too",
        expectedOutput: ["False", "False", "False"],
        test: ["isPrime(-5)", "isPrime(0)", "isPrime(1)"],
        complete: false,
    },
    2: {
        name: "Test 2",
        description: "Check if the number is divisible by any smaller number",
        hint: "Loop through the numbers below \"num\". Then, use the modulo (\"%\") function to see if it is divisible or not. return False if it is the case.",
        expectedOutput: ["False", "False", "False"],
        test: ["isPrime(4)", "isPrime(6)", "isPrime(9)"],
        complete: false,
    },
    3: {
        name: "Test 3",
        description: "Handle the case if no divisors are found",
        hint: "Return True if no Divisors are found",
        expectedOutput: ["True", "True", "True", "True"],
        test: ["isPrime(2)", "isPrime(3)", "isPrime(5)", "isPrime(11)"],
        complete: false,
    },
};

export default PrimeTutTests;