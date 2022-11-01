/// <reference types = 'cypress'/>

describe("Double ,right and left click", () => {
  before("Elements", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visitAndValidateHomePage();
    cy.contains("Buttons").click();
  });

  it("Double click", () => {
    cy.get("#doubleClickBtn")
      .should("have.text", "Double Click Me")
      .and("be.visible")
      .and("be.enabled");
    cy.get("#doubleClickBtn").dblclick();
    cy.get("#doubleClickMessage")
      .should("be.visible")
      .and("contain", "You have done a double click");
  });

  it("Right click", () => {
    cy.get("#rightClickBtn")
      .should("have.text", "Right Click Me")
      .and("be.visible")
      .and("be.enabled");
    cy.get("#rightClickBtn").rightclick();
    cy.get("#rightClickMessage")
      .should("be.visible")
      .and("contain", "You have done a right click");
  });

  it("Click", () => {
    cy.get('[type="button"]').then((btnClick) => {
      cy.wrap(btnClick)
        .eq(3)
        .should("have.text", "Click Me")
        .and("be.visible")
        .and("be.enabled");
      cy.wrap(btnClick).eq(3).click();
    });

    cy.get("#dynamicClickMessage")
      .should("be.visible")
      .and("contain", "You have done a dynamic click");
  });
});
