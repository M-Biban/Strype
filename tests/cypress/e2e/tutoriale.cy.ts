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



describe("Tutorial Link Navigation", () => {
    // Must clear all local storage between tests to reset the state:
    beforeEach(() => {
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
