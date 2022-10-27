/// <reference types = 'cypress' />

import { TextBoxLabels } from "../support/utillities";
import { TypeDatas } from "../Datas/textBoxDatas.cy";
import { Paragraphs } from "../support/utillities";

const TypeDatasobj = new TypeDatas();

describe("DemoQA app - Elements test", () => {
  before("Elements", () => {
    cy.visitAndValidateHomePage();
  });

  it("TextBox", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });

    cy.contains("Text Box").click();

    const expectedLabels = [
      "Full Name",
      "Email",
      "Current Address",
      "Permanent Address",
    ];
    TextBoxLabels(cy.get(".col-md-3 label"), expectedLabels);

    TypeDatasobj.enterUserName("Radoslav Stojsin");
    TypeDatasobj.enterEmail("boba@gmail.com");
    TypeDatasobj.enterCurrAddress("Novi Sad");
    TypeDatasobj.enterPerAdd("Zabalj");

    cy.contains("Submit").click();
    cy.get(".border p").should("have.length", 4);

    const expectedP = [
      "Radoslav Stojsin",
      "boba@gmail.com",
      "Novi Sad",
      "Zabalj",
    ];

    Paragraphs(cy.get(".border p"), expectedP);
  });
});
