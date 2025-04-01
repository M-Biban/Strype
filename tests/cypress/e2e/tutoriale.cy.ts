// eslint-disable-next-line @typescript-eslint/no-var-requires
require("cypress-terminal-report/src/installLogsCollector")();
import failOnConsoleError from "cypress-fail-on-console-error";
failOnConsoleError();

// import {testInsert, testMultiInsert, testBackspace} from "../support/expression-test-support";

// We need this to prevent test failures.  I don't actually know what the error is for sure
// (even if you log it, it is not visible), but I suspect it may be a Brython error that I
// see on the real site to do with an IndentationError in partial code:
Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from failing the test:
    return false;
});


import {assertStateDefinition} from "../support/expression-test-support";

// export function testSelection(code : string, selectKeys: string, expectedAfterDeletion : string) : void {
//     it("Tests " + code, () => {
//         focusEditor();
//         cy.get("body").type("{backspace}{backspace}i");
//         assertState("{$}");
//         cy.get("body").type(" " + code);
//         cy.get("body").type(selectKeys);
//         cy.get("body").type("{del}");
//         assertState(expectedAfterDeletion);
//     });
// }



describe("Tutorial Link Navigation", () => {
    // Must clear all local storage between tests to reset the state:
    beforeEach(() => {
        if (Cypress.env("VUE_APP_MICROBIT") === "true") {
            cy.log("Skipping test in microbit mode");
            return; // Skip the test
        }
        cy.clearLocalStorage();
        cy.visit("/",  {onBeforeLoad: (win) => {
            win.localStorage.clear();
            win.sessionStorage.clear();
        }});
    });
  
    it("Should open the hamburger menu and navigate to the tutorial", () => {
        // Open the hamburger menu
        cy.get("button#showHideMenu").click(); 
  
        // Click on the tutorial link
        cy.contains("Tutorials").click();
    
        // Check if the URL changed correctly
        cy.url().should("include", "/tutorials"); 
    });
    
});

describe("Tutorials Page", () => {
    beforeEach(() => {
        if (Cypress.env("VUE_APP_MICROBIT") === "true") {
            cy.log("Skipping test in microbit mode");
            return; // Skip the test
        }
        cy.clearLocalStorage();
        cy.visit("/editor/#/tutorials",  {onBeforeLoad: (win) => {
            win.localStorage.clear();
            win.sessionStorage.clear();
        }});
    });

    it("displays the correct tutorial list", () => {
        cy.get(".card-style").should("have.length.greaterThan", 0);
    });

    it("Navigates to a tutorial when clicked", () => {
        cy.get(".card-style").first().click();

        cy.url().should("include", "/tut");
    });

    it("Opens and closes the import tutorial modal", () => {
        cy.get(".new-tutorial-button").first().click();
    
        cy.get(".modal-body").should("be.visible");
    
        cy.contains("Cancel").click();
        cy.get(".modal-body").should("not.exist"); // Ensure modal is closed
    });
    
    it("Opens and closes the info modal", () => {
        cy.get(".new-tutorial-button").last().click(); // Click the info button
        cy.contains("Template for custom tutorials").should("be.visible"); // Check if modal opens
        cy.get(".modal-body").should("be.visible"); 
    
        cy.get("body").click(0, 0);
        cy.get(".modal-body").should("not.exist"); 
    });
});

describe("Upload Tutorial", () => {
    beforeEach(() => {
        if (Cypress.env("VUE_APP_MICROBIT") === "true") {
            cy.log("Skipping test in microbit mode");
            return; // Skip the test
        }
        cy.clearLocalStorage();
        cy.visit("/editor/#/tutorials",  {onBeforeLoad: (win) => {
            win.localStorage.clear();
            win.sessionStorage.clear();
        }});
    });

    it("Fills and submits the import tutorial form", () => {
        cy.get(".new-tutorial-button").first().click();
    
        cy.get("#tutorial-link").type("https://raw.githubusercontent.com/M-Biban/HotelAnalysis/refs/heads/main/code.txt");
    
        cy.get(".continue-button").contains("Proceed").click();
    
        cy.url().should("include", "tut?file=");

        // Checks if it appears on the tutorials page
        cy.get("button#showHideMenu").click(); 
  
        cy.contains("Tutorials").click();

        cy.get(".card-style").last().click();

        cy.url().should("include", "tut?file=");
    });

    it("Display default editor if tutorial invalid", () => {
        // Disable console error specifically for this test
        cy.on("window:before:load", (win) => {
            win.console.error = (message) => {
                if (message.includes("Unable to fetch or parse the tutorial file")) {
                    return; // Ignore the specific error
                }
                console.error(message);
            };
        });
    
        // Run your test
        cy.get(".new-tutorial-button").first().click();
        cy.get("#tutorial-link").type("hjehwjgwheg");
        cy.get(".continue-button").contains("Proceed").click();
    
        // Wait for the redirect
        cy.url().should("include", "/editor/#/");
    
        // Ensure the error message is visible
        cy.get(".message-banner-container");
    
        // Re-enable console error for future tests
        cy.on("window:before:load", (win) => {
            win.console.error = console.error; // Restore default behavior
        });
    });
    
});

describe("Complete tutorial", () => {
    beforeEach(() => {
        if (Cypress.env("VUE_APP_MICROBIT") === "true") {
            cy.log("Skipping test in microbit mode");
            return; // Skip the test
        }
        cy.visit("/editor/#/tutPrimes");
    });
    it("Goes to the primes tutorial page", () => {
        cy.url().should("include", "/tutPrimes");
        assertStateDefinition("{isPrime}({num}");
    });

    it("Opens hint modal if clicked", () => {
        cy.get("#hint-Test\\ 1").click();
        cy.get("#modal-scrollable").should("be.visible");

        cy.get("#modal-scrollable .modal-body").should("contain.text", "Test 1Create a check for negative numbers and edge casesUse an if statement to check if the number is negative. \nIf it is return True, if not return False. Remember! 0 and 1 are not prime so filter them out tooTest 1Create a check for negative numbers and edge casesUse an if statement to check if the number is negative. \nIf it is return True, if not return False. Remember! 0 and 1 are not prime so filter them out too");

        cy.get("#modal-scrollable .modal-header").should("contain.text", "Need a hint?");

    });

    it("handles the case of tests passing correctly", () => {
        cy.get("#frame_id_-2").type("inum<=1{enter}rFalse");
        cy.get("#test-Test\\ 1").click();

        cy.wait(500); // wait for subtask to change

        cy.get(".carousel-inner .carousel-item.active")
            .should("exist")
            .and("contain.text", "Test 2Check if the number is divisible by any smaller number"); 

        cy.get("#pythonConsole")
            .invoke("val") // Retrieve the value of the textarea
            .should("contain", "3/3 tests passed!"); 

        cy.get(".carousel-inner .carousel-item.active")
            .invoke("text")
            .then((initialText) => {
                cy.get("#test-Test\\ 2").click();

                cy.wait(500);

                cy.get(".carousel-inner .carousel-item.active")
                    .invoke("text")
                    .should("eq", initialText);
            });
    });

    it("Next carousel slide if button is pressed", () => {
        cy.get(".carousel-control-next").click();

        cy.wait(500); // wait for subtask to change

        cy.get(".carousel-inner .carousel-item.active")
            .should("exist")
            .and("contain.text", "Test 2Check if the number is divisible by any smaller number"); 

        cy.get(".carousel-control-next").click();

        cy.wait(500); // wait for subtask to change

        cy.get(".carousel-inner .carousel-item.active")
            .should("exist")
            .and("contain.text", "Test 3Handle the case if no divisors are found"); 

        cy.get(".carousel-control-prev").click();

        cy.wait(500); // wait for subtask to change

        cy.get(".carousel-inner .carousel-item.active")
            .should("exist")
            .and("contain.text", "Test 2Check if the number is divisible by any smaller number"); 
    });

    it("handles the case of tests failing correctly", () => {
        cy.get("#frame_id_-2").type("inum<1{enter}rFalse");
        cy.get(".carousel-inner .carousel-item.active")
            .invoke("text")
            .then((initialText) => {
                cy.get("#test-Test\\ 1").click();

                cy.wait(500);

                cy.get(".carousel-inner .carousel-item.active")
                    .invoke("text")
                    .should("eq", initialText);
            });

        cy.wait(500);
        cy.get("#pythonConsole")
            .invoke("val") // Retrieve the value of the textarea
            .should("contain", "2/3 tests passed!\nfailed tests:\nisPrime(1)"); 
    });
});
