// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { Validatecards } from "../support/utillities";

Cypress.Commands.add("visitAndValidateHomePage", () => {
  cy.visit("https://demoqa.com/");
  cy.viewport(1920, 1200);

  cy.get(".card").should("have.length", 6);

  const cardsName = [
    "Elements",
    "Forms",
    "Alerts, Frame & Windows",
    "Widgets",
    "Interactions",
    "Book Store Application",
  ];
  Validatecards(cy.get(".card"), cardsName);
  cy.contains("Elements").click();
});

Cypress.Commands.add("CheckBoxes", () => {
  cy.get("label .rct-checkbox").then((dugme) => {
    cy.get('.rct-checkbox [stroke="currentColor"]')
      .eq(0)
      .should("not.have.class", "rct-icon rct-icon-check");
    cy.wrap(dugme[1]).click();
    cy.get('.rct-checkbox [stroke="currentColor"]')
      .eq(1)
      .should("have.class", "rct-icon rct-icon-check");
    cy.get("#result").should(
      "contain.text",
      "You have selected :desktopnotescommands"
    );

    cy.wrap(dugme[2]).click();
    cy.get('.rct-checkbox [stroke="currentColor"]')
      .eq(2)
      .should("have.class", "rct-icon rct-icon-check");
    cy.get("#result").should(
      "contain.text",
      "You have selected :desktopnotescommandsdocumentsworkspacereactangularveuofficepublicprivateclassifiedgeneral"
    );

    cy.wrap(dugme[3]).click();
    cy.get('.rct-checkbox [stroke="currentColor"]')
      .eq(3)
      .should("have.class", "rct-icon rct-icon-check");
    cy.get('.rct-checkbox [stroke="currentColor"]')
      .eq(0)
      .should("have.class", "rct-icon rct-icon-check");
  });
});

Cypress.Commands.add("registrationForm", () => {
  const result = Math.random().toString(36).substring(2, 7);
  console.log(result);
  cy.get("#firstName").clear().type("Petar");
  cy.get("#lastName").clear().type("Petrovic");
  cy.get("#userEmail").clear().type("bob@gmail.com");
  cy.get("#age").clear().type("33");
  cy.get("#salary").clear().type("15000");
  cy.get("#department").clear().type("Compliance");
  cy.contains("Submit").click();
});

Cypress.Commands.add("alerts", () => {
  cy.visit("https://demoqa.com/");
  cy.viewport(1920, 1200);

  cy.get(".card").should("have.length", 6);

  const cardsName = [
    "Elements",
    "Forms",
    "Alerts, Frame & Windows",
    "Widgets",
    "Interactions",
    "Book Store Application",
  ];
  Validatecards(cy.get(".card"), cardsName);
  cy.contains("Alerts, Frame & Windows").click();
});
