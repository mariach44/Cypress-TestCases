///<reference types="cypress"/>

import{LoginPage} from "./pages/login_pages"

const loginpage = new LoginPage()

describe('Login Tests', () => {

     beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // Allow the test to continue even if an error is caught
      return false;
    });
    });

it('Login with valid Credentail', function(){

    cy.viewport(1280, 720)

    cy.visit('https://phpstack-1250693-5453816.cloudwaysapps.com/login')

    loginpage.enterusername('myfranchise@yopmail.com')
    loginpage.enterpassword('12345678')
    loginpage.clickLogin()
    cy.url('https://phpstack-1250693-5453816.cloudwaysapps.com/dashboard').should('include', '/dashboard');

})
  // Negative Test Case 1: Login with Invalid Username

it('Login with Invalid Username', function () {
    cy.viewport(1280, 720);

    cy.visit('https://phpstack-1250693-5453816.cloudwaysapps.com/login');

    // Enter an invalid username
    loginpage.enterusername('invaliduser@yopmail.com');
    loginpage.enterpassword('12345678');
    loginpage.clickLogin();

    // Assert that an error message is displayed for invalid credentials
     cy.contains('Login Failed').should('be.visible'); // Replace with the actual error message selector
    //cy.get('.error-message').should('contain', 'Invalid username or password'); // Adjust according to the actual message
  });


 // Negative Test Case 2: Login with Invalid Password
  it('Login with Invalid Password', function () {
    cy.viewport(1280, 720);

    cy.visit('https://phpstack-1250693-5453816.cloudwaysapps.com/login');
    // Enter valid username and invalid password
    loginpage.enterusername('myfranchise@yopmail.com');
    loginpage.enterpassword('wrongpassword');
    loginpage.clickLogin();

    // Assert that an error message is displayed for invalid credentials
     cy.contains('Login Failed').should('be.visible'); // Replace with the actual error message selector
    //cy.get('.error-message').should('contain', 'Invalid username or password'); // Adjust according to the actual message
  });


  // Negative Test Case 3: Login with Empty Fields
  it('Login with Empty Fields', function () {
    cy.viewport(1280, 720);

    cy.visit('https://phpstack-1250693-5453816.cloudwaysapps.com/login');

    // Leave fields empty
    cy.get(':nth-child(1) > .relative > .w-full').clear();
    cy.get(':nth-child(2) > .relative > .w-full').clear();
    loginpage.clickLogin();

    // Assert that an error message is displayed for empty fields
    // cy.contains('Login Failed').should('be.visible'); // Replace with the actual error message selector
    //cy.get('.error-message').should('contain', 'Please fill out this field'); // Adjust according to the actual message
  });

  // Negative Test Case 4: Login with Locked Account
  it('Login with Locked Account', function () {
    cy.viewport(1280, 720);

    cy.visit('https://phpstack-1250693-5453816.cloudwaysapps.com/login');

    // Enter valid credentials for a locked account
    loginpage.enterusername('lockeduser@yopmail.com');
    loginpage.enterpassword('12345678');
    loginpage.clickLogin();

    // Assert that an error message is displayed for locked account
     cy.contains('Login Failed').should('be.visible'); // Replace with actual selector for locked account error message
    //cy.get('.error-message').should('contain', 'Your account is locked'); // Adjust according to the actual message
  });

   // Negative Test Case 5: Login with Disabled Account
  it('Login with Disabled Account', function () {
    cy.viewport(1280, 720);

    cy.visit('https://phpstack-1250693-5453816.cloudwaysapps.com/login');

    // Enter valid credentials for a disabled account
    loginpage.enterusername('disableduser@yopmail.com');
    loginpage.enterpassword('12345678');
    loginpage.clickLogin();

    // Assert that an error message is displayed for disabled account
     cy.contains('Login Failed').should('be.visible'); // Replace with actual selector for disabled account error message
    //cy.get('.error-message').should('contain', 'Your account is disabled'); // Adjust according to the actual message
  });


})



