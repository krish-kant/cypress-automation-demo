/// <reference types="cypress" />

import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";


Then(`I click on New Simultaion button to add simulation`, () => {
  cy.get(".button__label").contains("new simulation").click();
});

Then(
  `I check that new simulation form is opened and I validate all form elements`,
  () => {
    // Verify the app redirected you to simulation page
    cy.location("pathname", { timeout: 10000 }).should(
      "eq",
      "/configuration/step1"
    );
    // Verify the page title is "D3A"
    cy.title().should("eq", "D3A");
    // Verify page heading
    cy.get(".header__page-title").should("contain", "New Simulation");

    // Verify the number of menu items
    cy.get(".settings-form__form")
      .find(".settings-form__element")
      .should("have.length", 12);

    // Verify menu item names and sequence
    cy.get(".settings-form__form")
      .find(".name")
      .should("contain", "Simulation name");

    cy.get(".settings-form__form")
      .find(".description")
      .should("contain", "Description");

      cy.get(".settings-form__form")
      .find(".projectUUID")
      .should("contain", "Project");

      cy.get(".settings-form__form")
      .find(".startDate")
      .should("contain", "Start date");

      cy.get(".settings-form__form")
      .find(".endDate")
      .should("contain", "End date");

      cy.get(".settings-form__form")
      .find(".cloudCoverage")
      .should("contain", "Solar profile");

      cy.get(".settings-form__form")
      .find(".spotMarketType")
      .should("contain", "Spot market type");

      cy.get(".settings-form__form")
      .find(".marketCound")
      .should("contain", "Number of spot markets");

      cy.get(".settings-form__form")
      .find(".slotLengthMinutes")
      .should("contain", "Length of spot market");

      cy.get(".settings-form__form")
      .find(".tickLengthSeconds")
      .should("contain", "Tick length");

      cy.get(".settings-form__form")
      .find(".gridFeeType")
      .should("contain", "Grid Fees");

      cy.get(".settings-form__form")
      .find(".slotLengthRealtimeSeconds")
      .should("contain", "Market slot real time duration");

  }
);

Then(
  `I provide the simulation description as {string} and leave rest of the values default on form`,
  (description) => {
    cy.get('[id="textarea-field-description"]')
      .type(description)
      .should("have.value", description);
  }
);

Then(`I click on Next button to create new simulation`, () => {
  cy.get(".settings-form__submit").contains("Next").click();
});

Then(`I check that new simulation is created and is listed correctly`, () => {
  // Verify the app redirected you to modelling page
  cy.location("pathname", { timeout: 10000 }).should(
    "contain",
    "configuration/step2/"
  );
  // Verify the page title is "D3A"
  cy.title().should("eq", "D3A");
  // Verify page heading
  cy.get(".header__page-title").should("contain", "Modelling");
  //verify modelling page contains all buttons on top
  cy.get('.header--modelling').find('.icon--settings_dots').should('exist');
  cy.get('.header--modelling').find('.icon--modelling').should('exist');
  cy.get('.header--modelling').find('.icon--results').should('exist');
  cy.get('.header--modelling').find('.header__search-bar-container').should('exist');
  cy.get('.header--modelling').find('.icon--pin').should('exist');
  cy.get('.header--modelling').find('.icon--cog').should('exist');
  //verify modelling page contains timeline element
  cy.get('.TimelineIntervals').should('exist');
   //verify modelling page contains title element
  cy.get('.configurationPage__hello-title').should('have.text', 'Start by adding your first node...');
   //verify modelling page contains timeline element
   cy.get('.action-diamond-wrapper').should('exist');

});
