import { TestObjects } from "@/types/tutorial-types";

const FizzTutTests: TestObjects = {
    1 : {
        name: "Test 1",
        description: "Print the numbers 1-number (inclusive) normally",
        hint: "Use a for loop to print the numbers. Try using the function \"range(from, to)\"",
        expectedOutput: ["[1, 2, 3, 4]", "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"],
        test: ["fizzbuzz(4)", "fizzbuzz(10)"],
        complete: false,
    },

    2: {
        name: "Test 2",
        description: "Replace multiples of 3 with \"Fizz\"",
        hint: "Use the modulo \"%\" operator to check if the number is divisble by 3.",
        expectedOutput: ["[1, 2, 'Fizz']", "[1, 2, 'Fizz', 4, 5, 'Fizz', 7, 8, 'Fizz', 10, 11, 'Fizz']"],
        test: ["fizzbuzz(3)", "fizzbuzz(12)"],
        complete: false,
    },

    3: {
        name: "Test 3",
        description: "Replace multiples of 5 with \"Buzz\"",
        hint: "Use the modulo \"%\" operator to check if the number is divisble by 5.",
        expectedOutput: ["[1, 2, 'Fizz']", "[1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz']"],
        test: ["fizzbuzz(3)", "fizzbuzz(12)"],
        complete: false,
    },

    4: {
        name: "Test 4",
        description: "Replace multiples of 5 AND 3 with \"FizzBuzz\"",
        hint: "Use the AND \"&\" operand to check if two conditionals are true.",
        expectedOutput: ["[1, 2, 'Fizz']", "[1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz']",
            "[1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']"],
        test: ["fizzbuzz(3)", "fizzbuzz(12)", "fizzbuzz(15)"],
        complete: false,
    },
};

export default FizzTutTests;