///<reference types="cypress"/>

// Import LoginPage object
import { LoginPage } from "./pages/login_pages";
const loginpage = new LoginPage();

describe('Dashboard Tests', () => {

  // Catch uncaught exceptions and continue with the next test case
  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // Allow the test to continue even if an error is caught
      return false;
    });
  });

  // Test 1: Dashboard page loads successfully
  it('Dashboard page loads successfully', function () {
    cy.viewport(1280, 720);
    cy.visit('https://phpstack-1250693-5453816.cloudwaysapps.com/login');
    cy.wait(3000); // Consider replacing with more reliable waits or assertions
    loginpage.enterusername('myfranchise@yopmail.com');
    loginpage.enterpassword('12345678');
    loginpage.clickLogin();
    cy.wait(3000); // Consider replacing with more reliable waits or assertions
    cy.visit('https://phpstack-1250693-5453816.cloudwaysapps.com/dashboard');
    cy.url().should('include', '/dashboard'); // Correct URL assertion
    cy.get('.md\\:flex-row > .mb-4').should('contain', 'DashboardWelcome back. test test! '); // Escaped special characters
  });

  // Test 2: Displays user information on the dashboard
  it('Displays user information on the dashboard', function () {
    cy.viewport(1280, 720);
    cy.visit('https://phpstack-1250693-5453816.cloudwaysapps.com/login');
    cy.wait(3000);
    loginpage.enterusername('myfranchise@yopmail.com');
    loginpage.enterpassword('12345678');
    loginpage.clickLogin();
    cy.wait(3000);
    cy.visit('https://phpstack-1250693-5453816.cloudwaysapps.com/dashboard');
    cy.wait(3000);
    cy.get('.sm\\:w-\\[60px\\]').should('be.visible');

    cy.get('.sm\:w-\[60px\]').click(); // Escaped special characters
    cy.wait(3000);
    cy.get('.text-[16px] .text-black.font-medium').should('contain', 'test test'); 
    cy.wait(3000);
    cy.get('.text-[#727272] .text-[16px]').should('contain', 'myfranchise@yopmail.com'); // Adjusted class selector
  });

  // Test 3: Displays correct data on the dashboard
  it('Displays correct data on the dashboard', function () {
    cy.viewport(1280, 720);
    cy.visit('https://phpstack-1250693-5453816.cloudwaysapps.com/login');
    cy.wait(3000);
    loginpage.enterusername('myfranchise@yopmail.com');
    loginpage.enterpassword('12345678');
    loginpage.clickLogin();
    cy.wait(3000);
    cy.visit('https://phpstack-1250693-5453816.cloudwaysapps.com/dashboard');
    cy.wait(3000);
    cy.get('.overview_section').should('contain', 'Total Users');
    cy.get('.overview_section > .grid').should('have.length', 4); // Ensure there are 4 charts (adjust as needed)
  });

  // Test 4: Verify navigation links on the dashboard
  it('Verify navigation links on the dashboard', function () {
    cy.viewport(1280, 720);
    cy.visit('https://phpstack-1250693-5453816.cloudwaysapps.com/login');
    cy.wait(3000);
    loginpage.enterusername('myfranchise@yopmail.com');
    loginpage.enterpassword('12345678');
    loginpage.clickLogin();
    cy.wait(3000);
    cy.visit('https://phpstack-1250693-5453816.cloudwaysapps.com/dashboard');
    
    cy.get('[href="/booking-management"]').contains('Booking').click();
    cy.url('https://phpstack-1250693-5453816.cloudwaysapps.com/booking-management').should('include', '/booking');
    
    cy.visit('https://phpstack-1250693-5453816.cloudwaysapps.com/dashboard');
    cy.get('[href="/detailers-management"]').contains('Detailers').click();
    cy.url('https://phpstack-1250693-5453816.cloudwaysapps.com/detailers-management').should('include', '/detailers');
    
    cy.visit('https://phpstack-1250693-5453816.cloudwaysapps.com/dashboard');
    cy.get('[href="/customers-management"]').contains('Customers').click();
    cy.url('https://phpstack-1250693-5453816.cloudwaysapps.com/customers-management').should('include', '/customers');
    cy.wait(3000)
    cy.visit('https://phpstack-1250693-5453816.cloudwaysapps.com/dashboard');
    cy.get('[href="/payment-management"]').contains('Payments').click();
    cy.wait(3000)
    cy.url('https://phpstack-1250693-5453816.cloudwaysapps.com/payment-management').should('include', '/payments');
    cy.visit('https://phpstack-1250693-5453816.cloudwaysapps.com/dashboard');
    cy.wait(3000)
    cy.get('[href="/user-management"]').contains('User Management').click();
    cy.url('https://phpstack-1250693-5453816.cloudwaysapps.com/user-management').should('include', '/user-management');
    cy.wait(3000)
    cy.visit('https://phpstack-1250693-5453816.cloudwaysapps.com/dashboard');
    cy.wait(3000)
    cy.get('[href="/reports"]').contains('Reports').click();
    cy.url('https://phpstack-1250693-5453816.cloudwaysapps.com/reports').should('include', '/reports');
    cy.wait(3000)
    cy.visit('https://phpstack-1250693-5453816.cloudwaysapps.com/dashboard');
    cy.wait(3000)
    cy.get('[href="/settings"] > .bg-\\[var\\(--dull-white-bg\\)\\] > .sm\\:size-6').click();
    cy.url('https://phpstack-1250693-5453816.cloudwaysapps.com/settings').should('include', '/settings');
    cy.visit('https://phpstack-1250693-5453816.cloudwaysapps.com/dashboard');
  });

  // Test 5: Displays notifications on the dashboard
  it('Displays notifications on the dashboard', function () {
    cy.viewport(1280, 720);
    cy.visit('https://phpstack-1250693-5453816.cloudwaysapps.com/login');
    cy.wait(3000);
    loginpage.enterusername('myfranchise@yopmail.com');
    loginpage.enterpassword('12345678');
    loginpage.clickLogin();
    cy.wait(3000);
    cy.get('[href="/notifications"] > .bg-\\[var\\(--dull-white-bg\\)\\] > .sm\\:size-6').click();
    cy.url('https://phpstack-1250693-5453816.cloudwaysapps.com/notifications').should('include', '/notifications');
  });

  // Test 6: Verifies dashboard accessibility on different screen sizes
  it('Verifies dashboard accessibility on different screen sizes', function () {

    cy.visit('https://phpstack-1250693-5453816.cloudwaysapps.com/login');
      cy.wait(3000);
      loginpage.enterusername('myfranchise@yopmail.com');
      loginpage.enterpassword('12345678');
      loginpage.clickLogin();
      cy.wait(3000);
    const viewports = [
      { name: 'Desktop', width: 1280, height: 720 },
      { name: 'Tablet', width: 768, height: 1024 },
      { name: 'Mobile', width: 375, height: 667 }
    ];

    viewports.forEach(viewport => {
      cy.viewport(viewport.width, viewport.height);
      
      cy.visit('https://phpstack-1250693-5453816.cloudwaysapps.com/dashboard');
      cy.contains('Welcome back. Jane!').should('be.visible');
      cy.get("bg-[var(--primary-color)]  py-5 mb-12 mb-[40px] rounded-b-[40px] ").should('be.visible');
    });
  });

  // Test 7: Verify logout functionality on the dashboard
  it('Verify logout functionality', function () {
    cy.viewport(1280, 720);
    cy.visit('https://phpstack-1250693-5453816.cloudwaysapps.com/login');
    cy.wait(3000);
    loginpage.enterusername('myfranchise@yopmail.com');
    loginpage.enterpassword('12345678');
    loginpage.clickLogin();
    cy.wait(3000);
    cy.visit('https://phpstack-1250693-5453816.cloudwaysapps.com/dashboard');
    cy.get(':nth-child(3) > .sm\\:w-\\[60px\\]').click(); // Logout click
    cy.wait(3000)
    cy.get('.flex.items-center.gap-2.hover\\:text-black.mb-3.cursor-pointer').click(); // Adjusted selector
    cy.wait(3000)
    cy.url('https://phpstack-1250693-5453816.cloudwaysapps.com/login').should('include', '/login');
  });

  // Test 8: Dashboard page loads within acceptable time (performance)
  it('Dashboard page loads within acceptable time', function () {
    cy.viewport(1280, 720);
    cy.visit('https://phpstack-1250693-5453816.cloudwaysapps.com/login');
    cy.wait(3000);
    loginpage.enterusername('myfranchise@yopmail.com');
    loginpage.enterpassword('12345678');
    loginpage.clickLogin();
    cy.wait})
  })
