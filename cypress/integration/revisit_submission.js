describe("revisit submission", () => {
  it("should sucessfully retrieve project data from the database and populate the completed sections", () => {
    cy.visit(
      "http://localhost:3000/outputs/ec43f731-e558-4eab-9273-562082a209cf"
    );

    cy.findByRole("button", { name: /next/i }).click();

    cy.findByRole("heading", { name: "test article" }).should("be.visible");

    cy.findByRole("button", { name: /next/i }).click();

    cy.findByRole("heading", { name: "test code" }).should("be.visible");
  });
});
