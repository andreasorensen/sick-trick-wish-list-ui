import trickData from "../fixtures/mockData";

describe("Initial display", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "http://localhost:3001/api/v1/tricks",

      { status: 200, body: trickData }
    ).as("getTricks");

    cy.visit("http://localhost:3000/");
  });

  it("adds a new trick to the DOM", () => {
    const testStance = "Regular";
    const testName = "Kickflip";
    const testObstacle = "Flatground";
    const testTutorial = "https://www.youtube.com/watch?v=abcdefgh";

    cy.get("form").find("select").eq(0).select(testStance);
    cy.get("form").find("input").eq(0).type(testName);
    cy.get("form").find("select").eq(1).select(testObstacle);
    cy.get("form").find("input").eq(1).type(testTutorial);

    cy.get("form").submit();

    cy.get(".trick-card")
      .last()
      .should("contain", testName)
      .and("contain", testStance)
      .and("contain", testObstacle)
      .within(() => {
        cy.get("a").should("have.attr", "href", testTutorial);
      });
  });
});
