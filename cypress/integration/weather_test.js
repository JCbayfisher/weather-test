describe("Weather test", () => {
  it("tests the weather app", () => {
    cy.log("Show me before visit =>>>>>>>");
    console.log("show me in console BEFORE visit ===>>>");
    cy.visit("/");
    cy.log("Show me AFTER visit =>>>>>>>");
    console.log("show me in console AFTER visit ===>>>");
    // cy.get('form').within(() => {
    //   cy.get('input[name^="city"]').type('Baltimore');
    //   cy.get('input[name^="country"]').type('United States');
    //   cy.root().submit();
    // });
    // cy.get('p[class^="weather__key"]').contains('Location:').should('be.visible');
    // cy.get('span[class^="weather__value"]').contains('Baltimore, US').should('be.visible');
  });
});
