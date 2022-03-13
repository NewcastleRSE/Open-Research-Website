describe("multiple output types", () => {
  it("user should be able to add multiple protocols and remove one", () => {
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

    cy.get('[type="checkbox"]').eq(5).check();
    cy.findByRole("button", { name: /next/i }).click();

    cy.findByRole("button", { name: /add protocol/i }).click();
    cy.get("input").eq(1).type("www.protocoltest.com");
    cy.get('[type="radio"]').eq(0).first().check();
    cy.findByRole("button", { name: /submit/i }).click();

    cy.findByRole("heading", { name: "www.protocoltest.com" }).should(
      "be.visible"
    );

    cy.findByRole("button", { name: /add protocol/i }).click();
    cy.get("input").eq(1).type("www.protocoltest2.com");
    cy.get('[type="radio"]').eq(0).first().check();
    cy.findByRole("button", { name: /submit/i }).click();

    cy.findByRole("heading", { name: "www.protocoltest2.com" }).should(
      "be.visible"
    );

    cy.findByRole("button", { name: /add protocol/i }).click();
    cy.get("input").eq(1).type("www.protocoltest3.com");
    cy.get('[type="radio"]').eq(0).first().check();
    cy.findByRole("button", { name: /submit/i }).click();

    cy.findByRole("heading", { name: "www.protocoltest3.com" }).should(
      "be.visible"
    );

    cy.get(":nth-child(2) > .output-delete").click();

    cy.findByRole("heading", { name: "www.protocoltest.com" }).should(
      "not.exist"
    );
  });
});
