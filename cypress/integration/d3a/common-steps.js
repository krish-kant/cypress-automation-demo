/// <reference types="cypress" />

import "cypress-localstorage-commands";
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

// Cypress by default clears browser's local storage between tests, here requirement is to have 3 different tests which depend on each other.
// Also d3a.io application uses Auth token in local storage after login, So we need to make sure local storage is not clear.

before(() => {
  cy.clearLocalStorageSnapshot();
});

beforeEach(() => {
  cy.restoreLocalStorage();
});

afterEach(() => {
  cy.saveLocalStorage();
});
