/// <reference types ='cypress'/>

describe("DemoQA app - Elements test", () => {
  before("Elements", () => {
    cy.visitAndValidateHomePage();
    cy.contains("Check Box").click();
  });

  it("CheckBox - only check Home checkBox", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });

    cy.get(".rct-checkbox").click();
    cy.wait(1000);
    cy.get("#result")
      .should("be.visible")
      .and(
        "have.text",
        "You have selected :homedesktopnotescommandsdocumentsworkspacereactangularveuofficepublicprivateclassifiedgeneraldownloadswordFileexcelFile"
      );
  });

  it("CehckBox- check all CheckBoxes", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    //if we run only this test , under line of code need to be commented
    cy.get(".rct-checkbox").click();
    cy.get('[aria-label="Expand all"]').click();
    cy.get('[type="checkbox"]').check({ force: true }).should("be.checked");
    cy.get("#result").should("be.visible");
  });

  it("Checked only 3 general folder", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.get('[aria-label="Collapse all"]').click();
    cy.get('[type="checkbox"]').uncheck({ force: true });
    cy.get('[aria-label="Toggle"]').click();

    cy.CheckBoxes()
  });
});
