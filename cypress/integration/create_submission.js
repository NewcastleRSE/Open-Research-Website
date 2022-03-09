describe("submission", () => {
  it("user can post a new submission with 2 articles and a preprint", () => {
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

    // select output types (articles & preprint)
    cy.get('[type="checkbox"]').eq(0).check();
    cy.get('[type="checkbox"]').eq(7).check();
    cy.findByRole("button", { name: /next/i }).click();

    // enter 2 articles
    cy.findByRole("button", { name: /add article/i }).click();
    cy.get("input").eq(1).type("www.articletest.com");
    cy.get("input").eq(2).type("10.1234/abc");
    cy.get("input").eq(3).type("MIT");
    cy.get('[type="radio"]').first().check();
    cy.findByRole("button", { name: /submit/i }).click();

    cy.findByRole("button", { name: /add article/i }).click();
    cy.get("input").eq(1).type("www.articletest2.com");
    cy.get("input").eq(2).type("10.1234/xyz");
    cy.get("input").eq(3).type("MIT");
    cy.get('[type="radio"]').first().check();
    cy.findByRole("button", { name: /submit/i }).click();
    cy.findByRole("button", { name: /next/i }).click();

    // enter preprint
    cy.findByRole("button", { name: /add preprint/i }).click();
    cy.get("input").eq(1).type("www.preprinttest.com");
    cy.get("input").eq(2).type("10.1234/321");
    cy.get('[type="radio"]').first().check();
    cy.findByRole("button", { name: /submit/i }).click();
    cy.findByRole("button", { name: /next/i }).click();

    // press submit
    cy.findByRole("button", { name: /submit/i }).click();

    // verify if sucessful
  });
});
