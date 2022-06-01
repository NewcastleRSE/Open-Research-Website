describe("form builder", () => {
  it("should correctly build the form from the selections", () => {
    cy.visit("http://localhost:3000/");

    // enter researcher info
    cy.get("input").eq(1).type("Test User");
    cy.get("select").eq(0).select("SAgE");
    cy.get("select").eq(1).select("School of Computing");
    cy.get("select").eq(2).select("PhD");
    cy.get("input").eq(2).type("0000-0003-2786-4784");
    cy.findByRole("button", { name: /next/i }).click();

    // enter project info
    cy.findByRole("button", { name: /add new project/i }).click();
    cy.get("input").eq(1).type("Test Project");
    cy.get("input").eq(2).type("Testing");
    cy.get("select").eq(1).select("UKRI");
    cy.findByRole("spinbutton").type("12");
    cy.findByRole("button", { name: /submit/i }).click();
    cy.findByRole("button", { name: /save/i }).click();

    // select all output types
    cy.get('[type="checkbox"]').eq(1).check(); // code
    cy.get('[type="checkbox"]').eq(3).check(); // code
    cy.get('[type="checkbox"]').eq(7).check(); // preprint
    cy.get('[type="checkbox"]').eq(8).check(); // peer review
    cy.get('[type="checkbox"]').eq(9).check(); // pre-reg
    cy.get('[type="checkbox"]').eq(10).check(); // reg report
    cy.findByRole("button", { name: /next/i }).click();

    cy.findByText(/1\/5/i).should("be.visible");
    cy.findByRole("button", { name: /next/i }).click();

    cy.findByText(/2\/5/i).should("be.visible");
    cy.findByRole("button", { name: /next/i }).click();

    cy.findByText(/3\/5/i).should("be.visible");
    cy.findByRole("button", { name: /next/i }).click();

    cy.findByText(/4\/5/i).should("be.visible");
    cy.findByRole("button", { name: /next/i }).click();

    cy.findByText(/5\/5/i).should("be.visible");
    cy.findByRole("button", { name: /add registered report/i }).should(
      "be.visible"
    );
  });
});
