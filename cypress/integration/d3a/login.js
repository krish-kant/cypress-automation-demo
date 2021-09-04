/// <reference types="cypress" />

import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

const url = "https://www.d3a.io/login";

Given(`I open D3A.io login page`, () => {
  // open url
  cy.visit(url);
});

And(`I check page contains {string} and {string} links`, (text1, text2) => {
  // check first text
  cy.get(".authenticationPage").find("p").first().should("contain", text1);
  // check second text
  cy.get(".authenticationPage").find("p").next().should("contain", text2);
});

And(`I enter {string} in the email field`, (email_id) => {
  // Fill the username
  cy.get('[id="email"]').type(email_id).should("have.value", email_id);
});

And(`I enter {string} in the password field`, (password) => {
  // Fill the password
  cy.get('[id="password"]').type(password).should("have.value", password);
});

When(`I click on login button`, () => {
  cy.get(".button").click();
});

Then(`I should navigate to homepage`, () => {
  // Verify the app redirected you to the homepage
  cy.location("pathname", { timeout: 10000 }).should("eq", "/");
  // Verify the page title is "D3A"
  cy.title().should("eq", "D3A");
  // Verify page heading
  cy.get(".header__page-title").should("contain", "Home");
});

Then(`I check setting menu to confirm {string} user is logged in`, (user) => {
  // Verify the text under settings menu
  cy.get(".side-nav__account-controls__container").should("have.text", user);
});

Then(`I check all the navigation items on left menu are present`, () => {
  // Verify the number of menu items
  cy.get(".side-nav__main__wrapper")
    .find(".side-nav__main__item")
    .should("have.length", 6);
  // Verify menu items name and sequence
  cy.get(".side-nav__main__wrapper")
    .find(".side-nav__main__item")
    .first()
    .should("contain", "Home");
  cy.get(".side-nav__main__wrapper")
    .find(".side-nav__main__item")
    .next()
    .should("contain", "Projects");
  cy.get(".side-nav__main__wrapper")
    .find(".side-nav__main__item")
    .next()
    .should("contain", "Library");
  cy.get(".side-nav__main__wrapper")
    .find(".side-nav__main__item")
    .next()
    .should("contain", "Collaborations");
  cy.get(".side-nav__main__wrapper")
    .find(".side-nav__main__item")
    .next()
    .should("contain", "Canary Networks");
  cy.get(".side-nav__main__wrapper")
    .find(".side-nav__main__item")
    .last()
    .should("contain", "Map");
});

Then(`I check all the video items on the page are present`, () => {
  // Verify the number of video items
  cy.get(".home__row").find(".row__video").should("have.length", 14);

  // Verify video item names and sequence
  cy.get(".home__row")
    .find(".row__video")
    .first()
    .should("contain", "Introduction in 20 Minutes");
  cy.get(".home__row")
    .find(".row__video")
    .first()
    .find("div")
    .should("have.class", "video-trigger");

  cy.get(".home__row")
    .find(".row__video")
    .next()
    .should("contain", "General Tutorial");
  cy.get(".home__row")
    .find(".row__video")
    .next()
    .find("div")
    .should("have.class", "video-trigger");

  cy.get(".home__row")
    .find(".row__video")
    .next()
    .should("contain", "Grid Fees Tutorial");
  cy.get(".home__row")
    .find(".row__video")
    .next()
    .find("div")
    .should("have.class", "video-trigger");

  cy.get(".home__row")
    .find(".row__video")
    .next()
    .should("contain", "Version 0.11 Tutorial");
  cy.get(".home__row")
    .find(".row__video")
    .next()
    .find("div")
    .should("have.class", "video-trigger");

  cy.get(".home__row")
    .find(".row__video")
    .next()
    .should("contain", "Version 0.10 Tutorial");
  cy.get(".home__row")
    .find(".row__video")
    .next()
    .find("div")
    .should("have.class", "video-trigger");

  cy.get(".home__row")
    .find(".row__video")
    .next()
    .should("contain", "Version 0.9 Tutorial");
  cy.get(".home__row")
    .find(".row__video")
    .next()
    .find("div")
    .should("have.class", "video-trigger");

  cy.get(".home__row")
    .find(".row__video")
    .next()
    .should("contain", "Version 0.8 Tutorial");
  cy.get(".home__row")
    .find(".row__video")
    .next()
    .find("div")
    .should("have.class", "video-trigger");

  cy.get(".home__row")
    .find(".row__video")
    .next()
    .should("contain", "Version 0.7 Tutorial");
  cy.get(".home__row")
    .find(".row__video")
    .next()
    .find("div")
    .should("have.class", "video-trigger");

  cy.get(".home__row")
    .find(".row__video")
    .next()
    .should("contain", "Version 0.6 Tutorial");
  cy.get(".home__row")
    .find(".row__video")
    .next()
    .find("div")
    .should("have.class", "video-trigger");

  cy.get(".home__row")
    .find(".row__video")
    .next()
    .should("contain", "Version 0.5 Tutorial");
  cy.get(".home__row")
    .find(".row__video")
    .next()
    .find("div")
    .should("have.class", "video-trigger");

  cy.get(".home__row")
    .find(".row__video")
    .next()
    .should("contain", "Version 0.5 Tutorial");
  cy.get(".home__row")
    .find(".row__video")
    .next()
    .find("div")
    .should("have.class", "video-trigger");

  cy.get(".home__row")
    .find(".row__video")
    .next()
    .should("contain", "Version 0.4 Tutorial");
  cy.get(".home__row")
    .find(".row__video")
    .next()
    .find("div")
    .should("have.class", "video-trigger");

  cy.get(".home__row")
    .find(".row__video")
    .next()
    .should("contain", "Version 0.3 Tutorial");
  cy.get(".home__row")
    .find(".row__video")
    .next()
    .find("div")
    .should("have.class", "video-trigger");

  cy.get(".home__row")
    .find(".row__video")
    .next()
    .should("contain", "Version 0.2 Tutorial");
  cy.get(".home__row")
    .find(".row__video")
    .next()
    .find("div")
    .should("have.class", "video-trigger");

  cy.get(".home__row")
    .find(".row__video")
    .next()
    .should("contain", "Version 0.1 Tutorial (Plus General Overview)");
  cy.get(".home__row")
    .find(".row__video")
    .next()
    .find("div")
    .should("have.class", "video-trigger");
});
