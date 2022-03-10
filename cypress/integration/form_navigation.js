describe("form navigation", () => {
  it("prev button should navigate back to the previous page", () => {
    cy.visit("http://localhost:3000/");

    // enter researcher info
    cy.findByRole("textbox").type("Test User");
    cy.get("select").eq(0).select("SAgE");
    cy.get("select").eq(1).select("School of Computing");
    cy.get("select").eq(2).select("PhD");
    cy.findByRole("button", { name: /next/i }).click();

    cy.findByRole("button", { name: /prev/i }).click();

    cy.findByRole("heading", { name: /researcher/i }).should("be.visible");
  });
});
