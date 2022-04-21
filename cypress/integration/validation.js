describe("validation", () => {
  it("should not be able to move to the next page without filling in info", () => {
    cy.visit("http://localhost:3000/");

    cy.findByRole("button", { name: /next/i }).click();

    cy.findByRole("heading", { name: /researcher/i }).should("be.visible");
  });

  it("should not be able to move to next screen if other school is left blank", () => {
    cy.visit("http://localhost:3000/");

    cy.findByRole("textbox").type("Test User");
    cy.get("select").eq(0).select("SAgE");
    cy.get("select").eq(1).select("Other");
    cy.get("select").eq(2).select("PhD");

    cy.findByRole("button", { name: /next/i }).click();

    cy.findByRole("heading", { name: /researcher/i }).should("be.visible");
  });

  it("should be able to move to the next page with correctly filled info", () => {
    cy.visit("http://localhost:3000/");

    cy.findByRole("textbox").type("Test User");
    cy.get("select").eq(0).select("SAgE");
    cy.get("select").eq(1).select("School of Computing");
    cy.get("select").eq(2).select("PhD");

    cy.findByRole("button", { name: /next/i }).click();

    cy.findByRole("heading", {
      name: /please fill with your details about your project/i,
    }).should("be.visible");
  });

  it("should be able to move to the next page with other option entered", () => {
    cy.visit("http://localhost:3000/");

    cy.findByRole("textbox").type("Test User");
    cy.get("select").eq(0).select("SAgE");
    cy.get("select").eq(1).select("Other");
    cy.get("input").eq(2).type("Other School");
    cy.get("select").eq(2).select("PhD");

    cy.findByRole("button", { name: /next/i }).click();

    cy.findByRole("heading", {
      name: /please fill with your details about your project/i,
    }).should("be.visible");
  });
});
