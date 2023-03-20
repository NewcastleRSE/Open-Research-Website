describe("submission", () => {
  it("user can post a submission with one of each output type and all validation should work", () => {
    cy.visit("http://localhost:3000/");

    // test validation
    cy.findByRole("button", { name: /next/i }).click();
    cy.findByRole("heading", { name: /researcher/i }).should("be.visible");

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
    cy.findByRole("button", { name: /next/i }).click();

    // // test validation
    // cy.findByRole("button", { name: /add article/i }).click();
    // cy.findByRole("button", { name: /submit/i }).click();
    // cy.findByRole("button", { name: /submit/i }).should("be.visible");

    // // enter article info
    // cy.get("input").eq(1).type("www.articletest.com");
    // cy.get("input").eq(2).type("10.1234/abc");
    // cy.get("input").eq(3).type("MIT");
    // cy.get('[type="radio"]').first().check();
    // cy.findByRole("button", { name: /submit/i }).click();
    // cy.findByRole("heading", { name: "www.articletest.com" }).should(
    //   "be.visible"
    // );
    // cy.findByRole("button", { name: /next/i }).click();

    // test validation
    cy.findByRole("button", { name: /add monograph/i }).click();
    cy.findByRole("button", { name: /submit/i }).click();
    cy.findByRole("button", { name: /submit/i }).should("be.visible");

    // enter monograph info
    cy.get("input").eq(1).type("monograph test");
    cy.get("input").eq(2).type("www.monographtest.com");
    cy.get("input").eq(3).type("10.1234/abc");
    cy.get("input").eq(4).type("MIT");
    cy.get('[type="radio"]').first().check();
    cy.findByRole("button", { name: /submit/i }).click();
    cy.findByRole("heading", { name: "monograph test" }).should("be.visible");
    cy.findByRole("button", { name: /next/i }).click();

    // test validation
    cy.findByRole("button", { name: /add dataset/i }).click();
    cy.findByRole("button", { name: /submit/i }).click();
    cy.findByRole("button", { name: /submit/i }).should("be.visible");

    // enter dataset info
    cy.get("input").eq(1).type("dataset test");
    cy.get("input").eq(2).type("www.datasettest.com");
    cy.get("input").eq(3).type("10.1234/abc");
    cy.get("select").eq(0).select("CSV");
    cy.get("input").eq(4).type("MIT");
    cy.get('[type="radio"]').eq(0).first().check();
    cy.get('[type="radio"]').eq(2).first().check();
    cy.get('[type="radio"]').eq(4).first().check();
    cy.get('[type="radio"]').eq(6).first().check();
    cy.findByRole("button", { name: /submit/i }).click();
    cy.findByRole("heading", { name: "dataset test" }).should("be.visible");
    cy.findByRole("button", { name: /next/i }).click();

    // test validation
    // cy.findByRole("button", { name: /add code/i }).click();
    // cy.findByRole("button", { name: /submit/i }).click();
    // cy.findByRole("button", { name: /submit/i }).should("be.visible");

    // enter code info
    // cy.get("input").eq(1).type("code test");
    // cy.get("input").eq(1).type("www.codetest.com");
    // cy.get("input").eq(2).type("10.1234/abc");
    // cy.findByRole("radio", { name: /no/i }).click();
    // cy.get('[type="radio"]').eq(2).first().check();
    // cy.get('[type="radio"]').eq(4).first().check();
    // cy.findByRole("button", { name: /submit/i }).click();
    // cy.findByRole("heading", { name: "code test" }).should("be.visible");
    cy.findByRole("button", { name: /next/i }).click();

    // test validation
    cy.findByRole("button", { name: /add material/i }).click();
    cy.findByRole("button", { name: /submit/i }).click();
    cy.findByRole("button", { name: /submit/i }).should("be.visible");

    // enter material info
    cy.get("input").eq(1).type("material test");
    cy.get("input").eq(2).type("www.materialtest.com");
    cy.get('[type="radio"]').eq(0).first().check();
    cy.get('[type="radio"]').eq(2).first().check();
    cy.findByRole("button", { name: /submit/i }).click();
    cy.findByRole("heading", { name: "material test" }).should("be.visible");
    cy.findByRole("button", { name: /next/i }).click();

    // test validation
    cy.findByRole("button", { name: /add protocol/i }).click();
    cy.findByRole("button", { name: /submit/i }).click();
    cy.findByRole("button", { name: /submit/i }).should("be.visible");

    // enter protocol info
    cy.get("input").eq(1).type("protocol test");
    cy.get("input").eq(2).type("www.protocoltest.com");
    cy.get('[type="radio"]').eq(0).first().check();
    cy.findByRole("button", { name: /submit/i }).click();
    cy.findByRole("heading", { name: "protocol test" }).should("be.visible");
    cy.findByRole("button", { name: /next/i }).click();

    // test validation
    cy.findByRole("button", { name: /add digital scholarship/i }).click();
    cy.findByRole("button", { name: /submit/i }).click();
    cy.findByRole("button", { name: /submit/i }).should("be.visible");

    // enter digital scholarship info
    cy.get("input").eq(1).type("digital scholarship test");
    cy.get("input").eq(2).type("www.digitalscholarshiptest.com");
    cy.get("input").eq(3).type("MIT");
    cy.get('[type="radio"]').eq(0).first().check();
    cy.findByRole("button", { name: /submit/i }).click();
    cy.findByRole("heading", { name: "digital scholarship test" }).should(
      "be.visible"
    );
    cy.findByRole("button", { name: /next/i }).click();

    // test validation
    cy.findByRole("button", { name: /add preprint/i }).click();
    cy.findByRole("button", { name: /submit/i }).click();
    cy.findByRole("button", { name: /submit/i }).should("be.visible");

    // enter preprint info
    cy.get("input").eq(1).type("preprint test");
    cy.get("input").eq(2).type("www.preprinttest.com");
    cy.get("input").eq(3).type("10.1234/abc");
    cy.get('[type="radio"]').eq(0).first().check();
    cy.findByRole("button", { name: /submit/i }).click();
    cy.findByRole("heading", { name: "preprint test" }).should("be.visible");
    cy.findByRole("button", { name: /next/i }).click();

    // test validation
    cy.findByRole("button", { name: /add peer review/i }).click();
    cy.findByRole("button", { name: /submit/i }).click();
    cy.findByRole("button", { name: /submit/i }).should("be.visible");

    // enter peer review info
    cy.get("input").eq(1).type("peer review test");
    cy.get("input").eq(2).type("www.peerreviewtest.com");
    cy.get('[type="radio"]').eq(0).first().check();
    cy.findByRole("button", { name: /submit/i }).click();
    cy.findByRole("heading", { name: "peer review test" }).should("be.visible");
    cy.findByRole("button", { name: /next/i }).click();

    // test validation
    cy.findByRole("button", {
      name: /add pre-registration analysis plan/i,
    }).click();
    cy.findByRole("button", { name: /submit/i }).click();
    cy.findByRole("button", { name: /submit/i }).should("be.visible");

    // enter pre-reg analysis plan info
    cy.get("input").eq(1).type("pre-reg analysis plan test");
    cy.get("input").eq(2).type("www.prereganalysisplantest.com");
    cy.get('[type="radio"]').eq(0).first().check();
    cy.findByRole("button", { name: /submit/i }).click();
    cy.findByRole("heading", { name: "pre-reg analysis plan test" }).should(
      "be.visible"
    );
    cy.findByRole("button", { name: /next/i }).click();

    // test validation
    // cy.findByRole("button", { name: /add registered report/i }).click();
    // cy.findByRole("button", { name: /submit/i }).click();
    // cy.findByRole("button", { name: /submit/i }).should("be.visible");

    // enter registered report info
    // cy.get("input").eq(1).type("reg report test");
    // cy.get("input").eq(2).type("www.regreporttest.com");
    // cy.get('[type="radio"]').eq(0).first().check();
    // cy.get('[type="radio"]').eq(2).first().check();
    // cy.get('[type="radio"]').eq(4).first().check();
    // cy.findByRole("button", { name: /submit/i }).click();
    // cy.findByRole("heading", { name: "reg report test" }).should("be.visible");
    cy.findByRole("button", { name: /next/i }).click();

    // test validation
    // cy.findByRole("button", { name: /add theses or dissertation/i }).click();
    // cy.findByRole("button", { name: /submit/i }).click();
    // cy.findByRole("button", { name: /submit/i }).should("be.visible");

    // // enter thesis info
    // cy.get("input").eq(1).type("thesis test");
    // cy.get("input").eq(2).type("www.qsthesistest.com");
    // cy.get("input").eq(3).type("10.1234/abc");
    // cy.get("input").eq(4).type("MIT");
    // cy.get('[type="radio"]').first().check();
    // cy.findByRole("button", { name: /submit/i }).click();
    // cy.findByRole("heading", { name: "thesis test" }).should("be.visible");
    // cy.findByRole("button", { name: /next/i }).click();

    // press submit
    cy.findByRole("button", { name: /submit/i }).click();

    // verify if sucessful
    cy.findByRole("heading", { name: /success!/i }).should("be.visible");
  });

  //   it("user can post a new submission with 2 articles and a preprint", () => {
  //     cy.visit("http://localhost:3000/");

  //     // enter researcher info
  //     cy.findByRole("textbox").type("Test User");
  //     cy.get("select").eq(0).select("SAgE");
  //     cy.get("select").eq(1).select("School of Computing");
  //     cy.get("select").eq(2).select("PhD");
  //     cy.findByRole("button", { name: /next/i }).click();

  //     // enter project info
  //     cy.get("input").eq(1).type("Test Project");
  //     cy.get("input").eq(2).type("Testing");
  //     cy.get("select").select("UKRI");
  //     cy.findByRole("spinbutton").type("12");
  //     cy.findByRole("button", { name: /next/i }).click();

  //     // select output types (articles & preprint)
  //     cy.get('[type="checkbox"]').eq(0).check();
  //     cy.get('[type="checkbox"]').eq(7).check();
  //     cy.findByRole("button", { name: /next/i }).click();

  //     // enter 2 articles
  //     cy.findByRole("button", { name: /add article/i }).click();
  //     cy.get("input").eq(1).type("www.articletest.com");
  //     cy.get("input").eq(2).type("10.1234/abc");
  //     cy.get("input").eq(3).type("MIT");
  //     cy.get('[type="radio"]').first().check();
  //     cy.findByRole("button", { name: /submit/i }).click();
  //     cy.findByRole("heading", { name: "www.articletest.com" }).should(
  //       "be.visible"
  //     );

  //     cy.findByRole("button", { name: /add article/i }).click();
  //     cy.get("input").eq(1).type("www.articletest2.com");
  //     cy.get("input").eq(2).type("10.1234/xyz");
  //     cy.get("input").eq(3).type("MIT");
  //     cy.get('[type="radio"]').first().check();
  //     cy.findByRole("button", { name: /submit/i }).click();
  //     cy.findByRole("heading", { name: "www.articletest2.com" }).should(
  //       "be.visible"
  //     );
  //     cy.findByRole("button", { name: /next/i }).click();

  //     // enter preprint
  //     cy.findByRole("button", { name: /add preprint/i }).click();
  //     cy.get("input").eq(1).type("www.preprinttest.com");
  //     cy.get("input").eq(2).type("10.1234/321");
  //     cy.get('[type="radio"]').first().check();
  //     cy.findByRole("button", { name: /submit/i }).click();
  //     cy.findByRole("heading", { name: "www.preprinttest.com" }).should(
  //       "be.visible"
  //     );
  //     cy.findByRole("button", { name: /next/i }).click();

  //     // press submit
  //     cy.findByRole("button", { name: /submit/i }).click();

  //     // verify if sucessful
  //     cy.findByRole("heading", { name: /success!/i }).should("be.visible");
  //   });
});
