describe("submission", () => {
  it("user can post a submission with one of each output type", () => {
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
    cy.get('[type="checkbox"]').eq(0).check();
    cy.get('[type="checkbox"]').eq(1).check();
    cy.get('[type="checkbox"]').eq(2).check();
    cy.get('[type="checkbox"]').eq(3).check();
    cy.get('[type="checkbox"]').eq(4).check();
    cy.get('[type="checkbox"]').eq(5).check();
    cy.get('[type="checkbox"]').eq(6).check();
    cy.get('[type="checkbox"]').eq(7).check();
    cy.get('[type="checkbox"]').eq(8).check();
    cy.get('[type="checkbox"]').eq(9).check();
    cy.get('[type="checkbox"]').eq(10).check();
    cy.get('[type="checkbox"]').eq(11).check();
    cy.findByRole("button", { name: /next/i }).click();

    // enter article info
    cy.findByRole("button", { name: /add article/i }).click();
    cy.get("input").eq(1).type("www.articletest.com");
    cy.get("input").eq(2).type("10.1234/abc");
    cy.get("input").eq(3).type("MIT");
    cy.get('[type="radio"]').first().check();
    cy.findByRole("button", { name: /submit/i }).click();
    cy.findByRole("heading", { name: "www.articletest.com" }).should(
      "be.visible"
    );
    cy.findByRole("button", { name: /next/i }).click();

    // enter monograph info
    cy.findByRole("button", { name: /add monograph/i }).click();
    cy.get("input").eq(1).type("www.monographtest.com");
    cy.get("input").eq(2).type("10.1234/abc");
    cy.get("input").eq(3).type("MIT");
    cy.get('[type="radio"]').first().check();
    cy.findByRole("button", { name: /submit/i }).click();
    cy.findByRole("heading", { name: "www.monographtest.com" }).should(
      "be.visible"
    );
    cy.findByRole("button", { name: /next/i }).click();

    // enter dataset info
    cy.findByRole("button", { name: /add dataset/i }).click();
    cy.get("input").eq(1).type("www.datasettest.com");
    cy.get("input").eq(2).type("10.1234/abc");
    cy.get("select").eq(0).select("CSV");
    cy.get("input").eq(3).type("MIT");
    cy.findByRole("button", { name: /submit/i }).click();
    cy.findByRole("heading", { name: "www.datasettest.com" }).should(
      "be.visible"
    );
    cy.findByRole("button", { name: /next/i }).click();

    // enter code info
    cy.findByRole("button", { name: /add code/i }).click();
    cy.get("input").eq(1).type("www.codetest.com");
    cy.get("input").eq(2).type("10.1234/abc");
    cy.findByRole("radio", { name: /no/i }).click();
    cy.findByRole("button", { name: /submit/i }).click();
    cy.findByRole("heading", { name: "www.codetest.com" }).should("be.visible");
    cy.findByRole("button", { name: /next/i }).click();

    // enter material info
    cy.findByRole("button", { name: /add material/i }).click();
    cy.get("input").eq(1).type("www.materialtest.com");
    cy.get('[type="radio"]').eq(0).first().check();
    cy.get('[type="radio"]').eq(2).first().check();
    cy.findByRole("button", { name: /submit/i }).click();
    cy.findByRole("heading", { name: "www.materialtest.com" }).should(
      "be.visible"
    );
    cy.findByRole("button", { name: /next/i }).click();

    // enter protocol info
    cy.findByRole("button", { name: /add protocol/i }).click();
    cy.get("input").eq(1).type("www.protocoltest.com");
    cy.get('[type="radio"]').eq(0).first().check();
    cy.findByRole("button", { name: /submit/i }).click();
    cy.findByRole("heading", { name: "www.protocoltest.com" }).should(
      "be.visible"
    );
    cy.findByRole("button", { name: /next/i }).click();

    // enter digital scholarship info
    cy.findByRole("button", { name: /add digital scholarship/i }).click();
    cy.get("input").eq(1).type("www.digitalscholarshiptest.com");
    cy.get("input").eq(2).type("MIT");
    cy.get('[type="radio"]').eq(0).first().check();
    cy.findByRole("button", { name: /submit/i }).click();
    cy.findByRole("heading", { name: "www.digitalscholarshiptest.com" }).should(
      "be.visible"
    );
    cy.findByRole("button", { name: /next/i }).click();

    // enter preprint info
    cy.findByRole("button", { name: /add preprint/i }).click();
    cy.get("input").eq(1).type("www.preprinttest.com");
    cy.get("input").eq(2).type("10.1234/abc");
    cy.get('[type="radio"]').eq(0).first().check();
    cy.findByRole("button", { name: /submit/i }).click();
    cy.findByRole("heading", { name: "www.preprinttest.com" }).should(
      "be.visible"
    );
    cy.findByRole("button", { name: /next/i }).click();

    // enter peer review info
    cy.findByRole("button", { name: /add peer review/i }).click();
    cy.get("input").eq(1).type("www.peerreviewtest.com");
    cy.get('[type="radio"]').eq(0).first().check();
    cy.findByRole("button", { name: /submit/i }).click();
    cy.findByRole("heading", { name: "www.peerreviewtest.com" }).should(
      "be.visible"
    );
    cy.findByRole("button", { name: /next/i }).click();

    // enter pre-reg analysis plan info
    cy.findByRole("button", {
      name: /add pre-registration analysis plan/i,
    }).click();
    cy.get("input").eq(1).type("www.prereganalysisplantest.com");
    cy.get('[type="radio"]').eq(0).first().check();
    cy.findByRole("button", { name: /submit/i }).click();
    cy.findByRole("heading", { name: "www.prereganalysisplantest.com" }).should(
      "be.visible"
    );
    cy.findByRole("button", { name: /next/i }).click();

    // enter registered report info
    cy.findByRole("button", { name: /add registered report/i }).click();
    cy.get("input").eq(1).type("www.regreporttest.com");
    cy.get('[type="radio"]').eq(0).first().check();
    cy.get('[type="radio"]').eq(2).first().check();
    cy.get('[type="radio"]').eq(4).first().check();
    cy.findByRole("button", { name: /submit/i }).click();
    cy.findByRole("heading", { name: "www.regreporttest.com" }).should(
      "be.visible"
    );
    cy.findByRole("button", { name: /next/i }).click();

    // enter thesis info
    cy.findByRole("button", { name: /add theses or dissertation/i }).click();
    cy.get("input").eq(1).type("www.thesistest.com");
    cy.get("input").eq(2).type("10.1234/abc");
    cy.get("input").eq(3).type("MIT");
    cy.get('[type="radio"]').first().check();
    cy.findByRole("button", { name: /submit/i }).click();
    cy.findByRole("heading", { name: "www.thesistest.com" }).should(
      "be.visible"
    );
    cy.findByRole("button", { name: /next/i }).click();

    // press submit
    cy.findByRole("button", { name: /submit/i }).click();

    // verify if sucessful
    cy.findByRole("heading", { name: /success!/i }).should("be.visible");
  });

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
    cy.findByRole("heading", { name: "www.articletest.com" }).should(
      "be.visible"
    );

    cy.findByRole("button", { name: /add article/i }).click();
    cy.get("input").eq(1).type("www.articletest2.com");
    cy.get("input").eq(2).type("10.1234/xyz");
    cy.get("input").eq(3).type("MIT");
    cy.get('[type="radio"]').first().check();
    cy.findByRole("button", { name: /submit/i }).click();
    cy.findByRole("heading", { name: "www.articletest2.com" }).should(
      "be.visible"
    );
    cy.findByRole("button", { name: /next/i }).click();

    // enter preprint
    cy.findByRole("button", { name: /add preprint/i }).click();
    cy.get("input").eq(1).type("www.preprinttest.com");
    cy.get("input").eq(2).type("10.1234/321");
    cy.get('[type="radio"]').first().check();
    cy.findByRole("button", { name: /submit/i }).click();
    cy.findByRole("heading", { name: "www.preprinttest.com" }).should(
      "be.visible"
    );
    cy.findByRole("button", { name: /next/i }).click();

    // press submit
    cy.findByRole("button", { name: /submit/i }).click();

    // verify if sucessful
    cy.findByRole("heading", { name: /success!/i }).should("be.visible");
  });
});
