import trickData from "../fixtures/mockData";

describe('Form interactions', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/tricks', 

    { status: 200, body: trickData}).as('getTricks');
    cy.visit('http://localhost:3000/');
  });

  it('reflects the data input into the form fields', () => {
    const testStance = 'Regular';
    const testName = 'Kickflip';
    const testObstacle = 'Flatground';
    const testTutorial = 'https://www.youtube.com/watch?v=abcdefgh';

    // Test select inputs
    cy.get('form').find('select').eq(0).select(testStance).should('have.value', testStance);
    cy.get('form').find('select').eq(1).select(testObstacle).should('have.value', testObstacle);

    // Test text inputs
    cy.get('form').find('input').eq(0).type(testName).should('have.value', testName);
    cy.get('form').find('input').eq(1).type(testTutorial).should('have.value', testTutorial);
  });
});