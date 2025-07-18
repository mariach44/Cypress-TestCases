describe('Visual Testing with Cypress Image Snapshot', function () {

    it('Matches frontend with Figma design', function () {
        // Visit your application URL
        cy.visit('https://www.figma.com/design/xo0DdUY8MWgsOXsI3nzREb/Nutrition-Coach?node-id=1618-56700&m=dev');  // Replace with your actual URL

        // Capture a screenshot of a specific element (button)
        cy.get('.button-class')  // Replace with the actual selector for your element
          .toMatchImageSnapshot({
            name: 'button-design',  // Name the image for comparison
            failureThreshold: 0.01, // Allow up to 1% difference in pixels
            failureThresholdType: 'percent', // Percent-based threshold
          });

        // Alternatively, capture a full-page screenshot for comparison
        cy.document().toMatchImageSnapshot({
            name: 'full-page-design',
            failureThreshold: 0.01,
            failureThresholdType: 'percent',
        });
    });

});
