/// <reference types="cypress" />

import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

let projectName = "";

function getRandomString() {
  return Math.random().toString(36).substr(2, 5);
}

Given(`I check setting menu to check {string} user is logged in`, (user) => {
  // Verify the text under settings menu
  cy.get(".side-nav__account-controls__container").should("have.text", user);
});

Then(`I click on Projects menu on left to create new project`, () => {
  cy.get(".icon-projects").click();
}),
  Then(`I should navigate to Projects page`, () => {
    // Verify the app redirected you to the homepage
    cy.location("pathname", { timeout: 10000 }).should("eq", "/projects");
    // Verify the page title is "D3A"
    cy.title().should("eq", "D3A");
    // Verify page heading
    cy.get(".header__page-title").should("contain", "Projects");
  }),
  Then(`I click on New Project button on top right`, () => {
    cy.get(".button__label").next().click();
  }),
  Then(
    `I provide {string} as name and {string} as description for the new project`,
    (name, description) => {
      projectName = name + getRandomString(); // Project name needs to be unique, so adding random string at end.
      // Fill the project name
      cy.get('[id="input-field-name"]')
        .type(projectName)
        .should("have.value", projectName);
      // Fill the project description
      cy.get('[id="textarea-field-nameTextArea"]')
        .type(description)
        .should("have.value", description);
    }
  );

When(`I click on Add button to create new project`, () => {
  cy.get(".button__label").contains("Add").click();
});

Then(`I check that new project is created and is listed correctly`, () => {
  //waiting for DOM to refresh so new project can be checked
  cy.wait(2000);
  //check the project name matches correctly
  cy.get(".saved-project__headline__name__text")
    .first()
    .should("have.text", projectName);
});

Then(`I click on newly created project`, () => {
  cy.get(".saved-project__headline__name__text")
    .first()
    .should("have.text", projectName)
    .click();
});


