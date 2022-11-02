/// <reference types = "cypress"/>

describe("types of Alerts", () => {
  before("Alerts, Frame & Windows", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.alerts();
    cy.wait(500);
    cy.get(
      ":nth-child(3) > .element-list > .menu-list > #item-1 > .text"
    ).click();
  });

  it("First alert", () => {
    const alert1 = cy.stub();
    cy.on("window:alert", alert1);
    cy.get("#alertButton")
      .click()
      .then(() => {
        expect(alert1.getCall(0)).to.be.calledWith("You clicked a button");
      });
    // cy.get('#confirmButton').click()
  });

  it("Wait 5 sec on alert", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    const alert2 = cy.stub();
    cy.get("#timerAlertButton").click();
    cy.on("window:confirm", (text) => {
      cy.wait(text);
      expect(text).to.contains("This alert appeared after 5 seconds");
      return true;
    });
    //cy.get('#confirmButton').click()
  });

  it("Confirm Box", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    const confirmAl = cy.stub();
    cy.on("window:confirm", confirmAl);
    cy.get("#confirmButton")
      .click()
      .then(() => {
        expect(confirmAl.getCall(0)).to.be.calledWith("Do you confirm action?");
      });
    cy.get("#confirmResult").should("contain", "You selected Ok");
  });

  it('Confirm Box False', ()=>{
   cy.get('#confirmButton').click()
   cy.on('window:confirm',()=> false)
   cy.get("#confirmResult").should("contain", "You selected Cancel");

  })


  it('Type in Pop up', ()=>{
    const ime = "Radoslav"
    cy.window().then(function($promptelement){
      cy.stub($promptelement, "prompt").returns(ime)
      cy.get('#promtButton').click()
      cy.get('#promptResult').should('contain', 'You entered ' + ime)

    })
    
  })
});


