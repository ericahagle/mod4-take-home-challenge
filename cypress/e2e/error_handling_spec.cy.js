describe('Error Handling', () => {

  it('should display an appropriate message for 4xx errors', () => {
    cy.intercept('GET', 'https://newsapi.org/v2/top-headlines?country=us&apiKey=1e6f0fc53c7a4b9f9999efabbd374789', {
      statusCode: 400,
      fixture: '/mock-data-articles.json'
    }).as('getArticles');
    cy.intercept('GET', 'https://newsapi.org/v2/top-headlines/sources?country=us&apiKey=1e6f0fc53c7a4b9f9999efabbd374789', {
      statusCode: 400,
      fixture: '/mock-data-sources.json'
    }).as('getSources');
    cy.visit('/');
    cy.wait('@getArticles');
    cy.wait('@getSources');
    cy.get('.error-message').contains('Bad news! We cannot find what you are looking for. Please try again later.');
  });

  it('should display an appropriate message for 5xx errors', () => {
    cy.intercept('GET', 'https://newsapi.org/v2/top-headlines?country=us&apiKey=1e6f0fc53c7a4b9f9999efabbd374789', {
      statusCode: 500,
      fixture: '/mock-data-articles.json'
    }).as('getArticles');
    cy.intercept('GET', 'https://newsapi.org/v2/top-headlines/sources?country=us&apiKey=1e6f0fc53c7a4b9f9999efabbd374789', {
      statusCode: 500,
      fixture: '/mock-data-sources.json'
    }).as('getSources');
    cy.visit('/');
    cy.wait('@getArticles');
    cy.wait('@getSources');
    cy.get('.error-message').contains('Bad news! Our sources seem to have gone offline. Please try again later.');
  });

  it('should display an appropriate message for unexpected errors', () => {
    cy.intercept('GET', 'https://newsapi.org/v2/top-headlines?country=us&apiKey=1e6f0fc53c7a4b9f9999efabbd374789', {
      statusCode: 300,
      fixture: '/mock-data-articles.json'
    }).as('getArticles');
    cy.intercept('GET', 'https://newsapi.org/v2/top-headlines/sources?country=us&apiKey=1e6f0fc53c7a4b9f9999efabbd374789', {
      statusCode: 300,
      fixture: '/mock-data-sources.json'
    }).as('getSources');
    cy.visit('/');
    cy.wait('@getArticles');
    cy.wait('@getSources');
    cy.get('.error-message').contains('Bad news! Unexpected error. Status: 300');
  });

  it('should show an appropriate message when landing on a page that doesn\'t exist', () => {
    cy.visit('/fakepath');
    cy.get('.error-message').contains('Bad news! We can\'t confirm our sources for this page. Stick it back in the X-files, head home, and try again.');
  });

});