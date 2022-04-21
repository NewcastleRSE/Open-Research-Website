describe("form builder", () => {
  it("should correctly build the form from the selections", () => {
    cy.visit("http://localhost:3000/");

    // enter researcher info
    cy.findByRole("textbox").type("Test User");
    cy.get("select").eq(0).select("SAgE");
    cy.get("select").eq(1).select("School of Computing");
    cy.get("select").eq(2).select("PhD");
    cy.findByRole("button", { name: /next/i }).click();

    // enter project info
    cy.get("input").eq(1).type("Test Project");
    cy.get("input").eq(2).type("Testing");
    cy.get("select").select("UKRI");
    cy.findByRole("spinbutton").type("12");
    cy.findByRole("button", { name: /next/i }).click();

    // select all output types
    cy.get('[type="checkbox"]').eq(0).check(); // articles
    cy.get('[type="checkbox"]').eq(3).check(); // code
    cy.get('[type="checkbox"]').eq(7).check(); // preprint
    cy.get('[type="checkbox"]').eq(8).check(); // peer review
    cy.get('[type="checkbox"]').eq(9).check(); // pre-reg
    cy.get('[type="checkbox"]').eq(11).check(); // thesis
    cy.findByRole("button", { name: /next/i }).click();

    cy.findByText(/1\/6/i).should("be.visible");
    cy.findByRole("button", { name: /next/i }).click();

    cy.findByText(/2\/6/i).should("be.visible");
    cy.findByRole("button", { name: /next/i }).click();

    cy.findByText(/3\/6/i).should("be.visible");
    cy.findByRole("button", { name: /next/i }).click();

    cy.findByText(/4\/6/i).should("be.visible");
    cy.findByRole("button", { name: /next/i }).click();

    cy.findByText(/5\/6/i).should("be.visible");
    cy.findByRole("button", { name: /next/i }).click();

    cy.findByText(/6\/6/i).should("be.visible");
    cy.findByRole("button", { name: /add theses or dissertation/i }).should(
      "be.visible"
    );
  });
});
