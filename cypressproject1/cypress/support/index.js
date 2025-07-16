Cypress.on('uncaught:exception', (err, runnable) => {
  // Prevent Cypress from failing the test due to this error
  if (err.message.includes('solveSimpleChallenge')) {
    return false; // Returning false will prevent Cypress from failing the test
  }
  return true; // For other errors, default behavior applies
});

