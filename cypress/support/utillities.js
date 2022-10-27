export const Validatecards = (cards, Validatecards) => {
  cards.each((card, index) => {
    console.log(card);
    cy.wrap(card[0].innerText).should("contain", Validatecards[index]);
  });
};

export const TextBoxLabels = (labels, expectedLabels) => {
  labels.each((label, index) => {
    console.log(label);
    cy.wrap(label[0].innerText).should("contain", expectedLabels[index]);
  });
};

export const Paragraphs = (paragraphs, expectedP) => {
  paragraphs.each((paragraph, index) => {
    console.log(paragraph);
    cy.wrap(paragraph[0].innerText).should("contain", expectedP[index]);
  });
};
