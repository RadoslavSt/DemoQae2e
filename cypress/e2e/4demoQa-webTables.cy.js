///<reference types = 'cypress'/>



describe("DemoQA app - Elements test", () => {
  before("Elements", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visitAndValidateHomePage();
    cy.contains("Web Tables").click();
  });

  it("Validate table rows", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });

    cy.get('[aria-label="rows per page"]').select([0]);
    cy.wait(1000);
    cy.get(".rt-tbody .rt-tr-group").should("have.length", 5);

    cy.get(".rt-tbody .rt-tr-group").each((Rows) => {
      console.log(Rows);
      cy.wrap(Rows[0].innerText).text;
    });
  });

  it("Edit second Row", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.viewport(1900, 1200);
    cy.wait(1000);
    cy.get(".rt-table")
      .contains(".rt-tr-group", "Cantrell")
      .then((SecondRow) => {
        cy.wrap(SecondRow).find("svg").eq(0).click();
        cy.wait(1000);
      });
    cy.registrationForm();
    cy.get(".rt-tr-group").each((Rows) => {
      console.log(Rows);
      cy.wrap(Rows[0].innerText).text;
    });
  });

  it.only("Add new Row", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.viewport(1900, 1200);
    cy.contains("Add").click();
    cy.registrationForm();
    cy.get(".rt-tr-group").each((Row) => {
      cy.wrap(Row[0].innerText).text;
    });
  });

  it.only("Delete the latest row", () => {
    cy.viewport(1900, 1200);
    cy.get(".rt-tr-group").each((Row) => {
      console.log(Row);
      cy.wrap(Row[0].innerText).text;
    });
    cy.get(".rt-tr-group").then((LastRow) => {
      cy.wrap(LastRow[3].innerText).text;
    });
    cy.wait(1000);
    cy.get('[title="Delete"]').then((DElete) => {
      cy.wrap(DElete).last().click();
    });
    cy.get(".rt-tr-group").then((LastRow) => {
      cy.wrap(LastRow[3]).should("not.have.value", "Petar");
    });
  });

});
