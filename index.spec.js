context("Window", () => {
  it("contains the expected text", () => {
    cy.visit("dist/");
    cy.get("#app").contains("Hello, Poi");
  });
});
