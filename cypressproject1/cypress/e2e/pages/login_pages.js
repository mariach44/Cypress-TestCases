export class LoginPage{

    username_textbox= ':nth-child(1) > .relative > .w-full'
    password_textbox= ':nth-child(2) > .relative > .w-full'
    login_button= '.rounded-lg'

    enterusername(username){
         cy.get(this.username_textbox).type(username)
    
    

    }
    enterpassword(password){
        cy.get(this.password_textbox).type(password)

    }

    clickLogin(){
        cy.get(this.login_button).click()

    }


}