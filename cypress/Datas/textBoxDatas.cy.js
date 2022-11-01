export class TypeDatas {
  TBuser = "#userName";
  TBemail = "#userEmail";
  TBcurrentAd = "#currentAddress";
  TBpermanentAd = "#permanentAddress";

  enterUserName(fullname) {
    cy.get(this.TBuser).type(fullname);
  }
  enterEmail(userEmail) {
    cy.get(this.TBemail).type(userEmail);
  }
  enterCurrAddress(currAddress) {
    cy.get(this.TBcurrentAd).type(currAddress);
  }

  enterPerAdd(perAddress) {
    cy.get(this.TBpermanentAd).type(perAddress);
  }
}

// enterUsername(fullname) {
//   cy.get('#username').type(fullname)
// }
