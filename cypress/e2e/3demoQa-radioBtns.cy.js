///<reference types = 'cypress'/>

describe("DemoQA app - Elements test", () => {
  before("Elements", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visitAndValidateHomePage();
    cy.contains("Radio Button").click();
  });

  it("Validate radio btns", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });

    cy.get(".custom-control-label").each((radio) => {
      console.log(radio);
      cy.log(cy.wrap(radio[0].innerText));
    });
  });

  it("Click on YES and impressive", () => {
    cy.get(".custom-control-label").then((radioDugmadi) => {
      cy.wrap(radioDugmadi).first().click();
      cy.get(".text-success").should("be.visible").and("have.text", "Yes");

      cy.wrap(radioDugmadi).eq(1).click();
      cy.get(".text-success")
        .should("be.visible")
        .and("have.text", "Impressive");

      cy.wrap(radioDugmadi).eq(2).click().should("not.be.enabled");
    });
  });
});
