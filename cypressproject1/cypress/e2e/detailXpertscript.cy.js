import{LoginPage} from "./pages/login_pages"
import {AddDetailer} from "./pages/Add_Detailer"
const loginpage = new LoginPage()
var  addDetailer = new AddDetailer()

it('PomDemo', function(){

    cy.viewport(1280, 720)

    cy.visit('https://phpstack-1250693-5453816.cloudwaysapps.com/login')

    loginpage.enterusername('myfranchise@yopmail.com')
    loginpage.enterpassword('12345678')
    loginpage.clickLogin()
    cy.wait(2000);  // Wait for 2 seconds before continuing to the next action

  //    cy.contains('Login Failed').should('be.visible');
  //    cy.contains('Forget Password').click()
  //    cy.url('https://phpstack-1250693-5453816.cloudwaysapps.com/forgot-password').should('include', '/forgot-password'); // Adjust the URL of the "Forgot Password" page if needed
  //   cy.get('.relative > .w-full').should('be.visible');
  //   cy.get('.relative > .w-full').type('myfranchise@yopmail.com');
  //   cy.contains('Forgot').click();
  //   cy.wait(2000);
  //   cy.contains('Check Your Email for OTP').should('be.visible')
  //   cy.wait(2000);
  //   const otp = '123456';
  //  // cy.url('https://phpstack-1250693-5453816.cloudwaysapps.com/otp-verify').should('include', '/verify-otp');
  //    //cy.get('div.mb-5').should('be.visible');
  //    cy.get('[aria-label="Please enter OTP character 1"]').type('1')
  //    cy.get('[aria-label="Please enter OTP character 2"]').type('1')
  //    cy.get('[aria-label="Please enter OTP character 3"]').type('1')
  //    cy.get('[aria-label="Please enter OTP character 4"]').type('1')
  //    cy.get('[aria-label="Please enter OTP character 5"]').type('1')
  //    cy.get('[aria-label="Please enter OTP character 6"]').type('1')

  //    cy.contains('Verify Code In').click()
  //      cy.get('.toast-error').should('be.visible') // Assuming the toast error class is `.toast-error`
  //     .and('contain', 'Incorrect OTP'); 

  //  cy.wait(50000);
  //   cy.contains('Resend Code').should('be.visible').click()

    cy.url('https://phpstack-1250693-5453816.cloudwaysapps.com/dashboard').should('include', '/dashboard');

  //   cy.contains('Detailers').should('be.visible').click();
  //    //cy.wait(4000);
  //     cy.url('https://phpstack-1250693-5453816.cloudwaysapps.com/detailers-management').should('include', '/detailers-management');

   
  //  cy.contains('Add Detailer').should('be.visible').click();

  //   addDetailer.enterfirstname('test')
  //   addDetailer.enterlastname('test')
  //   addDetailer.enteremailaddress('test@gmail.com')
  //   addDetailer.entercontactnum('+12345647389')
  // cy.wait(2000)
  //   addDetailer.enteraboutus('heloo i am detailer')
 
 


   

})