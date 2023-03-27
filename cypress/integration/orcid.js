describe("orcid", () => {
  it("should sucessfully retrieve projects from ORCID and select Test book", () => {
    cy.visit("http://localhost:3000/");

    // enter researcher info
    cy.get("input").eq(1).type("Test User");
    cy.get("select").eq(0).select("SAgE");
    cy.get("select").eq(1).select("School of Computing");
    cy.get("select").eq(2).select("PhD");
    cy.get("input").eq(2).type("0000-0002-5866-0533");
    cy.findByRole("button", { name: /next/i }).click();

    cy.wait(2000);

    cy.get(".nice-select").select("Test book");
  });
});
