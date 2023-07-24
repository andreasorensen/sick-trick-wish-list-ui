import trickData from "../fixtures/mockData";

describe('Initial display', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/tricks', 

    { status: 200, body: trickData}).as('getTricks');

    cy.visit('http://localhost:3000/')
  })


  it('displays the page title and empty form with correct default values', () => {
    cy.get('h1').should('contain', 'Sick Trick Wish List');
    
    cy.get('form').find('select').eq(0).should('have.value', '');
    cy.get('form').find('select').eq(0).contains('Select a stance');
    
    cy.get('form').find('input').eq(0).should('have.value', '');
    
    cy.get('form').find('select').eq(1).should('have.value', '');
    cy.get('form').find('select').eq(1).contains('Select an obstacle');
    
    cy.get('form').find('input').eq(1).should('have.value', '');
  });

  it('displays tricks from API', () => {
    cy.get('.trick-card').should('have.length', 3);
  });
});
