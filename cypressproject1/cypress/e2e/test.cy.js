///<reference types="cypress"/>



before(() => {
  // Catch uncaught exceptions and prevent test from failing
  Cypress.on('uncaught:exception', (err, runnable) => {
    // If the error message contains 'solveSimpleChallenge', ignore it and prevent failure
    if (err.message.includes('solveSimpleChallenge')) {
      return false; // Prevent the test from failing
    }
    return true; // Let other errors fail the test
  });
});

it('Open DuckDuckGo, Search and Show Results', () => {
  // Open Google website
  cy.visit('https://duckduckgo.com/')

  // Type 'ChatGPT' into the Google search bar and hit Enter
 cy.get('#searchbox_input').type('chatgpt{enter}')

 cy.contains('Videos').click()

});




